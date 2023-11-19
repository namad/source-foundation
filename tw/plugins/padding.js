const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {

    const values = theme('spacing');
    const parseValue = (string) => {
        const parts = string.split('/');
        const spacing = parts[0];
        const offset = parts[1];

        const spacingValue = values[spacing];

        if (offset) {
            return `calc(${spacingValue} - var(--border-width, ${offset}px))`;
        }
        else {
            return spacingValue || string;
        }
    }

    matchUtilities(
        {
            'pb': (value) => ({
                '--padding-b': parseValue(value),
                'padding-bottom': 'var(--padding-b)'
            }),
            'pt': (value) => ({
                '--padding-t': parseValue(value),
                'padding-top': 'var(--padding-t)',
            }),
            'pr': (value) => ({
                '--padding-r': parseValue(value),
                'padding-right': 'var(--padding-r)'
            }),
            'pl': (value) => ({
                '--padding-l': parseValue(value),
                'padding-left': 'var(--padding-l)',
            }),
            'p': (value) => ({
                '--padding': parseValue(value),
                'padding': 'var(--padding)'
            }),
            'py': (value) => ({
                '--padding-y': parseValue(value),
                'padding-top': 'var(--padding-y)',
                'padding-bottom': 'var(--padding-y)'
            }),
            'px': (value) => ({
                '--padding-x': parseValue(value),
                'padding-left': 'var(--padding-x)',
                'padding-right': 'var(--padding-x)'
            }),
            'ps': (value) => ({
                '--padding-s': parseValue(value),
                'padding-inline-start': 'var(--padding-s)',
            }),
            'pe': (value) => ({
                '--padding-e': parseValue(value),
                'padding-inline-end': 'var(--padding-e)',
            }),
        },
        {
            values: values
        }
    )
});