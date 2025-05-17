const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './source-foundation/src/ui/*.html',
        './source-foundation/**/*.{ts, html, css}',
    ],
    theme: {
        fontFamily: { 
            'mono': ['"JetBrains Mono"', 'ui-monospace']
        }
    },
    presets: [
        require('./tw/source-preset')
    ]
}

