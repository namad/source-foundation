// Add the event listener
let runtimeData = {"mode":"development","output":"dist","websockets":false,"debug":false,"command":"dev","instanceId":"dyWQZ6wX2zUm3y399saSx","port":6772,"manifest":{"id":"0000000","name":"Source Foundation Dev","main":"./source-foundation/src/main.ts","ui":"./source-foundation/src/ui-react/index.tsx","editorType":["figma","figjam"],"networkAccess":{"allowedDomains":["none"],"devAllowedDomains":["http://localhost:6772","ws://localhost:9001"]}}};


async function getCommandHistory() {
	let commandHistory = await figma.clientStorage.getAsync('PLUGMA_COMMAND_HISTORY');

	// If there's no history, initialize the commandHistory object
	if (!commandHistory) {
		commandHistory = {};
	}

	// Retrieve the previous command to return first
	const previousCommand = commandHistory.previousCommand || null;
	const previousInstanceId = commandHistory.previousInstanceId || null;

	// Set the current command as the new previous command for future retrievals
	commandHistory.previousCommand = runtimeData.command;
	commandHistory.previousInstanceId = runtimeData.instanceId;
	await figma.clientStorage.setAsync('PLUGMA_COMMAND_HISTORY', commandHistory);

	return { previousCommand, previousInstanceId };
}

async function getWindowSettings(options) {
	// Determine which command is running (dev or preview)
	const command = runtimeData.command;

	// Define default settings for both dev and preview commands
	const defaultDevSettings = {
		width: 300,
		height: 200,
		minimized: false,
		toolbarEnabled: false
	};

	const defaultPreviewSettings = {
		width: 300,
		height: 200,
		minimized: true,
		toolbarEnabled: true
	};



	// Define storage keys for dev and preview settings
	const storageKeyDev = 'PLUGMA_PLUGIN_WINDOW_SETTINGS_DEV';
	const storageKeyPreview = 'PLUGMA_PLUGIN_WINDOW_SETTINGS_PREVIEW';
	let pluginWindowSettings;

	if (command === "dev") {


		pluginWindowSettings = await figma.clientStorage.getAsync(storageKeyDev);


		// Get dev settings or set them if they don't exist
		if (!pluginWindowSettings) {
			await figma.clientStorage.setAsync(storageKeyDev, defaultDevSettings);
			pluginWindowSettings = defaultDevSettings;
		}
	} else if (command === "preview") {

		pluginWindowSettings = await figma.clientStorage.getAsync(storageKeyPreview);


		// Get preview settings or set them if they don't exist
		if (!pluginWindowSettings) {
			await figma.clientStorage.setAsync(storageKeyPreview, defaultPreviewSettings);
			pluginWindowSettings = defaultPreviewSettings;
		}
	}

	if (options && (!options.width || !options.height)) {
		pluginWindowSettings.height = 300
		pluginWindowSettings.width = 400

		if (pluginWindowSettings && pluginWindowSettings.toolbarEnabled) {
			pluginWindowSettings.height = 300 + 41
		}
	}

	return pluginWindowSettings;
}

async function setWindowSettings(pluginWindowSettings) {
	// Determine which command is running (dev or preview)
	const command = runtimeData.command;

	// Define storage keys for dev and preview settings
	const storageKeyDev = 'PLUGMA_PLUGIN_WINDOW_SETTINGS_DEV';
	const storageKeyPreview = 'PLUGMA_PLUGIN_WINDOW_SETTINGS_PREVIEW';

	// Set the appropriate settings based on the command
	if (command === "dev") {
		await figma.clientStorage.setAsync(storageKeyDev, pluginWindowSettings);
	} else if (command === "preview") {
		await figma.clientStorage.setAsync(storageKeyPreview, pluginWindowSettings);
	}
}

function customResize(width, height) {

	getWindowSettings().then((pluginWindowSettings) => {

		// Check if the PLUGMA_MINIMIZE_WINDOW event was triggered
		if (pluginWindowSettings.minimized) {
			height = 40;
			width = 200
		}

		// Call the original figma.ui.resize method if it exists
		if (figma && figma.ui && typeof figma.ui.resize === 'function') {
			// To avoid Vite replacing figma.ui.resize and causing an infinite loop
			figma.ui['re' + 'size'](width, height);
		} else {
			console.warn('Figma UI resize method is not available.');
		}
	});
}

function customShowUI(htmlString, options) {

	options = options || {}

	// Show UI to receive messages
	let mergeOptions = Object.assign({ visible: false }, options)
	figma['show' + 'UI'](htmlString, mergeOptions);


	getCommandHistory().then((commandHistory) => {
		getWindowSettings(options).then((pluginWindowSettings) => {

			let hasCommandChanged = commandHistory.previousCommand !== runtimeData.command
			let hasInstanceChanged = commandHistory.previousInstanceId !== runtimeData.instanceId

			// FIXME: Modify this so that this triggers each time the preview command is used. Accomplish this because generating an instance id from the CLI
			// If new instance of command reset toolbar and minimized window

			// if (hasInstanceChanged && runtimeData.command === "preview") {
			if (runtimeData.command === "preview") {
				// Note: because we can't reliably show the UI with the position in the bottom left we reposition it each time the window opens (as well as the toolbar)
				pluginWindowSettings.minimized = true
				pluginWindowSettings.toolbarEnabled = true
				// NOTE: we override position because preview mode is very opinionated about how it's used and will reset the position each time the command is used
				// if (!options.position) {

				const zoom = figma.viewport.zoom;

				options.position = {
					x: figma.viewport.bounds.x + (12 / zoom),
					y: figma.viewport.bounds.y + (figma.viewport.bounds.height - ((80 + 12) / zoom))
					// y: figma.viewport.bounds.y + (0 + 12 / zoom)
				}

				// }

			}

			// NOTE: Because we can't get the last used window position, we reset it to the center when the user changes to dev
			if (hasCommandChanged && runtimeData.command === "dev") {
				const zoom = figma.viewport.zoom;

				if (!options.position) {
					options.position = {
						x: (figma.viewport.center.x - ((options.width / 2) / zoom)),
						// Remember to take into account height of plugin window toolbar which is 40px
						y: (figma.viewport.center.y - (((options.height + 41) / 2) / zoom))
					}
				}

			}

			if (hasInstanceChanged) {

				if (runtimeData.command === "preview") {

					pluginWindowSettings.toolbarEnabled = true
					pluginWindowSettings.minimized = true
				}

				// if (runtimeData.command === "dev") {
				// 	pluginWindowSettings.toolbarEnabled = false
				// 	pluginWindowSettings.minimized = false
				// }
			}

			if (options && options.height) {
				pluginWindowSettings.height = options.height
			}

			if (options && options.width) {
				pluginWindowSettings.width = options.width
			}


			if (pluginWindowSettings.toolbarEnabled) {
				options.height = pluginWindowSettings.height + 41
			}

			// Check if the PLUGMA_MINIMIZE_WINDOW event was triggered
			if (pluginWindowSettings.minimized) {

				options = options || {}

				// Check if the options object exists and if it has a height property
				if (options.height && options.width) {
					// Override the height property
					options.height = 40;
					options.width = 200;
				}
			}



			// if (figma && figma.showUI && typeof figma.showUI === 'function') {




			// Only resize if width and height provided
			if (options.width && options.height) {
				figma.ui['re' + 'size'](options.width, options.height)
			}


			// If width and height not provided and toolbarEnabled, resize to account for toolbar
			if ((!options.width || !options.height) && pluginWindowSettings.toolbarEnabled) {
				figma.ui['re' + 'size'](300, 200 + 41)
			}
			if ((!options.width || !options.height) && !pluginWindowSettings.toolbarEnabled) {
				figma.ui['re' + 'size'](300, 200)
			}

			// Reposition UI
			if (options.position && options.position.x && options.position.y) {
				figma.ui.reposition(options.position.x, options.position.y)
			}

			figma.ui.postMessage(
				{ event: 'PLUGMA_PLUGIN_WINDOW_SETTINGS', data: pluginWindowSettings }
			)

			// Don't show the UI if user set to false
			if (options.visible !== false) {
				figma.ui.show()
			}

			// } else {
			// 	console.warn('Figma showUI method is not available.');
			// }

			setWindowSettings(pluginWindowSettings)
		})
	})

}

figma.ui.on('message', async (message) => {
	// Check if the message type is "PLUGMA_MINIMISE_WINDOW"


	if (message.event === 'PLUGMA_HIDE_TOOLBAR') {
		getWindowSettings().then((pluginWindowSettings) => {
			pluginWindowSettings.toolbarEnabled = false;
			figma.ui['re' + 'size'](pluginWindowSettings.width, pluginWindowSettings.height)
			setWindowSettings(pluginWindowSettings)
		})
	}

	if (message.event === 'PLUGMA_MINIMISE_WINDOW') {
		getWindowSettings().then((pluginWindowSettings) => {
			pluginWindowSettings.minimized = true;
			figma.ui['re' + 'size'](200, 40)
			setWindowSettings(pluginWindowSettings)
		})
	}
	if (message.event === 'PLUGMA_MAXIMISE_WINDOW') {
		getWindowSettings().then((pluginWindowSettings) => {
			pluginWindowSettings.minimized = false;

			figma.ui['re' + 'size'](pluginWindowSettings.width, pluginWindowSettings.height + 41)
			setWindowSettings(pluginWindowSettings)
		})

	}

	if (message.event === 'PLUGMA_SAVE_PLUGIN_WINDOW_SETTINGS') {
		getWindowSettings().then((pluginWindowSettings) => {
			// FIXME: For not only set it if data received. Really need a env variable so this event is not even posted by Plugin Window
			if (message.data.height) {
				if (message.data.toolbarEnabled) {
					// message.data.height = message.data.height + 40
					figma.ui['re' + 'size'](message.data.width, message.data.height + 41)
				}
				else {
					// message.data.height = message.data.height - 40
					figma.ui['re' + 'size'](message.data.width, message.data.height - 41)
				}
				let mergedOptions = Object.assign(pluginWindowSettings, message.data)
				setWindowSettings(mergedOptions)
			}
		})
	}

	if (message.event === "PLUGMA_DELETE_ROOT_PLUGIN_DATA") {
		let pluginDataKeys = figma.root.getPluginDataKeys();
		for (let i = 0; i < pluginDataKeys.length; i++) {
			let key = pluginDataKeys[i];
			figma.root.setPluginData(key, "");
			console.log(`[plugma] ${key} deleted from root pluginData`);
		}
		figma.notify("Root pluginData deleted");
	}

	if (message.event === "PLUGMA_DELETE_CLIENT_STORAGE") {
		let clientStorageKeys = await figma.clientStorage.keysAsync();
		for (let i = 0; i < clientStorageKeys.length; i++) {
			let key = clientStorageKeys[i];
			if (key !== "figma-stylesheet") {
				await figma.clientStorage.deleteAsync(key);
				console.log(`[plugma] ${key} deleted from clientStorage`);
			}
		}
		figma.notify("ClientStorage deleted");
	}
});
"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const button = {
  bg: {
    rest: {
      $value: "{utility.tint.300}",
      $type: "color"
    },
    hover: {
      $value: "{alt.base.100}",
      $type: "color"
    },
    active: {
      $value: "{utility.tint.200}",
      $type: "color"
    }
  },
  border: {
    rest: {
      $value: "{stroke.base.400}",
      $type: "color"
    },
    hover: {
      $value: "{stroke.base.500}",
      $type: "color"
    },
    active: {
      $value: "{stroke.base.400}",
      $type: "color"
    }
  }
};
const card = {
  bg: {
    primary: {
      $value: "{fill.base.100}",
      $type: "color"
    },
    secondary: {
      $value: "{fill.base.200}",
      $type: "color"
    }
  },
  border: {
    inner: {
      $value: "{stroke.base.100}",
      $type: "color"
    },
    outer: {
      $value: "{stroke.base.200}",
      $type: "color"
    }
  }
};
const overlay$1 = {
  bg: {
    $value: "{card.bg.primary}",
    $type: "color"
  },
  border: {
    $value: "{alt.base.400}",
    $type: "color"
  }
};
const componentTokens = {
  button,
  "ui-element": {
    bg: {
      rest: {
        $value: "{utility.transparent}",
        $type: "color"
      },
      hover: {
        $value: "{alt.base.100}",
        $type: "color"
      },
      active: {
        $value: "{alt.base.200}",
        $type: "color"
      },
      selected: {
        $value: "{primary.400}",
        $type: "color"
      },
      disabled: {
        $value: "{alt.base.600}",
        $type: "color"
      }
    },
    border: {
      rest: {
        $value: "{alt.base.100}",
        $type: "color"
      },
      hover: {
        $value: "{alt.base.200}",
        $type: "color"
      },
      active: {
        $value: "{alt.base.300}",
        $type: "color"
      },
      selected: {
        $value: "{primary.500}",
        $type: "color"
      },
      disabled: {
        $value: "{alt.base.600}",
        $type: "color"
      }
    }
  },
  "form-element": {
    bg: {
      rest: {
        $value: "{fill.base.100}",
        $type: "color"
      },
      hover: {
        $value: "{fill.base.100}",
        $type: "color"
      },
      readonly: {
        $value: "{fill.base.200}",
        $type: "color"
      }
    },
    border: {
      rest: {
        $value: "{stroke.base.400}",
        $type: "color"
      },
      hover: {
        $value: "{primary.300}",
        $type: "color"
      },
      readonly: {
        $value: "{stroke.base.400}",
        $type: "color"
      }
    }
  },
  card,
  overlay: overlay$1
};
const text$1 = {
  black: {
    "400": {
      $value: "rgba({black}, 0.45)",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    },
    "500": {
      $value: "rgba({black}, 0.7)",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    },
    "600": {
      $value: "{black}",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    }
  },
  white: {
    "400": {
      $value: "rgba({white}, 0.45)",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    },
    "500": {
      $value: "rgba({white}, 0.7)",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    },
    "600": {
      $value: "{white}",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    }
  },
  base: {
    "400": {
      $value: "{text.black.400}",
      $type: "color"
    },
    "500": {
      $value: "{text.black.500}",
      $type: "color"
    },
    "600": {
      $value: "{text.black.600}",
      $type: "color"
    },
    primary: {
      $value: "{primary.500}",
      $type: "color"
    },
    info: {
      $value: "{info.500}",
      $type: "color"
    },
    success: {
      $value: "{success.500}",
      $type: "color"
    },
    warning: {
      $value: "{warning.500}",
      $type: "color"
    },
    danger: {
      $value: "{danger.500}",
      $type: "color"
    }
  },
  contrast: {
    "400": {
      $value: "{text.white.400}",
      $type: "color"
    },
    "500": {
      $value: "{text.white.500}",
      $type: "color"
    },
    "600": {
      $value: "{text.white.600}",
      $type: "color"
    },
    primary: {
      $value: "{primary.600}",
      $type: "color"
    },
    info: {
      $value: "{info.600}",
      $type: "color"
    },
    success: {
      $value: "{success.600}",
      $type: "color"
    },
    warning: {
      $value: "{warning.600}",
      $type: "color"
    },
    danger: {
      $value: "{danger.600}",
      $type: "color"
    }
  },
  accent: {
    "400": {
      $value: "{text.white.400}",
      $type: "color"
    },
    "500": {
      $value: "{text.white.500}",
      $type: "color"
    },
    "600": {
      $value: "{text.white.600}",
      $type: "color"
    }
  }
};
const alt$1 = {
  base: {
    "100": {
      $value: "rgba({grey-18}, 0.03)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "200": {
      $value: "rgba({grey-18}, 0.06)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "300": {
      $value: "rgba({grey-18}, 0.12)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "400": {
      $value: "rgba({grey-18}, 0.20)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "500": {
      $value: "rgba({grey-18}, 0.28)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "600": {
      $value: "rgba({grey-18}, 0.32)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    }
  },
  contrast: {
    "100": {
      $value: "rgba(#FFFFFF, 0.04)",
      $type: "color"
    },
    "200": {
      $value: "rgba(#FFFFFF, 0.08)",
      $type: "color"
    },
    "300": {
      $value: "rgba(#FFFFFF, 0.12)",
      $type: "color"
    },
    "400": {
      $value: "rgba(#FFFFFF, 0.16)",
      $type: "color"
    },
    "500": {
      $value: "rgba(#FFFFFF, 0.24)",
      $type: "color"
    },
    "600": {
      $value: "rgba(#FFFFFF, 0.32)",
      $type: "color"
    }
  }
};
const utility$1 = {
  white: {
    $value: "{grey-100}",
    $type: "color"
  },
  black: {
    $value: "{grey-4}",
    $type: "color"
  },
  transparent: {
    $value: "rgba(255, 255, 255, 0)",
    $type: "color"
  },
  shade: {
    "100": {
      $value: "rgba({grey-8}, 0.04)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "200": {
      $value: "rgba({grey-8}, 0.08)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "300": {
      $value: "rgba({grey-8}, 0.16)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "400": {
      $value: "rgba({grey-8}, 0.24)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "500": {
      $value: "rgba({grey-8}, 0.32)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    },
    "600": {
      $value: "rgba({grey-8}, 0.44)",
      $type: "color",
      adjustments: {
        s: "1"
      }
    }
  },
  tint: {
    "100": {
      $value: "rgba({grey-100}, 0.5)",
      $type: "color"
    },
    "200": {
      $value: "rgba({grey-100}, 0.6)",
      $type: "color"
    },
    "300": {
      $value: "rgba({grey-100}, 0.7)",
      $type: "color"
    },
    "400": {
      $value: "rgba({grey-100}, 0.8)",
      $type: "color"
    },
    "500": {
      $value: "rgba({grey-100}, 0.9)",
      $type: "color"
    },
    "600": {
      $value: "{grey-100}",
      $type: "color"
    }
  }
};
const paletteLightCommon = {
  text: text$1,
  alt: alt$1,
  utility: utility$1
};
const paletteLightShadows = [
  {
    utility: {
      shade: {
        "100": {
          $value: "rgba({grey-8}, 0.04)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "200": {
          $value: "rgba({grey-8}, 0.06)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "300": {
          $value: "rgba({grey-8}, 0.08)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "400": {
          $value: "rgba({grey-8}, 0.12)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "500": {
          $value: "rgba({grey-8}, 0.16)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "600": {
          $value: "rgba({grey-8}, 0.24)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        }
      }
    }
  },
  {
    utility: {
      shade: {
        "100": {
          $value: "rgba({grey-8}, 0.03)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "200": {
          $value: "rgba({grey-8}, 0.05)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "300": {
          $value: "rgba({grey-8}, 0.07)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "400": {
          $value: "rgba({grey-8}, 0.11)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "500": {
          $value: "rgba({grey-8}, 0.15)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "600": {
          $value: "rgba({grey-8}, 0.23)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        }
      }
    }
  },
  {
    utility: {
      shade: {
        "100": {
          $value: "rgba({grey-8}, 0.02)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "200": {
          $value: "rgba({grey-8}, 0.04)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "300": {
          $value: "rgba({grey-8}, 0.06)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "400": {
          $value: "rgba({grey-8}, 0.10)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "500": {
          $value: "rgba({grey-8}, 0.14)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "600": {
          $value: "rgba({grey-8}, 0.22)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        }
      }
    }
  },
  {
    utility: {
      shade: {
        "100": {
          $value: "rgba({grey-8}, 0.01)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "200": {
          $value: "rgba({grey-8}, 0.03)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "300": {
          $value: "rgba({grey-8}, 0.05)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "400": {
          $value: "rgba({grey-8}, 0.09)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "500": {
          $value: "rgba({grey-8}, 0.13)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        },
        "600": {
          $value: "rgba({grey-8}, 0.21)",
          $type: "color",
          adjustments: {
            s: "1"
          }
        }
      }
    }
  }
];
const fill$8 = {
  base: {
    "100": {
      $value: "{grey-100}",
      $type: "color"
    },
    "200": {
      $value: "{grey-98}",
      $type: "color"
    },
    "300": {
      $value: "{grey-96}",
      $type: "color"
    },
    "400": {
      $value: "{grey-94}",
      $type: "color"
    },
    "500": {
      $value: "{grey-92}",
      $type: "color"
    },
    "600": {
      $value: "{grey-88}",
      $type: "color"
    }
  },
  contrast: {
    "100": {
      $value: "{grey-24}",
      $type: "color"
    },
    "200": {
      $value: "{grey-22}",
      $type: "color"
    },
    "300": {
      $value: "{grey-20}",
      $type: "color"
    },
    "400": {
      $value: "{grey-18}",
      $type: "color"
    },
    "500": {
      $value: "{grey-16}",
      $type: "color"
    },
    "600": {
      $value: "{grey-14}",
      $type: "color"
    }
  }
};
const stroke$8 = {
  base: {
    "100": {
      $value: "{grey-93}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-88}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-85}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-80}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-70}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-54}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  },
  contrast: {
    "100": {
      $value: "{grey-28}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-30}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-33}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-36}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-39}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-45}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  }
};
const paletteLight2 = {
  fill: fill$8,
  stroke: stroke$8
};
const fill$7 = {
  base: {
    "100": {
      $value: "{grey-100}",
      $type: "color"
    },
    "200": {
      $value: "{grey-97}",
      $type: "color"
    },
    "300": {
      $value: "{grey-94}",
      $type: "color"
    },
    "400": {
      $value: "{grey-91}",
      $type: "color"
    },
    "500": {
      $value: "{grey-88}",
      $type: "color"
    },
    "600": {
      $value: "{grey-84}",
      $type: "color"
    }
  },
  contrast: {
    "100": {
      $value: "{grey-29}",
      $type: "color"
    },
    "200": {
      $value: "{grey-26}",
      $type: "color"
    },
    "300": {
      $value: "{grey-23}",
      $type: "color"
    },
    "400": {
      $value: "{grey-20}",
      $type: "color"
    },
    "500": {
      $value: "{grey-17}",
      $type: "color"
    },
    "600": {
      $value: "{grey-14}",
      $type: "color"
    }
  }
};
const stroke$7 = {
  base: {
    "100": {
      $value: "{grey-92}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-87}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-83}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-79}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-67}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-55}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  },
  contrast: {
    "100": {
      $value: "{grey-39}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-40}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-42}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-46}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-51}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-61}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  }
};
const paletteLight3 = {
  fill: fill$7,
  stroke: stroke$7
};
const fill$6 = {
  base: {
    "100": {
      $value: "{grey-100}",
      $type: "color"
    },
    "200": {
      $value: "{grey-96}",
      $type: "color"
    },
    "300": {
      $value: "{grey-92}",
      $type: "color"
    },
    "400": {
      $value: "{grey-88}",
      $type: "color"
    },
    "500": {
      $value: "{grey-84}",
      $type: "color"
    },
    "600": {
      $value: "{grey-80}",
      $type: "color"
    }
  },
  contrast: {
    "100": {
      $value: "{grey-34}",
      $type: "color"
    },
    "200": {
      $value: "{grey-30}",
      $type: "color"
    },
    "300": {
      $value: "{grey-26}",
      $type: "color"
    },
    "400": {
      $value: "{grey-22}",
      $type: "color"
    },
    "500": {
      $value: "{grey-18}",
      $type: "color"
    },
    "600": {
      $value: "{grey-14}",
      $type: "color"
    }
  }
};
const stroke$6 = {
  base: {
    "100": {
      $value: "{grey-91}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-86}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-81}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-76}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-64}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-54}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  },
  contrast: {
    "100": {
      $value: "{grey-44}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-45}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-48}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-52}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-57}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-65}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  }
};
const paletteLight4 = {
  fill: fill$6,
  stroke: stroke$6
};
const text = {
  black: {
    "400": {
      $value: "rgba({black}, 0.45)",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    },
    "500": {
      $value: "rgba({black}, 0.7)",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    },
    "600": {
      $value: "{black}",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    }
  },
  white: {
    "400": {
      $value: "rgba({white}, 0.45)",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    },
    "500": {
      $value: "rgba({white}, 0.7)",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    },
    "600": {
      $value: "{white}",
      $type: "color",
      scopes: [],
      description: "Unscoped, theme independent private tokens"
    }
  },
  base: {
    "400": {
      $value: "{text.white.400}",
      $type: "color"
    },
    "500": {
      $value: "{text.white.500}",
      $type: "color"
    },
    "600": {
      $value: "{text.white.600}",
      $type: "color"
    },
    primary: {
      $value: "{primary.500}",
      $type: "color"
    },
    info: {
      $value: "{info.500}",
      $type: "color"
    },
    success: {
      $value: "{success.500}",
      $type: "color"
    },
    warning: {
      $value: "{warning.500}",
      $type: "color"
    },
    danger: {
      $value: "{danger.500}",
      $type: "color"
    }
  },
  contrast: {
    "400": {
      $value: "{text.white.400}",
      $type: "color"
    },
    "500": {
      $value: "{text.white.500}",
      $type: "color"
    },
    "600": {
      $value: "{text.white.600}",
      $type: "color"
    },
    primary: {
      $value: "{primary.600}",
      $type: "color"
    },
    info: {
      $value: "{info.600}",
      $type: "color"
    },
    success: {
      $value: "{success.600}",
      $type: "color"
    },
    warning: {
      $value: "{warning.600}",
      $type: "color"
    },
    danger: {
      $value: "{danger.600}",
      $type: "color"
    }
  },
  accent: {
    "400": {
      $value: "{text.white.400}",
      $type: "color"
    },
    "500": {
      $value: "{text.white.500}",
      $type: "color"
    },
    "600": {
      $value: "{text.white.600}",
      $type: "color"
    }
  }
};
const alt = {
  base: {
    "100": {
      $value: "rgba({grey-78}, 0.04)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "200": {
      $value: "rgba({grey-78}, 0.06)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "300": {
      $value: "rgba({grey-78}, 0.08)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "400": {
      $value: "rgba({grey-78}, 0.12)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "500": {
      $value: "rgba({grey-78}, 0.16)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "600": {
      $value: "rgba({grey-78}, 0.24)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    }
  },
  contrast: {
    "100": {
      $value: "rgba({grey-78}, 0.04)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "200": {
      $value: "rgba({grey-78}, 0.06)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "300": {
      $value: "rgba({grey-78}, 0.08)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "400": {
      $value: "rgba({grey-78}, 0.12)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "500": {
      $value: "rgba({grey-78}, 0.16)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "600": {
      $value: "rgba({grey-78}, 0.24)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    }
  }
};
const utility = {
  white: {
    $value: "{grey-100}",
    $type: "color"
  },
  black: {
    $value: "{grey-4}",
    $type: "color"
  },
  transparent: {
    $value: "rgba(0, 0, 0, 0)",
    $type: "color"
  },
  shade: {
    "100": {
      $value: "rgba(#000000, 0.08)",
      $type: "color"
    },
    "200": {
      $value: "rgba(#000000, 0.16)",
      $type: "color"
    },
    "300": {
      $value: "rgba(#000000, 0.24)",
      $type: "color"
    },
    "400": {
      $value: "rgba(#000000, 0.32)",
      $type: "color"
    },
    "500": {
      $value: "rgba(#000000, 0.40)",
      $type: "color"
    },
    "600": {
      $value: "rgba(#000000, 0.48)",
      $type: "color"
    }
  },
  tint: {
    "100": {
      $value: "rgba({grey-78}, 0.04)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "200": {
      $value: "rgba({grey-78}, 0.06)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "300": {
      $value: "rgba({grey-78}, 0.08)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "400": {
      $value: "rgba({grey-78}, 0.12)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "500": {
      $value: "rgba({grey-78}, 0.16)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    },
    "600": {
      $value: "rgba({grey-78}, 0.24)",
      $type: "color",
      adjustments: {
        s: "*2"
      }
    }
  }
};
const paletteDarkCommon = {
  text,
  alt,
  utility
};
const paletteDarkShadows = [
  {
    utility: {
      shade: {
        "100": {
          $value: "rgba(#000000, 0.08)",
          $type: "color"
        },
        "200": {
          $value: "rgba(#000000, 0.12)",
          $type: "color"
        },
        "300": {
          $value: "rgba(#000000, 0.16)",
          $type: "color"
        },
        "400": {
          $value: "rgba(#000000, 0.24)",
          $type: "color"
        },
        "500": {
          $value: "rgba(#000000, 0.32)",
          $type: "color"
        },
        "600": {
          $value: "rgba(#000000, 0.48)",
          $type: "color"
        }
      }
    }
  },
  {
    utility: {
      shade: {
        "100": {
          $type: "color",
          $value: "rgba(#000000, 0.06)"
        },
        "200": {
          $type: "color",
          $value: "rgba(#000000, 0.10)"
        },
        "300": {
          $type: "color",
          $value: "rgba(#000000, 0.14)"
        },
        "400": {
          $type: "color",
          $value: "rgba(#000000, 0.22)"
        },
        "500": {
          $type: "color",
          $value: "rgba(#000000, 0.30)"
        },
        "600": {
          $type: "color",
          $value: "rgba(#000000, 0.46)"
        }
      }
    }
  },
  {
    utility: {
      shade: {
        "100": {
          $type: "color",
          $value: "rgba(#000000, 0.04)"
        },
        "200": {
          $type: "color",
          $value: "rgba(#000000, 0.08)"
        },
        "300": {
          $type: "color",
          $value: "rgba(#000000, 0.12)"
        },
        "400": {
          $type: "color",
          $value: "rgba(#000000, 0.20)"
        },
        "500": {
          $type: "color",
          $value: "rgba(#000000, 0.28)"
        },
        "600": {
          $type: "color",
          $value: "rgba(#000000, 0.44)"
        }
      }
    }
  },
  {
    utility: {
      shade: {
        "100": {
          $type: "color",
          $value: "rgba(#000000, 0.02)"
        },
        "200": {
          $type: "color",
          $value: "rgba(#000000, 0.06)"
        },
        "300": {
          $type: "color",
          $value: "rgba(#000000, 0.10)"
        },
        "400": {
          $type: "color",
          $value: "rgba(#000000, 0.18)"
        },
        "500": {
          $type: "color",
          $value: "rgba(#000000, 0.26)"
        },
        "600": {
          $type: "color",
          $value: "rgba(#000000, 0.42)"
        }
      }
    }
  }
];
const fill$5 = {
  base: {
    "100": {
      $value: "{grey-14}",
      $type: "color"
    },
    "200": {
      $value: "{grey-12}",
      $type: "color"
    },
    "300": {
      $value: "{grey-10}",
      $type: "color"
    },
    "400": {
      $value: "{grey-8}",
      $type: "color"
    },
    "500": {
      $value: "{grey-6}",
      $type: "color"
    },
    "600": {
      $value: "{grey-4}",
      $type: "color"
    }
  },
  contrast: {
    "100": {
      $value: "{grey-24}",
      $type: "color"
    },
    "200": {
      $value: "{grey-22}",
      $type: "color"
    },
    "300": {
      $value: "{grey-20}",
      $type: "color"
    },
    "400": {
      $value: "{grey-18}",
      $type: "color"
    },
    "500": {
      $value: "{grey-16}",
      $type: "color"
    },
    "600": {
      $value: "{grey-14}",
      $type: "color"
    }
  }
};
const stroke$5 = {
  base: {
    "100": {
      $value: "{grey-22}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-25}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-29}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-34}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-40}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-47}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  },
  contrast: {
    "100": {
      $value: "{grey-28}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-30}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-33}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-36}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-39}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-45}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  }
};
const paletteDarkElevated2 = {
  fill: fill$5,
  stroke: stroke$5
};
const fill$4 = {
  base: {
    "100": {
      $value: "{grey-19}",
      $type: "color"
    },
    "200": {
      $value: "{grey-16}",
      $type: "color"
    },
    "300": {
      $value: "{grey-13}",
      $type: "color"
    },
    "400": {
      $value: "{grey-10}",
      $type: "color"
    },
    "500": {
      $value: "{grey-7}",
      $type: "color"
    },
    "600": {
      $value: "{grey-4}",
      $type: "color"
    }
  },
  contrast: {
    "100": {
      $value: "{grey-29}",
      $type: "color"
    },
    "200": {
      $value: "{grey-26}",
      $type: "color"
    },
    "300": {
      $value: "{grey-23}",
      $type: "color"
    },
    "400": {
      $value: "{grey-20}",
      $type: "color"
    },
    "500": {
      $value: "{grey-17}",
      $type: "color"
    },
    "600": {
      $value: "{grey-14}",
      $type: "color"
    }
  }
};
const stroke$4 = {
  base: {
    "100": {
      $value: "{grey-29}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-30}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-32}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-36}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-41}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-49}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  },
  contrast: {
    "100": {
      $value: "{grey-39}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-40}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-42}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-46}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-51}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-61}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  }
};
const paletteDarkElevated3 = {
  fill: fill$4,
  stroke: stroke$4
};
const fill$3 = {
  base: {
    "100": {
      $value: "{grey-24}",
      $type: "color"
    },
    "200": {
      $value: "{grey-20}",
      $type: "color"
    },
    "300": {
      $value: "{grey-16}",
      $type: "color"
    },
    "400": {
      $value: "{grey-12}",
      $type: "color"
    },
    "500": {
      $value: "{grey-8}",
      $type: "color"
    },
    "600": {
      $value: "{grey-4}",
      $type: "color"
    }
  },
  contrast: {
    "100": {
      $value: "{grey-34}",
      $type: "color"
    },
    "200": {
      $value: "{grey-30}",
      $type: "color"
    },
    "300": {
      $value: "{grey-26}",
      $type: "color"
    },
    "400": {
      $value: "{grey-22}",
      $type: "color"
    },
    "500": {
      $value: "{grey-18}",
      $type: "color"
    },
    "600": {
      $value: "{grey-14}",
      $type: "color"
    }
  }
};
const stroke$3 = {
  base: {
    "100": {
      $value: "{grey-34}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-35}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-38}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-42}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-47}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-55}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  },
  contrast: {
    "100": {
      $value: "{grey-44}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-45}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-48}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-52}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-57}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-65}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  }
};
const paletteDarkElevated4 = {
  fill: fill$3,
  stroke: stroke$3
};
const fill$2 = {
  base: {
    "100": {
      $value: "{grey-6}",
      $type: "color"
    },
    "200": {
      $value: "{grey-8}",
      $type: "color"
    },
    "300": {
      $value: "{grey-10}",
      $type: "color"
    },
    "400": {
      $value: "{grey-12}",
      $type: "color"
    },
    "500": {
      $value: "{grey-14}",
      $type: "color"
    },
    "600": {
      $value: "{grey-16}",
      $type: "color"
    }
  },
  contrast: {
    "100": {
      $value: "{grey-16}",
      $type: "color"
    },
    "200": {
      $value: "{grey-18}",
      $type: "color"
    },
    "300": {
      $value: "{grey-20}",
      $type: "color"
    },
    "400": {
      $value: "{grey-22}",
      $type: "color"
    },
    "500": {
      $value: "{grey-24}",
      $type: "color"
    },
    "600": {
      $value: "{grey-26}",
      $type: "color"
    }
  }
};
const stroke$2 = {
  base: {
    "100": {
      $value: "{grey-16}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-20}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-24}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-28}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-34}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-40}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  },
  contrast: {
    "100": {
      $value: "{grey-26}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-30}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-34}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-38}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-44}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-50}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  }
};
const paletteDarkBase2 = {
  fill: fill$2,
  stroke: stroke$2
};
const fill$1 = {
  base: {
    "100": {
      $value: "{grey-6}",
      $type: "color"
    },
    "200": {
      $value: "{grey-9}",
      $type: "color"
    },
    "300": {
      $value: "{grey-12}",
      $type: "color"
    },
    "400": {
      $value: "{grey-15}",
      $type: "color"
    },
    "500": {
      $value: "{grey-18}",
      $type: "color"
    },
    "600": {
      $value: "{grey-21}",
      $type: "color"
    }
  },
  contrast: {
    "100": {
      $value: "{grey-16}",
      $type: "color"
    },
    "200": {
      $value: "{grey-19}",
      $type: "color"
    },
    "300": {
      $value: "{grey-22}",
      $type: "color"
    },
    "400": {
      $value: "{grey-25}",
      $type: "color"
    },
    "500": {
      $value: "{grey-28}",
      $type: "color"
    },
    "600": {
      $value: "{grey-31}",
      $type: "color"
    }
  }
};
const stroke$1 = {
  base: {
    "100": {
      $value: "{grey-16}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-21}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-26}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-31}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-37}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-43}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  },
  contrast: {
    "100": {
      $value: "{grey-26}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-31}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-36}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-41}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-47}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-53}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  }
};
const paletteDarkBase3 = {
  fill: fill$1,
  stroke: stroke$1
};
const fill = {
  base: {
    "100": {
      $value: "{grey-6}",
      $type: "color"
    },
    "200": {
      $value: "{grey-10}",
      $type: "color"
    },
    "300": {
      $value: "{grey-14}",
      $type: "color"
    },
    "400": {
      $value: "{grey-18}",
      $type: "color"
    },
    "500": {
      $value: "{grey-22}",
      $type: "color"
    },
    "600": {
      $value: "{grey-26}",
      $type: "color"
    }
  },
  contrast: {
    "100": {
      $value: "{grey-16}",
      $type: "color"
    },
    "200": {
      $value: "{grey-20}",
      $type: "color"
    },
    "300": {
      $value: "{grey-24}",
      $type: "color"
    },
    "400": {
      $value: "{grey-28}",
      $type: "color"
    },
    "500": {
      $value: "{grey-32}",
      $type: "color"
    },
    "600": {
      $value: "{grey-36}",
      $type: "color"
    }
  }
};
const stroke = {
  base: {
    "100": {
      $value: "{grey-16}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-22}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-28}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-34}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-40}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-46}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  },
  contrast: {
    "100": {
      $value: "{grey-28}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "200": {
      $value: "{grey-32}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "300": {
      $value: "{grey-36}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "400": {
      $value: "{grey-40}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "500": {
      $value: "{grey-48}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    },
    "600": {
      $value: "{grey-56}",
      $type: "color",
      adjustments: {
        s: "*0.7"
      }
    }
  }
};
const paletteDarkBase4 = {
  fill,
  stroke
};
function flattenObject(data) {
  const tokens2 = {};
  Object.entries(data).forEach(([key, object]) => {
    traverseToken({
      key,
      object,
      tokens: tokens2
    });
  });
  return tokens2;
}
function traverseToken({
  key,
  object,
  tokens: tokens2
}) {
  if (typeof object == void 0) debugger;
  if (key.charAt(0) === "$") {
    return;
  }
  if (object.$value !== void 0) {
    tokens2[key] = __spreadValues({}, object);
  } else {
    Object.entries(object).forEach(([key2, object2]) => {
      if (key2.charAt(0) !== "$") {
        traverseToken({
          key: `${key}/${key2}`,
          object: object2,
          tokens: tokens2
        });
      }
    });
  }
}
const { min: min$4, max: max$4 } = Math;
const limit = (x, low = 0, high = 1) => {
  return min$4(max$4(low, x), high);
};
const clip_rgb = (rgb2) => {
  rgb2._clipped = false;
  rgb2._unclipped = rgb2.slice(0);
  for (let i = 0; i <= 3; i++) {
    if (i < 3) {
      if (rgb2[i] < 0 || rgb2[i] > 255) rgb2._clipped = true;
      rgb2[i] = limit(rgb2[i], 0, 255);
    } else if (i === 3) {
      rgb2[i] = limit(rgb2[i], 0, 1);
    }
  }
  return rgb2;
};
const classToType = {};
for (let name of [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Undefined",
  "Null"
]) {
  classToType[`[object ${name}]`] = name.toLowerCase();
}
function type$1(obj) {
  return classToType[Object.prototype.toString.call(obj)] || "object";
}
const unpack = (args, keyOrder = null) => {
  if (args.length >= 3) return Array.prototype.slice.call(args);
  if (type$1(args[0]) == "object" && keyOrder) {
    return keyOrder.split("").filter((k) => args[0][k] !== void 0).map((k) => args[0][k]);
  }
  return args[0].slice(0);
};
const last = (args) => {
  if (args.length < 2) return null;
  const l = args.length - 1;
  if (type$1(args[l]) == "string") return args[l].toLowerCase();
  return null;
};
const { PI: PI$2, min: min$3, max: max$3 } = Math;
const rnd2 = (a) => Math.round(a * 100) / 100;
const rnd3 = (a) => Math.round(a * 100) / 100;
const TWOPI = PI$2 * 2;
const PITHIRD = PI$2 / 3;
const DEG2RAD = PI$2 / 180;
const RAD2DEG = 180 / PI$2;
const input = {
  format: {},
  autodetect: []
};
class Color {
  constructor(...args) {
    const me = this;
    if (type$1(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
      return args[0];
    }
    let mode2 = last(args);
    let autodetect = false;
    if (!mode2) {
      autodetect = true;
      if (!input.sorted) {
        input.autodetect = input.autodetect.sort((a, b) => b.p - a.p);
        input.sorted = true;
      }
      for (let chk of input.autodetect) {
        mode2 = chk.test(...args);
        if (mode2) break;
      }
    }
    if (input.format[mode2]) {
      const rgb2 = input.format[mode2].apply(
        null,
        autodetect ? args : args.slice(0, -1)
      );
      me._rgb = clip_rgb(rgb2);
    } else {
      throw new Error("unknown format: " + args);
    }
    if (me._rgb.length === 3) me._rgb.push(1);
  }
  toString() {
    if (type$1(this.hex) == "function") return this.hex();
    return `[${this._rgb.join(",")}]`;
  }
}
const version = "3.1.1";
const chroma = (...args) => {
  return new Color(...args);
};
chroma.version = version;
const w3cx11 = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  laserlemon: "#ffff54",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrod: "#fafad2",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  maroon2: "#7f0000",
  maroon3: "#b03060",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  purple2: "#7f007f",
  purple3: "#a020f0",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
const RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
const hex2rgb = (hex2) => {
  if (hex2.match(RE_HEX)) {
    if (hex2.length === 4 || hex2.length === 7) {
      hex2 = hex2.substr(1);
    }
    if (hex2.length === 3) {
      hex2 = hex2.split("");
      hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2];
    }
    const u = parseInt(hex2, 16);
    const r = u >> 16;
    const g = u >> 8 & 255;
    const b = u & 255;
    return [r, g, b, 1];
  }
  if (hex2.match(RE_HEXA)) {
    if (hex2.length === 5 || hex2.length === 9) {
      hex2 = hex2.substr(1);
    }
    if (hex2.length === 4) {
      hex2 = hex2.split("");
      hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2] + hex2[3] + hex2[3];
    }
    const u = parseInt(hex2, 16);
    const r = u >> 24 & 255;
    const g = u >> 16 & 255;
    const b = u >> 8 & 255;
    const a = Math.round((u & 255) / 255 * 100) / 100;
    return [r, g, b, a];
  }
  throw new Error(`unknown hex color: ${hex2}`);
};
const { round: round$5 } = Math;
const rgb2hex = (...args) => {
  let [r, g, b, a] = unpack(args, "rgba");
  let mode2 = last(args) || "auto";
  if (a === void 0) a = 1;
  if (mode2 === "auto") {
    mode2 = a < 1 ? "rgba" : "rgb";
  }
  r = round$5(r);
  g = round$5(g);
  b = round$5(b);
  const u = r << 16 | g << 8 | b;
  let str = "000000" + u.toString(16);
  str = str.substr(str.length - 6);
  let hxa = "0" + round$5(a * 255).toString(16);
  hxa = hxa.substr(hxa.length - 2);
  switch (mode2.toLowerCase()) {
    case "rgba":
      return `#${str}${hxa}`;
    case "argb":
      return `#${hxa}${str}`;
    default:
      return `#${str}`;
  }
};
Color.prototype.name = function() {
  const hex2 = rgb2hex(this._rgb, "rgb");
  for (let n of Object.keys(w3cx11)) {
    if (w3cx11[n] === hex2) return n.toLowerCase();
  }
  return hex2;
};
input.format.named = (name) => {
  name = name.toLowerCase();
  if (w3cx11[name]) return hex2rgb(w3cx11[name]);
  throw new Error("unknown color name: " + name);
};
input.autodetect.push({
  p: 5,
  test: (h, ...rest) => {
    if (!rest.length && type$1(h) === "string" && w3cx11[h.toLowerCase()]) {
      return "named";
    }
  }
});
Color.prototype.alpha = function(a, mutate = false) {
  if (a !== void 0 && type$1(a) === "number") {
    if (mutate) {
      this._rgb[3] = a;
      return this;
    }
    return new Color([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb");
  }
  return this._rgb[3];
};
Color.prototype.clipped = function() {
  return this._rgb._clipped || false;
};
const labConstants = {
  // Corresponds roughly to RGB brighter/darker
  Kn: 18,
  // D65 standard referent
  labWhitePoint: "d65",
  Xn: 0.95047,
  Yn: 1,
  Zn: 1.08883,
  kE: 216 / 24389,
  kKE: 8,
  kK: 24389 / 27,
  RefWhiteRGB: {
    // sRGB
    X: 0.95047,
    Y: 1,
    Z: 1.08883
  },
  MtxRGB2XYZ: {
    m00: 0.4124564390896922,
    m01: 0.21267285140562253,
    m02: 0.0193338955823293,
    m10: 0.357576077643909,
    m11: 0.715152155287818,
    m12: 0.11919202588130297,
    m20: 0.18043748326639894,
    m21: 0.07217499330655958,
    m22: 0.9503040785363679
  },
  MtxXYZ2RGB: {
    m00: 3.2404541621141045,
    m01: -0.9692660305051868,
    m02: 0.055643430959114726,
    m10: -1.5371385127977166,
    m11: 1.8760108454466942,
    m12: -0.2040259135167538,
    m20: -0.498531409556016,
    m21: 0.041556017530349834,
    m22: 1.0572251882231791
  },
  // used in rgb2xyz
  As: 0.9414285350000001,
  Bs: 1.040417467,
  Cs: 1.089532651,
  MtxAdaptMa: {
    m00: 0.8951,
    m01: -0.7502,
    m02: 0.0389,
    m10: 0.2664,
    m11: 1.7135,
    m12: -0.0685,
    m20: -0.1614,
    m21: 0.0367,
    m22: 1.0296
  },
  MtxAdaptMaI: {
    m00: 0.9869929054667123,
    m01: 0.43230526972339456,
    m02: -0.008528664575177328,
    m10: -0.14705425642099013,
    m11: 0.5183602715367776,
    m12: 0.04004282165408487,
    m20: 0.15996265166373125,
    m21: 0.0492912282128556,
    m22: 0.9684866957875502
  }
};
const ILLUMINANTS = /* @__PURE__ */ new Map([
  // ASTM E308-01
  ["a", [1.0985, 0.35585]],
  // Wyszecki & Stiles, p. 769
  ["b", [1.0985, 0.35585]],
  // C ASTM E308-01
  ["c", [0.98074, 1.18232]],
  // D50 (ASTM E308-01)
  ["d50", [0.96422, 0.82521]],
  // D55 (ASTM E308-01)
  ["d55", [0.95682, 0.92149]],
  // D65 (ASTM E308-01)
  ["d65", [0.95047, 1.08883]],
  // E (ASTM E308-01)
  ["e", [1, 1, 1]],
  // F2 (ASTM E308-01)
  ["f2", [0.99186, 0.67393]],
  // F7 (ASTM E308-01)
  ["f7", [0.95041, 1.08747]],
  // F11 (ASTM E308-01)
  ["f11", [1.00962, 0.6435]],
  ["icc", [0.96422, 0.82521]]
]);
function setLabWhitePoint(name) {
  const ill = ILLUMINANTS.get(String(name).toLowerCase());
  if (!ill) {
    throw new Error("unknown Lab illuminant " + name);
  }
  labConstants.labWhitePoint = name;
  labConstants.Xn = ill[0];
  labConstants.Zn = ill[1];
}
function getLabWhitePoint() {
  return labConstants.labWhitePoint;
}
const lab2rgb = (...args) => {
  args = unpack(args, "lab");
  const [L, a, b] = args;
  const [x, y, z] = lab2xyz(L, a, b);
  const [r, g, b_] = xyz2rgb(x, y, z);
  return [r, g, b_, args.length > 3 ? args[3] : 1];
};
const lab2xyz = (L, a, b) => {
  const { kE, kK, kKE, Xn, Yn, Zn } = labConstants;
  const fy = (L + 16) / 116;
  const fx = 2e-3 * a + fy;
  const fz = fy - 5e-3 * b;
  const fx3 = fx * fx * fx;
  const fz3 = fz * fz * fz;
  const xr = fx3 > kE ? fx3 : (116 * fx - 16) / kK;
  const yr = L > kKE ? Math.pow((L + 16) / 116, 3) : L / kK;
  const zr = fz3 > kE ? fz3 : (116 * fz - 16) / kK;
  const x = xr * Xn;
  const y = yr * Yn;
  const z = zr * Zn;
  return [x, y, z];
};
const compand = (linear) => {
  const sign = Math.sign(linear);
  linear = Math.abs(linear);
  return (linear <= 31308e-7 ? linear * 12.92 : 1.055 * Math.pow(linear, 1 / 2.4) - 0.055) * sign;
};
const xyz2rgb = (x, y, z) => {
  const { MtxAdaptMa, MtxAdaptMaI, MtxXYZ2RGB, RefWhiteRGB, Xn, Yn, Zn } = labConstants;
  const As = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
  const Bs = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
  const Cs = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
  const Ad = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
  const Bd = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
  const Cd = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
  const X1 = (x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20) * (Ad / As);
  const Y1 = (x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21) * (Bd / Bs);
  const Z1 = (x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22) * (Cd / Cs);
  const X2 = X1 * MtxAdaptMaI.m00 + Y1 * MtxAdaptMaI.m10 + Z1 * MtxAdaptMaI.m20;
  const Y2 = X1 * MtxAdaptMaI.m01 + Y1 * MtxAdaptMaI.m11 + Z1 * MtxAdaptMaI.m21;
  const Z2 = X1 * MtxAdaptMaI.m02 + Y1 * MtxAdaptMaI.m12 + Z1 * MtxAdaptMaI.m22;
  const r = compand(
    X2 * MtxXYZ2RGB.m00 + Y2 * MtxXYZ2RGB.m10 + Z2 * MtxXYZ2RGB.m20
  );
  const g = compand(
    X2 * MtxXYZ2RGB.m01 + Y2 * MtxXYZ2RGB.m11 + Z2 * MtxXYZ2RGB.m21
  );
  const b = compand(
    X2 * MtxXYZ2RGB.m02 + Y2 * MtxXYZ2RGB.m12 + Z2 * MtxXYZ2RGB.m22
  );
  return [r * 255, g * 255, b * 255];
};
const rgb2lab = (...args) => {
  const [r, g, b, ...rest] = unpack(args, "rgb");
  const [x, y, z] = rgb2xyz(r, g, b);
  const [L, a, b_] = xyz2lab(x, y, z);
  return [L, a, b_, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
function xyz2lab(x, y, z) {
  const { Xn, Yn, Zn, kE, kK } = labConstants;
  const xr = x / Xn;
  const yr = y / Yn;
  const zr = z / Zn;
  const fx = xr > kE ? Math.pow(xr, 1 / 3) : (kK * xr + 16) / 116;
  const fy = yr > kE ? Math.pow(yr, 1 / 3) : (kK * yr + 16) / 116;
  const fz = zr > kE ? Math.pow(zr, 1 / 3) : (kK * zr + 16) / 116;
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}
function gammaAdjustSRGB(companded) {
  const sign = Math.sign(companded);
  companded = Math.abs(companded);
  const linear = companded <= 0.04045 ? companded / 12.92 : Math.pow((companded + 0.055) / 1.055, 2.4);
  return linear * sign;
}
const rgb2xyz = (r, g, b) => {
  r = gammaAdjustSRGB(r / 255);
  g = gammaAdjustSRGB(g / 255);
  b = gammaAdjustSRGB(b / 255);
  const { MtxRGB2XYZ, MtxAdaptMa, MtxAdaptMaI, Xn, Yn, Zn, As, Bs, Cs } = labConstants;
  let x = r * MtxRGB2XYZ.m00 + g * MtxRGB2XYZ.m10 + b * MtxRGB2XYZ.m20;
  let y = r * MtxRGB2XYZ.m01 + g * MtxRGB2XYZ.m11 + b * MtxRGB2XYZ.m21;
  let z = r * MtxRGB2XYZ.m02 + g * MtxRGB2XYZ.m12 + b * MtxRGB2XYZ.m22;
  const Ad = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
  const Bd = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
  const Cd = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
  let X = x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20;
  let Y = x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21;
  let Z = x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22;
  X *= Ad / As;
  Y *= Bd / Bs;
  Z *= Cd / Cs;
  x = X * MtxAdaptMaI.m00 + Y * MtxAdaptMaI.m10 + Z * MtxAdaptMaI.m20;
  y = X * MtxAdaptMaI.m01 + Y * MtxAdaptMaI.m11 + Z * MtxAdaptMaI.m21;
  z = X * MtxAdaptMaI.m02 + Y * MtxAdaptMaI.m12 + Z * MtxAdaptMaI.m22;
  return [x, y, z];
};
Color.prototype.lab = function() {
  return rgb2lab(this._rgb);
};
const lab$1 = (...args) => new Color(...args, "lab");
Object.assign(chroma, { lab: lab$1, getLabWhitePoint, setLabWhitePoint });
input.format.lab = lab2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "lab");
    if (type$1(args) === "array" && args.length === 3) {
      return "lab";
    }
  }
});
Color.prototype.darken = function(amount = 1) {
  const me = this;
  const lab2 = me.lab();
  lab2[0] -= labConstants.Kn * amount;
  return new Color(lab2, "lab").alpha(me.alpha(), true);
};
Color.prototype.brighten = function(amount = 1) {
  return this.darken(-amount);
};
Color.prototype.darker = Color.prototype.darken;
Color.prototype.brighter = Color.prototype.brighten;
Color.prototype.get = function(mc) {
  const [mode2, channel] = mc.split(".");
  const src = this[mode2]();
  if (channel) {
    const i = mode2.indexOf(channel) - (mode2.substr(0, 2) === "ok" ? 2 : 0);
    if (i > -1) return src[i];
    throw new Error(`unknown channel ${channel} in mode ${mode2}`);
  } else {
    return src;
  }
};
const { pow: pow$6 } = Math;
const EPS = 1e-7;
const MAX_ITER = 20;
Color.prototype.luminance = function(lum2, mode2 = "rgb") {
  if (lum2 !== void 0 && type$1(lum2) === "number") {
    if (lum2 === 0) {
      return new Color([0, 0, 0, this._rgb[3]], "rgb");
    }
    if (lum2 === 1) {
      return new Color([255, 255, 255, this._rgb[3]], "rgb");
    }
    let cur_lum = this.luminance();
    let max_iter = MAX_ITER;
    const test = (low, high) => {
      const mid = low.interpolate(high, 0.5, mode2);
      const lm = mid.luminance();
      if (Math.abs(lum2 - lm) < EPS || !max_iter--) {
        return mid;
      }
      return lm > lum2 ? test(low, mid) : test(mid, high);
    };
    const rgb2 = (cur_lum > lum2 ? test(new Color([0, 0, 0]), this) : test(this, new Color([255, 255, 255]))).rgb();
    return new Color([...rgb2, this._rgb[3]]);
  }
  return rgb2luminance(...this._rgb.slice(0, 3));
};
const rgb2luminance = (r, g, b) => {
  r = luminance_x(r);
  g = luminance_x(g);
  b = luminance_x(b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const luminance_x = (x) => {
  x /= 255;
  return x <= 0.03928 ? x / 12.92 : pow$6((x + 0.055) / 1.055, 2.4);
};
const index = {};
const mix = (col1, col2, f = 0.5, ...rest) => {
  let mode2 = rest[0] || "lrgb";
  if (!index[mode2] && !rest.length) {
    mode2 = Object.keys(index)[0];
  }
  if (!index[mode2]) {
    throw new Error(`interpolation mode ${mode2} is not defined`);
  }
  if (type$1(col1) !== "object") col1 = new Color(col1);
  if (type$1(col2) !== "object") col2 = new Color(col2);
  return index[mode2](col1, col2, f).alpha(
    col1.alpha() + f * (col2.alpha() - col1.alpha())
  );
};
Color.prototype.mix = Color.prototype.interpolate = function(col2, f = 0.5, ...rest) {
  return mix(this, col2, f, ...rest);
};
Color.prototype.premultiply = function(mutate = false) {
  const rgb2 = this._rgb;
  const a = rgb2[3];
  if (mutate) {
    this._rgb = [rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a];
    return this;
  } else {
    return new Color([rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a], "rgb");
  }
};
const { sin: sin$3, cos: cos$4 } = Math;
const lch2lab = (...args) => {
  let [l, c, h] = unpack(args, "lch");
  if (isNaN(h)) h = 0;
  h = h * DEG2RAD;
  return [l, cos$4(h) * c, sin$3(h) * c];
};
const lch2rgb = (...args) => {
  args = unpack(args, "lch");
  const [l, c, h] = args;
  const [L, a, b_] = lch2lab(l, c, h);
  const [r, g, b] = lab2rgb(L, a, b_);
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
const hcl2rgb = (...args) => {
  const hcl2 = unpack(args, "hcl").reverse();
  return lch2rgb(...hcl2);
};
const { sqrt: sqrt$4, atan2: atan2$2, round: round$4 } = Math;
const lab2lch = (...args) => {
  const [l, a, b] = unpack(args, "lab");
  const c = sqrt$4(a * a + b * b);
  let h = (atan2$2(b, a) * RAD2DEG + 360) % 360;
  if (round$4(c * 1e4) === 0) h = Number.NaN;
  return [l, c, h];
};
const rgb2lch = (...args) => {
  const [r, g, b, ...rest] = unpack(args, "rgb");
  const [l, a, b_] = rgb2lab(r, g, b);
  const [L, c, h] = lab2lch(l, a, b_);
  return [L, c, h, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
Color.prototype.lch = function() {
  return rgb2lch(this._rgb);
};
Color.prototype.hcl = function() {
  return rgb2lch(this._rgb).reverse();
};
const lch$1 = (...args) => new Color(...args, "lch");
const hcl = (...args) => new Color(...args, "hcl");
Object.assign(chroma, { lch: lch$1, hcl });
input.format.lch = lch2rgb;
input.format.hcl = hcl2rgb;
["lch", "hcl"].forEach(
  (m) => input.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack(args, m);
      if (type$1(args) === "array" && args.length === 3) {
        return m;
      }
    }
  })
);
Color.prototype.saturate = function(amount = 1) {
  const me = this;
  const lch2 = me.lch();
  lch2[1] += labConstants.Kn * amount;
  if (lch2[1] < 0) lch2[1] = 0;
  return new Color(lch2, "lch").alpha(me.alpha(), true);
};
Color.prototype.desaturate = function(amount = 1) {
  return this.saturate(-amount);
};
Color.prototype.set = function(mc, value, mutate = false) {
  const [mode2, channel] = mc.split(".");
  const src = this[mode2]();
  if (channel) {
    const i = mode2.indexOf(channel) - (mode2.substr(0, 2) === "ok" ? 2 : 0);
    if (i > -1) {
      if (type$1(value) == "string") {
        switch (value.charAt(0)) {
          case "+":
            src[i] += +value;
            break;
          case "-":
            src[i] += +value;
            break;
          case "*":
            src[i] *= +value.substr(1);
            break;
          case "/":
            src[i] /= +value.substr(1);
            break;
          default:
            src[i] = +value;
        }
      } else if (type$1(value) === "number") {
        src[i] = value;
      } else {
        throw new Error(`unsupported value for Color.set`);
      }
      const out = new Color(src, mode2);
      if (mutate) {
        this._rgb = out._rgb;
        return this;
      }
      return out;
    }
    throw new Error(`unknown channel ${channel} in mode ${mode2}`);
  } else {
    return src;
  }
};
Color.prototype.tint = function(f = 0.5, ...rest) {
  return mix(this, "white", f, ...rest);
};
Color.prototype.shade = function(f = 0.5, ...rest) {
  return mix(this, "black", f, ...rest);
};
const rgb$1 = (col1, col2, f) => {
  const xyz0 = col1._rgb;
  const xyz1 = col2._rgb;
  return new Color(
    xyz0[0] + f * (xyz1[0] - xyz0[0]),
    xyz0[1] + f * (xyz1[1] - xyz0[1]),
    xyz0[2] + f * (xyz1[2] - xyz0[2]),
    "rgb"
  );
};
index.rgb = rgb$1;
const { sqrt: sqrt$3, pow: pow$5 } = Math;
const lrgb = (col1, col2, f) => {
  const [x1, y1, z1] = col1._rgb;
  const [x2, y2, z2] = col2._rgb;
  return new Color(
    sqrt$3(pow$5(x1, 2) * (1 - f) + pow$5(x2, 2) * f),
    sqrt$3(pow$5(y1, 2) * (1 - f) + pow$5(y2, 2) * f),
    sqrt$3(pow$5(z1, 2) * (1 - f) + pow$5(z2, 2) * f),
    "rgb"
  );
};
index.lrgb = lrgb;
const lab = (col1, col2, f) => {
  const xyz0 = col1.lab();
  const xyz1 = col2.lab();
  return new Color(
    xyz0[0] + f * (xyz1[0] - xyz0[0]),
    xyz0[1] + f * (xyz1[1] - xyz0[1]),
    xyz0[2] + f * (xyz1[2] - xyz0[2]),
    "lab"
  );
};
index.lab = lab;
const interpolate_hsx = (col1, col2, f, m) => {
  let xyz0, xyz1;
  if (m === "hsl") {
    xyz0 = col1.hsl();
    xyz1 = col2.hsl();
  } else if (m === "hsv") {
    xyz0 = col1.hsv();
    xyz1 = col2.hsv();
  } else if (m === "hcg") {
    xyz0 = col1.hcg();
    xyz1 = col2.hcg();
  } else if (m === "hsi") {
    xyz0 = col1.hsi();
    xyz1 = col2.hsi();
  } else if (m === "lch" || m === "hcl") {
    m = "hcl";
    xyz0 = col1.hcl();
    xyz1 = col2.hcl();
  } else if (m === "oklch") {
    xyz0 = col1.oklch().reverse();
    xyz1 = col2.oklch().reverse();
  }
  let hue0, hue1, sat0, sat1, lbv0, lbv1;
  if (m.substr(0, 1) === "h" || m === "oklch") {
    [hue0, sat0, lbv0] = xyz0;
    [hue1, sat1, lbv1] = xyz1;
  }
  let sat, hue, lbv, dh;
  if (!isNaN(hue0) && !isNaN(hue1)) {
    if (hue1 > hue0 && hue1 - hue0 > 180) {
      dh = hue1 - (hue0 + 360);
    } else if (hue1 < hue0 && hue0 - hue1 > 180) {
      dh = hue1 + 360 - hue0;
    } else {
      dh = hue1 - hue0;
    }
    hue = hue0 + f * dh;
  } else if (!isNaN(hue0)) {
    hue = hue0;
    if ((lbv1 == 1 || lbv1 == 0) && m != "hsv") sat = sat0;
  } else if (!isNaN(hue1)) {
    hue = hue1;
    if ((lbv0 == 1 || lbv0 == 0) && m != "hsv") sat = sat1;
  } else {
    hue = Number.NaN;
  }
  if (sat === void 0) sat = sat0 + f * (sat1 - sat0);
  lbv = lbv0 + f * (lbv1 - lbv0);
  return m === "oklch" ? new Color([lbv, sat, hue], m) : new Color([hue, sat, lbv], m);
};
const lch = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "lch");
};
index.lch = lch;
index.hcl = lch;
const num2rgb = (num2) => {
  if (type$1(num2) == "number" && num2 >= 0 && num2 <= 16777215) {
    const r = num2 >> 16;
    const g = num2 >> 8 & 255;
    const b = num2 & 255;
    return [r, g, b, 1];
  }
  throw new Error("unknown num color: " + num2);
};
const rgb2num = (...args) => {
  const [r, g, b] = unpack(args, "rgb");
  return (r << 16) + (g << 8) + b;
};
Color.prototype.num = function() {
  return rgb2num(this._rgb);
};
const num$1 = (...args) => new Color(...args, "num");
Object.assign(chroma, { num: num$1 });
input.format.num = num2rgb;
input.autodetect.push({
  p: 5,
  test: (...args) => {
    if (args.length === 1 && type$1(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
      return "num";
    }
  }
});
const num = (col1, col2, f) => {
  const c1 = col1.num();
  const c2 = col2.num();
  return new Color(c1 + f * (c2 - c1), "num");
};
index.num = num;
const { floor: floor$3 } = Math;
const hcg2rgb = (...args) => {
  args = unpack(args, "hcg");
  let [h, c, _g] = args;
  let r, g, b;
  _g = _g * 255;
  const _c = c * 255;
  if (c === 0) {
    r = g = b = _g;
  } else {
    if (h === 360) h = 0;
    if (h > 360) h -= 360;
    if (h < 0) h += 360;
    h /= 60;
    const i = floor$3(h);
    const f = h - i;
    const p = _g * (1 - c);
    const q = p + _c * (1 - f);
    const t = p + _c * f;
    const v = p + _c;
    switch (i) {
      case 0:
        [r, g, b] = [v, t, p];
        break;
      case 1:
        [r, g, b] = [q, v, p];
        break;
      case 2:
        [r, g, b] = [p, v, t];
        break;
      case 3:
        [r, g, b] = [p, q, v];
        break;
      case 4:
        [r, g, b] = [t, p, v];
        break;
      case 5:
        [r, g, b] = [v, p, q];
        break;
    }
  }
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
const rgb2hcg = (...args) => {
  const [r, g, b] = unpack(args, "rgb");
  const minRgb = min$3(r, g, b);
  const maxRgb = max$3(r, g, b);
  const delta = maxRgb - minRgb;
  const c = delta * 100 / 255;
  const _g = minRgb / (255 - delta) * 100;
  let h;
  if (delta === 0) {
    h = Number.NaN;
  } else {
    if (r === maxRgb) h = (g - b) / delta;
    if (g === maxRgb) h = 2 + (b - r) / delta;
    if (b === maxRgb) h = 4 + (r - g) / delta;
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, c, _g];
};
Color.prototype.hcg = function() {
  return rgb2hcg(this._rgb);
};
const hcg$1 = (...args) => new Color(...args, "hcg");
chroma.hcg = hcg$1;
input.format.hcg = hcg2rgb;
input.autodetect.push({
  p: 1,
  test: (...args) => {
    args = unpack(args, "hcg");
    if (type$1(args) === "array" && args.length === 3) {
      return "hcg";
    }
  }
});
const hcg = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "hcg");
};
index.hcg = hcg;
const { cos: cos$3 } = Math;
const hsi2rgb = (...args) => {
  args = unpack(args, "hsi");
  let [h, s, i] = args;
  let r, g, b;
  if (isNaN(h)) h = 0;
  if (isNaN(s)) s = 0;
  if (h > 360) h -= 360;
  if (h < 0) h += 360;
  h /= 360;
  if (h < 1 / 3) {
    b = (1 - s) / 3;
    r = (1 + s * cos$3(TWOPI * h) / cos$3(PITHIRD - TWOPI * h)) / 3;
    g = 1 - (b + r);
  } else if (h < 2 / 3) {
    h -= 1 / 3;
    r = (1 - s) / 3;
    g = (1 + s * cos$3(TWOPI * h) / cos$3(PITHIRD - TWOPI * h)) / 3;
    b = 1 - (r + g);
  } else {
    h -= 2 / 3;
    g = (1 - s) / 3;
    b = (1 + s * cos$3(TWOPI * h) / cos$3(PITHIRD - TWOPI * h)) / 3;
    r = 1 - (g + b);
  }
  r = limit(i * r * 3);
  g = limit(i * g * 3);
  b = limit(i * b * 3);
  return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
};
const { min: min$2, sqrt: sqrt$2, acos } = Math;
const rgb2hsi = (...args) => {
  let [r, g, b] = unpack(args, "rgb");
  r /= 255;
  g /= 255;
  b /= 255;
  let h;
  const min_ = min$2(r, g, b);
  const i = (r + g + b) / 3;
  const s = i > 0 ? 1 - min_ / i : 0;
  if (s === 0) {
    h = NaN;
  } else {
    h = (r - g + (r - b)) / 2;
    h /= sqrt$2((r - g) * (r - g) + (r - b) * (g - b));
    h = acos(h);
    if (b > g) {
      h = TWOPI - h;
    }
    h /= TWOPI;
  }
  return [h * 360, s, i];
};
Color.prototype.hsi = function() {
  return rgb2hsi(this._rgb);
};
const hsi$1 = (...args) => new Color(...args, "hsi");
chroma.hsi = hsi$1;
input.format.hsi = hsi2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "hsi");
    if (type$1(args) === "array" && args.length === 3) {
      return "hsi";
    }
  }
});
const hsi = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "hsi");
};
index.hsi = hsi;
const hsl2rgb = (...args) => {
  args = unpack(args, "hsl");
  const [h, s, l] = args;
  let r, g, b;
  if (s === 0) {
    r = g = b = l * 255;
  } else {
    const t3 = [0, 0, 0];
    const c = [0, 0, 0];
    const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const t1 = 2 * l - t2;
    const h_ = h / 360;
    t3[0] = h_ + 1 / 3;
    t3[1] = h_;
    t3[2] = h_ - 1 / 3;
    for (let i = 0; i < 3; i++) {
      if (t3[i] < 0) t3[i] += 1;
      if (t3[i] > 1) t3[i] -= 1;
      if (6 * t3[i] < 1) c[i] = t1 + (t2 - t1) * 6 * t3[i];
      else if (2 * t3[i] < 1) c[i] = t2;
      else if (3 * t3[i] < 2) c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;
      else c[i] = t1;
    }
    [r, g, b] = [c[0] * 255, c[1] * 255, c[2] * 255];
  }
  if (args.length > 3) {
    return [r, g, b, args[3]];
  }
  return [r, g, b, 1];
};
const rgb2hsl$1 = (...args) => {
  args = unpack(args, "rgba");
  let [r, g, b] = args;
  r /= 255;
  g /= 255;
  b /= 255;
  const minRgb = min$3(r, g, b);
  const maxRgb = max$3(r, g, b);
  const l = (maxRgb + minRgb) / 2;
  let s, h;
  if (maxRgb === minRgb) {
    s = 0;
    h = Number.NaN;
  } else {
    s = l < 0.5 ? (maxRgb - minRgb) / (maxRgb + minRgb) : (maxRgb - minRgb) / (2 - maxRgb - minRgb);
  }
  if (r == maxRgb) h = (g - b) / (maxRgb - minRgb);
  else if (g == maxRgb) h = 2 + (b - r) / (maxRgb - minRgb);
  else if (b == maxRgb) h = 4 + (r - g) / (maxRgb - minRgb);
  h *= 60;
  if (h < 0) h += 360;
  if (args.length > 3 && args[3] !== void 0) return [h, s, l, args[3]];
  return [h, s, l];
};
Color.prototype.hsl = function() {
  return rgb2hsl$1(this._rgb);
};
const hsl$1 = (...args) => new Color(...args, "hsl");
chroma.hsl = hsl$1;
input.format.hsl = hsl2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "hsl");
    if (type$1(args) === "array" && args.length === 3) {
      return "hsl";
    }
  }
});
const hsl = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "hsl");
};
index.hsl = hsl;
const { floor: floor$2 } = Math;
const hsv2rgb = (...args) => {
  args = unpack(args, "hsv");
  let [h, s, v] = args;
  let r, g, b;
  v *= 255;
  if (s === 0) {
    r = g = b = v;
  } else {
    if (h === 360) h = 0;
    if (h > 360) h -= 360;
    if (h < 0) h += 360;
    h /= 60;
    const i = floor$2(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - s * f);
    const t = v * (1 - s * (1 - f));
    switch (i) {
      case 0:
        [r, g, b] = [v, t, p];
        break;
      case 1:
        [r, g, b] = [q, v, p];
        break;
      case 2:
        [r, g, b] = [p, v, t];
        break;
      case 3:
        [r, g, b] = [p, q, v];
        break;
      case 4:
        [r, g, b] = [t, p, v];
        break;
      case 5:
        [r, g, b] = [v, p, q];
        break;
    }
  }
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
const { min: min$1, max: max$2 } = Math;
const rgb2hsl = (...args) => {
  args = unpack(args, "rgb");
  let [r, g, b] = args;
  const min_ = min$1(r, g, b);
  const max_ = max$2(r, g, b);
  const delta = max_ - min_;
  let h, s, v;
  v = max_ / 255;
  if (max_ === 0) {
    h = Number.NaN;
    s = 0;
  } else {
    s = delta / max_;
    if (r === max_) h = (g - b) / delta;
    if (g === max_) h = 2 + (b - r) / delta;
    if (b === max_) h = 4 + (r - g) / delta;
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s, v];
};
Color.prototype.hsv = function() {
  return rgb2hsl(this._rgb);
};
const hsv$1 = (...args) => new Color(...args, "hsv");
chroma.hsv = hsv$1;
input.format.hsv = hsv2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "hsv");
    if (type$1(args) === "array" && args.length === 3) {
      return "hsv";
    }
  }
});
const hsv = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "hsv");
};
index.hsv = hsv;
function multiplyMatrices(A, B) {
  let m = A.length;
  if (!Array.isArray(A[0])) {
    A = [A];
  }
  if (!Array.isArray(B[0])) {
    B = B.map((x) => [x]);
  }
  let p = B[0].length;
  let B_cols = B[0].map((_, i) => B.map((x) => x[i]));
  let product = A.map(
    (row) => B_cols.map((col) => {
      if (!Array.isArray(row)) {
        return col.reduce((a, c) => a + c * row, 0);
      }
      return row.reduce((a, c, i) => a + c * (col[i] || 0), 0);
    })
  );
  if (m === 1) {
    product = product[0];
  }
  if (p === 1) {
    return product.map((x) => x[0]);
  }
  return product;
}
const oklab2rgb = (...args) => {
  args = unpack(args, "lab");
  const [L, a, b, ...rest] = args;
  const [X, Y, Z] = OKLab_to_XYZ([L, a, b]);
  const [r, g, b_] = xyz2rgb(X, Y, Z);
  return [r, g, b_, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
function OKLab_to_XYZ(OKLab) {
  var LMStoXYZ = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ];
  var OKLabtoLMS = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ];
  var LMSnl = multiplyMatrices(OKLabtoLMS, OKLab);
  return multiplyMatrices(
    LMStoXYZ,
    LMSnl.map((c) => c ** 3)
  );
}
const rgb2oklab = (...args) => {
  const [r, g, b, ...rest] = unpack(args, "rgb");
  const xyz = rgb2xyz(r, g, b);
  const oklab2 = XYZ_to_OKLab(xyz);
  return [...oklab2, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
function XYZ_to_OKLab(XYZ) {
  const XYZtoLMS = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ];
  const LMStoOKLab = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ];
  const LMS = multiplyMatrices(XYZtoLMS, XYZ);
  return multiplyMatrices(
    LMStoOKLab,
    LMS.map((c) => Math.cbrt(c))
  );
}
Color.prototype.oklab = function() {
  return rgb2oklab(this._rgb);
};
const oklab$1 = (...args) => new Color(...args, "oklab");
Object.assign(chroma, { oklab: oklab$1 });
input.format.oklab = oklab2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "oklab");
    if (type$1(args) === "array" && args.length === 3) {
      return "oklab";
    }
  }
});
const oklab = (col1, col2, f) => {
  const xyz0 = col1.oklab();
  const xyz1 = col2.oklab();
  return new Color(
    xyz0[0] + f * (xyz1[0] - xyz0[0]),
    xyz0[1] + f * (xyz1[1] - xyz0[1]),
    xyz0[2] + f * (xyz1[2] - xyz0[2]),
    "oklab"
  );
};
index.oklab = oklab;
const oklch$1 = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "oklch");
};
index.oklch = oklch$1;
const { pow: pow$4, sqrt: sqrt$1, PI: PI$1, cos: cos$2, sin: sin$2, atan2: atan2$1 } = Math;
const average = (colors, mode2 = "lrgb", weights = null) => {
  const l = colors.length;
  if (!weights) weights = Array.from(new Array(l)).map(() => 1);
  const k = l / weights.reduce(function(a, b) {
    return a + b;
  });
  weights.forEach((w, i) => {
    weights[i] *= k;
  });
  colors = colors.map((c) => new Color(c));
  if (mode2 === "lrgb") {
    return _average_lrgb(colors, weights);
  }
  const first = colors.shift();
  const xyz = first.get(mode2);
  const cnt = [];
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < xyz.length; i++) {
    xyz[i] = (xyz[i] || 0) * weights[0];
    cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
    if (mode2.charAt(i) === "h" && !isNaN(xyz[i])) {
      const A = xyz[i] / 180 * PI$1;
      dx += cos$2(A) * weights[0];
      dy += sin$2(A) * weights[0];
    }
  }
  let alpha = first.alpha() * weights[0];
  colors.forEach((c, ci) => {
    const xyz2 = c.get(mode2);
    alpha += c.alpha() * weights[ci + 1];
    for (let i = 0; i < xyz.length; i++) {
      if (!isNaN(xyz2[i])) {
        cnt[i] += weights[ci + 1];
        if (mode2.charAt(i) === "h") {
          const A = xyz2[i] / 180 * PI$1;
          dx += cos$2(A) * weights[ci + 1];
          dy += sin$2(A) * weights[ci + 1];
        } else {
          xyz[i] += xyz2[i] * weights[ci + 1];
        }
      }
    }
  });
  for (let i = 0; i < xyz.length; i++) {
    if (mode2.charAt(i) === "h") {
      let A = atan2$1(dy / cnt[i], dx / cnt[i]) / PI$1 * 180;
      while (A < 0) A += 360;
      while (A >= 360) A -= 360;
      xyz[i] = A;
    } else {
      xyz[i] = xyz[i] / cnt[i];
    }
  }
  alpha /= l;
  return new Color(xyz, mode2).alpha(alpha > 0.99999 ? 1 : alpha, true);
};
const _average_lrgb = (colors, weights) => {
  const l = colors.length;
  const xyz = [0, 0, 0, 0];
  for (let i = 0; i < colors.length; i++) {
    const col = colors[i];
    const f = weights[i] / l;
    const rgb2 = col._rgb;
    xyz[0] += pow$4(rgb2[0], 2) * f;
    xyz[1] += pow$4(rgb2[1], 2) * f;
    xyz[2] += pow$4(rgb2[2], 2) * f;
    xyz[3] += rgb2[3] * f;
  }
  xyz[0] = sqrt$1(xyz[0]);
  xyz[1] = sqrt$1(xyz[1]);
  xyz[2] = sqrt$1(xyz[2]);
  if (xyz[3] > 0.9999999) xyz[3] = 1;
  return new Color(clip_rgb(xyz));
};
const { pow: pow$3 } = Math;
function scale(colors) {
  let _mode = "rgb";
  let _nacol = chroma("#ccc");
  let _spread = 0;
  let _domain = [0, 1];
  let _pos = [];
  let _padding = [0, 0];
  let _classes = false;
  let _colors = [];
  let _out = false;
  let _min = 0;
  let _max = 1;
  let _correctLightness = false;
  let _colorCache = {};
  let _useCache = true;
  let _gamma = 1;
  const setColors = function(colors2) {
    colors2 = colors2 || ["#fff", "#000"];
    if (colors2 && type$1(colors2) === "string" && chroma.brewer && chroma.brewer[colors2.toLowerCase()]) {
      colors2 = chroma.brewer[colors2.toLowerCase()];
    }
    if (type$1(colors2) === "array") {
      if (colors2.length === 1) {
        colors2 = [colors2[0], colors2[0]];
      }
      colors2 = colors2.slice(0);
      for (let c = 0; c < colors2.length; c++) {
        colors2[c] = chroma(colors2[c]);
      }
      _pos.length = 0;
      for (let c = 0; c < colors2.length; c++) {
        _pos.push(c / (colors2.length - 1));
      }
    }
    resetCache();
    return _colors = colors2;
  };
  const getClass = function(value) {
    if (_classes != null) {
      const n = _classes.length - 1;
      let i = 0;
      while (i < n && value >= _classes[i]) {
        i++;
      }
      return i - 1;
    }
    return 0;
  };
  let tMapLightness = (t) => t;
  let tMapDomain = (t) => t;
  const getColor = function(val, bypassMap) {
    let col, t;
    if (bypassMap == null) {
      bypassMap = false;
    }
    if (isNaN(val) || val === null) {
      return _nacol;
    }
    if (!bypassMap) {
      if (_classes && _classes.length > 2) {
        const c = getClass(val);
        t = c / (_classes.length - 2);
      } else if (_max !== _min) {
        t = (val - _min) / (_max - _min);
      } else {
        t = 1;
      }
    } else {
      t = val;
    }
    t = tMapDomain(t);
    if (!bypassMap) {
      t = tMapLightness(t);
    }
    if (_gamma !== 1) {
      t = pow$3(t, _gamma);
    }
    t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
    t = limit(t, 0, 1);
    const k = Math.floor(t * 1e4);
    if (_useCache && _colorCache[k]) {
      col = _colorCache[k];
    } else {
      if (type$1(_colors) === "array") {
        for (let i = 0; i < _pos.length; i++) {
          const p = _pos[i];
          if (t <= p) {
            col = _colors[i];
            break;
          }
          if (t >= p && i === _pos.length - 1) {
            col = _colors[i];
            break;
          }
          if (t > p && t < _pos[i + 1]) {
            t = (t - p) / (_pos[i + 1] - p);
            col = chroma.interpolate(
              _colors[i],
              _colors[i + 1],
              t,
              _mode
            );
            break;
          }
        }
      } else if (type$1(_colors) === "function") {
        col = _colors(t);
      }
      if (_useCache) {
        _colorCache[k] = col;
      }
    }
    return col;
  };
  var resetCache = () => _colorCache = {};
  setColors(colors);
  const f = function(v) {
    const c = chroma(getColor(v));
    if (_out && c[_out]) {
      return c[_out]();
    } else {
      return c;
    }
  };
  f.classes = function(classes) {
    if (classes != null) {
      if (type$1(classes) === "array") {
        _classes = classes;
        _domain = [classes[0], classes[classes.length - 1]];
      } else {
        const d = chroma.analyze(_domain);
        if (classes === 0) {
          _classes = [d.min, d.max];
        } else {
          _classes = chroma.limits(d, "e", classes);
        }
      }
      return f;
    }
    return _classes;
  };
  f.domain = function(domain) {
    if (!arguments.length) {
      return _domain;
    }
    _min = domain[0];
    _max = domain[domain.length - 1];
    _pos = [];
    const k = _colors.length;
    if (domain.length === k && _min !== _max) {
      for (let d of Array.from(domain)) {
        _pos.push((d - _min) / (_max - _min));
      }
    } else {
      for (let c = 0; c < k; c++) {
        _pos.push(c / (k - 1));
      }
      if (domain.length > 2) {
        const tOut = domain.map((d, i) => i / (domain.length - 1));
        const tBreaks = domain.map((d) => (d - _min) / (_max - _min));
        if (!tBreaks.every((val, i) => tOut[i] === val)) {
          tMapDomain = (t) => {
            if (t <= 0 || t >= 1) return t;
            let i = 0;
            while (t >= tBreaks[i + 1]) i++;
            const f2 = (t - tBreaks[i]) / (tBreaks[i + 1] - tBreaks[i]);
            const out = tOut[i] + f2 * (tOut[i + 1] - tOut[i]);
            return out;
          };
        }
      }
    }
    _domain = [_min, _max];
    return f;
  };
  f.mode = function(_m) {
    if (!arguments.length) {
      return _mode;
    }
    _mode = _m;
    resetCache();
    return f;
  };
  f.range = function(colors2, _pos2) {
    setColors(colors2);
    return f;
  };
  f.out = function(_o) {
    _out = _o;
    return f;
  };
  f.spread = function(val) {
    if (!arguments.length) {
      return _spread;
    }
    _spread = val;
    return f;
  };
  f.correctLightness = function(v) {
    if (v == null) {
      v = true;
    }
    _correctLightness = v;
    resetCache();
    if (_correctLightness) {
      tMapLightness = function(t) {
        const L0 = getColor(0, true).lab()[0];
        const L1 = getColor(1, true).lab()[0];
        const pol = L0 > L1;
        let L_actual = getColor(t, true).lab()[0];
        const L_ideal = L0 + (L1 - L0) * t;
        let L_diff = L_actual - L_ideal;
        let t0 = 0;
        let t1 = 1;
        let max_iter = 20;
        while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
          (function() {
            if (pol) {
              L_diff *= -1;
            }
            if (L_diff < 0) {
              t0 = t;
              t += (t1 - t) * 0.5;
            } else {
              t1 = t;
              t += (t0 - t) * 0.5;
            }
            L_actual = getColor(t, true).lab()[0];
            return L_diff = L_actual - L_ideal;
          })();
        }
        return t;
      };
    } else {
      tMapLightness = (t) => t;
    }
    return f;
  };
  f.padding = function(p) {
    if (p != null) {
      if (type$1(p) === "number") {
        p = [p, p];
      }
      _padding = p;
      return f;
    } else {
      return _padding;
    }
  };
  f.colors = function(numColors, out) {
    if (arguments.length < 2) {
      out = "hex";
    }
    let result = [];
    if (arguments.length === 0) {
      result = _colors.slice(0);
    } else if (numColors === 1) {
      result = [f(0.5)];
    } else if (numColors > 1) {
      const dm = _domain[0];
      const dd = _domain[1] - dm;
      result = __range__(0, numColors).map(
        (i) => f(dm + i / (numColors - 1) * dd)
      );
    } else {
      colors = [];
      let samples = [];
      if (_classes && _classes.length > 2) {
        for (let i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
          samples.push((_classes[i - 1] + _classes[i]) * 0.5);
        }
      } else {
        samples = _domain;
      }
      result = samples.map((v) => f(v));
    }
    if (chroma[out]) {
      result = result.map((c) => c[out]());
    }
    return result;
  };
  f.cache = function(c) {
    if (c != null) {
      _useCache = c;
      return f;
    } else {
      return _useCache;
    }
  };
  f.gamma = function(g) {
    if (g != null) {
      _gamma = g;
      return f;
    } else {
      return _gamma;
    }
  };
  f.nodata = function(d) {
    if (d != null) {
      _nacol = chroma(d);
      return f;
    } else {
      return _nacol;
    }
  };
  return f;
}
function __range__(left, right, inclusive) {
  let range = [];
  let ascending = left < right;
  let end = right;
  for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}
const binom_row = function(n) {
  let row = [1, 1];
  for (let i = 1; i < n; i++) {
    let newrow = [1];
    for (let j = 1; j <= row.length; j++) {
      newrow[j] = (row[j] || 0) + row[j - 1];
    }
    row = newrow;
  }
  return row;
};
const bezier = function(colors) {
  let I, lab0, lab1, lab2;
  colors = colors.map((c) => new Color(c));
  if (colors.length === 2) {
    [lab0, lab1] = colors.map((c) => c.lab());
    I = function(t) {
      const lab3 = [0, 1, 2].map((i) => lab0[i] + t * (lab1[i] - lab0[i]));
      return new Color(lab3, "lab");
    };
  } else if (colors.length === 3) {
    [lab0, lab1, lab2] = colors.map((c) => c.lab());
    I = function(t) {
      const lab3 = [0, 1, 2].map(
        (i) => (1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]
      );
      return new Color(lab3, "lab");
    };
  } else if (colors.length === 4) {
    let lab3;
    [lab0, lab1, lab2, lab3] = colors.map((c) => c.lab());
    I = function(t) {
      const lab4 = [0, 1, 2].map(
        (i) => (1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]
      );
      return new Color(lab4, "lab");
    };
  } else if (colors.length >= 5) {
    let labs, row, n;
    labs = colors.map((c) => c.lab());
    n = colors.length - 1;
    row = binom_row(n);
    I = function(t) {
      const u = 1 - t;
      const lab3 = [0, 1, 2].map(
        (i) => labs.reduce(
          (sum, el, j) => sum + row[j] * u ** (n - j) * t ** j * el[i],
          0
        )
      );
      return new Color(lab3, "lab");
    };
  } else {
    throw new RangeError("No point in running bezier with only one color.");
  }
  return I;
};
const bezier$1 = (colors) => {
  const f = bezier(colors);
  f.scale = () => scale(f);
  return f;
};
const { round: round$3 } = Math;
Color.prototype.rgb = function(rnd = true) {
  if (rnd === false) return this._rgb.slice(0, 3);
  return this._rgb.slice(0, 3).map(round$3);
};
Color.prototype.rgba = function(rnd = true) {
  return this._rgb.slice(0, 4).map((v, i) => {
    return i < 3 ? rnd === false ? v : round$3(v) : v;
  });
};
const rgb = (...args) => new Color(...args, "rgb");
Object.assign(chroma, { rgb });
input.format.rgb = (...args) => {
  const rgba = unpack(args, "rgba");
  if (rgba[3] === void 0) rgba[3] = 1;
  return rgba;
};
input.autodetect.push({
  p: 3,
  test: (...args) => {
    args = unpack(args, "rgba");
    if (type$1(args) === "array" && (args.length === 3 || args.length === 4 && type$1(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
      return "rgb";
    }
  }
});
const blend = (bottom, top, mode2) => {
  if (!blend[mode2]) {
    throw new Error("unknown blend mode " + mode2);
  }
  return blend[mode2](bottom, top);
};
const blend_f = (f) => (bottom, top) => {
  const c0 = chroma(top).rgb();
  const c1 = chroma(bottom).rgb();
  return chroma.rgb(f(c0, c1));
};
const each = (f) => (c0, c1) => {
  const out = [];
  out[0] = f(c0[0], c1[0]);
  out[1] = f(c0[1], c1[1]);
  out[2] = f(c0[2], c1[2]);
  return out;
};
const normal = (a) => a;
const multiply = (a, b) => a * b / 255;
const darken = (a, b) => a > b ? b : a;
const lighten = (a, b) => a > b ? a : b;
const screen = (a, b) => 255 * (1 - (1 - a / 255) * (1 - b / 255));
const overlay = (a, b) => b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
const burn = (a, b) => 255 * (1 - (1 - b / 255) / (a / 255));
const dodge = (a, b) => {
  if (a === 255) return 255;
  a = 255 * (b / 255) / (1 - a / 255);
  return a > 255 ? 255 : a;
};
blend.normal = blend_f(each(normal));
blend.multiply = blend_f(each(multiply));
blend.screen = blend_f(each(screen));
blend.overlay = blend_f(each(overlay));
blend.darken = blend_f(each(darken));
blend.lighten = blend_f(each(lighten));
blend.dodge = blend_f(each(dodge));
blend.burn = blend_f(each(burn));
const { pow: pow$2, sin: sin$1, cos: cos$1 } = Math;
function cubehelix(start = 300, rotations = -1.5, hue = 1, gamma = 1, lightness = [0, 1]) {
  let dh = 0, dl;
  if (type$1(lightness) === "array") {
    dl = lightness[1] - lightness[0];
  } else {
    dl = 0;
    lightness = [lightness, lightness];
  }
  const f = function(fract) {
    const a = TWOPI * ((start + 120) / 360 + rotations * fract);
    const l = pow$2(lightness[0] + dl * fract, gamma);
    const h = dh !== 0 ? hue[0] + fract * dh : hue;
    const amp = h * l * (1 - l) / 2;
    const cos_a = cos$1(a);
    const sin_a = sin$1(a);
    const r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
    const g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
    const b = l + amp * (1.97294 * cos_a);
    return chroma(clip_rgb([r * 255, g * 255, b * 255, 1]));
  };
  f.start = function(s) {
    if (s == null) {
      return start;
    }
    start = s;
    return f;
  };
  f.rotations = function(r) {
    if (r == null) {
      return rotations;
    }
    rotations = r;
    return f;
  };
  f.gamma = function(g) {
    if (g == null) {
      return gamma;
    }
    gamma = g;
    return f;
  };
  f.hue = function(h) {
    if (h == null) {
      return hue;
    }
    hue = h;
    if (type$1(hue) === "array") {
      dh = hue[1] - hue[0];
      if (dh === 0) {
        hue = hue[1];
      }
    } else {
      dh = 0;
    }
    return f;
  };
  f.lightness = function(h) {
    if (h == null) {
      return lightness;
    }
    if (type$1(h) === "array") {
      lightness = h;
      dl = h[1] - h[0];
    } else {
      lightness = [h, h];
      dl = 0;
    }
    return f;
  };
  f.scale = () => chroma.scale(f);
  f.hue(hue);
  return f;
}
const digits = "0123456789abcdef";
const { floor: floor$1, random } = Math;
const random$1 = () => {
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code += digits.charAt(floor$1(random() * 16));
  }
  return new Color(code, "hex");
};
const { log: log$1, pow: pow$1, floor, abs: abs$1 } = Math;
function analyze(data, key = null) {
  const r = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  if (type$1(data) === "object") {
    data = Object.values(data);
  }
  data.forEach((val) => {
    if (key && type$1(val) === "object") val = val[key];
    if (val !== void 0 && val !== null && !isNaN(val)) {
      r.values.push(val);
      r.sum += val;
      if (val < r.min) r.min = val;
      if (val > r.max) r.max = val;
      r.count += 1;
    }
  });
  r.domain = [r.min, r.max];
  r.limits = (mode2, num2) => limits(r, mode2, num2);
  return r;
}
function limits(data, mode2 = "equal", num2 = 7) {
  if (type$1(data) == "array") {
    data = analyze(data);
  }
  const { min: min2, max: max2 } = data;
  const values = data.values.sort((a, b) => a - b);
  if (num2 === 1) {
    return [min2, max2];
  }
  const limits2 = [];
  if (mode2.substr(0, 1) === "c") {
    limits2.push(min2);
    limits2.push(max2);
  }
  if (mode2.substr(0, 1) === "e") {
    limits2.push(min2);
    for (let i = 1; i < num2; i++) {
      limits2.push(min2 + i / num2 * (max2 - min2));
    }
    limits2.push(max2);
  } else if (mode2.substr(0, 1) === "l") {
    if (min2 <= 0) {
      throw new Error(
        "Logarithmic scales are only possible for values > 0"
      );
    }
    const min_log = Math.LOG10E * log$1(min2);
    const max_log = Math.LOG10E * log$1(max2);
    limits2.push(min2);
    for (let i = 1; i < num2; i++) {
      limits2.push(pow$1(10, min_log + i / num2 * (max_log - min_log)));
    }
    limits2.push(max2);
  } else if (mode2.substr(0, 1) === "q") {
    limits2.push(min2);
    for (let i = 1; i < num2; i++) {
      const p = (values.length - 1) * i / num2;
      const pb = floor(p);
      if (pb === p) {
        limits2.push(values[pb]);
      } else {
        const pr = p - pb;
        limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
      }
    }
    limits2.push(max2);
  } else if (mode2.substr(0, 1) === "k") {
    let cluster;
    const n = values.length;
    const assignments = new Array(n);
    const clusterSizes = new Array(num2);
    let repeat = true;
    let nb_iters = 0;
    let centroids = null;
    centroids = [];
    centroids.push(min2);
    for (let i = 1; i < num2; i++) {
      centroids.push(min2 + i / num2 * (max2 - min2));
    }
    centroids.push(max2);
    while (repeat) {
      for (let j = 0; j < num2; j++) {
        clusterSizes[j] = 0;
      }
      for (let i = 0; i < n; i++) {
        const value = values[i];
        let mindist = Number.MAX_VALUE;
        let best;
        for (let j = 0; j < num2; j++) {
          const dist = abs$1(centroids[j] - value);
          if (dist < mindist) {
            mindist = dist;
            best = j;
          }
          clusterSizes[best]++;
          assignments[i] = best;
        }
      }
      const newCentroids = new Array(num2);
      for (let j = 0; j < num2; j++) {
        newCentroids[j] = null;
      }
      for (let i = 0; i < n; i++) {
        cluster = assignments[i];
        if (newCentroids[cluster] === null) {
          newCentroids[cluster] = values[i];
        } else {
          newCentroids[cluster] += values[i];
        }
      }
      for (let j = 0; j < num2; j++) {
        newCentroids[j] *= 1 / clusterSizes[j];
      }
      repeat = false;
      for (let j = 0; j < num2; j++) {
        if (newCentroids[j] !== centroids[j]) {
          repeat = true;
          break;
        }
      }
      centroids = newCentroids;
      nb_iters++;
      if (nb_iters > 200) {
        repeat = false;
      }
    }
    const kClusters = {};
    for (let j = 0; j < num2; j++) {
      kClusters[j] = [];
    }
    for (let i = 0; i < n; i++) {
      cluster = assignments[i];
      kClusters[cluster].push(values[i]);
    }
    let tmpKMeansBreaks = [];
    for (let j = 0; j < num2; j++) {
      tmpKMeansBreaks.push(kClusters[j][0]);
      tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
    }
    tmpKMeansBreaks = tmpKMeansBreaks.sort((a, b) => a - b);
    limits2.push(tmpKMeansBreaks[0]);
    for (let i = 1; i < tmpKMeansBreaks.length; i += 2) {
      const v = tmpKMeansBreaks[i];
      if (!isNaN(v) && limits2.indexOf(v) === -1) {
        limits2.push(v);
      }
    }
  }
  return limits2;
}
const contrast = (a, b) => {
  a = new Color(a);
  b = new Color(b);
  const l1 = a.luminance();
  const l2 = b.luminance();
  return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
};
/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */
const W_offset = 0.027;
const P_in = 5e-4;
const P_out = 0.1;
const R_scale = 1.14;
const B_threshold = 0.022;
const B_exp = 1.414;
const contrastAPCA = (text2, bg) => {
  text2 = new Color(text2);
  bg = new Color(bg);
  if (text2.alpha() < 1) {
    text2 = mix(bg, text2, text2.alpha(), "rgb");
  }
  const l_text = lum(...text2.rgb());
  const l_bg = lum(...bg.rgb());
  const Y_text = l_text >= B_threshold ? l_text : l_text + Math.pow(B_threshold - l_text, B_exp);
  const Y_bg = l_bg >= B_threshold ? l_bg : l_bg + Math.pow(B_threshold - l_bg, B_exp);
  const S_norm = Math.pow(Y_bg, 0.56) - Math.pow(Y_text, 0.57);
  const S_rev = Math.pow(Y_bg, 0.65) - Math.pow(Y_text, 0.62);
  const C = Math.abs(Y_bg - Y_text) < P_in ? 0 : Y_text < Y_bg ? S_norm * R_scale : S_rev * R_scale;
  const S_apc = Math.abs(C) < P_out ? 0 : C > 0 ? C - W_offset : C + W_offset;
  return S_apc * 100;
};
function lum(r, g, b) {
  return 0.2126729 * Math.pow(r / 255, 2.4) + 0.7151522 * Math.pow(g / 255, 2.4) + 0.072175 * Math.pow(b / 255, 2.4);
}
const { sqrt, pow, min, max: max$1, atan2, abs, cos, sin, exp, PI } = Math;
function deltaE(a, b, Kl = 1, Kc = 1, Kh = 1) {
  var rad2deg = function(rad) {
    return 360 * rad / (2 * PI);
  };
  var deg2rad = function(deg) {
    return 2 * PI * deg / 360;
  };
  a = new Color(a);
  b = new Color(b);
  const [L1, a1, b1] = Array.from(a.lab());
  const [L2, a2, b2] = Array.from(b.lab());
  const avgL = (L1 + L2) / 2;
  const C1 = sqrt(pow(a1, 2) + pow(b1, 2));
  const C2 = sqrt(pow(a2, 2) + pow(b2, 2));
  const avgC = (C1 + C2) / 2;
  const G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
  const a1p = a1 * (1 + G);
  const a2p = a2 * (1 + G);
  const C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
  const C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
  const avgCp = (C1p + C2p) / 2;
  const arctan1 = rad2deg(atan2(b1, a1p));
  const arctan2 = rad2deg(atan2(b2, a2p));
  const h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
  const h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
  const avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
  const T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
  let deltaHp = h2p - h1p;
  deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
  deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
  const deltaL = L2 - L1;
  const deltaCp = C2p - C1p;
  const sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
  const sc = 1 + 0.045 * avgCp;
  const sh = 1 + 0.015 * avgCp * T;
  const deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
  const Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
  const Rt = -Rc * sin(2 * deg2rad(deltaTheta));
  const result = sqrt(
    pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh))
  );
  return max$1(0, min(100, result));
}
function distance(a, b, mode2 = "lab") {
  a = new Color(a);
  b = new Color(b);
  const l1 = a.get(mode2);
  const l2 = b.get(mode2);
  let sum_sq = 0;
  for (let i in l1) {
    const d = (l1[i] || 0) - (l2[i] || 0);
    sum_sq += d * d;
  }
  return Math.sqrt(sum_sq);
}
const valid = (...args) => {
  try {
    new Color(...args);
    return true;
  } catch (e) {
    return false;
  }
};
const scales = {
  cool() {
    return scale([chroma.hsl(180, 1, 0.9), chroma.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return scale(["#000", "#f00", "#ff0", "#fff"]).mode(
      "rgb"
    );
  }
};
const colorbrewer = {
  // sequential
  OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
  BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
  Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
  BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
  YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
  Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
  YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
  Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
  GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
  Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
  YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
  Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
  PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
  // diverging
  Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
  RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
  RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
  PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
  PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
  RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
  BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
  RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
  PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
  // qualitative
  Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
  Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
  Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
  Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
  Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
  Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
  Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
  Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
};
const colorbrewerTypes = Object.keys(colorbrewer);
const typeMap = new Map(colorbrewerTypes.map((key) => [key.toLowerCase(), key]));
const colorbrewerProxy = typeof Proxy === "function" ? new Proxy(colorbrewer, {
  get(target, prop) {
    const lower = prop.toLowerCase();
    if (typeMap.has(lower)) {
      return target[typeMap.get(lower)];
    }
  },
  getOwnPropertyNames() {
    return Object.getOwnPropertyNames(colorbrewerTypes);
  }
}) : colorbrewer;
const cmyk2rgb = (...args) => {
  args = unpack(args, "cmyk");
  const [c, m, y, k] = args;
  const alpha = args.length > 4 ? args[4] : 1;
  if (k === 1) return [0, 0, 0, alpha];
  return [
    c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
    // r
    m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
    // g
    y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
    // b
    alpha
  ];
};
const { max } = Math;
const rgb2cmyk = (...args) => {
  let [r, g, b] = unpack(args, "rgb");
  r = r / 255;
  g = g / 255;
  b = b / 255;
  const k = 1 - max(r, max(g, b));
  const f = k < 1 ? 1 / (1 - k) : 0;
  const c = (1 - r - k) * f;
  const m = (1 - g - k) * f;
  const y = (1 - b - k) * f;
  return [c, m, y, k];
};
Color.prototype.cmyk = function() {
  return rgb2cmyk(this._rgb);
};
const cmyk = (...args) => new Color(...args, "cmyk");
Object.assign(chroma, { cmyk });
input.format.cmyk = cmyk2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "cmyk");
    if (type$1(args) === "array" && args.length === 4) {
      return "cmyk";
    }
  }
});
const hsl2css = (...args) => {
  const hsla = unpack(args, "hsla");
  let mode2 = last(args) || "lsa";
  hsla[0] = rnd2(hsla[0] || 0) + "deg";
  hsla[1] = rnd2(hsla[1] * 100) + "%";
  hsla[2] = rnd2(hsla[2] * 100) + "%";
  if (mode2 === "hsla" || hsla.length > 3 && hsla[3] < 1) {
    hsla[3] = "/ " + (hsla.length > 3 ? hsla[3] : 1);
    mode2 = "hsla";
  } else {
    hsla.length = 3;
  }
  return `${mode2.substr(0, 3)}(${hsla.join(" ")})`;
};
const lab2css = (...args) => {
  const laba = unpack(args, "lab");
  let mode2 = last(args) || "lab";
  laba[0] = rnd2(laba[0]) + "%";
  laba[1] = rnd2(laba[1]);
  laba[2] = rnd2(laba[2]);
  if (mode2 === "laba" || laba.length > 3 && laba[3] < 1) {
    laba[3] = "/ " + (laba.length > 3 ? laba[3] : 1);
  } else {
    laba.length = 3;
  }
  return `lab(${laba.join(" ")})`;
};
const lch2css = (...args) => {
  const lcha = unpack(args, "lch");
  let mode2 = last(args) || "lab";
  lcha[0] = rnd2(lcha[0]) + "%";
  lcha[1] = rnd2(lcha[1]);
  lcha[2] = isNaN(lcha[2]) ? "none" : rnd2(lcha[2]) + "deg";
  if (mode2 === "lcha" || lcha.length > 3 && lcha[3] < 1) {
    lcha[3] = "/ " + (lcha.length > 3 ? lcha[3] : 1);
  } else {
    lcha.length = 3;
  }
  return `lch(${lcha.join(" ")})`;
};
const oklab2css = (...args) => {
  const laba = unpack(args, "lab");
  laba[0] = rnd2(laba[0] * 100) + "%";
  laba[1] = rnd3(laba[1]);
  laba[2] = rnd3(laba[2]);
  if (laba.length > 3 && laba[3] < 1) {
    laba[3] = "/ " + (laba.length > 3 ? laba[3] : 1);
  } else {
    laba.length = 3;
  }
  return `oklab(${laba.join(" ")})`;
};
const rgb2oklch = (...args) => {
  const [r, g, b, ...rest] = unpack(args, "rgb");
  const [l, a, b_] = rgb2oklab(r, g, b);
  const [L, c, h] = lab2lch(l, a, b_);
  return [L, c, h, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
const oklch2css = (...args) => {
  const lcha = unpack(args, "lch");
  lcha[0] = rnd2(lcha[0] * 100) + "%";
  lcha[1] = rnd3(lcha[1]);
  lcha[2] = isNaN(lcha[2]) ? "none" : rnd2(lcha[2]) + "deg";
  if (lcha.length > 3 && lcha[3] < 1) {
    lcha[3] = "/ " + (lcha.length > 3 ? lcha[3] : 1);
  } else {
    lcha.length = 3;
  }
  return `oklch(${lcha.join(" ")})`;
};
const { round: round$2 } = Math;
const rgb2css = (...args) => {
  const rgba = unpack(args, "rgba");
  let mode2 = last(args) || "rgb";
  if (mode2.substr(0, 3) === "hsl") {
    return hsl2css(rgb2hsl$1(rgba), mode2);
  }
  if (mode2.substr(0, 3) === "lab") {
    const prevWhitePoint = getLabWhitePoint();
    setLabWhitePoint("d50");
    const cssColor = lab2css(rgb2lab(rgba), mode2);
    setLabWhitePoint(prevWhitePoint);
    return cssColor;
  }
  if (mode2.substr(0, 3) === "lch") {
    const prevWhitePoint = getLabWhitePoint();
    setLabWhitePoint("d50");
    const cssColor = lch2css(rgb2lch(rgba), mode2);
    setLabWhitePoint(prevWhitePoint);
    return cssColor;
  }
  if (mode2.substr(0, 5) === "oklab") {
    return oklab2css(rgb2oklab(rgba));
  }
  if (mode2.substr(0, 5) === "oklch") {
    return oklch2css(rgb2oklch(rgba));
  }
  rgba[0] = round$2(rgba[0]);
  rgba[1] = round$2(rgba[1]);
  rgba[2] = round$2(rgba[2]);
  if (mode2 === "rgba" || rgba.length > 3 && rgba[3] < 1) {
    rgba[3] = "/ " + (rgba.length > 3 ? rgba[3] : 1);
    mode2 = "rgba";
  }
  return `${mode2.substr(0, 3)}(${rgba.slice(0, mode2 === "rgb" ? 3 : 4).join(" ")})`;
};
const oklch2rgb = (...args) => {
  args = unpack(args, "lch");
  const [l, c, h, ...rest] = args;
  const [L, a, b_] = lch2lab(l, c, h);
  const [r, g, b] = oklab2rgb(L, a, b_);
  return [r, g, b, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
const INT_OR_PCT = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source;
const FLOAT_OR_PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source;
const PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source;
const RE_S = /\s*/.source;
const SEP = /\s+/.source;
const COMMA = /\s*,\s*/.source;
const ANLGE = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source;
const ALPHA = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source;
const RE_RGB = new RegExp(
  "^rgba?\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(SEP) + ALPHA + "\\)$"
);
const RE_RGB_LEGACY = new RegExp(
  "^rgb\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(COMMA) + RE_S + "\\)$"
);
const RE_RGBA_LEGACY = new RegExp(
  "^rgba\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT, FLOAT_OR_PCT].join(COMMA) + RE_S + "\\)$"
);
const RE_HSL = new RegExp(
  "^hsla?\\(" + RE_S + [ANLGE, PCT, PCT].join(SEP) + ALPHA + "\\)$"
);
const RE_HSL_LEGACY = new RegExp(
  "^hsl?\\(" + RE_S + [ANLGE, PCT, PCT].join(COMMA) + RE_S + "\\)$"
);
const RE_HSLA_LEGACY = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
const RE_LAB = new RegExp(
  "^lab\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) + ALPHA + "\\)$"
);
const RE_LCH = new RegExp(
  "^lch\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) + ALPHA + "\\)$"
);
const RE_OKLAB = new RegExp(
  "^oklab\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) + ALPHA + "\\)$"
);
const RE_OKLCH = new RegExp(
  "^oklch\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) + ALPHA + "\\)$"
);
const { round: round$1 } = Math;
const roundRGB = (rgb2) => {
  return rgb2.map((v, i) => i <= 2 ? limit(round$1(v), 0, 255) : v);
};
const percentToAbsolute = (pct, min2 = 0, max2 = 100, signed = false) => {
  if (typeof pct === "string" && pct.endsWith("%")) {
    pct = parseFloat(pct.substring(0, pct.length - 1)) / 100;
    if (signed) {
      pct = min2 + (pct + 1) * 0.5 * (max2 - min2);
    } else {
      pct = min2 + pct * (max2 - min2);
    }
  }
  return +pct;
};
const noneToValue = (v, noneValue) => {
  return v === "none" ? noneValue : v;
};
const css2rgb = (css2) => {
  css2 = css2.toLowerCase().trim();
  if (css2 === "transparent") {
    return [0, 0, 0, 0];
  }
  let m;
  if (input.format.named) {
    try {
      return input.format.named(css2);
    } catch (e) {
    }
  }
  if ((m = css2.match(RE_RGB)) || (m = css2.match(RE_RGB_LEGACY))) {
    let rgb2 = m.slice(1, 4);
    for (let i = 0; i < 3; i++) {
      rgb2[i] = +percentToAbsolute(noneToValue(rgb2[i], 0), 0, 255);
    }
    rgb2 = roundRGB(rgb2);
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_RGBA_LEGACY)) {
    const rgb2 = m.slice(1, 5);
    for (let i = 0; i < 4; i++) {
      rgb2[i] = +percentToAbsolute(rgb2[i], 0, 255);
    }
    return rgb2;
  }
  if ((m = css2.match(RE_HSL)) || (m = css2.match(RE_HSL_LEGACY))) {
    const hsl2 = m.slice(1, 4);
    hsl2[0] = +noneToValue(hsl2[0].replace("deg", ""), 0);
    hsl2[1] = +percentToAbsolute(noneToValue(hsl2[1], 0), 0, 100) * 0.01;
    hsl2[2] = +percentToAbsolute(noneToValue(hsl2[2], 0), 0, 100) * 0.01;
    const rgb2 = roundRGB(hsl2rgb(hsl2));
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_HSLA_LEGACY)) {
    const hsl2 = m.slice(1, 4);
    hsl2[1] *= 0.01;
    hsl2[2] *= 0.01;
    const rgb2 = hsl2rgb(hsl2);
    for (let i = 0; i < 3; i++) {
      rgb2[i] = round$1(rgb2[i]);
    }
    rgb2[3] = +m[4];
    return rgb2;
  }
  if (m = css2.match(RE_LAB)) {
    const lab2 = m.slice(1, 4);
    lab2[0] = percentToAbsolute(noneToValue(lab2[0], 0), 0, 100);
    lab2[1] = percentToAbsolute(noneToValue(lab2[1], 0), -125, 125, true);
    lab2[2] = percentToAbsolute(noneToValue(lab2[2], 0), -125, 125, true);
    const wp = getLabWhitePoint();
    setLabWhitePoint("d50");
    const rgb2 = roundRGB(lab2rgb(lab2));
    setLabWhitePoint(wp);
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_LCH)) {
    const lch2 = m.slice(1, 4);
    lch2[0] = percentToAbsolute(lch2[0], 0, 100);
    lch2[1] = percentToAbsolute(noneToValue(lch2[1], 0), 0, 150, false);
    lch2[2] = +noneToValue(lch2[2].replace("deg", ""), 0);
    const wp = getLabWhitePoint();
    setLabWhitePoint("d50");
    const rgb2 = roundRGB(lch2rgb(lch2));
    setLabWhitePoint(wp);
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_OKLAB)) {
    const oklab2 = m.slice(1, 4);
    oklab2[0] = percentToAbsolute(noneToValue(oklab2[0], 0), 0, 1);
    oklab2[1] = percentToAbsolute(noneToValue(oklab2[1], 0), -0.4, 0.4, true);
    oklab2[2] = percentToAbsolute(noneToValue(oklab2[2], 0), -0.4, 0.4, true);
    const rgb2 = roundRGB(oklab2rgb(oklab2));
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_OKLCH)) {
    const oklch2 = m.slice(1, 4);
    oklch2[0] = percentToAbsolute(noneToValue(oklch2[0], 0), 0, 1);
    oklch2[1] = percentToAbsolute(noneToValue(oklch2[1], 0), 0, 0.4, false);
    oklch2[2] = +noneToValue(oklch2[2].replace("deg", ""), 0);
    const rgb2 = roundRGB(oklch2rgb(oklch2));
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
};
css2rgb.test = (s) => {
  return (
    // modern
    RE_RGB.test(s) || RE_HSL.test(s) || RE_LAB.test(s) || RE_LCH.test(s) || RE_OKLAB.test(s) || RE_OKLCH.test(s) || // legacy
    RE_RGB_LEGACY.test(s) || RE_RGBA_LEGACY.test(s) || RE_HSL_LEGACY.test(s) || RE_HSLA_LEGACY.test(s) || s === "transparent"
  );
};
Color.prototype.css = function(mode2) {
  return rgb2css(this._rgb, mode2);
};
const css = (...args) => new Color(...args, "css");
chroma.css = css;
input.format.css = css2rgb;
input.autodetect.push({
  p: 5,
  test: (h, ...rest) => {
    if (!rest.length && type$1(h) === "string" && css2rgb.test(h)) {
      return "css";
    }
  }
});
input.format.gl = (...args) => {
  const rgb2 = unpack(args, "rgba");
  rgb2[0] *= 255;
  rgb2[1] *= 255;
  rgb2[2] *= 255;
  return rgb2;
};
const gl = (...args) => new Color(...args, "gl");
chroma.gl = gl;
Color.prototype.gl = function() {
  const rgb2 = this._rgb;
  return [rgb2[0] / 255, rgb2[1] / 255, rgb2[2] / 255, rgb2[3]];
};
Color.prototype.hex = function(mode2) {
  return rgb2hex(this._rgb, mode2);
};
const hex = (...args) => new Color(...args, "hex");
chroma.hex = hex;
input.format.hex = hex2rgb;
input.autodetect.push({
  p: 4,
  test: (h, ...rest) => {
    if (!rest.length && type$1(h) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0) {
      return "hex";
    }
  }
});
const { log } = Math;
const temperature2rgb = (kelvin) => {
  const temp2 = kelvin / 100;
  let r, g, b;
  if (temp2 < 66) {
    r = 255;
    g = temp2 < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp2 - 2) + 104.49216199393888 * log(g);
    b = temp2 < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp2 - 10) + 115.67994401066147 * log(b);
  } else {
    r = 351.97690566805693 + 0.114206453784165 * (r = temp2 - 55) - 40.25366309332127 * log(r);
    g = 325.4494125711974 + 0.07943456536662342 * (g = temp2 - 50) - 28.0852963507957 * log(g);
    b = 255;
  }
  return [r, g, b, 1];
};
const { round } = Math;
const rgb2temperature = (...args) => {
  const rgb2 = unpack(args, "rgb");
  const r = rgb2[0], b = rgb2[2];
  let minTemp = 1e3;
  let maxTemp = 4e4;
  const eps = 0.4;
  let temp2;
  while (maxTemp - minTemp > eps) {
    temp2 = (maxTemp + minTemp) * 0.5;
    const rgb3 = temperature2rgb(temp2);
    if (rgb3[2] / rgb3[0] >= b / r) {
      maxTemp = temp2;
    } else {
      minTemp = temp2;
    }
  }
  return round(temp2);
};
Color.prototype.temp = Color.prototype.kelvin = Color.prototype.temperature = function() {
  return rgb2temperature(this._rgb);
};
const temp = (...args) => new Color(...args, "temp");
Object.assign(chroma, { temp, kelvin: temp, temperature: temp });
input.format.temp = input.format.kelvin = input.format.temperature = temperature2rgb;
Color.prototype.oklch = function() {
  return rgb2oklch(this._rgb);
};
const oklch = (...args) => new Color(...args, "oklch");
Object.assign(chroma, { oklch });
input.format.oklch = oklch2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "oklch");
    if (type$1(args) === "array" && args.length === 3) {
      return "oklch";
    }
  }
});
Object.assign(chroma, {
  analyze,
  average,
  bezier: bezier$1,
  blend,
  brewer: colorbrewerProxy,
  Color,
  colors: w3cx11,
  contrast,
  contrastAPCA,
  cubehelix,
  deltaE,
  distance,
  input,
  interpolate: mix,
  limits,
  mix,
  random: random$1,
  scale,
  scales,
  valid
});
const colorThemes = [
  "lightBase",
  "darkBase",
  "darkElevated"
];
const colorThemeNames = [
  "Light Base",
  "Dark Base",
  "Dark Elevated"
];
const radiiSizeName = [
  "compact",
  "base",
  "large",
  "xLarge"
];
const spacingSizeName = [
  "compact",
  "base",
  "large",
  "touch"
];
const typographySizeName = [
  "compact",
  "base",
  "large"
];
const systemAccentList = [
  "red",
  "amber",
  "brown",
  "green",
  "teal",
  "blue",
  "indigo",
  "violet",
  "purple",
  "pink"
];
const defaultAccentHUEs = {
  "red": 4,
  "amber": 25,
  "brown": 33,
  "green": 150,
  "teal": 180,
  "blue": 210,
  "indigo": 240,
  "violet": 260,
  "purple": 280,
  "pink": 340
};
const defaultSemanticAccents = {
  primary: "blue",
  info: "teal",
  success: "green",
  warning: "amber",
  danger: "red"
};
const defaultSettings = __spreadProps(__spreadValues(__spreadValues({}, defaultAccentHUEs), defaultSemanticAccents), {
  type: "IMPORT",
  theme: "light",
  hue: 190,
  saturation: 0.2,
  distance: 0.02,
  baseFontSize: "base",
  typeScale: "minorThird",
  createStyles: true,
  accentSaturation: 0.9,
  accentMaxLuminance: 0.45,
  accentMidLuminance: 0.18,
  accentMinLuminance: 0.12,
  accentHueSpin: 0,
  radii: "base",
  spacing: "base",
  verticalSpacing: "uneven",
  singleCollection: false,
  customAccentTextSaturation: false,
  accentTextSaturation: 0,
  accentTextColor: "auto",
  textWhiteBrightness: 100,
  textBlackBrightness: 6,
  createColorTokens: true,
  createComponentTokens: true,
  createTypographyTokens: true,
  createSpacingTokens: true,
  createElevationTokens: true,
  createRadiiTokens: true,
  createGlobalSizeTokens: true,
  createOpacityTokens: true,
  shadowsStyle: 1,
  shadowsColor: 1,
  shadowsSpread: -1
});
const collectionNames = /* @__PURE__ */ new Map([
  ["brandColors", "Color Theme"],
  ["typeScale", "Type Scale"],
  ["typeFace", "Type Face"],
  ["themeColors", "Color Theme"],
  ["componentColors", "Component Tokens"],
  ["spacing", "Spacing"],
  ["opacity", "Opacity"],
  ["radii", "Radii"],
  ["iconScale", "Icon Scale"],
  ["globalSizing", "Global Sizing"]
]);
let _isCustomDarkMode = false;
const store$1 = /* @__PURE__ */ new Map();
function syncValues(data) {
  const sharedProps = [
    "hue",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "red",
    "amber",
    "brown",
    "green",
    "teal",
    "blue",
    "indigo",
    "violet",
    "purple",
    "pink",
    "baseFontSize",
    "typeScale",
    "createStyles",
    "radii",
    "spacing",
    "verticalSpacing",
    "singleCollection",
    "createColorTokens",
    "createComponentTokens",
    "createTypographyTokens",
    "createSpacingTokens",
    "createElevationTokens",
    "createRadiiTokens",
    "createGlobalSizeTokens",
    "createOpacityTokens",
    "shadowsStyle",
    "shadowsSpread",
    "textBlackBrightness",
    "acentHueSpin"
  ];
  store$1.forEach((params, themeKey) => {
    sharedProps.forEach((propName) => {
      const value = data[propName] == void 0 ? defaultSettings[propName] : data[propName];
      params[propName] = value;
    });
  });
}
function setTheme(data) {
  const theme = _isCustomDarkMode ? data.theme : "light";
  if (_isCustomDarkMode === true && theme === "dark") {
    data.theme = "dark";
    store$1.set(theme, __spreadValues(__spreadValues({}, defaultSettings), data));
  } else {
    data.theme = "light";
    store$1.set("light", __spreadValues(__spreadValues({}, defaultSettings), data));
  }
  syncValues(data);
}
function getTheme(theme) {
  if (_isCustomDarkMode === true && theme === "dark") {
    return store$1.get("dark");
  }
  return store$1.get("light");
}
function serialize$1() {
  let result = [store$1.get("light")];
  if (_isCustomDarkMode === true) {
    result.push(store$1.get("dark"));
  }
  return result;
}
function save() {
  figma.root.setPluginData("SDS", JSON.stringify(serialize$1()));
}
function load() {
  const pluginDataText = figma.root.getPluginData("SDS");
  let data;
  try {
    data = JSON.parse(pluginDataText);
  } catch (e) {
    data = [defaultSettings];
    console.info("No plugin data found, loading default");
  }
  const isArray = Array.isArray(data);
  let formData;
  if (isArray) {
    formData = [...data];
  } else {
    formData = [data];
  }
  _isCustomDarkMode = formData.length > 1;
  formData.forEach((params) => {
    setTheme(params);
  });
}
function resetDefaults() {
  _isCustomDarkMode = false;
  store$1.clear();
  store$1.set("light", defaultSettings);
}
function enableCustomDarkMode() {
  _isCustomDarkMode = true;
  if (_darkModeBackup) {
    store$1.set("dark", _darkModeBackup);
  }
}
let _darkModeBackup;
function disableCustomDarkMode() {
  _isCustomDarkMode = false;
  _darkModeBackup = store$1.get("dark");
  store$1.delete("dark");
}
function isCustomDarkMode() {
  return _isCustomDarkMode;
}
const store = /* @__PURE__ */ new Map();
let selectedLibraryName;
const LOCAL_LIB_NAME = "Local variables";
async function getStoreData(refresh = false) {
  if (refresh === true) {
    store.clear();
  }
  store.set(LOCAL_LIB_NAME, []);
  if (store.size > 1) {
    return store;
  }
  const libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync().catch((e) => {
    throw e;
  });
  await Promise.all(libraryCollections.map(async (collection2) => {
    return await figma.teamLibrary.getVariablesInLibraryCollectionAsync(collection2.key).then((data) => {
      let variables = store.get(collection2.libraryName) || [];
      variables = variables.concat(data);
      store.set(collection2.libraryName, variables);
    });
  }));
  return store;
}
let importedVariablesLibrary = [];
async function importLibraryVariables(libraryName) {
  const data = store.get(libraryName) || [];
  if (importedVariablesLibrary.length == 0) {
    await Promise.all(data.map(async (record) => {
      return await figma.variables.importVariableByKeyAsync(record.key).then((variable) => {
        importedVariablesLibrary.push(variable);
      });
    }));
  }
  return importedVariablesLibrary;
}
function serialize() {
  let result = {};
  store.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}
function getSelectedLibrary() {
  return selectedLibraryName || LOCAL_LIB_NAME;
}
function setSelectedLibrary(name) {
  selectedLibraryName = name;
  return selectedLibraryName;
}
async function getLibVars(libraryName) {
  libraryName = libraryName || getSelectedLibrary();
  if (libraryName == LOCAL_LIB_NAME) {
    return await figma.variables.getLocalVariablesAsync();
  } else {
    await getStoreData();
    return await importLibraryVariables(libraryName);
  }
}
async function findVariableByName(variableName) {
  const variables = await getLibVars();
  return variables.find((variable) => {
    return variable.name == variableName;
  });
}
function figmaAliasToDesignTokens(alias) {
  return alias.replace(/\//g, ".");
}
function designTokenAliasToFigma(alias) {
  return alias.replace(/\./g, "/");
}
async function findVariableInCollection(variableName, collectionName) {
  const figmaCollections = await figma.variables.getLocalVariableCollectionsAsync();
  const collection2 = figmaCollections.find((collection22) => collection22.name === collectionName);
  let figmaVirable;
  if (collection2) {
    for (const id of collection2.variableIds) {
      const figmaVariableInColleciton = await figma.variables.getVariableByIdAsync(id);
      const match = (figmaVariableInColleciton == null ? void 0 : figmaVariableInColleciton.name) === variableName;
      if (match) {
        figmaVirable = figmaVariableInColleciton;
        break;
      }
    }
  }
  return figmaVirable;
}
async function findFigmaVariableByName(variableName, collectionName) {
  if (collectionName) {
    return await findVariableInCollection(variableName, collectionName);
  }
  return findVariableByName(variableName);
}
async function findFigmaVariableCollectionByName(name) {
  const figmaCollections = await figma.variables.getLocalVariableCollectionsAsync();
  const collection2 = figmaCollections.find((collection22) => collection22.name === name);
  return collection2 || null;
}
async function getFigmaCollection(name) {
  let isNew = false;
  let collection2 = await findFigmaVariableCollectionByName(name);
  if (!collection2) {
    isNew = true;
    collection2 = figma.variables.createVariableCollection(name);
  }
  return { collection: collection2, isNew };
}
function resolveVariableType(typeName) {
  switch (typeName) {
    case "color":
      return "COLOR";
    case "boolean":
      return "BOOLEAN";
    case "number":
      return "FLOAT";
    default:
      return "STRING";
  }
}
function getStubValue(type2) {
  switch (type2) {
    case "COLOR":
      return figma.util.rgb("#FFFFFF");
    case "BOOLEAN":
      return true;
    case "FLOAT":
      return 1;
    default:
      return "String";
  }
}
async function setFigmaVariable(collection2, modeId, type2, variableName, value = null, scopes = ["ALL_SCOPES"], description = null) {
  let figmaVariable = await findFigmaVariableByName(variableName, collection2.name);
  if (!figmaVariable) {
    try {
      figmaVariable = figma.variables.createVariable(variableName, collection2, type2);
    } catch (e) {
      debugger;
    }
  }
  try {
    figmaVariable.setValueForMode(modeId, value || getStubValue(type2));
  } catch (e) {
    debugger;
  }
  figmaVariable.scopes = scopes;
  if (description != null) {
    figmaVariable.description = description;
  }
  return figmaVariable;
}
async function getAliasName(id) {
  const variable = await figma.variables.getVariableByIdAsync(id);
  return `{${figmaAliasToDesignTokens(variable.name)}}`;
}
function variableNameToObject({ name, targetObject }) {
  let obj = targetObject;
  name.split("/").forEach((groupName) => {
    obj[groupName] = obj[groupName] || {};
    obj = obj[groupName];
  });
  return obj;
}
async function getDefaultVariableValue(figmaVariable, modeId) {
  const collectionID = figmaVariable.variableCollectionId;
  const collection2 = await figma.variables.getVariableCollectionByIdAsync(collectionID);
  const defaultValue = figmaVariable.valuesByMode[modeId || collection2.defaultModeId];
  if (defaultValue["type"] == "VARIABLE_ALIAS") {
    const variable = await figma.variables.getVariableByIdAsync(defaultValue["id"]);
    return await getDefaultVariableValue(variable, modeId);
  } else {
    return defaultValue;
  }
}
let globalTokens = {};
function getGlobalTokensDictionary() {
  return globalTokens;
}
function addToGlobalTokensDictionary(data) {
  globalTokens = __spreadValues(__spreadValues({}, globalTokens), data);
}
const aliasRegex = /\{(.+?)(.+?)\}/g;
function findTokenReferences(tokenAlias) {
  return tokenAlias == null ? void 0 : tokenAlias.toString().match(aliasRegex);
}
function getReferenceName(reference) {
  let name = reference.replace(/{/g, "");
  name = name.replace(/}/g, "");
  return name;
}
async function findVariableByReferences(alias) {
  let references = findTokenReferences(alias);
  let results = [];
  for (const reference of references || []) {
    let name = getReferenceName(reference);
    name = designTokenAliasToFigma(name);
    const figmaVariable = await findFigmaVariableByName(name);
    if (figmaVariable) {
      results.push(figmaVariable);
    } else {
      console.warn(`findVariableByReferences(${alias}) call failed -> cannot find value for ${reference}`);
    }
  }
  return results[0];
}
function findGlobalTokenByName(name, dictionary) {
  name = designTokenAliasToFigma(name);
  const token = dictionary[name];
  if (name == "grey-undefined") debugger;
  if (!token) {
    const msg = `Cannot find token ${name} in global disctionary:`;
    console.warn(msg, dictionary);
    return null;
  }
  return token;
}
function resolveGlobalTokenValue(alias, dictionary) {
  let references = findTokenReferences(alias);
  let result = alias;
  references == null ? void 0 : references.forEach((reference) => {
    let name = getReferenceName(reference);
    const globalToken = findGlobalTokenByName(name, dictionary);
    if (globalToken) {
      result = result.replace(reference, globalToken.$value);
    } else {
      result = null;
    }
  });
  const check = findTokenReferences(result);
  if (check != null) {
    return resolveGlobalTokenValue(result, dictionary);
  } else {
    return result;
  }
}
async function findVariableAlias(name) {
  let referenceVar = await findVariableByReferences(name.trim());
  if (referenceVar) {
    return {
      type: "VARIABLE_ALIAS",
      id: referenceVar.id
    };
  } else {
    return null;
  }
}
async function resolveAliasOrValue(value, dictionary) {
  let variableAlias = await findVariableAlias(value.trim());
  if (variableAlias) {
    return variableAlias;
  }
  return resolveGlobalTokenValue(value, dictionary);
}
function getAccentRamp(theme, params) {
  let textSaturationAdjustments = {};
  switch (theme) {
    default: {
      return {
        "100": {
          "$value": "rgba({100}, 0.20)",
          "$type": "color",
          "description": `Subtle semitransparent accent`
        },
        "200": {
          "$value": "rgba({200}, 0.50)",
          "$type": "color",
          "description": `Light semitransparent accent`
        },
        "300": {
          "$value": "{300}",
          "$type": "color",
          "description": `Non textual elements`
        },
        "400": {
          "$value": "{400}",
          "$type": "color",
          "description": `Base background color`
        },
        "500": {
          "$value": "{600}",
          "$type": "color",
          "description": `Text on light surface`,
          "adjustments": textSaturationAdjustments
        },
        "600": {
          "$value": "{100}",
          "$type": "color",
          "description": `Text on dark surface`,
          "adjustments": textSaturationAdjustments
        }
      };
    }
    case "dark": {
      return {
        "100": {
          "$value": "rgba({200}, 0.30)",
          "$type": "color",
          "description": `Subtle semitransparent accent`
        },
        "200": {
          "$value": "rgba({200}, 0.60)",
          "$type": "color",
          "description": `Light semitransparent accent`
        },
        "300": {
          "$value": "{300}",
          "$type": "color",
          "description": `Non textual elements`
        },
        "400": {
          "$value": "{400}",
          "$type": "color",
          "description": `Base background color`
        },
        "500": {
          "$value": "{100}",
          "$type": "color",
          "description": `Text on light surface`,
          "adjustments": textSaturationAdjustments
        },
        "600": {
          "$value": "{100}",
          "$type": "color",
          "description": `Text on dark surface`,
          "adjustments": textSaturationAdjustments
        }
      };
    }
  }
}
function generateSystemAccentPalette(theme, themeParams) {
  let accents = {
    red: getAccentRamp(theme),
    amber: getAccentRamp(theme),
    brown: getAccentRamp(theme),
    green: getAccentRamp(theme),
    teal: getAccentRamp(theme),
    blue: getAccentRamp(theme),
    indigo: getAccentRamp(theme),
    violet: getAccentRamp(theme),
    purple: getAccentRamp(theme),
    pink: getAccentRamp(theme)
  };
  for (const [name, scale2] of Object.entries(accents)) {
    const hue = themeParams[name];
    const shades = getGlobalAccentRamp(hue, themeParams);
    accents[name] = resolveRampValues(scale2, shades);
  }
  return accents;
}
function generateGlobalAccentPalette(themeParams) {
  let accents = {};
  systemAccentList.forEach((name) => {
    const hue = themeParams[name];
    accents[name] = getGlobalAccentRamp(hue, themeParams);
  });
  return accents;
}
function getGlobalAccentRamp(hue, themeParams, steps = 7) {
  const keyShades = getRangeOfThree(hue, themeParams);
  let colorRamp = {};
  const scale2 = chroma.scale(keyShades).colors(steps, "hex");
  scale2.forEach((color, index2) => {
    colorRamp[`${index2 + 1}00`] = {
      $value: color,
      $type: "color",
      private: true
    };
  });
  return colorRamp;
}
function resolveRampValues(templateRamp, dictionary) {
  let output = {};
  Object.entries(templateRamp).forEach(([shadeNumber, token]) => {
    token.$value = resolveGlobalTokenValue(token.$value, dictionary);
    output[shadeNumber] = token;
  });
  return output;
}
function getRangeOfThree(hue, params) {
  const saturation = params.accentSaturation;
  const {
    accentMinLuminance,
    accentMidLuminance,
    accentMaxLuminance,
    accentHueSpin
  } = params;
  return [
    chroma.hsl(hue + accentHueSpin, saturation * 1.2, 0.5).luminance(accentMaxLuminance),
    chroma.hsl(hue, saturation, 0.5).luminance(accentMidLuminance),
    chroma.hsl(hue + accentHueSpin, saturation * 1.2, 0.5).luminance(accentMinLuminance)
  ];
}
function roundTwoDigits(num2) {
  return Math.round((num2 + Number.EPSILON) * 100) / 100;
}
function getBoundVariables(node) {
  const boundVariables = Object.entries(node.boundVariables);
  for (const [propName, propValue] of boundVariables) {
    const isArray = Array.isArray(propValue);
    if (isArray) {
      propValue.forEach((alias, i) => {
        processBoundVariable(figma.variables.getVariableById(alias.id));
      });
    } else {
      let varId = propValue.id;
      if (typeof varId != "string") {
        varId = varId.id;
      }
      processBoundVariable(figma.variables.getVariableById(varId));
    }
  }
}
function processBoundVariable(variable) {
}
function renderShades(parentNode, name, shades, colors) {
  let frame = figma.createFrame();
  frame.resizeWithoutConstraints(320, frame.height);
  frame.layoutMode = "VERTICAL";
  frame.counterAxisSizingMode = "AUTO";
  frame.primaryAxisSizingMode = "AUTO";
  frame.name = name;
  frame.fills = [];
  getBoundVariables(frame);
  for (const [shadeName, color] of Object.entries(shades)) {
    renderColor(frame, `accent/${name}/${shadeName}`, color, colors);
  }
  parentNode.appendChild(frame);
  return parentNode;
}
function renderColor(parentNode, name, color, colors) {
  let frame = figma.createFrame();
  frame.layoutMode = "VERTICAL";
  frame.layoutAlign = "STRETCH";
  frame.itemSpacing = 4;
  frame.name = name;
  frame.verticalPadding = 16;
  frame.horizontalPadding = 20;
  const {
    r,
    g,
    b,
    a
  } = resolveColorTokenValue(color, colors);
  const chromaColor = chroma.gl(r, g, b, a);
  frame.fills = [{ type: "SOLID", color: { r, g, b }, opacity: a }];
  const opaqueColor = chroma.gl(r, g, b, 1);
  const mixedColor = chroma.mix(opaqueColor, "white", 1 - a);
  let contrast2 = [
    chroma.contrast("white", mixedColor),
    chroma.contrast(chroma.hsl(0, 0, 0.22), mixedColor)
  ];
  let nameRow = getRow(frame, contrast2[0] > 2.5);
  let contrastWhiteRow = getRow(frame, contrast2[0] > 2.5);
  let contrastBlackRow = getRow(frame, contrast2[0] > 2.5);
  let hslRow = getRow(frame, contrast2[0] > 2.5);
  let luminanceRow = getRow(frame, contrast2[0] > 2.5);
  nameRow.root.name = "nameRow";
  contrastWhiteRow.root.name = "contrastWhiteRow";
  contrastBlackRow.root.name = "contrastBlackRow";
  hslRow.root.name = "hslRow";
  luminanceRow.root.name = "luminanceRow";
  contrastWhiteRow.labelNode.characters = "vs white";
  contrastWhiteRow.valueNode.characters = `${roundTwoDigits(contrast2[0])}`;
  contrastBlackRow.labelNode.characters = "vs black";
  contrastBlackRow.valueNode.characters = `${roundTwoDigits(contrast2[1])}`;
  nameRow.labelNode.characters = `{global.${name.replace(/\//g, ".")}}`;
  nameRow.valueNode.characters = ` `;
  hslRow.labelNode.characters = "hsl";
  hslRow.valueNode.characters = `${outputHSL(chromaColor).join(" ")}`;
  luminanceRow.labelNode.characters = "luminance";
  luminanceRow.valueNode.characters = `${Math.round(roundTwoDigits(chromaColor.luminance()) * 100)}%`;
  parentNode.appendChild(frame);
  frame.resize(240, frame.height);
  return parentNode;
}
function getRow(parentNode, isWhite) {
  const textNode = figma.createText();
  const frame = figma.createFrame();
  frame.name = "row";
  frame.layoutMode = "HORIZONTAL";
  frame.layoutAlign = "STRETCH";
  frame.primaryAxisSizingMode = "FIXED";
  frame.primaryAxisAlignItems = "SPACE_BETWEEN";
  frame.counterAxisSizingMode = "AUTO";
  frame.fills = [];
  textNode.name = "label";
  const valueLabel = textNode.clone();
  valueLabel.name = "value-label";
  frame.appendChild(textNode);
  frame.appendChild(valueLabel);
  const color = isWhite ? {
    r: 1,
    g: 1,
    b: 1
  } : {
    r: 0,
    g: 0,
    b: 0
  };
  textNode.fills = [{ type: "SOLID", color, opacity: 0.8 }];
  valueLabel.fills = [{ type: "SOLID", color }];
  parentNode.appendChild(frame);
  return {
    labelNode: textNode,
    valueNode: valueLabel,
    root: frame
  };
}
function outputHSL(chromaColor) {
  const [h, s, l] = chromaColor.hsl();
  return [`${Math.round(h) || 0}deg`, `${Math.round(roundTwoDigits(s) * 100)}%`, `${Math.round(roundTwoDigits(l) * 100)}%`];
}
function getSaturationModifier(lightness) {
  const offset = 50;
  const magnitude = 60;
  const saturationModifier = 1 + (Math.pow(lightness - offset, 2) / magnitude - Math.pow(offset, 2) / magnitude) / 100;
  return saturationModifier;
}
function generateNeutrals(params) {
  const min2 = 0;
  const max2 = 100;
  const {
    hue = 200,
    saturation = 0.1,
    distance: distance2
  } = params || {};
  let tokens2 = flattenObject({
    "black": {
      "$value": `{grey-${params.textBlackBrightness || defaultSettings.textBlackBrightness}}`,
      "$type": "color"
    },
    "white": {
      "$value": `{grey-${params.textWhiteBrightness || defaultSettings.textWhiteBrightness}}`,
      "$type": "color"
    }
  });
  let value = min2;
  while (value <= max2) {
    const color = chroma.hsl(hue, saturation * getSaturationModifier(value), value / 100);
    tokens2[`grey-${value}`] = {
      "$value": color.hex(),
      "$type": "color",
      "private": true
    };
    value++;
  }
  tokens2["grey-100"] = {
    "$value": "#FFFFFF",
    "$type": "color",
    "private": true
  };
  return tokens2;
}
function renderNeutrals(colors, name) {
  const existingNode = figma.currentPage.findChild((node) => node.name.startsWith("Global Neutrals"));
  existingNode == null ? void 0 : existingNode.remove();
  let frame = figma.createFrame();
  frame.layoutMode = "HORIZONTAL";
  frame.counterAxisSizingMode = "AUTO";
  frame.primaryAxisSizingMode = "AUTO";
  frame.itemSpacing = 0;
  frame.name = name;
  frame.x = 0;
  frame.y = -156;
  for (const [name2, color] of Object.entries(colors)) {
    renderColor(frame, name2, color, colors);
  }
  return frame;
}
function _clone(val) {
  const type2 = typeof val;
  if (val === null) {
    return null;
  } else if (type2 === "undefined" || type2 === "number" || type2 === "string" || type2 === "boolean") {
    return val;
  } else if (type2 === "object") {
    if (val instanceof Array) {
      return val.map((x) => _clone(x));
    } else if (val instanceof Uint8Array) {
      return new Uint8Array(val);
    } else {
      let o = {};
      for (const key in val) {
        o[key] = _clone(val[key]);
      }
      return o;
    }
  }
  throw "unknown";
}
const hexColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
function convertFigmaColorToRgb(input2, format) {
  const {
    r,
    g,
    b,
    a
  } = input2;
  ({
    r: input2.r * 255,
    g: input2.g * 255,
    b: input2.b * 255,
    a: input2.a
  });
  let color = chroma.gl(r, g, b, a);
  switch (format) {
    case "hex": {
      return color.hex();
    }
    case "hsl": {
      return color.css("hsl");
    }
    default: {
      return color.css();
    }
  }
}
function parseColorValue(input2, adjustments) {
  let color;
  try {
    if (input2.startsWith("rgb")) {
      const rgbValues = input2.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
      if (hexColorRegex.test(rgbValues[0])) {
        color = chroma(rgbValues[0]);
        const alpha = parseFloat(rgbValues[1]);
        color = color.alpha(alpha);
      } else {
        color = chroma(input2);
      }
    } else {
      color = chroma(input2);
    }
  } catch (e) {
    console.error(e);
    debugger;
    return null;
  }
  if (adjustments) {
    if (adjustments.h) {
      color = color.set("hsl.h", `${adjustments.h}`);
    }
    if (adjustments.s) {
      color = color.set("hsl.s", `${adjustments.s}`);
    }
    if (adjustments.l) {
      color = color.set("hsl.l", `${adjustments.l}`);
    }
    if (adjustments.a) {
      color = color.set("hsl.a", `${adjustments.a}`);
    }
  }
  const [r, g, b, a] = color.gl();
  return {
    gl: { r, g, b, a },
    rgb: color.css(),
    hsl: color.css("hsl"),
    hex: color.hex()
  };
}
const spacing$3 = {
  xs4: {
    $value: "4",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs3: {
    $value: "6",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs2: {
    $value: "8",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs: {
    $value: "12",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  sm: {
    $value: "16",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  base: {
    $value: "20",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  md: {
    $value: "24",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  lg: {
    $value: "28",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl: {
    $value: "32",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl2: {
    $value: "40",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl3: {
    $value: "48",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl4: {
    $value: "60",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl5: {
    $value: "72",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  minor: {
    xs4: {
      $value: "2",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs3: {
      $value: "4",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs2: {
      $value: "6",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs: {
      $value: "8",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    sm: {
      $value: "12",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    base: {
      $value: "16",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    md: {
      $value: "20",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    lg: {
      $value: "24",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl: {
      $value: "28",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl2: {
      $value: "36",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl3: {
      $value: "44",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl4: {
      $value: "56",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl5: {
      $value: "68",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    }
  }
};
const baseSpacingTokens = {
  spacing: spacing$3
};
const spacing$2 = {
  xs4: {
    $value: "2",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs3: {
    $value: "4",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs2: {
    $value: "6",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs: {
    $value: "8",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  sm: {
    $value: "12",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  base: {
    $value: "16",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  md: {
    $value: "20",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  lg: {
    $value: "24",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl: {
    $value: "28",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl2: {
    $value: "32",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl3: {
    $value: "40",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl4: {
    $value: "48",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl5: {
    $value: "60",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  minor: {
    xs4: {
      $value: "1",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs3: {
      $value: "2",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs2: {
      $value: "4",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs: {
      $value: "6",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    sm: {
      $value: "8",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    base: {
      $value: "12",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    md: {
      $value: "16",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    lg: {
      $value: "20",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl: {
      $value: "24",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl2: {
      $value: "28",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl3: {
      $value: "36",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl4: {
      $value: "44",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl5: {
      $value: "56",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    }
  }
};
const compactSpacingTokens = {
  spacing: spacing$2
};
const spacing$1 = {
  xs4: {
    $value: "4",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs3: {
    $value: "8",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs2: {
    $value: "12",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs: {
    $value: "16",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  sm: {
    $value: "20",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  base: {
    $value: "24",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  md: {
    $value: "28",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  lg: {
    $value: "36",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl: {
    $value: "44",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl2: {
    $value: "52",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl3: {
    $value: "64",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl4: {
    $value: "76",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl5: {
    $value: "88",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  minor: {
    xs4: {
      $value: "2",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs3: {
      $value: "4",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs2: {
      $value: "8",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs: {
      $value: "12",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    sm: {
      $value: "16",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    base: {
      $value: "20",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    md: {
      $value: "24",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    lg: {
      $value: "32",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl: {
      $value: "40",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl2: {
      $value: "48",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl3: {
      $value: "60",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl4: {
      $value: "72",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl5: {
      $value: "84",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    }
  }
};
const largeSpacingTokens = {
  spacing: spacing$1
};
const spacing = {
  xs4: {
    $value: "4",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs3: {
    $value: "6",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs2: {
    $value: "8",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xs: {
    $value: "12",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  sm: {
    $value: "16",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  base: {
    $value: "16",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  md: {
    $value: "16",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  lg: {
    $value: "20",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  xl: {
    $value: "24",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "WIDTH_HEIGHT",
      "GAP",
      "STROKE_FLOAT"
    ]
  },
  minor: {
    xs4: {
      $value: "2",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs3: {
      $value: "4",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs2: {
      $value: "6",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xs: {
      $value: "8",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    sm: {
      $value: "12",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    base: {
      $value: "12",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    md: {
      $value: "12",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    lg: {
      $value: "16",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    },
    xl: {
      $value: "20",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "GAP",
        "STROKE_FLOAT"
      ]
    }
  }
};
const touchSpacingTokens = {
  spacing
};
const tokens$2 = {
  base: baseSpacingTokens,
  compact: compactSpacingTokens,
  large: largeSpacingTokens,
  touch: touchSpacingTokens
};
const base$2 = getSpacingTokens("uneven", "base");
const compact$2 = getSpacingTokens("uneven", "compact");
const large$2 = getSpacingTokens("uneven", "large");
const touch = getSpacingTokens("uneven", "touch");
function getSpacingTokens(verticalSpacing, spacingScale) {
  let output = {};
  for (const spacingScale2 in tokens$2) {
    output[spacingScale2] = normalizeSpacingTokens(spacingScale2, verticalSpacing === "even");
  }
  if (spacingScale) {
    return output[spacingScale];
  }
  return output;
}
function normalizeSpacingTokens(spacingScale, isEven) {
  if (!isEven) {
    return flattenObject(tokens$2[spacingScale]);
  }
  const scale2 = _clone(tokens$2[spacingScale]);
  const major = scale2["spacing"];
  const minor = scale2["spacing"].minor;
  for (const tokenName in minor) {
    minor[tokenName] = major[tokenName];
  }
  return flattenObject(scale2);
}
const spacingTokens = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: base$2,
  compact: compact$2,
  getSpacingTokens,
  large: large$2,
  touch
}, Symbol.toStringTag, { value: "Module" }));
const radii$2 = {
  none: {
    $value: "0",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  sm: {
    $value: "4.5",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  base: {
    $value: "6",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  md: {
    $value: "9",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  lg: {
    $value: "12",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  xl: {
    $value: "16",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  xl2: {
    $value: "22",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  round: {
    $value: "999",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  }
};
const baseRadiiTokens = {
  radii: radii$2
};
const radii$1 = {
  none: {
    $value: "0",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  sm: {
    $value: "3",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  base: {
    $value: "4",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  md: {
    $value: "6",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  lg: {
    $value: "9",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  xl: {
    $value: "13",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  xl2: {
    $value: "20",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  round: {
    $value: "999",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  }
};
const compactRadiiTokens = {
  radii: radii$1
};
const radii = {
  none: {
    $value: "0",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  sm: {
    $value: "6",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  base: {
    $value: "8",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  md: {
    $value: "12",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  lg: {
    $value: "16",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  xl: {
    $value: "24",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  xl2: {
    $value: "40",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  },
  round: {
    $value: "999",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "CORNER_RADIUS"
    ]
  }
};
const largeRadiiTokens = {
  radii
};
const base$1 = flattenObject(baseRadiiTokens);
const compact$1 = flattenObject(compactRadiiTokens);
const large$1 = flattenObject(largeRadiiTokens);
const xLarge = flattenObject(largeRadiiTokens);
const radiiTokens = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: base$1,
  compact: compact$1,
  large: large$1,
  xLarge
}, Symbol.toStringTag, { value: "Module" }));
const body = {
  "x-small2": {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs2}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "semi-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.xs2}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.xs2}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs2}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs2}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    },
    uppercase: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs2}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "uppercase-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.xs2}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  "x-small": {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "semi-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    },
    uppercase: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "uppercase-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  small: {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "semi-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    },
    uppercase: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "uppercase-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  base: {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "semi-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    },
    uppercase: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "uppercase-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  medium: {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "semi-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    },
    uppercase: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "uppercase-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  large: {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "semi-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    },
    uppercase: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    "uppercase-bold": {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "UPPER",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  }
};
const paragraph = {
  "x-small2": {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xs}",
        fontSize: "{font-size.xs2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    }
  },
  "x-small": {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.sm}",
        fontSize: "{font-size.xs}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    }
  },
  small: {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.sm}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    }
  },
  base: {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    }
  },
  medium: {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    }
  },
  large: {
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.xl}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    italic: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.italic}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    underline: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.paragraph}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "UNDERLINE"
      },
      $type: "typography"
    }
  }
};
const heading = {
  h6: {
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.base}",
        fontSize: "{font-size.base}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  h5: {
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.md}",
        fontSize: "{font-size.md}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  h4: {
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.lg}",
        fontSize: "{font-size.lg}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  h3: {
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.xl}",
        fontSize: "{font-size.xl}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl}",
        fontSize: "{font-size.xl}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  h2: {
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.xl2}",
        fontSize: "{font-size.xl2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl2}",
        fontSize: "{font-size.xl2}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  h1: {
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 700,
        lineHeight: "{line-height.xl3}",
        fontSize: "{font-size.xl3}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.bold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl3}",
        fontSize: "{font-size.xl3}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.label}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  }
};
const display = {
  d1: {
    light: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 300,
        lineHeight: "{line-height.xl7}",
        fontSize: "{font-size.xl7}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.light}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl7}",
        fontSize: "{font-size.xl7}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.xl7}",
        fontSize: "{font-size.xl7}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  d2: {
    light: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 300,
        lineHeight: "{line-height.xl6}",
        fontSize: "{font-size.xl6}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.light}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl6}",
        fontSize: "{font-size.xl6}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.xl6}",
        fontSize: "{font-size.xl6}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  d3: {
    light: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 300,
        lineHeight: "{line-height.xl5}",
        fontSize: "{font-size.xl5}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.light}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl5}",
        fontSize: "{font-size.xl5}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.xl5}",
        fontSize: "{font-size.xl5}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  },
  d4: {
    light: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 300,
        lineHeight: "{line-height.xl4}",
        fontSize: "{font-size.xl4}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.light}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    normal: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 400,
        lineHeight: "{line-height.xl4}",
        fontSize: "{font-size.xl4}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.regular}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    },
    bold: {
      $value: {
        fontFamily: "{font-family}",
        fontWeight: 500,
        lineHeight: "{line-height.xl4}",
        fontSize: "{font-size.xl4}",
        letterSpacing: "0",
        paragraphSpacing: "{paragraph-spacing.display}",
        fontStyle: "{text-style.semibold}",
        textCase: "NONE",
        textDecoration: "NONE"
      },
      $type: "typography"
    }
  }
};
const textStyleTokens = {
  body,
  paragraph,
  heading,
  display
};
const typeFaceTokens = {
  "font-family": {
    $value: "Inter",
    $type: "string",
    scopes: [
      "TEXT_CONTENT",
      "FONT_FAMILY"
    ]
  },
  "text-style": {
    light: {
      $value: "Light",
      $type: "string",
      scopes: [
        "TEXT_CONTENT",
        "FONT_STYLE"
      ]
    },
    regular: {
      $value: "Regular",
      $type: "string",
      scopes: [
        "TEXT_CONTENT",
        "FONT_STYLE"
      ]
    },
    semibold: {
      $value: "Semi Bold",
      $type: "string",
      scopes: [
        "TEXT_CONTENT",
        "FONT_STYLE"
      ]
    },
    bold: {
      $value: "Bold",
      $type: "string",
      scopes: [
        "TEXT_CONTENT",
        "FONT_STYLE"
      ]
    },
    italic: {
      $value: "Italic",
      $type: "string",
      scopes: [
        "TEXT_CONTENT",
        "FONT_STYLE"
      ]
    }
  }
};
const baseMajorThird = {
  "paragraph-spacing": {
    display: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "PARAGRAPH_SPACING"
      ],
      $value: 20
    },
    label: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "PARAGRAPH_SPACING"
      ],
      $value: 12
    },
    paragraph: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "PARAGRAPH_SPACING"
      ],
      $value: 16
    }
  },
  "font-size": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 9
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 11
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 13
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 15
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 19
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 23
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 29
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 37
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 46
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 57
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 72
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 89
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 112
    }
  },
  "line-height": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 12
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 14
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 16
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 20
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 24
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 28
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 36
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 44
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 56
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 64
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 80
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 100
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 124
    }
  }
};
const compactMajorThird = {
  "paragraph-spacing": {
    display: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "PARAGRAPH_SPACING"
      ],
      $value: 16
    },
    label: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "PARAGRAPH_SPACING"
      ],
      $value: 8
    },
    paragraph: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "PARAGRAPH_SPACING"
      ],
      $value: 12
    }
  },
  "font-size": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 9
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 10
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 11
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 13
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 16
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 20
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 25
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 32
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 40
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 50
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 62
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 77
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 97
    }
  },
  "line-height": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 10
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 12
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 14
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 16
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 20
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 24
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 32
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 36
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 48
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 56
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 64
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 84
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 106
    }
  }
};
const largeMajorThird = {
  "paragraph-spacing": {
    display: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "PARAGRAPH_SPACING"
      ],
      $value: 20
    },
    label: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "PARAGRAPH_SPACING"
      ],
      $value: 12
    },
    paragraph: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "PARAGRAPH_SPACING"
      ],
      $value: 16
    }
  },
  "font-size": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 9
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 11
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 14
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 17
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 21
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 27
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 33
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 42
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 52
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 65
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 81
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 101
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "FONT_SIZE"
      ],
      $value: 127
    }
  },
  "line-height": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 12
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 16
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 20
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 24
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 28
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 32
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 40
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 48
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 60
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 72
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 88
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 112
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 140
    }
  }
};
const baseMinorThird = {
  "paragraph-spacing": {
    display: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 20
    },
    label: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 12
    },
    paragraph: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 16
    }
  },
  "font-size": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 10
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 11
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 13
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 15
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 18
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 22
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 26
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 31
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 37
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 45
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 54
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 64
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 77
    }
  },
  "line-height": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 12
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 14
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 16
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 20
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 24
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 28
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 32
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 36
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 44
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 48
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 60
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 72
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 86
    }
  }
};
const compactMinorThird = {
  "paragraph-spacing": {
    display: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 16
    },
    label: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 8
    },
    paragraph: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 12
    }
  },
  "font-size": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 10
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 11
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 12
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 13
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 16
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 19
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 22
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 27
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 32
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 39
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 47
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 56
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 67
    }
  },
  "line-height": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 10
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 12
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 14
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 16
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 20
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 24
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 28
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 32
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 40
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 44
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 52
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 60
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 78
    }
  }
};
const largeMinorThird = {
  "paragraph-spacing": {
    display: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 20
    },
    label: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 12
    },
    paragraph: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 16
    }
  },
  "font-size": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 11
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 12
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 14
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 17
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 20
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 24
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 29
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 35
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 42
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 51
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 61
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 73
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "FONT_SIZE"
      ],
      $value: 88
    }
  },
  "line-height": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 12
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 16
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 20
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 24
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 28
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 32
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 34
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 40
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 52
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 56
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 68
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 80
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT",
        "LINE_HEIGHT"
      ],
      $value: 96
    }
  }
};
const baseMajorSecond = {
  "paragraph-spacing": {
    display: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 20
    },
    label: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 12
    },
    paragraph: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 16
    }
  },
  "font-size": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 10
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 11
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 13
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 15
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 17
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 19
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 21
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 24
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 27
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 30
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 34
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 38
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 43
    }
  },
  "line-height": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 12
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 14
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 16
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 20
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 24
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 28
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 32
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 34
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 38
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 42
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 48
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 52
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 60
    }
  }
};
const compactMajorSecond = {
  "paragraph-spacing": {
    display: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 16
    },
    label: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 8
    },
    paragraph: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 12
    }
  },
  "font-size": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 9
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 10
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 11
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 13
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 15
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 16
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 19
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 21
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 24
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 27
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 30
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 33
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 38
    }
  },
  "line-height": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 10
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 12
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 14
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 16
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 20
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 24
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 24
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 26
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 28
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 32
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 36
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 40
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 46
    }
  }
};
const largeMajorSecond = {
  "paragraph-spacing": {
    display: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 20
    },
    label: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 12
    },
    paragraph: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT"
      ],
      $value: 16
    }
  },
  "font-size": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 12
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 13
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 15
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 17
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 19
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 22
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 24
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 27
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 31
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 34
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 39
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 44
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 49
    }
  },
  "line-height": {
    xs2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 14
    },
    xs: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 16
    },
    sm: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 20
    },
    base: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 24
    },
    md: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 28
    },
    lg: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 32
    },
    xl: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 34
    },
    xl2: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 38
    },
    xl3: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 44
    },
    xl4: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 48
    },
    xl5: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 56
    },
    xl6: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 62
    },
    xl7: {
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ],
      $value: 68
    }
  }
};
const base = flattenObject(baseMinorThird);
const compact = flattenObject(compactMinorThird);
const large = flattenObject(largeMinorThird);
const typeFace = flattenObject(typeFaceTokens);
const styles = flattenObject(textStyleTokens);
const tokens$1 = {
  majorThird: {
    base: flattenObject(baseMajorThird),
    compact: flattenObject(compactMajorThird),
    large: flattenObject(largeMajorThird)
  },
  minorThird: {
    base: flattenObject(baseMinorThird),
    compact: flattenObject(compactMinorThird),
    large: flattenObject(largeMinorThird)
  },
  majorSecond: {
    base: flattenObject(baseMajorSecond),
    compact: flattenObject(compactMajorSecond),
    large: flattenObject(largeMajorSecond)
  }
};
function getTypographyTokens(size, scale2 = "minorThird") {
  let scaleTokens = tokens$1[scale2][size];
  return __spreadValues(__spreadValues(__spreadValues({}, typeFace), scaleTokens), styles);
}
function getTypScaleTokens(scale2 = "minorThird") {
  let scaleTokens = tokens$1[scale2];
  return scaleTokens;
}
async function getFontDetails() {
  return await getFontDetailsTokens();
}
async function getFontDetailsTokens() {
  const collectionName = "Type Face";
  const collection2 = await findFigmaVariableCollectionByName(collectionName);
  let names = [];
  if (collection2 == null) {
    const family = typeFaceTokens["font-family"].$value;
    for (let [name, textStyle] of Object.entries(typeFaceTokens["text-style"])) {
      names.push({ family, style: textStyle.$value });
    }
  } else {
    let family, styles2 = [];
    for (const variableId of collection2.variableIds) {
      const figmaVar = await figma.variables.getVariableByIdAsync(variableId);
      const name = figmaVar.name;
      const figmaVarValue = Object.values(figmaVar.valuesByMode)[0];
      if (name.startsWith("font-family")) {
        family = figmaVarValue;
      } else if (name.startsWith("text-style")) {
        styles2.push(figmaVarValue);
      }
    }
    for (const style of styles2) {
      names.push({ family, style });
    }
  }
  return names;
}
const typographyTokens = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base,
  compact,
  getFontDetails,
  getTypScaleTokens,
  getTypographyTokens,
  large,
  typeFace
}, Symbol.toStringTag, { value: "Module" }));
const globalSizingTokens = {
  "size-0": {
    $value: "0",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-2": {
    $value: "2",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-4": {
    $value: "4",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-6": {
    $value: "6",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-8": {
    $value: "8",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-10": {
    $value: "10",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-12": {
    $value: "12",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-14": {
    $value: "14",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-16": {
    $value: "16",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-20": {
    $value: "20",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-24": {
    $value: "24",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-28": {
    $value: "28",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-32": {
    $value: "32",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-36": {
    $value: "36",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-40": {
    $value: "40",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-44": {
    $value: "44",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-48": {
    $value: "48",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-56": {
    $value: "56",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-64": {
    $value: "64",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-80": {
    $value: "80",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-96": {
    $value: "96",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-112": {
    $value: "112",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-128": {
    $value: "128",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-144": {
    $value: "144",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-160": {
    $value: "160",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-192": {
    $value: "192",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-224": {
    $value: "224",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-256": {
    $value: "256",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-288": {
    $value: "288",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-320": {
    $value: "320",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-352": {
    $value: "352",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-384": {
    $value: "384",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  },
  "size-416": {
    $value: "416",
    $type: "number",
    scopes: [
      "TEXT_CONTENT",
      "GAP",
      "WIDTH_HEIGHT"
    ]
  }
};
const baseSizingTokens = {
  "icon-size": {
    sm: {
      $value: "12",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    base: {
      $value: "16",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    md: {
      $value: "24",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    lg: {
      $value: "32",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl: {
      $value: "48",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl2: {
      $value: "64",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl3: {
      $value: "96",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl4: {
      $value: "128",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl5: {
      $value: "256",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    }
  }
};
const touchSizingTokens = {
  "icon-size": {
    sm: {
      $value: "16",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    base: {
      $value: "24",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    md: {
      $value: "32",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    lg: {
      $value: "48",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl: {
      $value: "64",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl2: {
      $value: "96",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl3: {
      $value: "128",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl4: {
      $value: "256",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    },
    xl5: {
      $value: "512",
      $type: "number",
      scopes: [
        "TEXT_CONTENT",
        "WIDTH_HEIGHT"
      ]
    }
  }
};
flattenObject(baseSizingTokens);
flattenObject(touchSizingTokens);
const global = flattenObject(globalSizingTokens);
function delayAsync(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function getElevationTokens(params, raw) {
  let tokens2;
  let depth = params.shadowsStyle - 2;
  if (params.shadowsSpread == void 0) {
    params.shadowsSpread = defaultSettings.shadowsSpread;
  }
  if (params.shadowsStyle == 1) {
    tokens2 = generateShadows(0, params.shadowsSpread);
    const firstShadowRump = _clone(tokens2["shadow-1"]);
    Object.entries(firstShadowRump).forEach(([key, effectDesignToken]) => {
      effectDesignToken.$value.pop();
    });
    tokens2 = {
      "shadow-1": firstShadowRump,
      "shadow-2": tokens2["shadow-1"],
      "shadow-3": tokens2["shadow-2"],
      "shadow-4": tokens2["shadow-3"],
      "shadow-5": tokens2["shadow-4"],
      "shadow-6": tokens2["shadow-5"]
    };
  } else {
    tokens2 = generateShadows(depth, params.shadowsSpread);
  }
  return raw === true ? tokens2 : flattenObject(tokens2);
}
const valueSequence = [1, 2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 72, 88, 104, 120, 136, 152, 168];
const effectTemplate = {
  "type": "DROP_SHADOW",
  "showShadowBehindNode": false,
  "color": "{utility.shade.100}",
  "blendMode": "MULTIPLY",
  "offsetX": 0,
  "offsetY": 0,
  "radius": 1,
  "spread": 0
};
function getLayersCount(offsetValue) {
  let layers = 1;
  if (offsetValue > 0 && offsetValue < 12) {
    layers = 2;
  } else if (offsetValue >= 12) {
    layers = 3;
  } else if (offsetValue >= 40) {
    layers = 4;
  }
  return layers;
}
function getShadowValueRamp(valueSequeceIndex, spread) {
  const offsetValue = valueSequence[valueSequeceIndex];
  let layers = getLayersCount(offsetValue);
  const shadowRampDefinition = {
    "100": {
      "$type": "effect",
      "$value": getShadowValue(layers, valueSequeceIndex, 1, spread)
    },
    "200": {
      "$type": "effect",
      "$value": getShadowValue(layers, valueSequeceIndex, 2, spread)
    },
    "300": {
      "$type": "effect",
      "$value": getShadowValue(layers, valueSequeceIndex, 3, spread)
    },
    "400": {
      "$type": "effect",
      "$value": getShadowValue(layers, valueSequeceIndex, 4, spread)
    },
    "500": {
      "$type": "effect",
      "$value": getShadowValue(layers, valueSequeceIndex, 5, spread)
    },
    "600": {
      "$type": "effect",
      "$value": getShadowValue(layers, valueSequeceIndex, 6, spread)
    }
  };
  return shadowRampDefinition;
}
function adjustNegativeSpreadValue(spread, offsetY) {
  if (spread < 0 && Math.abs(spread) >= offsetY) {
    return adjustNegativeSpreadValue(++spread, offsetY);
  }
  return spread;
}
function getShadowValue(layers, sequeceStartIndex, colorIndex, spread) {
  let shadowValue = [
    __spreadProps(__spreadValues({}, _clone(effectTemplate)), {
      color: `{utility.shade.${colorIndex}00}`
    })
  ];
  for (let l = 0; l < layers; l++) {
    const sequenceIndex = sequeceStartIndex + l;
    const offsetY = valueSequence[sequenceIndex];
    const radius = valueSequence[sequenceIndex + 1];
    spread *= 1.25;
    let layerValue = __spreadProps(__spreadValues({}, _clone(effectTemplate)), {
      color: `{utility.shade.${colorIndex}00}`,
      offsetY,
      radius,
      spread: adjustNegativeSpreadValue(spread, offsetY)
    });
    shadowValue.push(layerValue);
  }
  return shadowValue;
}
function generateShadows(size, spread) {
  let ramp = {};
  spread /= 1.25;
  for (let s = 1; s <= 6; s++) {
    ramp[`shadow-${s}`] = getShadowValueRamp(size++, spread);
    spread *= 1.25;
  }
  return ramp;
}
function findShadowComponent(name, destinationPage) {
  const pageComponents = destinationPage.findAllWithCriteria({
    types: ["COMPONENT"]
  });
  return pageComponents.find((node) => {
    const pluginData = node.getPluginData("SourceShadow");
    return pluginData === name || node.name.includes(name);
  });
}
const _constraints = {
  horizontal: "STRETCH",
  vertical: "STRETCH"
};
function createMask(shadowComponentFrame) {
  const baseRectOuter = figma.createRectangle();
  const baseRectInner = figma.createRectangle();
  const maskLayer = figma.subtract([baseRectInner, baseRectOuter], shadowComponentFrame);
  baseRectOuter.name = "mask-outer";
  baseRectOuter.constraints = _constraints;
  baseRectOuter.setPluginData("SourceShadowElement", "mask-outer");
  baseRectInner.name = "mask-inner";
  baseRectInner.constraints = _constraints;
  baseRectInner.resize(shadowComponentFrame.width, shadowComponentFrame.height);
  baseRectInner.setPluginData("SourceShadowElement", "mask-inner");
  baseRectInner.x = 0;
  baseRectInner.y = 0;
  maskLayer.name = "mask";
  maskLayer.setPluginData("SourceShadowElement", "mask");
  maskLayer.isMask = true;
  maskLayer.locked = true;
  return maskLayer;
}
function getMaskLayer(frame) {
  let maskLayer;
  if ("findOne" in frame) {
    maskLayer = frame.findOne((node) => node.getPluginData("SourceShadowElement") == "mask" || node.name == "mask");
  }
  if (!maskLayer) {
    maskLayer = createMask(frame);
  }
  return maskLayer;
}
function createShadowComponent(name, shadowToken) {
  const shadowComponentFrame = figma.createFrame();
  shadowComponentFrame.name = name;
  shadowComponentFrame.clipsContent = false;
  shadowComponentFrame.fills = [];
  createMask(shadowComponentFrame);
  shadowToken.$value.forEach((effectValue, index2) => {
    const shadowLayer = figma.createRectangle();
    shadowLayer.name = `shadow-${index2++}`;
    shadowLayer.constraints = _constraints;
    shadowComponentFrame.appendChild(shadowLayer);
    shadowLayer.locked = true;
  });
  const shadowComponent = figma.createComponentFromNode(shadowComponentFrame);
  shadowComponent.setPluginData("SourceShadow", name);
  return shadowComponent;
}
function getShadowComponent(name, destinationPage, shadowToken) {
  let shadowComponent = findShadowComponent(name, destinationPage);
  if (!shadowComponent) {
    shadowComponent = createShadowComponent(name, shadowToken);
  }
  shadowComponent.clipsContent = false;
  return shadowComponent;
}
async function createUpdateElevationComponents(params, destinationPage) {
  const tokens2 = getElevationTokens(params, true);
  const page = figma.root.children.find((node) => node.name == destinationPage) || figma.currentPage;
  await figma.setCurrentPageAsync(page);
  let shadowComponents = [];
  for (const key in tokens2) {
    const shadowRamp = tokens2[key];
    const shadowToken = shadowRamp["200"];
    const shadowComponent = getShadowComponent(key, page, shadowToken);
    const maskLayer = getMaskLayer(shadowComponent);
    if (!maskLayer) {
      throw new Error(`Error processing ${shadowComponent.name}. Cannot find mask layer, aborting...`);
    }
    const baseRectOuter = maskLayer.findOne((node) => node.getPluginData("SourceShadowElement") == "mask-outer" || node.name == "mask-outer");
    if (!baseRectOuter) {
      throw new Error(`Error processing ${shadowComponent.name} > ${maskLayer.name}. Cannot find mask outer mask rectangle, aborting...`);
    }
    maskLayer.visible = false;
    await updateMaskComponentLayers(shadowComponent, shadowToken);
    const absoluteBoundingBox = shadowComponent.absoluteBoundingBox;
    const absoluteRenderBounds = shadowComponent.absoluteRenderBounds;
    baseRectOuter.resize(absoluteRenderBounds.width, absoluteRenderBounds.height);
    baseRectOuter.x = absoluteRenderBounds.x - absoluteBoundingBox.x;
    baseRectOuter.y = absoluteRenderBounds.y - absoluteBoundingBox.y;
    maskLayer.visible = true;
    shadowComponents.push(shadowComponent);
  }
  await delayAsync(200);
  figma.currentPage.selection = shadowComponents;
  figma.viewport.scrollAndZoomIntoView(shadowComponents);
}
async function updateMaskComponentLayers(shadowComponent, shadowToken) {
  const shadowTokenValue = shadowToken.$value;
  shadowComponent.children;
  let index2 = 1;
  while (shadowTokenValue.length) {
    const effectValue = shadowTokenValue.shift();
    const colorVariable = await findVariableByReferences(effectValue.color);
    let paint = figma.util.solidPaint("#000000");
    paint = figma.variables.setBoundVariableForPaint(paint, "color", colorVariable);
    let shadowLayer = shadowComponent.children[index2];
    if (shadowLayer && shadowLayer.type != "RECTANGLE") {
      throw new Error(`shadow-${index2}  type is ${shadowLayer.type} but has to be a rectangle`);
    }
    if (!shadowLayer) {
      shadowLayer = figma.createRectangle();
      shadowLayer.constraints = {
        horizontal: "STRETCH",
        vertical: "STRETCH"
      };
      shadowComponent.insertChild(index2, shadowLayer);
    }
    shadowLayer.name = `shadow-${index2}`;
    shadowLayer.fills = [paint];
    shadowLayer.visible = true;
    shadowLayer.blendMode = effectTemplate.blendMode;
    const LayerBlur = {
      type: "LAYER_BLUR",
      visible: true,
      radius: effectValue.radius
    };
    shadowLayer.effects = [LayerBlur];
    shadowLayer.x = effectValue.offsetX - effectValue.spread;
    shadowLayer.y = effectValue.offsetY - effectValue.spread;
    shadowLayer.resize(shadowComponent.width + 2 * effectValue.spread, shadowComponent.height + 2 * effectValue.spread);
    index2++;
  }
}
const opacityTokens = {
  "opacity-0": {
    $value: 0,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-5": {
    $value: 5,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-10": {
    $value: 10,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-15": {
    $value: 15,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-20": {
    $value: 20,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-25": {
    $value: 25,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-30": {
    $value: 30,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-35": {
    $value: 35,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-40": {
    $value: 40,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-45": {
    $value: 45,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-50": {
    $value: 50,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-55": {
    $value: 55,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-60": {
    $value: 60,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-65": {
    $value: 65,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-70": {
    $value: 70,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-75": {
    $value: 75,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-80": {
    $value: 80,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-85": {
    $value: 85,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-90": {
    $value: 90,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-95": {
    $value: 95,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  },
  "opacity-100": {
    $value: 100,
    $type: "number",
    scopes: [
      "OPACITY"
    ]
  }
};
const opacity = flattenObject(opacityTokens);
const sizeValuesOrder = [
  "none",
  "xs5",
  "xs5",
  "xs3",
  "xs2",
  "xs",
  "sm",
  "base",
  "md",
  "lg",
  "xl",
  "xl2",
  "xl3",
  "xl4",
  "xl5",
  "xl6",
  "xl7",
  "round"
];
const colorNamesOrder = [
  "_test",
  "primary",
  "brand",
  "fill/base",
  "fill/contrast",
  "text/black",
  "text/white",
  "text/base/600",
  "text/base/500",
  "text/base/400",
  "text/base/action",
  "text/base/primary",
  "text/base/info",
  "text/base/success",
  "text/base/warning",
  "text/base/danger",
  "text/accent/600",
  "text/accent/500",
  "text/accent/400",
  "text/contrast/600",
  "text/contrast/500",
  "text/contrast/400",
  "text/contrast/action",
  "text/contrast/primary",
  "text/contrast/info",
  "text/contrast/success",
  "text/contrast/warning",
  "text/contrast/danger",
  "stroke/base",
  "stroke/contrast",
  "info",
  "success",
  "warning",
  "danger",
  "alt/base",
  "alt/contrast",
  "utility",
  "accent/red",
  "accent/amber",
  "accent/brown",
  "accent/green",
  "accent/teal",
  "accent/cyan",
  "accent/blue",
  "accent/indigo",
  "accent/violet",
  "accent/purple",
  "accent/pink",
  "ui-element/bg/rest",
  "ui-element/bg/hover",
  "ui-element/bg/active",
  "ui-element/bg/selected",
  "ui-element/bg/disabled",
  "ui-element/border/rest",
  "ui-element/border/hover",
  "ui-element/border/active",
  "ui-element/border/selected",
  "ui-element/border/disabled",
  "ui-element/text",
  "button/bg/rest",
  "button/bg/hover",
  "button/bg/active",
  "button/primary",
  "button/success",
  "button/danger",
  "button/border/rest",
  "button/border/hover",
  "button/border/active",
  "form-element/bg/rest",
  "form-element/bg/readonly",
  "form-element/bg/hover",
  "form-element/border/rest",
  "form-element/border/readonly",
  "form-element/border/hover",
  "card/bg/primary",
  "card/bg/secondary",
  "card/border/inner",
  "card/border/outer",
  "overlay/bg",
  "overlay/border"
];
function getColorTokensSortFn() {
  return getSortFn(colorNamesOrder, "startsWith");
}
function getSizeTokensSortFn() {
  return getSortFn(sizeValuesOrder, "endsWith");
}
function getAlphaNumTokensSortFn() {
  return function(a, b) {
    a.name.localeCompare(b.name, "en", { numeric: true });
  };
}
function getSortFn(dataSet, fn = "startsWith") {
  return function(firstEl, secondEl) {
    var resultFirst = dataSet.findIndex((item) => {
      return firstEl.name[fn](item);
    });
    var resultSecond = dataSet.findIndex((item) => {
      return secondEl.name[fn](item);
    });
    if (resultFirst < resultSecond) {
      return -1;
    }
    if (resultFirst > resultSecond) {
      return 1;
    }
    if (resultFirst === resultSecond) {
      let name1 = firstEl.name;
      let name2 = secondEl.name;
      if (name1 < name2) {
        return -1;
      }
      if (name1 > name2) {
        return 1;
      }
      return 0;
    }
    return 0;
  };
}
let fontLoadStatus = [];
async function preLoadFont(fontName) {
  const fontNameAndStyle = `${fontName.family} ${fontName.style}`;
  if (fontLoadStatus.indexOf(fontNameAndStyle) == -1) {
    await figma.loadFontAsync(fontName).catch((reason) => {
      debugger;
    });
    fontLoadStatus.push(fontNameAndStyle);
    return true;
  }
  return false;
}
async function importTextStyles(tokens2) {
  fontLoadStatus = [];
  for (const [name, token] of Object.entries(tokens2)) {
    if (token.$type != "typography") {
      continue;
    }
    const resolved = await parseValues(token.$value, tokens2);
    const normalized = convertTextStyleToFigma(name, resolved);
    let fontName = normalized.fontName;
    await preLoadFont(fontName);
    let textStyle = await getStyleByName$1(name);
    let newStyle = false;
    if (!textStyle) {
      textStyle = figma.createTextStyle();
      newStyle = true;
    }
    textStyle.setBoundVariable("fontStyle", null);
    textStyle.setBoundVariable("lineHeight", null);
    textStyle.setBoundVariable("fontSize", null);
    textStyle.setBoundVariable("paragraphSpacing", null);
    textStyle.setBoundVariable("fontFamily", null);
    textStyle.setBoundVariable("fontStyle", null);
    if (!newStyle) {
      fontName = _clone(textStyle.fontName);
      await preLoadFont(fontName);
      normalized.fontName = fontName;
    }
    try {
      Object.keys(normalized).forEach((key) => {
        textStyle[key] = normalized[key];
      });
      const lineHeightValue = token.$value.lineHeight;
      const lineHeightVariable = typeof lineHeightValue == "string" ? await findVariableByReferences(lineHeightValue) : null;
      const fontSizeValue = token.$value.fontSize;
      const fontSizeVariable = typeof fontSizeValue == "string" ? await findVariableByReferences(fontSizeValue) : null;
      const paragraphSpacingValue = token.$value.paragraphSpacing;
      const paragraphSpacingVariable = typeof paragraphSpacingValue == "string" ? await findVariableByReferences(paragraphSpacingValue) : null;
      const fontFamilyValue = token.$value.fontFamily;
      const fontFamilyVariable = typeof fontFamilyValue == "string" ? await findVariableByReferences(fontFamilyValue) : null;
      const fontStyleValue = token.$value.fontStyle;
      const fontStyleVariable = typeof fontStyleValue == "string" ? await findVariableByReferences(fontStyleValue) : null;
      lineHeightVariable && textStyle.setBoundVariable("lineHeight", lineHeightVariable);
      fontSizeVariable && textStyle.setBoundVariable("fontSize", fontSizeVariable);
      paragraphSpacingVariable && textStyle.setBoundVariable("paragraphSpacing", paragraphSpacingVariable);
      fontFamilyVariable && textStyle.setBoundVariable("fontFamily", fontFamilyVariable);
      fontStyleVariable && textStyle.setBoundVariable("fontStyle", fontStyleVariable);
    } catch (e) {
      debugger;
    }
  }
}
async function parseValues(value, dictionary) {
  let output = {};
  for (const [key, tokenReference] of Object.entries(value)) {
    const resolvedVariable = await findVariableByReferences(tokenReference);
    if (resolvedVariable) {
      output[key] = await getDefaultVariableValue(resolvedVariable);
    } else {
      const resolvedValue = resolveGlobalTokenValue(tokenReference, dictionary || getGlobalTokensDictionary());
      output[key] = resolvedValue;
    }
  }
  return output;
}
async function getLocalStyles$1() {
  return await figma.getLocalTextStylesAsync();
}
async function getStyleByName$1(name) {
  const stylesByType = await getLocalStyles$1();
  const match = stylesByType.find((style) => style.name === name);
  if (match) {
    return match;
  } else {
    return null;
  }
}
function convertTextCaseToFigma(value) {
  switch (value.toLowerCase()) {
    case "uppercase":
    case "upper":
      return "UPPER";
    case "lowercase":
    case "lower":
      return "LOWER";
    case "capitalize":
    case "title":
      return "TITLE";
    case "small-caps":
    case "small_caps":
      return "SMALL_CAPS";
    case "all-small-caps":
    case "small_caps_forced":
      return "SMALL_CAPS_FORCED";
    default:
      return "ORIGINAL";
  }
}
function convertTextDecorationToFigma(value) {
  switch (value.toLowerCase()) {
    case "underline":
      return "UNDERLINE";
    case "line-through":
    case "strikethrough":
      return "STRIKETHROUGH";
    default:
      return "NONE";
  }
}
function getLetterSpacing(value) {
  return getValueUnit(value);
}
function getValueUnit(value) {
  const stringValue = `${value}`;
  if (value === "AUTO") {
    return {
      unit: "AUTO"
    };
  }
  if (stringValue.includes("%")) {
    return {
      unit: "PERCENT",
      value: parseFloat(stringValue)
    };
  } else {
    return {
      unit: "PIXELS",
      value: parseFloat(stringValue)
    };
  }
}
function convertTextStyleToFigma(name, values) {
  let textStyle = {
    "name": name,
    "fontSize": parseFloat(`${values.fontSize}`),
    "textDecoration": convertTextDecorationToFigma(values.textDecoration),
    "fontName": {
      family: values.fontFamily,
      style: values.fontStyle
    },
    "letterSpacing": getLetterSpacing(values.letterSpacing),
    "lineHeight": getValueUnit(values.lineHeight),
    "leadingTrim": "NONE",
    "paragraphIndent": 0,
    "paragraphSpacing": parseInt(`${values.paragraphSpacing}`) || 0,
    "listSpacing": parseFloat(`${values.listSpacing}`) || parseFloat(`${values.lineHeight}`) / 2,
    "hangingPunctuation": false,
    "hangingList": false,
    "textCase": convertTextCaseToFigma(values.textCase)
  };
  return textStyle;
}
function getUnitValue(unitValue) {
  if (unitValue.unit == "AUTO") {
    return "AUTO";
  }
  if (unitValue.unit == "PERCENT") {
    return `${unitValue.value}%`;
  }
  return unitValue.value;
}
async function convertFigmaTextStyleToToken(style) {
  let typographyTokenValue = {
    "fontFamily": style.fontName.family,
    "lineHeight": getUnitValue(style.lineHeight),
    "fontSize": style.fontSize,
    "letterSpacing": getUnitValue(style.letterSpacing),
    "listSpacing": style.listSpacing,
    "paragraphSpacing": style.paragraphSpacing,
    "fontStyle": style.fontName.style,
    "textCase": style.textCase,
    "textDecoration": style.textDecoration
  };
  for (const prop in style.boundVariables) {
    const boundVariable = style.boundVariables[prop];
    typographyTokenValue[prop] = await getAliasName(boundVariable.id);
  }
  return typographyTokenValue;
}
function toTitleCase(str) {
  return str.toLowerCase().replace(/(?:^|[\s-/])\w/g, function(match) {
    return match.toUpperCase();
  });
}
function camelToTitle(camelCase) {
  return camelCase.replace(/([A-Z])/g, function(match) {
    return " " + match;
  }).replace(/^./, function(match) {
    return match.toUpperCase();
  });
}
function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index2) {
    return index2 === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
}
let globalDictionary;
async function importEffectStyles(tokens2, dictionary) {
  if (dictionary) {
    globalDictionary = dictionary;
  }
  for (const [name, tokenData] of Object.entries(tokens2)) {
    let token = tokenData;
    if (token.$type == "effect") {
      let figmaStyle = await getStyleByName(name);
      if (!figmaStyle) {
        figmaStyle = figma.createEffectStyle();
      }
      const values = token.$value;
      const effects = [];
      for (const effectValue of values) {
        const effect = await convertEffectStyleToFigma(effectValue);
        effects.push(effect);
      }
      figmaStyle.name = name;
      figmaStyle.effects = effects;
      figmaStyle.description = token.description || figmaStyle.description;
    }
  }
}
async function convertEffectStyleToFigma(value) {
  const {
    effectTokenValue,
    boundProps
  } = await resolveBoundValues(value);
  let effect = {
    type: effectTokenValue.type,
    radius: effectTokenValue.radius,
    visible: true
  };
  if (effectTokenValue.type == "INNER_SHADOW" || effectTokenValue.type == "DROP_SHADOW") {
    effect = Object.assign(effect, {
      color: figma.util.rgba(effectTokenValue.color),
      offset: {
        x: effectTokenValue.offsetX,
        y: effectTokenValue.offsetY
      },
      spread: effectTokenValue.spread,
      blendMode: "NORMAL"
    });
  }
  if (effectTokenValue.type == "DROP_SHADOW") {
    effect = Object.assign(effect, {
      showShadowBehindNode: parseBoolean(effectTokenValue.showShadowBehindNode)
    });
  }
  boundProps.forEach((boundData) => {
    const effectCopy = figma.variables.setBoundVariableForEffect(effect, boundData.propName, boundData.variable);
    if (effect.type == "DROP_SHADOW" || effect.type == "INNER_SHADOW") {
      effectCopy.spread = effectTokenValue.spread;
    }
    effect = effectCopy;
  });
  return effect;
}
async function resolveBoundValues(effectValue) {
  let copy = _clone(effectValue);
  let boundProps = [];
  for (const prop in copy) {
    const figmaVariable = await findVariableByReferences(copy[prop]);
    if (figmaVariable) {
      boundProps.push({
        propName: prop,
        variable: figmaVariable
      });
      const defaultValue = await getDefaultVariableValue(figmaVariable);
      copy[prop] = defaultValue;
    } else {
      let val = resolveGlobalTokenValue(copy[prop], globalDictionary || getGlobalTokensDictionary());
      if (prop == "color") {
        val = parseColorValue(val).rgb;
      }
      copy[prop] = val;
    }
  }
  return { effectTokenValue: copy, boundProps };
}
async function getLocalStyles() {
  return await figma.getLocalEffectStylesAsync();
}
async function getStyleByName(name) {
  const stylesByType = await getLocalStyles();
  const match = stylesByType.find((style) => style.name === name);
  if (match) {
    return match;
  } else {
    return null;
  }
}
function parseBoolean(val) {
  if (typeof val == "boolean") {
    return val;
  }
  return val !== "false";
}
async function convertFigmaEffectStyleToToken(style, colorFormat) {
  const effects = style.effects;
  const values = [];
  for (var effect of effects) {
    values.push(await convertFigmaShadowEffectToToken(effect, colorFormat));
  }
  return values;
}
async function convertFigmaShadowEffectToToken(effect, colorFormat) {
  let effectTokenValue = {
    "type": effect.type,
    "radius": effect.radius
  };
  if (effect.type == "DROP_SHADOW" || effect.type == "INNER_SHADOW") {
    effectTokenValue = Object.assign(effectTokenValue, {
      "color": convertFigmaColorToRgb(effect.color, colorFormat),
      "blendMode": effect.blendMode,
      "offsetX": effect.offset.x,
      "offsetY": effect.offset.y,
      "spread": effect.spread
    });
  }
  if (effect.type == "DROP_SHADOW") {
    effectTokenValue = Object.assign(effectTokenValue, {
      "showShadowBehindNode": `${effect.showShadowBehindNode || false}`
    });
  }
  for (const prop in effect.boundVariables) {
    const boundVariable = effect.boundVariables[prop];
    effectTokenValue[prop] = await getAliasName(boundVariable.id);
  }
  return effectTokenValue;
}
console.clear();
async function initiateImport() {
  const params = getTheme("light");
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  params.createComponentTokens && await getCollectionAndPrepareTokens({
    collectionName: collectionNames.get("componentColors"),
    modeName: "Default",
    data: getComponentColors(),
    sortFn: getColorTokensSortFn()
  });
  params.createColorTokens && await getCollectionAndPrepareTokens({
    collectionName: collectionNames.get("themeColors"),
    modeName: "Light Base",
    data: getThemeColors("lightBase", params),
    sortFn: getColorTokensSortFn()
  });
  params.createSpacingTokens && await getCollectionAndPrepareTokens({
    collectionName: collectionNames.get("spacing"),
    modeName: toTitleCase(params.spacing),
    data: spacingTokens[params.spacing],
    sortFn: getSizeTokensSortFn()
  });
  params.createRadiiTokens && await getCollectionAndPrepareTokens({
    collectionName: collectionNames.get("radii"),
    modeName: toTitleCase(params.radii),
    data: radiiTokens[params.radii],
    sortFn: getSizeTokensSortFn()
  });
  params.createTypographyTokens && await getCollectionAndPrepareTokens({
    collectionName: "Type Scale",
    modeName: toTitleCase(params.baseFontSize),
    data: typographyTokens[params.baseFontSize],
    sortFn: getSizeTokensSortFn()
  });
  params.createOpacityTokens && await getCollectionAndPrepareTokens({
    collectionName: collectionNames.get("opacity"),
    modeName: toTitleCase("default"),
    data: opacity,
    sortFn: getAlphaNumTokensSortFn()
  });
  params.createGlobalSizeTokens && await getCollectionAndPrepareTokens({
    collectionName: collectionNames.get("globalSizing"),
    modeName: toTitleCase("default"),
    data: global,
    sortFn: getAlphaNumTokensSortFn()
  });
}
function generateVariablesForPlayground(data, isPlayground = false) {
  if (isPlayground === false) {
    return;
  }
  const contrastRatios = {};
  const primaryColorHUE = data.primary;
  const shades = getGlobalAccentRamp(data[primaryColorHUE], data);
  Object.entries(shades).forEach(([name, token]) => {
    token.scopes = [];
    let chromaColor = chroma(token.$value);
    const contrast1 = roundTwoDigits(chroma.contrast(chroma.hsl(0, 0, 1), chromaColor));
    const contrast2 = roundTwoDigits(chroma.contrast(chroma.hsl(0, 0, 0.22), chromaColor));
    contrastRatios[`_accent_${name}_vs_light`] = {
      "$value": contrast1.toString(),
      "$type": "string",
      "scopes": []
    };
    contrastRatios[`_accent_${name}_vs_dark`] = {
      "$value": contrast2.toString(),
      "$type": "string",
      "scopes": []
    };
  });
  importVariables({
    collectionName: "_Playground",
    modeName: "Default",
    data: __spreadProps(__spreadValues(__spreadValues({}, flattenObject({ "_global-accent": shades })), contrastRatios), {
      "_primary-color-hue": {
        "$value": data[data.primary].toString(),
        "$type": "string",
        "scopes": []
      },
      "_primary-color": {
        "$value": data.primary,
        "$type": "string",
        "scopes": []
      },
      "_success-color": {
        "$value": data.success,
        "$type": "string",
        "scopes": []
      },
      "_warning-color": {
        "$value": data.warning,
        "$type": "string",
        "scopes": []
      },
      "_danger-color": {
        "$value": data.danger,
        "$type": "string",
        "scopes": []
      },
      "_info-color": {
        "$value": data.info,
        "$type": "string",
        "scopes": []
      }
    })
  });
}
async function importAllTokens() {
  const params = getTheme("light");
  const isPlayground = figma.root.getPluginData("SDSPlayground") !== "";
  generateVariablesForPlayground(params, isPlayground);
  params.createColorTokens && await importColorTheme();
  params.createComponentTokens && await importVariables({
    collectionName: collectionNames.get("componentColors"),
    modeName: "Default",
    data: getComponentColors()
  });
  params.createSpacingTokens && await importSizeTokens({
    collectionName: collectionNames.get("spacing"),
    params,
    defaultMode: params.spacing,
    defaultOrder: spacingSizeName,
    tokens: getSpacingTokens(params.verticalSpacing)
  });
  params.createRadiiTokens && await importSizeTokens({
    collectionName: collectionNames.get("radii"),
    params,
    defaultMode: params.radii,
    defaultOrder: radiiSizeName,
    tokens: radiiTokens
  });
  params.createTypographyTokens && await importTypographyTokens(params);
  params.createOpacityTokens && await importVariables({
    collectionName: collectionNames.get("opacity"),
    modeName: "Default",
    data: opacity
  });
  params.createGlobalSizeTokens && await importVariables({
    collectionName: collectionNames.get("globalSizing"),
    modeName: "Default",
    data: global
  });
  params.createElevationTokens && await importEffectTokens(params);
  figma.notify("Figma variables has been imported");
  figma.ui.postMessage("IMPORT_COMPLETED");
}
function getThemeParams(theme) {
  if (theme.startsWith("light")) {
    return getTheme("light");
  }
  if (theme.startsWith("dark")) {
    return getTheme("dark");
  }
  throw new Error(`Unusual theme name ${theme}`);
}
async function importColorTheme() {
  const defaultThemes = _clone(colorThemes);
  addToGlobalTokensDictionary(__spreadValues({}, getComponentColors()));
  let index2 = 0;
  while (defaultThemes.length) {
    const themeName = defaultThemes.shift();
    const params = getThemeParams(themeName);
    let themeColors = getThemeColors(themeName, params);
    const globalNeutrals = getGlobalNeutrals(params);
    addToGlobalTokensDictionary(__spreadValues(__spreadValues({}, globalNeutrals), themeColors));
    await importVariables({
      collectionName: collectionNames.get("themeColors"),
      modeName: colorThemeNames[index2],
      data: themeColors
    });
    index2++;
  }
  debugger;
}
async function importSizeTokens(data) {
  const tokens2 = data.tokens;
  const isSingleMode = data.isSingleMode || false;
  const singleCollection = data.params.singleCollection;
  const defaultMode = data.defaultMode;
  const defaultOrder = data.defaultOrder.filter((item) => item != defaultMode);
  defaultOrder.splice(0, 0, defaultMode);
  defaultOrder.length = isSingleMode ? 1 : defaultOrder.length;
  let index2 = 0;
  for (const modeName of defaultOrder) {
    await importVariables({
      collectionName: singleCollection ? "UI Scale" : data.collectionName,
      modeName: camelToTitle(modeName),
      modeIndex: index2++,
      data: tokens2[modeName],
      isSingleMode
    });
  }
}
async function getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
  let modeId;
  const { collection: collection2, isNew } = await getFigmaCollection(collectionName);
  if (isNew || isSingleMode) {
    modeId = collection2.modes[0].modeId;
    collection2.renameMode(modeId, modeName);
  } else {
    const mode2 = modeIndex < 0 ? collection2.modes.find((mode22) => mode22.name === modeName) : collection2.modes[modeIndex];
    if (!mode2) {
      try {
        modeId = collection2.addMode(modeName);
      } catch (e) {
        figma.notify("Cannot create more than one mode. Is your file under Pro team or org plan?", { error: true });
        console.error("Cannot create more than one mode. Is your file under Pro team or org plan?", e);
        throw new Error(e);
      }
    } else {
      modeId = mode2.modeId;
      collection2.renameMode(modeId, modeName);
    }
  }
  let transformedTokens = Object.entries(data).map(([key, object]) => {
    return __spreadValues({
      name: key
    }, object);
  });
  if (sortFn != null) {
    transformedTokens.sort(sortFn);
  }
  if (isNew) {
    for (const token of transformedTokens) {
      const type2 = resolveVariableType(token["$type"]);
      await setFigmaVariable(collection2, modeId, type2, token.name);
    }
  }
  return {
    tokens: transformedTokens,
    collection: collection2,
    modeId,
    type: data.$type
  };
}
async function importVariables({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false, overrideValues = true }) {
  const {
    tokens: tokens2,
    collection: collection2,
    modeId,
    type: type2
  } = await getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex, data, sortFn, isSingleMode });
  for (const token of tokens2) {
    let type22 = "$type" in token ? token.$type : "string";
    await processToken({
      collection: collection2,
      modeId,
      type: type22,
      variableName: token.name,
      token,
      overrideValues
    });
  }
}
async function importShadowVariables(params) {
  params.shadowsStyle;
  addToGlobalTokensDictionary(__spreadValues({}, getGlobalNeutrals(params)));
  await importVariables({
    collectionName: collectionNames.get("themeColors"),
    modeName: "Light Base",
    data: getShadowColorTokens("light", params)
  });
  await importVariables({
    collectionName: collectionNames.get("themeColors"),
    modeName: "Dark Base",
    data: getShadowColorTokens("dark", params)
  });
  await importVariables({
    collectionName: collectionNames.get("themeColors"),
    modeName: "Dark Elevated",
    data: getShadowColorTokens("dark", params)
  });
}
async function importEffectTokens(params) {
  const tokens2 = getElevationTokens(params);
  await importShadowVariables(params);
  await importEffectStyles(tokens2);
}
async function importTypographyTokens(params) {
  const tokens2 = getTypographyTokens(params.baseFontSize, params.typeScale);
  const typeScaleTokens = getTypScaleTokens(params.typeScale);
  const collectionName = "Type Face";
  addToGlobalTokensDictionary(tokens2);
  await importVariables({
    collectionName,
    modeName: typeFace["font-family"].$value || "Default",
    data: typeFace
  });
  await importSizeTokens({
    collectionName: "Type Scale",
    params,
    defaultMode: params.baseFontSize,
    defaultOrder: typographySizeName,
    tokens: typeScaleTokens
  });
  await importTextStyles(tokens2);
}
async function processToken({
  collection: collection2,
  modeId,
  type: type2,
  variableName,
  token,
  overrideValues
}) {
  type2 = type2 || token.$type;
  if (variableName.charAt(0) === "$") {
    return;
  }
  let valueString = `${token.$value}`;
  if (token.$value !== void 0) {
    if (type2 === "color") {
      return await setFigmaVariable(
        collection2,
        modeId,
        "COLOR",
        variableName,
        await getColorTokenValue(token, modeId),
        token.scopes || ["ALL_SCOPES"],
        token.description || null
      );
    }
    if (type2 === "number") {
      let resolvedValue = await resolveAliasOrValue(valueString, getGlobalTokensDictionary());
      let numValue = typeof resolvedValue == "string" ? parseFloat(resolvedValue) : resolvedValue;
      return await setFigmaVariable(
        collection2,
        modeId,
        "FLOAT",
        variableName,
        numValue,
        token.scopes,
        token.description || null
      );
    }
    if (type2 === "string") {
      return await setFigmaVariable(
        collection2,
        modeId,
        "STRING",
        variableName,
        await resolveAliasOrValue(valueString, getGlobalTokensDictionary()),
        token.scopes,
        token.description || null
      ).catch(function(err) {
        console.log(err.message);
      });
    }
    console.error("unsupported type", type2, token);
  } else {
    console.warn("recursion in ", token);
  }
}
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function _mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        _mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return _mergeDeep(target, ...sources);
}
let GlobalNeutrals;
let ColorSystemVersion;
function getGlobalNeutrals(params) {
  if (params) {
    GlobalNeutrals = generateNeutrals(params);
  }
  return GlobalNeutrals;
}
function getComponentColors() {
  return flattenObject(componentTokens);
}
function getTextOnAccentColors(formData) {
  const primaryHUE = formData[formData.primary];
  const systemAccentColor = chroma.hsl(primaryHUE, formData.accentSaturation, 0.5).luminance(formData.accentMidLuminance);
  const whiteTextColor = chroma.hsl(formData.hue, formData.saturation, formData.textWhiteBrightness / 100);
  const blackTextColor = chroma.hsl(formData.hue, formData.saturation, formData.textBlackBrightness / 100);
  const whiteTextContrast = roundTwoDigits(chroma.contrast(whiteTextColor, systemAccentColor));
  roundTwoDigits(chroma.contrast(blackTextColor, systemAccentColor));
  let finalColor = formData.accentTextColor;
  if (finalColor == "auto") {
    finalColor = whiteTextContrast < 3 ? "black" : "white";
  }
  return {
    "text": {
      "accent": {
        "400": {
          "$value": `{text.${finalColor}.400}`,
          "$type": "color"
        },
        "500": {
          "$value": `{text.${finalColor}.500}`,
          "$type": "color"
        },
        "600": {
          "$value": `{text.${finalColor}.600}`,
          "$type": "color"
        }
      }
    }
  };
}
function processCommonColors(formData, tokens2) {
  let textSaturationAdjustments = {};
  let textColors = getTextOnAccentColors(formData);
  if (ColorSystemVersion == 1) {
    textColors = null;
  }
  if (formData.customAccentTextSaturation === true) {
    textSaturationAdjustments = {
      s: formData.accentTextSaturation
    };
  }
  const extension = {
    "text": {
      "base": {
        "primary": {
          "adjustments": textSaturationAdjustments
        },
        "info": {
          "adjustments": textSaturationAdjustments
        },
        "success": {
          "adjustments": textSaturationAdjustments
        },
        "warning": {
          "adjustments": textSaturationAdjustments
        },
        "danger": {
          "adjustments": textSaturationAdjustments
        }
      },
      "contrast": {
        "primary": {
          "adjustments": textSaturationAdjustments
        },
        "info": {
          "adjustments": textSaturationAdjustments
        },
        "success": {
          "adjustments": textSaturationAdjustments
        },
        "warning": {
          "adjustments": textSaturationAdjustments
        },
        "danger": {
          "adjustments": textSaturationAdjustments
        }
      }
    }
  };
  tokens2 = _mergeDeep(_clone(tokens2), textColors);
  return _mergeDeep(tokens2, extension);
}
function getThemeColors(theme, formData) {
  let lightCommon = processCommonColors(formData, paletteLightCommon);
  let darkCommon = processCommonColors(formData, paletteDarkCommon);
  let params = __spreadValues({}, normalizeFormData(formData));
  getGlobalNeutrals(formData);
  const semanticAccents = {
    primary: params.primary,
    info: params.info,
    success: params.success,
    warning: params.warning,
    danger: params.danger
  };
  let lightAccentTokens = generateSystemAccentPalette("light", params);
  let darkAccentTokens = generateSystemAccentPalette("dark", params);
  const lightSemanticTokens = generateSemanticPalette(semanticAccents, lightAccentTokens);
  const darkSemanticTokens = generateSemanticPalette(semanticAccents, darkAccentTokens);
  const lightCommonTokens = __spreadValues(__spreadValues(__spreadValues({
    accent: lightAccentTokens
  }, lightCommon), getShadowColorTokens("light", formData)), lightSemanticTokens);
  const darkCommonTokens = __spreadValues(__spreadValues(__spreadValues({
    accent: darkAccentTokens
  }, darkCommon), getShadowColorTokens("dark", formData)), darkSemanticTokens);
  let commonColors = {};
  let themeColors = {};
  if (theme === "lightBase") {
    commonColors = flattenObject(lightCommonTokens);
    if (params.distance === 0.02) {
      themeColors = flattenObject(paletteLight2);
    }
    if (params.distance === 0.03) {
      themeColors = flattenObject(paletteLight3);
    }
    if (params.distance === 0.04) {
      themeColors = flattenObject(paletteLight4);
    }
  }
  if (theme === "darkElevated") {
    commonColors = flattenObject(darkCommonTokens);
    if (params.distance === 0.02) {
      themeColors = flattenObject(paletteDarkElevated2);
    }
    if (params.distance === 0.03) {
      themeColors = flattenObject(paletteDarkElevated3);
    }
    if (params.distance === 0.04) {
      themeColors = flattenObject(paletteDarkElevated4);
    }
  }
  if (theme === "darkBase") {
    commonColors = flattenObject(darkCommonTokens);
    if (params.distance === 0.02) {
      themeColors = flattenObject(paletteDarkBase2);
    }
    if (params.distance === 0.03) {
      themeColors = flattenObject(paletteDarkBase3);
    }
    if (params.distance === 0.04) {
      themeColors = flattenObject(paletteDarkBase4);
    }
  }
  return __spreadValues(__spreadValues({}, commonColors), themeColors);
}
function generateSemanticShades(aliasName, accentShades) {
  let output = {};
  for (var a = 1, b = 7; a < b; a++) {
    output[`${a}00`] = {
      "$value": `{accent.${aliasName}.${a}00}`,
      "$type": "color",
      "description": accentShades[`${a}00`].description
    };
  }
  return output;
}
function generateSemanticPalette(accents, palette) {
  let result = {};
  Object.entries(accents).forEach(([name, alias]) => {
    result[name] = generateSemanticShades(alias, palette[alias]);
  });
  return result;
}
function normalizeFormData(formData) {
  let normalizedData = _clone(formData);
  const numberTypes = [
    "hue",
    "saturation",
    "distance",
    "red",
    "amber",
    "brown",
    "green",
    "teal",
    "blue",
    "indigo",
    "violet",
    "purple",
    "pink",
    "accentSaturation",
    "accentMaxLuminance",
    "accentMidLuminance",
    "accentMinLuminance",
    "accentTextSaturation",
    "textWhiteBrightness",
    "textBlackBrightness"
  ];
  numberTypes.forEach((p) => {
    if (typeof formData[p] == "string") {
      normalizedData[p] = parseFloat(formData[p]);
    }
  });
  return normalizedData;
}
async function getColorVariableAliasValue(tokenValue, variableId, modeId) {
  const figmaVariable = await figma.variables.getVariableByIdAsync(variableId);
  let result;
  if (figmaVariable.resolvedType != "COLOR") {
    throw `Variable ${figmaVariable.name} is not a color, it is ${figmaVariable.resolvedType}`;
  }
  const defaultValueRGBA = await getDefaultVariableValue(figmaVariable, modeId);
  result = convertFigmaColorToRgb(defaultValueRGBA, "hex");
  if (typeof tokenValue == "string" && tokenValue.indexOf("rgb") >= 0) {
    findTokenReferences(tokenValue).length;
    const alias = `{${figmaAliasToDesignTokens(figmaVariable.name)}}`;
    const newValue = tokenValue.replace(alias, result);
    result = parseColorValue(newValue).gl;
    return result;
  }
  return result;
}
function resolveColorTokenValue(token, dictionary, output = "gl") {
  const color = token.$value;
  const colorValue = resolveGlobalTokenValue(color.trim(), dictionary);
  const result = colorValue ? parseColorValue(colorValue, token.adjustments) : null;
  if (result) {
    return result[output];
  } else {
    console.warn(`Cannot resolve value for ${token.name}`);
  }
}
async function getColorTokenValue(token, modeId) {
  let valueString = `${token.$value}`.trim();
  const variableAlias = await findVariableAlias(valueString);
  const rawValue = resolveColorTokenValue(token, getGlobalTokensDictionary());
  if (token.$type != "color") {
    return;
  }
  const hasAdjustments = typeof token.adjustments == "object" && Object.keys(token.adjustments).length > 0;
  if (hasAdjustments && rawValue) {
    return rawValue;
  }
  if (variableAlias && typeof variableAlias == "object") {
    if (typeof token.$value == "string" && token.$value.indexOf("rgb") >= 0) {
      let parsedValue = await getColorVariableAliasValue(token.$value, variableAlias.id, modeId);
      const references = findTokenReferences(token.$value).length;
      if (!rawValue && parsedValue && references) {
        return parsedValue;
      }
    }
    return variableAlias;
  }
  if (rawValue) {
    return rawValue;
  }
}
async function upgradeTextPalette(params) {
  const baseTextColorTokens = [
    "text/contrast/600",
    "text/contrast/500",
    "text/contrast/400"
  ];
  const brandTextColorTokens = [
    "text/base/action",
    "text/contrast/action"
  ];
  const targetTokens = [
    "text/accent/600",
    "text/accent/500",
    "text/accent/400"
  ];
  const figmaVariables = await figma.variables.getLocalVariablesAsync();
  const accentColorVariable = figmaVariables.find((variable) => {
    return targetTokens.indexOf(variable.name) >= 0;
  });
  const baseColorVariables = figmaVariables.filter((variable) => {
    return baseTextColorTokens.indexOf(variable.name) >= 0;
  });
  const brandColorVariables = figmaVariables.filter((variable) => {
    return brandTextColorTokens.indexOf(variable.name) >= 0;
  });
  if (!accentColorVariable) {
    baseColorVariables.forEach((variable) => {
      variable.name = variable.name.replace("contrast", "accent");
    });
  }
  brandColorVariables.forEach((variable) => {
    variable.name = variable.name.replace("action", "primary");
  });
  addToGlobalTokensDictionary(__spreadValues({}, getGlobalNeutrals(params)));
  const paletteTextDark = flattenObject({
    text: _clone(paletteDarkCommon.text)
  });
  const paletteTextLight = flattenObject({
    text: _clone(paletteLightCommon.text)
  });
  const collectionName = collectionNames.get("themeColors");
  const collection2 = await findFigmaVariableCollectionByName(collectionName);
  const mode2 = collection2.modes[0];
  for (const tokenName in paletteTextLight) {
    await setFigmaVariable(collection2, mode2.modeId, "COLOR", tokenName);
  }
  await importVariables({
    collectionName,
    modeName: "Light Base",
    sortFn: getColorTokensSortFn(),
    data: paletteTextLight
  });
  await importVariables({
    collectionName,
    modeName: "Dark Base",
    sortFn: getColorTokensSortFn(),
    data: paletteTextDark
  });
  await importVariables({
    collectionName,
    modeName: "Dark Elevated",
    sortFn: getColorTokensSortFn(),
    data: paletteTextDark
  });
  ColorSystemVersion = 2;
}
async function getColorSystemVersion(refresh = false) {
  if (ColorSystemVersion != void 0 && !refresh) {
    return ColorSystemVersion;
  }
  const variables = await figma.variables.getLocalVariablesAsync();
  const textOnAccentVar = variables.find((variable) => variable.name.startsWith("text/accent"));
  const textOnContrastVar = variables.find((variable) => variable.name.startsWith("text/contrast"));
  if (variables.length == 0) {
    ColorSystemVersion = 0;
  }
  if (textOnAccentVar && textOnContrastVar) {
    ColorSystemVersion = 2;
  } else if (!textOnAccentVar && textOnContrastVar) {
    ColorSystemVersion = 1;
  } else if (!textOnAccentVar && !textOnContrastVar) {
    ColorSystemVersion = 0;
  }
  return ColorSystemVersion;
}
const shadowColours = {
  light: paletteLightShadows,
  dark: paletteDarkShadows
};
function getShadowColorTokens(theme, params) {
  const tokenOptions = shadowColours[theme || "light"];
  if (params.shadowsColor == void 0) {
    params.shadowsColor = defaultSettings.shadowsColor;
  }
  return flattenObject(tokenOptions[params.shadowsColor]);
}
function renderAccents(params, name) {
  const colors = generateGlobalAccentPalette(params);
  const existingNode = figma.currentPage.findChild((node) => node.name == name);
  existingNode == null ? void 0 : existingNode.remove();
  let frame = figma.createFrame();
  frame.layoutMode = "HORIZONTAL";
  frame.counterAxisSizingMode = "AUTO";
  frame.primaryAxisSizingMode = "AUTO";
  frame.itemSpacing = 16;
  frame.fills = [];
  frame.name = name;
  frame.x = 0;
  frame.y = 0;
  for (const [name2, shades] of Object.entries(colors)) {
    renderShades(frame, name2, shades, colors);
  }
  return frame;
}
const type = "variables";
const collection = "Accent Color";
const mode = "Color";
const tokens = {
  theme: {
    light: {},
    color: {
      $type: "string",
      scopes: [
        "ALL_SCOPES"
      ],
      $value: "color"
    },
    dark: {}
  }
};
const brandVariantTemplate = {
  type,
  collection,
  mode,
  tokens
};
function makeBrandVariantRecord(name) {
  const brandVariantRecord = _clone(brandVariantTemplate);
  brandVariantRecord.collection = "Brand Variant";
  brandVariantRecord.mode = toCamelCase(name);
  brandVariantRecord.tokens = {
    theme: {},
    brand: {},
    component: {}
  };
  return brandVariantRecord;
}
function exportBrandThemeTokens(key, brandVariantRecord, exportedData) {
  let brandTokens = brandVariantRecord.tokens[key];
  exportedData.forEach((record) => {
    const modeName = toCamelCase(record.mode);
    const tokens2 = record.tokens;
    const data = {};
    Object.entries(tokens2).forEach(([tokenName, tokenData]) => {
      let token = variableNameToObject({ name: tokenName, targetObject: data });
      const value = tokenData.$value.toString();
      let references = findTokenReferences(value) || [];
      const newValue = references.map((alias) => {
        return `{${key}.${modeName}.${getReferenceName(alias)}}`;
      }).join(" ");
      Object.assign(token, tokenData, {
        $value: newValue || value,
        scopes: []
        // i want these to stay private
      });
    });
    brandTokens[modeName] = data;
  });
  return brandVariantRecord;
}
function remapPrimaryVariables(exportedData, getPath) {
  const exportData = exportedData.map((record) => {
    const modeName = record.mode;
    const tokens2 = record.tokens;
    const data = {};
    Object.entries(tokens2).forEach(([tokenName, tokenData]) => {
      let token = variableNameToObject({ name: tokenName, targetObject: data });
      const name = figmaAliasToDesignTokens(getReferenceName(tokenName));
      const path = getPath(modeName);
      token = Object.assign(token, tokenData, {
        $value: `{${path}.${name}}`
      });
    });
    record.tokens = data;
    return record;
  });
  return exportData;
}
async function exportToJSON(exportParams, formData) {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const files = [];
  for (const collection2 of collections) {
    const exportedData = await exportFigmaVariableCollection(collection2, exportParams.jsonColorFormat);
    exportedData.forEach((record) => {
      const tokens2 = record.tokens;
      const data = expandTokenNameToObject(tokens2);
      record.tokens = data;
    });
    files.push(...exportedData);
  }
  const textStyles = await figma.getLocalTextStylesAsync();
  const effectStyles = await figma.getLocalEffectStylesAsync();
  const exportedTextStyles = await exportTextStyles(textStyles);
  const exportedEffectStyles = await exportEffectStyles(effectStyles, exportParams.jsonColorFormat);
  exportedTextStyles && files.push(exportedTextStyles);
  exportedEffectStyles && files.push(exportedEffectStyles);
  return files;
}
async function exportBrandVariantToJSON(params, formData) {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const brandModeName = formData.primary;
  let brandVariantCollection = makeBrandVariantRecord(brandModeName);
  const files = [brandVariantCollection];
  for (const collection2 of collections) {
    const exportedCollectionData = await exportFigmaVariableCollection(collection2, params.brandColorFormat);
    if (params.createColorTokens && collection2.name == collectionNames.get("themeColors")) {
      brandVariantCollection = exportBrandThemeTokens("theme", brandVariantCollection, exportedCollectionData);
      brandVariantCollection.tokens.theme["color"] = {
        "$type": "string",
        "scopes": [
          "ALL_SCOPES"
        ],
        "$value": toCamelCase(brandModeName)
      };
      files.push(...remapPrimaryVariables(exportedCollectionData, (modeName) => {
        return `theme.${toCamelCase(modeName)}`;
      }));
    }
    if (params.createComponentTokens && collection2.name == collectionNames.get("componentColors")) {
      importBrandSpecificTokens(collection2, "component", exportedCollectionData, files, brandVariantCollection);
    }
    const isBrandSpecificCollection = (collection22) => {
      return collection22.name == collectionNames.get("typeFace") || collection22.name == collectionNames.get("typeScale") || collection22.name == collectionNames.get("radii") || collection22.name == collectionNames.get("spacing");
    };
    if (params.createTypographyTokens && isBrandSpecificCollection(collection2)) {
      importBrandSpecificTokens(collection2, "brand", exportedCollectionData, files, brandVariantCollection);
    }
  }
  return files;
}
function expandTokenNameToObject(tokens2) {
  const data = {};
  Object.entries(tokens2).forEach(([tokenName, tokenData]) => {
    let token = variableNameToObject({ name: tokenName, targetObject: data });
    Object.assign(token, tokenData);
  });
  return data;
}
function importBrandSpecificTokens(collection2, targetKey, exportedCollectionData, files, brandVariantCollection) {
  const defaultModeId = collection2.defaultModeId;
  const defaulttMode = collection2.modes.find((mode2) => mode2.modeId === defaultModeId);
  const exportData = exportedCollectionData.find((record) => record.mode === defaulttMode.name);
  const data = expandTokenNameToObject(exportData.tokens);
  brandVariantCollection.tokens[targetKey] = Object.assign(brandVariantCollection.tokens[targetKey], data);
  files.push(...remapPrimaryVariables([exportData], (modeName) => {
    return `${targetKey}`;
  }));
  return brandVariantCollection;
}
async function getTokenValueFromVariable(value, variable, colorFormat) {
  const type2 = value["type"];
  if (type2 === "VARIABLE_ALIAS") {
    const alias = await getAliasName(value["id"]);
    return alias;
  }
  if (variable.resolvedType == "COLOR") {
    return convertFigmaColorToRgb(value, colorFormat);
  }
  return `${value}`;
}
async function exportFigmaVariableCollection(collection2, colorFormat = "hsl") {
  const collections = [];
  const variableReferences = collection2.variableIds.sort();
  const typeNames = /* @__PURE__ */ new Map([
    ["COLOR", "color"],
    ["BOOLEAN", "boolean"],
    ["FLOAT", "number"],
    ["STRING", "string"]
  ]);
  for (const mode2 of collection2.modes) {
    const collectionRecord = {
      type: "variables",
      collection: collection2.name,
      mode: mode2.name,
      tokens: {}
    };
    for (const variableId of variableReferences) {
      const figmaVariable = await figma.variables.getVariableByIdAsync(variableId);
      const {
        name,
        resolvedType,
        scopes,
        valuesByMode
      } = figmaVariable;
      console.log(name);
      const value = valuesByMode[mode2.modeId];
      const token = {
        $type: typeNames.get(resolvedType),
        $value: await getTokenValueFromVariable(value, figmaVariable, colorFormat),
        scopes,
        description: figmaVariable.description || ""
      };
      collectionRecord.tokens[name] = token;
    }
    collections.push(collectionRecord);
  }
  return collections;
}
async function exportTextStyles(styles2) {
  if (styles2.length == 0) {
    return null;
  }
  const collection2 = {
    type: "textStyles",
    collection: "Text Styles",
    mode: "default",
    tokens: {}
  };
  for (const style of styles2) {
    const name = style.name;
    let token = variableNameToObject({ name, targetObject: collection2.tokens });
    Object.assign(token, {
      $value: await convertFigmaTextStyleToToken(style),
      $type: "typography"
    });
  }
  return collection2;
}
async function exportEffectStyles(styles2, colorFormat) {
  if (styles2.length == 0) {
    return null;
  }
  const collection2 = {
    type: "effectStyles",
    collection: "Effect Styles",
    mode: "default",
    tokens: {}
  };
  for (const style of styles2) {
    const name = style.name;
    let token = variableNameToObject({ name, targetObject: collection2.tokens });
    Object.assign(token, {
      $value: await convertFigmaEffectStyleToToken(style, colorFormat),
      $type: "effect",
      description: style.description || ""
    });
  }
  return collection2;
}
async function importFromJSON(data, params) {
  const collections = [];
  const uniqueCollections = data.filter((record) => {
    const collectionName = record.collection;
    if (!collections.includes(collectionName)) {
      collections.push(collectionName);
      return true;
    }
    return false;
  });
  let tokensDictionary = {};
  uniqueCollections.forEach((collectionRecord) => {
    const flatTokens = flattenObject(collectionRecord.tokens);
    tokensDictionary = __spreadValues(__spreadValues({}, tokensDictionary), flatTokens);
  });
  addToGlobalTokensDictionary(tokensDictionary);
  while (uniqueCollections.length) {
    const collectionRecord = uniqueCollections.shift();
    if (collectionRecord.type == "variables") {
      await getCollectionAndPrepareTokens({
        collectionName: collectionRecord.collection,
        modeName: collectionRecord.mode,
        data: flattenObject(collectionRecord.tokens),
        sortFn: getSortFnByCollectionName(collectionRecord.collection)
      });
      await delayAsync(5);
    }
  }
  debugger;
  let tokensCountTotal = 0;
  let tokensImportedCount = 0;
  data.forEach((collectionRecord) => {
    const flatTokens = flattenObject(collectionRecord.tokens);
    tokensCountTotal += Object.keys(flatTokens).length;
  });
  while (data.length) {
    const collectionRecord = data.shift();
    const flatTokens = flattenObject(collectionRecord.tokens);
    if (collectionRecord.type == "variables") {
      await importVariables({
        collectionName: collectionRecord.collection,
        modeName: collectionRecord.mode,
        data: flatTokens
      });
      await delayAsync(5);
      tokensImportedCount += Object.keys(flatTokens).length;
      console.log(`Imported ${tokensImportedCount} out of ${tokensCountTotal}`);
    }
    if (collectionRecord.type == "textStyles") {
      await importTextStyles(tokensDictionary);
      await delayAsync(5);
    }
    if (collectionRecord.type == "effectStyles") {
      await importEffectStyles(flatTokens, tokensDictionary);
      await delayAsync(5);
    }
  }
}
function getSortFnByCollectionName(name) {
  const references = {
    "Color Theme": getColorTokensSortFn(),
    "Brand Variant": getColorTokensSortFn(),
    "Component Colors": getColorTokensSortFn(),
    "Opacity": getAlphaNumTokensSortFn(),
    "Spacing": getSizeTokensSortFn(),
    "Radii": getSizeTokensSortFn(),
    "Global Sizing": getAlphaNumTokensSortFn()
  };
  return references[name];
}
console.clear();
function checkImportOptions(params) {
  return params.createComponentTokens || params.createColorTokens || params.createElevationTokens || params.createSpacingTokens || params.createRadiiTokens || params.createTypographyTokens || params.createOpacityTokens || params.createGlobalSizeTokens;
}
const handlers = {
  params: {},
  message: {},
  process: async function(message) {
    await this[message.type](message.params, message);
  },
  refreshUI: async function(params) {
    figma.ui.postMessage({
      type: "REFRESH_UI",
      data: {
        colorSystemVersion: await getColorSystemVersion(),
        customDarkMode: isCustomDarkMode(),
        params
      }
    });
  },
  IMPORT: async function(params, message) {
    setTheme(params);
    save();
    if (checkImportOptions(params) === false) {
      figma.ui.postMessage("IMPORT_COMPLETED");
      return figma.notify("Psst, you may want to check your import options, seems like you turned everything OFF");
    }
    const colorSystemVersion = await getColorSystemVersion(true);
    if (colorSystemVersion == 1) {
      await this.UPGRADE_TEXT_COLORS(params, message);
    }
    await delayAsync(10);
    await initiateImport();
    await importAllTokens();
  },
  GET_EXPORT_DATA: async function(params, message) {
    figma.ui.postMessage({ type: "EXPORT_RESULT_PRESET", exportRecords: serialize$1() });
    await exportToJSON(message.exportJSONParams).then((exportRecords) => {
      figma.ui.postMessage({ type: "EXPORT_RESULT_JSON", exportRecords });
    });
    await exportBrandVariantToJSON(message.exportBrandParams, params).then((exportRecords) => {
      figma.ui.postMessage({ type: "EXPORT_RESULT_BRAND", exportRecords });
    });
  },
  IMPORT_JSON: async function(params, message) {
    addToGlobalTokensDictionary(__spreadValues(__spreadValues({}, getGlobalNeutrals(params)), getTypographyTokens(params.baseFontSize, params.typeScale)));
    setSelectedLibrary(message.importJSONParams.tokenLibraryName);
    await importFromJSON(message.data).catch((error) => {
      console.error(error);
      figma.ui.postMessage("IMPORT_COMPLETED");
      figma.notify(error.message, { error: true });
    });
    figma.notify(`Figma variables has been imported`);
    figma.ui.postMessage("IMPORT_COMPLETED");
  },
  ALERT: async function(params, message) {
    figma.notify(`${message.data}`, message.alertParams || {});
  },
  RENDER_ACCENTS: async function(params, message) {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    const frameLightPalette = renderAccents(params, "Global Accents");
    figma.currentPage.selection = [frameLightPalette];
    figma.viewport.scrollAndZoomIntoView([frameLightPalette]);
  },
  RENDER_NEUTRALS: async function(params, message) {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    const neutralTokens = generateNeutrals(params);
    const resultFrame = renderNeutrals(neutralTokens, `Global Neutrals`);
    figma.currentPage.selection = [resultFrame];
    figma.viewport.scrollAndZoomIntoView([resultFrame]);
  },
  UPGRADE_TEXT_COLORS: async function(params, message) {
    await upgradeTextPalette(params);
    await this.refreshUI(params);
  },
  START_ELEVATION_COMPONENTS: async function(params, message) {
    figma.ui.postMessage({
      type: "START_ELEVATION_COMPONENTS",
      data: {
        pages: figma.root.children.map((node) => node.name),
        currentPage: figma.currentPage.name
      }
    });
  },
  CREATE_ELEVATION_COMPONENTS: async function(params, message) {
    const page = message.options["componentPage"];
    await createUpdateElevationComponents(params, page).catch((error) => {
      figma.notify(error.message, { error: true });
    });
  },
  CENTER_WINDOW: function(message) {
    let pluginWidth = 520, pluginHeight = 800, zoom = figma.viewport.zoom, centerX = Math.round(figma.viewport.center.x - zoom / 2) - pluginWidth / 2, centerY = Math.round(figma.viewport.center.y - zoom / 2) - pluginHeight / 2;
    figma.ui.reposition(centerX, centerY);
  },
  UI_READY: async function(params, message) {
    const colorSystemVersion = await getColorSystemVersion(true);
    await getStoreData();
    load();
    figma.ui.postMessage({
      type: "REFRESH_UI",
      data: {
        colorSystemVersion,
        customDarkMode: isCustomDarkMode(),
        params: getTheme("light"),
        tokenLibraries: serialize()
      }
    });
  },
  UPDATE: async function(params, message) {
    setTheme(params);
  },
  RESET: async function(params, message) {
    resetDefaults();
    await this.refreshUI(getTheme("light"));
  },
  UPDATE_ACTIVE_THEME: async function(params, message) {
    const selectedThemeData = getTheme(params.theme);
    selectedThemeData.theme = params.theme;
    await this.refreshUI(selectedThemeData);
  },
  MATCH_HUE_BRAND: async function(params, message) {
    const brandColor = params.primary;
    const brandHUE = params[brandColor];
    params.hue = brandHUE;
    setTheme(params);
    await this.refreshUI(params);
  },
  ENABLE_CUSTOM_DARK_MODE: async function(params, message) {
    enableCustomDarkMode();
    await this.refreshUI(params);
  },
  DISABLE_CUSTOM_DARK_MODE: async function(params, message) {
    disableCustomDarkMode();
    await this.refreshUI(params);
  },
  IMPORT_GLOBAL_ACCENT_VARIABLES: async function(params, message) {
    const colors = flattenObject({
      "global": {
        "accent": generateGlobalAccentPalette(params)
      }
    });
    await importVariables({
      collectionName: "Global Colors",
      modeName: "Default",
      data: colors
    });
  },
  IMPORT_GLOBAL_NEUTRAL_VARIABLES: async function(params, message) {
    const colors = flattenObject({
      "global": {
        "neutral": getGlobalNeutrals(params)
      }
    });
    await importVariables({
      collectionName: "Global Colors",
      modeName: "Default",
      data: colors
    });
  }
};
function plugmaMain() {
  customShowUI(__html__, {
    width: 520,
    height: 800,
    themeColors: true
  });
  figma.ui.onmessage = async (eventData) => {
    var _a, _b;
    console.log("code received message", eventData);
    if (((_a = eventData.params) == null ? void 0 : _a.hue) == 0 && ((_b = eventData.params) == null ? void 0 : _b.saturation) == 0) {
      debugger;
    }
    await handlers.process(eventData);
  };
}
plugmaMain();
