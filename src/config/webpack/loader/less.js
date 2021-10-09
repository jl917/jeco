import CssWebpackPlugin from 'mini-css-extract-plugin';
import getLoader from './getLoader';
import css from './style_css';
import postcss from './style_postcss';

export default {
  test: /\.less$/,
  use: [
    CssWebpackPlugin.loader,
    css,
    postcss,
    {
      loader: getLoader('less-loader'),
      javascriptEnabled: true,
    },
  ],
};
