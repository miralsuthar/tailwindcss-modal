const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      postcss({
        plugins: [
          tailwindcss({
            purge: ['./src/**/*.tsx'],
            darkMode: false, // or 'media' or 'class'
            theme: {
              extend: {},
            },
            variants: {
              extend: {},
            },
            plugins: [],
          }),
          autoprefixer(),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      }),
      ...config.plugins,
    ];

    return config;
  },
};
