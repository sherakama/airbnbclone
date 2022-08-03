/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          100: '#FF385C',
        },
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      fontFamily: {
        'jakarta': ['PlusJakartaSans', 'sans-serif'],
        'jakarta-bold': ['PlusJakartaSansBold', 'sans-serif'],
        'jakarta-xbold': ['PlusJakartaSansExtraBold', 'sans-serif'],
        'jakarta-sbold': ['PlusJakartaSansSemiBold', 'sans-serif'],
        'jakarta-light': ['PlusJakartaSansLight', 'sans-serif'],
        'jakarta-xlight': ['PlusJakartaSansExtraLight', 'sans-serif'],
        'jakarta-medium': ['PlusJakartaSansMedium', 'sans-serif'],
      }
    },
  },
  plugins: [
    // Add our own variants for convenience
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('group-hocus', [
        ':merge(.group):focus &',
        ':merge(.group):hover &',
      ]);
      addVariant('children', '& > *');
    }),

    // 3rd Party Plugins;
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
