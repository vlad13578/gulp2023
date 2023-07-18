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

// Виконання сценарія за замовчуваннями
gulp.task('default', copy);

