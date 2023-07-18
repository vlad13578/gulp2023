import replace from "gulp-replace"; //Пошук та заміна
import plumber from "gulp-plumber"; //Обробка помилок
import notify from "gulp-notify"; //Повідомлення (підказки)

//Експортування об'єктів
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
}