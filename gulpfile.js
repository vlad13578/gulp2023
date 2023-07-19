// Імпорт основного модуля
import gulp from "gulp";
// Імпорт шляхів
import { path } from "./gulp/config/path.js";
//Імпорт спільних плагінів
import { plugins } from "./gulp/config/plugins.js";

// Передаємо значення в глобальну змінну
global.app = {
    gulp: gulp,
    path: path,
    plugins: plugins,
};

//імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fonstStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";

export { svgSprive }

//Спостерігач за змінами в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}
// Послідовна обробка шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle);

//Основні задачі
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Побудова сценаріїв виконання завдань
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Виконання сценарія за замовчуваннями
gulp.task("default", dev);
