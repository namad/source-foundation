const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path')
module.exports = ((env, argv) => {

    if (argv.target == 'web') {
        return {
            mode: argv.mode === 'production' ? 'production' : 'development',

            // This is necessary because Figma's 'eval' works differently than normal eval
            devtool: argv.mode === 'production' ? false : 'inline-source-map',

            entry: {
                // import: path.resolve(__dirname, 'source-foundation/src/ui/import.ts'), // The entry point for your UI code
                ui: path.resolve(__dirname, 'source-foundation/src/ui-react/index.tsx'), // The entry point for your UI code
                plugin: path.resolve(__dirname, 'source-foundation/src/main.ts'), // The entry point for your plugin code
            },

            stats: {
                all: undefined,
                errorDetails: true
            },

            module: {
                rules: [
                    // Converts TypeScript code to JavaScript
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },

                    // Enables including CSS by doing "import './file.css'" in your TypeScript code
                    {
                        test: /\.css$/,
                        use: [
                            { loader: 'style-loader' },
                            { loader: 'css-loader' },
                            { loader: 'postcss-loader' }
                        ],
                        include: [
                            path.resolve(__dirname, 'source-foundation/src/ui-react')
                        ]
                    },

                    // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
                    {
                        test: /\.(png|jpg|gif|webp|svg)$/,
                        loader: 'url-loader',
                        include: [
                            path.resolve(__dirname, 'source-foundation/src'),
                        ]                       
                    },
                ],
            },

            // Webpack tries these extensions for you if you omit the extension like "import './file'"
            resolve: { 
                extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.css'],
                plugins: [new TsconfigPathsPlugin()]
            },

            output: {
                publicPath: '/',
                filename: '[name].js',
                path: path.resolve(__dirname, 'source-foundation/dist'), // Compile into a folder called "dist"
            },
            optimization: {
                usedExports: true, // <- remove unused function
            },
            // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
            plugins: [
                // new BundleAnalyzerPlugin(),
                new webpack.DefinePlugin({
                    'global': {} // Fix missing symbol error when running in developer VM
                }),
                // new HtmlWebpackPlugin({
                //     template: path.resolve(__dirname, 'source-foundation/src/ui/import.html'),
                //     filename: 'import.html',
                //     inject: "body",
                //     inlineSource: '.(js|css)$',
                //     chunks: ['import'],
                // }),
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, 'source-foundation/src/ui-react/index.html'),
                    filename: 'ui.html',
                    cache: false,
                    chunks: ['ui'],
                }),
                new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
            ],

            watch: false
        }
    }
    else if (argv.target == 'node') {
        return {
            mode: argv.mode === 'production' ? 'production' : 'development',

            target: 'node',

            entry: {
                'export-css': './src/cli/export-css.ts', // The entry point for your plugin code
                'export-json': './src/cli/export-json.ts', // The entry point for your plugin code
            },

            stats: {
                all: undefined,
                errorDetails: true
            },

            module: {
                rules: [
                    // Converts TypeScript code to JavaScript
                    { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },

                    // Enables including CSS by doing "import './file.css'" in your TypeScript code
                    { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }] },

                    // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
                    { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
                ],
            },

            // Webpack tries these extensions for you if you omit the extension like "import './file'"
            resolve: {
                extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.css']
            },

            output: {
                publicPath: '/',
                filename: '[name].js',
                path: path.resolve(__dirname, 'cli'), // Compile into a folder called "lib"
            },

            // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
            plugins: [
                new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
            ],

            watch: false

        }
    }

})