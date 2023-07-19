// Отрумуємо імя папки проєкта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

// Шляхи до папки з вихідними кодами і папки з результатом
const buildFolder = `./dist`;
const srcFolder = `./src`;

// Шляхи до папок і файлів проекту
export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    rootFolder: rootFolder,
    srcFolder: srcFolder,
    ftp: ``, // Шлях до потрібної папки на віддаленому сервері. gulp додасть ім'я папки проекту автоматично
};
