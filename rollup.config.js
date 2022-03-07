import { babel } from '@rollup/plugin-babel';

const config = {
    input: 'src/main.jsx',
    output: {
        dir: 'output',
        format: 'esm',
    },
    plugins: [babel({ babelHelpers: 'bundled' })],
};

export default config;
