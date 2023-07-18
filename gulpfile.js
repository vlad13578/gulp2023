// Імпорт основного модуля
import gulp from "gulp";
// Імпорт шляхів
import { path } from "./gulp/config/path.js";

// Передаємо значення в глобальну змінну
global.app = {
	gulp: gulp,
	path: path
}

//імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

//Спостерігач за змінами в файлах
function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

// Побудова сценаріїв виконання завдань
const dev = gulp.series(reset, mainTasks, watcher);

// Виконання сценарія за замовчуваннями
gulp.task('default', dev);

