const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './dist/*.html',
        './src/**/*.{ts, html, css}',
    ],
    presets: [
        require('./tw/source-preset')
    ]
}

