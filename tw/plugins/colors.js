const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
        {
            'color': (value) => ({
                '--text-color': value,
                'color': 'var(--text-color)'
            }),
            'bg': (value) => ({
                '--bg-color': value,
                'background-color': 'var(--bg-color)'
            }),
            'border': (value) => ({
                '--border-color': value,
                'border-color': 'var(--border-color)'
            }),
            'mix': (value) => ({
                'background-image': `linear-gradient(180deg, ${value}, ${value})`
            })
        },
        {
            values: theme('colors')
        }
    )
    matchUtilities(
        {
            'color-opacity': (value) => ({
                'color': `color-mix(in srgb, var(--text-color), transparent ${100 - parseFloat(value) * 100}%)`
            }),
            'bg-opacity': (value) => ({
                'background-color': `color-mix(in srgb, var(--bg-color), transparent ${100 - parseFloat(value) * 100}%)`
            }),
            'border-opacity': (value) => ({
                'border-color': `color-mix(in srgb, var(--border-color), transparent ${100 - parseFloat(value) * 100}%)`
            }),
            'shade': (value) => ({
                'background-image': `linear-gradient(180deg, hsla(0deg 0% 0% / ${value}), hsla(0deg 0% 0% / ${value}))`
            }),
            'tint': (value) => ({
                'background-image': `linear-gradient(180deg, hsla(0deg 0% 100% / ${value}), hsla(0deg 0% 100% / ${value}))`
            })
        },
        {
            values: theme('opacity')
        }
    )
})