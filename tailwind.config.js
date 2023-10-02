/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './dist/*.html',
        './src/**/*.{ts, html, css}',
    ],
    purge: [
        './dist/*.html',
        './src/**/*.{ts, html, css}',
    ],
    theme: {
        extend: {
            flex: {
                '3': '3 3 0%'
            },
            spacing: {
                "xs4": "var(--sx-xs4)",
                "xs3": "var(--sx-xs3)",
                "xs2": "var(--sx-xs2)",
                "xs": "var(--sx-xs)",
                "sm": "var(--sx-sm)",
                "base": "var(--sx-base)",
                "md": "var(--sx-md)",
                "lg": "var(--sx-lg)",
                "xl": "var(--sx-xl)",
                "xl3": "var(--sx-xl3)",
                "xl2": "var(--sx-xl2)",
                "xl4": "var(--sx-xl4)",
                "xl5": "var(--sx-xl5)",

                "sx-xs4": "var(--sx-xs4)",
                "sx-xs3": "var(--sx-xs3)",
                "sx-xs2": "var(--sx-xs2)",
                "sx-xs": "var(--sx-xs)",
                "sx-sm": "var(--sx-sm)",
                "sx-base": "var(--sx-base)",
                "sx-md": "var(--sx-md)",
                "sx-lg": "var(--sx-lg)",
                "sx-xl": "var(--sx-xl)",
                "sx-xl3": "var(--sx-xl3)",
                "sx-xl2": "var(--sx-xl2)",
                "sx-xl4": "var(--sx-xl4)",
                "sx-xl5": "var(--sx-xl5)",

                "sy-xs4": "var(--sy-xs4)",
                "sy-xs3": "var(--sy-xs3)",
                "sy-xs2": "var(--sy-xs2)",
                "sy-xs": "var(--sy-xs)",
                "sy-sm": "var(--sy-sm)",
                "sy-base": "var(--sy-base)",
                "sy-md": "var(--sy-md)",
                "sy-lg": "var(--sy-lg)",
                "sy-xl": "var(--sy-xl)",
                "sy-xl3": "var(--sy-xl3)",
                "sy-xl2": "var(--sy-xl2)",
                "sy-xl4": "var(--sy-xl4)",
                "sy-xl5": "var(--sy-xl5)",
            }
        },
        boxShadow: {
            "sm": "var(--elevation-1)",
            DEFAULT: "var(--elevation-2)",
            "md": "var(--elevation-3)",
            "lg": "var(--elevation-4)",
            "xl": "var(--elevation-5)",
            "2xl": "var(--elevation-6)"
        },
        colors: {
            "primary-600": "var(--primary-600)",
            "primary-500": "var(--primary-500)",
            "primary-400": "var(--primary-400)",
            "primary-300": "var(--primary-300)",
            "primary-200": "var(--primary-200: rgba)",
            "primary-100": "var(--primary-100: rgba)",
            "fill-base-600": "var(--fill-base-600)",
            "fill-base-500": "var(--fill-base-500)",
            "fill-base-400": "var(--fill-base-400)",
            "fill-base-300": "var(--fill-base-300)",
            "fill-base-200": "var(--fill-base-200)",
            "fill-base-100": "var(--fill-base-100)",
            "fill-contrast-600": "var(--fill-contrast-600)",
            "fill-contrast-500": "var(--fill-contrast-500)",
            "fill-contrast-400": "var(--fill-contrast-400)",
            "fill-contrast-300": "var(--fill-contrast-300)",
            "fill-contrast-200": "var(--fill-contrast-200)",
            "fill-contrast-100": "var(--fill-contrast-100)",
            "text-base-warning": "var(--text-base-warning)",
            "text-base-success": "var(--text-base-success)",
            "text-base-info": "var(--text-base-info)",
            "text-base-danger": "var(--text-base-danger)",
            "text-base-action": "var(--text-base-action)",
            "text-base-600": "var(--text-base-600)",
            "text-base-500": "var(--text-base-500)",
            "text-base-400": "var(--text-base-400)",
            "text-contrast-warning": "var(--text-contrast-warning)",
            "text-contrast-success": "var(--text-contrast-success)",
            "text-contrast-info": "var(--text-contrast-info)",
            "text-contrast-danger": "var(--text-contrast-danger)",
            "text-contrast-action": "var(--text-contrast-action)",
            "text-contrast-600": "var(--text-contrast-600)",
            "text-contrast-500": "var(--text-contrast-500)",
            "text-contrast-400": "var(--text-contrast-400)",
            "stroke-base-600": "var(--stroke-base-600)",
            "stroke-base-500": "var(--stroke-base-500)",
            "stroke-base-400": "var(--stroke-base-400)",
            "stroke-base-300": "var(--stroke-base-300)",
            "stroke-base-200": "var(--stroke-base-200)",
            "stroke-base-100": "var(--stroke-base-100)",
            "stroke-contrast-600": "var(--stroke-contrast-600)",
            "stroke-contrast-500": "var(--stroke-contrast-500)",
            "stroke-contrast-400": "var(--stroke-contrast-400)",
            "stroke-contrast-300": "var(--stroke-contrast-300)",
            "stroke-contrast-200": "var(--stroke-contrast-200)",
            "stroke-contrast-100": "var(--stroke-contrast-100)",
            "info-600": "var(--info-600)",
            "info-500": "var(--info-500)",
            "info-400": "var(--info-400)",
            "info-300": "var(--info-300)",
            "info-200": "var(--info-200: rgba)",
            "info-100": "var(--info-100: rgba)",
            "success-600": "var(--success-600)",
            "success-500": "var(--success-500)",
            "success-400": "var(--success-400)",
            "success-300": "var(--success-300)",
            "success-200": "var(--success-200: rgba)",
            "success-100": "var(--success-100: rgba)",
            "warning-600": "var(--warning-600)",
            "warning-500": "var(--warning-500)",
            "warning-400": "var(--warning-400)",
            "warning-300": "var(--warning-300)",
            "warning-200": "var(--warning-200: rgba)",
            "warning-100": "var(--warning-100: rgba)",
            "danger-600": "var(--danger-600)",
            "danger-500": "var(--danger-500)",
            "danger-400": "var(--danger-400)",
            "danger-300": "var(--danger-300)",
            "danger-200": "var(--danger-200: rgba)",
            "danger-100": "var(--danger-100: rgba)",
            "alt-base-600": "var(--alt-base-600)",
            "alt-base-500": "var(--alt-base-500)",
            "alt-base-400": "var(--alt-base-400)",
            "alt-base-300": "var(--alt-base-300)",
            "alt-base-200": "var(--alt-base-200)",
            "alt-base-100": "var(--alt-base-100)",
            "alt-contrast-600": "var(--alt-contrast-600)",
            "alt-contrast-500": "var(--alt-contrast-500)",
            "alt-contrast-400": "var(--alt-contrast-400)",
            "alt-contrast-300": "var(--alt-contrast-300)",
            "alt-contrast-200": "var(--alt-contrast-200)",
            "alt-contrast-100": "var(--alt-contrast-100)",
            "utility-white": "var(--utility-white)",
            "utility-transparent": "var(--utility-transparent: rgba)",
            "utility-tint-600": "var(--utility-tint-600)",
            "utility-tint-500": "var(--utility-tint-500)",
            "utility-tint-400": "var(--utility-tint-400)",
            "utility-tint-300": "var(--utility-tint-300)",
            "utility-tint-200": "var(--utility-tint-200)",
            "utility-tint-100": "var(--utility-tint-100)",
            "utility-shade-600": "var(--utility-shade-600)",
            "utility-shade-500": "var(--utility-shade-500)",
            "utility-shade-400": "var(--utility-shade-400)",
            "utility-shade-300": "var(--utility-shade-300)",
            "utility-shade-200": "var(--utility-shade-200)",
            "utility-shade-100": "var(--utility-shade-100)",
            "utility-black": "var(--utility-black)",
            "accent-red-600": "var(--accent-red-600)",
            "accent-red-500": "var(--accent-red-500)",
            "accent-red-400": "var(--accent-red-400)",
            "accent-red-300": "var(--accent-red-300)",
            "accent-red-200": "var(--accent-red-200)",
            "accent-red-100": "var(--accent-red-100)",
            "accent-amber-600": "var(--accent-amber-600)",
            "accent-amber-500": "var(--accent-amber-500)",
            "accent-amber-400": "var(--accent-amber-400)",
            "accent-amber-300": "var(--accent-amber-300)",
            "accent-amber-200": "var(--accent-amber-200)",
            "accent-amber-100": "var(--accent-amber-100)",
            "accent-brown-600": "var(--accent-brown-600)",
            "accent-brown-500": "var(--accent-brown-500)",
            "accent-brown-400": "var(--accent-brown-400)",
            "accent-brown-300": "var(--accent-brown-300)",
            "accent-brown-200": "var(--accent-brown-200)",
            "accent-brown-100": "var(--accent-brown-100)",
            "accent-green-600": "var(--accent-green-600)",
            "accent-green-500": "var(--accent-green-500)",
            "accent-green-400": "var(--accent-green-400)",
            "accent-green-300": "var(--accent-green-300)",
            "accent-green-200": "var(--accent-green-200)",
            "accent-green-100": "var(--accent-green-100)",
            "accent-teal-600": "var(--accent-teal-600)",
            "accent-teal-500": "var(--accent-teal-500)",
            "accent-teal-400": "var(--accent-teal-400)",
            "accent-teal-300": "var(--accent-teal-300)",
            "accent-teal-200": "var(--accent-teal-200)",
            "accent-teal-100": "var(--accent-teal-100)",
            "accent-cyan-600": "var(--accent-cyan-600)",
            "accent-cyan-500": "var(--accent-cyan-500)",
            "accent-cyan-400": "var(--accent-cyan-400)",
            "accent-cyan-300": "var(--accent-cyan-300)",
            "accent-cyan-200": "var(--accent-cyan-200)",
            "accent-cyan-100": "var(--accent-cyan-100)",
            "accent-blue-600": "var(--accent-blue-600)",
            "accent-blue-500": "var(--accent-blue-500)",
            "accent-blue-400": "var(--accent-blue-400)",
            "accent-blue-300": "var(--accent-blue-300)",
            "accent-blue-200": "var(--accent-blue-200)",
            "accent-blue-100": "var(--accent-blue-100)",
            "accent-indigo-600": "var(--accent-indigo-600)",
            "accent-indigo-500": "var(--accent-indigo-500)",
            "accent-indigo-400": "var(--accent-indigo-400)",
            "accent-indigo-300": "var(--accent-indigo-300)",
            "accent-indigo-200": "var(--accent-indigo-200)",
            "accent-indigo-100": "var(--accent-indigo-100)",
            "accent-violet-600": "var(--accent-violet-600)",
            "accent-violet-500": "var(--accent-violet-500)",
            "accent-violet-400": "var(--accent-violet-400)",
            "accent-violet-300": "var(--accent-violet-300)",
            "accent-violet-200": "var(--accent-violet-200)",
            "accent-violet-100": "var(--accent-violet-100)",
            "accent-purple-600": "var(--accent-purple-600)",
            "accent-purple-500": "var(--accent-purple-500)",
            "accent-purple-400": "var(--accent-purple-400)",
            "accent-purple-300": "var(--accent-purple-300)",
            "accent-purple-200": "var(--accent-purple-200)",
            "accent-purple-100": "var(--accent-purple-100)",
            "accent-pink-600": "var(--accent-pink-600)",
            "accent-pink-500": "var(--accent-pink-500)",
            "accent-pink-400": "var(--accent-pink-400)",
            "accent-pink-300": "var(--accent-pink-300)",
            "accent-pink-200": "var(--accent-pink-200)",
            "accent-pink-100": "var(--accent-pink-100)",
        },

        fontSize: {
            "xs2": ["var(--font-size-xs2)", "var(--line-height-xs2)"],
            "xs": ["var(--font-size-xs)", "var(--line-height-xs)"],
            "sm": ["var(--font-size-sm)", "var(--line-height-sm)"],
            "base": ["var(--font-size-base)", "var(--line-height-base)"],
            "md": ["var(--font-size-md)", "var(--line-height-md)"],
            "lg": ["var(--font-size-lg)", "var(--line-height-lg)"],
            "xl": ["var(--font-size-xl)", "var(--line-height-xl)"],
            "xl2": ["var(--font-size-xl2)", "var(--line-height-xl2)"],
            "xl3": ["var(--font-size-xl3)", "var(--line-height-xl3)"],
            "xl5": ["var(--font-size-xl5)", "var(--line-height-xl4)"],
            "xl6": ["var(--font-size-xl6)", "var(--line-height-xl5)"],
            "xl4": ["var(--font-size-xl4)", "var(--line-height-xl6)"],
            "xl7": ["var(--font-size-xl7)", "var(--line-height-xl7)"],
        },
        lineHeight: {
            "xs2": "var(--line-height-xs2)",
            "xs": "var(--line-height-xs)",
            "sm": "var(--line-height-sm)",
            "base": "var(--line-height-base)",
            "md": "var(--line-height-md)",
            "lg": "var(--line-height-lg)",
            "xl": "var(--line-height-xl)",
            "xl2": "var(--line-height-xl2)",
            "xl3": "var(--line-height-xl3)",
            "xl4": "var(--line-height-xl4)",
            "xl5": "var(--line-height-xl5)",
            "xl6": "var(--line-height-xl6)",
            "xl7": "var(--line-height-xl7)",
        },
        borderRadius: {
            "none": "var(--radii-none)",
            "sm": "var(--radii-sm)",
            "xl": "var(--radii-xl)",
            DEFAULT: "var(--radii-base)",
            "md": "var(--radii-md)",
            "lg": "var(--radii-lg)",
            "round": "var(--radii-round)",
        },
    },
    plugins: [],
}

