const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        // './dist/*.html',
        './source-foundation/src/ui/*.html',
        './src/**/*.{ts, html, css}',
    ],
    presets: [
        require('./tw/source-preset')
    ]
}

