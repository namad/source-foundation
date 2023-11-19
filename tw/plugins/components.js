const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
    addComponents({
        '.ui-element': {
            '&:hover': {
                'position': 'relative',
                '&::before': {
                    'content': '" "',
                    'position': 'absolute',
                    'inset': '0',
                    'background-color': 'var(--alt-base-200)',
                    'border-radius': 'inherit',
                }
            },
            '&:active': {
                'position': 'relative',
                '&::before': {
                    'content': '" "',
                    'position': 'absolute',
                    'inset': '0',
                    'background-color': 'var(--alt-base-100)',
                    'border-radius': 'inherit'
                }
            }
        }
    })
})