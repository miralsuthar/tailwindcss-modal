import '../src/components/TailwindcssModal/main.css';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
