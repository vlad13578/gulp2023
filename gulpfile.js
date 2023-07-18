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

//Спостерігач за змінами в файлах
function watcher(){
    gulp.watch(path.watch.files, copy)
}

const dev = gulp.series(copy, watcher)

// Виконання сценарія за замовчуваннями
gulp.task('default', dev);

