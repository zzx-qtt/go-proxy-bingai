import compiler from '@ampproject/rollup-plugin-closure-compiler';

// rollup.config.mjs
// ---cut-start---
/** @type {import('rollup').RollupOptions} */
// ---cut-end---
export default {
    input: 'cloudflare/worker.js',
    output: [
        {
            file: 'worker.js',
            format: 'es',
        }
    ],
    plugins:[
        compiler({
            compilation_level:"ADVANCED"
        })
    ]
};