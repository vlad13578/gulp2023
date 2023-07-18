// Отрумуємо імя папки проєкта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

// Шляхи до папки з вихідними кодами і папки з результатом
const buildFolder = `./dist`;
const srcFolder = `./src`;

// Шляхи до папок і файлів проекту
export const path = {
    build: {
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    rootFolder: rootFolder,
    srcFolder: srcFolder,
    ftp: ``, // Шлях до потрібної папки на віддаленому сервері. gulp додасть ім'я папки проекту автоматично
};
