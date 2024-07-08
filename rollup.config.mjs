import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import styles from "rollup-plugin-styles";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [babel({ babelHelpers: 'bundled' }),
  image(),
  styles(),
  nodeResolve(),
  serve({ open: true }),
  livereload()]
};
