import replace from "gulp-replace"; //Пошук та заміна
import plumber from "gulp-plumber"; //Обробка помилок
import notify from "gulp-notify"; //Повідомлення (підказки)
import browsersync from "browser-sync"; //Локальний сервер

//Експортування об'єктів
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
}