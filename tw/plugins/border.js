const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
        {
            'border': (value) => ({
                '--border-width': value
            })
        },
        {
            values: theme('borderWidth')
        }
    )
    matchUtilities(
        {
            'border-shadow': (value) => ({
                'box-shadow': `inset 0 0 0 1px ${value}`
            }),
            'border-shadow-2': (value) => ({
                'box-shadow': `inset 0 0 0 2px ${value}`
            }),
            'border-shadow-3': (value) => ({
                'box-shadow': `inset 0 0 0 3px ${value}`
            }),
            'border-shadow-4': (value) => ({
                'box-shadow': `inset 0 0 0 4px ${value}`
            }),
            'border-outline': (value) => ({
                'outline': `1px solid ${value}`,
                'outline-offset': '-1px',
            }),
            'border-outline-2': (value) => ({
                'outline': `2px solid ${value}`,
                'outline-offset': '-2px',
            }),
            'border-shadow-3': (value) => ({
                'outline': `3px solid ${value}`,
                'outline-offset': '-3px',
            }),
            'border-shadow-4': (value) => ({
                'outline': `4px solid ${value}`,
                'outline-offset': '-4px',
            })
        },
        {
            values: theme('colors')
        }
    )
});