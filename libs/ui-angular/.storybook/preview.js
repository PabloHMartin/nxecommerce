import '!style-loader!css-loader!sass-loader!./preview.scss';
import { create } from '@storybook/theming';
import { addDecorator, addParameters, configure } from '@storybook/angular';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

// export const theme = create({
//   base: 'light',
//   brandTitle: 'My Ecommerce',
//   //   brandImage: '/',
// });

// addParameters({
//   options: {
//     theme,
//   },
// });
configure(require.context('../../ui-angular', true, /\.stories\.ts?$/), module);
