import { defineConfig } from "vite";
import * as glob from "glob";
import path, { resolve } from "node:path";
import htmlPurge from 'vite-plugin-purgecss';

const getHtmlEntries = ()=>{
    return Object.fromEntries(
        [
            ...glob.sync('./**/*.html', { ignore:['./dist/**','./node_modules/**']}).map(file=>[
                file.slice(0, file.length - path.extname(file).length),
                resolve(__dirname, file)
            ])
        ]
    )
}

export default defineConfig(
    {
        appType: 'mpa',
        /*Agreagr carpeta raiz de github para desplegar los css */
        base: "/Portafolio-Less/",
        build: {
            rollupOptions: {
                input: getHtmlEntries()
            }
        },
        plugins: [
            htmlPurge({}),
        ]
    }
);