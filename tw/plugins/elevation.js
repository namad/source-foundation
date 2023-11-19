const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, addUtilities, theme }) {
    matchUtilities(
        {
            'inner-shadow': (value) => ({
                '--inner-shadow-color': 'var(--utility-shade-200)',
                '--inner-shadow-opacity': '100%',
                '--box-inner-shadow-color': `color-mix(in srgb, var(--inner-shadow-color), transparent calc(100% - var(--inner-shadow-opacity)))`,
                '--box-inner-shadow': value,
                'box-shadow': 'var(--box-inner-shadow)'
            })
        },
        {
            values: theme('innerShadow')
        }
    )

    matchUtilities(
        {
            'shadow': (value) => ({
                '--shadow-color': 'var(--utility-shade-200)',
                '--shadow-opacity': '100%',
                '--box-shadow-color': `color-mix(in srgb, var(--shadow-color), transparent calc(100% - var(--shadow-opacity)))`,
                '--box-shadow': value,
                'box-shadow': 'var(--box-shadow)'
            }),
        },
        {
            values: theme('boxShadow')
        }
    )

    matchUtilities(
        {
            'shadow': (value) => ({
                '--shadow-color': value,
                '--shadow-opacity': '100%'
            }),
            'inner-shadow': (value) => ({
                '--inner-shadow-color': value,
                '--inner-shadow-opacity': '100%'
            }),
        },
        {
            values: theme('colors')
        }
    )

    matchUtilities(
        {
            'shadow-opacity': (value) => ({
                '--shadow-opacity': `${parseFloat(value) * 100}%`
            }),
            'inner-shadow-opacity': (value) => ({
                '--inner-shadow-opacity': `${parseFloat(value) * 100}%`
            }),
        },
        {
            values: theme('opacity')
        }
    )

    addUtilities(
        {
            '.shadow-multiply': {
                'box-shadow': 'none',
                'position': 'relative',
                '&::after': {
                    'pointer-events': 'none',
                    'content': '""',
                    'position': 'absolute',
                    'top': '0',
                    'right': '0',
                    'left': '0',
                    'bottom': '0',
                    'border-radius': 'inherit',
                    'mix-blend-mode': 'multiply',
                    'box-shadow': 'var(--box-shadow)'
                }
            },
            '.shadows': {
                'box-shadow': 'var(--box-shadow), var(--box-inner-shadow)'
            },
            
        }
    )
});