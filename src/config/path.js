import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const build = "./build";
const srcFolder = "./src";
const publicFolder = "./public";

export const path = {
    build: {
        images: `${build}/public/`,
        js:`${build}/`,
        css:`${build}/`,
        html:`${build}/`,
        files: `${build}/files/`,
    },
    src: {
        js: `${srcFolder}/script.js`,
        scss: `${srcFolder}/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${publicFolder}/**/*.{png, jpg, jpeg}`
    },
    watch: {
        js: `${srcFolder}/**/*.js`,
        scss: `${srcFolder}/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${publicFolder}/**/*.{png, jpg, jpeg}`
    },
    clean: build,
    buildFolder: build,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}