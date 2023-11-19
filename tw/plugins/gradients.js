const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
        {
            'gradient-tint': (value) => ({
                '--angle': '180deg',
                '--bg-image': `linear-gradient(var(--angle), rgba(255 255 255 / ${value}), transparent)`,
                '--bg-blend-mode': 'overlay',
                'background-blend-mode': 'var(--bg-blend-mode)',
                'background-image': 'var(--bg-image)'
            }),
            'gradient-shade': (value) => ({
                '--angle': '0deg',
                '--bg-image': `linear-gradient(var(--angle), rgba(0 0 0 / ${value}), transparent)`,
                '--bg-blend-mode': 'overlay',
                'background-blend-mode': 'var(--bg-blend-mode)',
                'background-image': 'var(--bg-image)'
            })
        },
        {
            values: theme('opacity')
        }
    )
    matchUtilities(
        {
            'gradient-mix': (value) => ({
                '--angle': '180deg',
                '--bg-image': `linear-gradient(var(--angle), ${value}, transparent)`,
                'background-image': 'var(--bg-image)'
            })
        },
        {
            values: theme('colors')
        }
    )

    matchUtilities(
        {
            'gradient-angle': (value) => ({
                '--angle': value
            })
        },
        {
            values: {
                '0': '0deg',
                '45': '45deg',
                '90': '90deg',
                '135': '135deg',
                '180': '180deg',
                '225': '225deg',
                '270': '270deg',
                '315': '315deg',

            }
        }
    )
});