[фікс помилки з картами](https://stackoverflow.com/questions/61339968/error-message-devtools-failed-to-load-sourcemap-could-not-load-content-for-chr)


Налаштування для pug

[Youtube-link](https://youtu.be/jU88mLuLWlk?t=2644)

## Gulp

[Збірки + Patreon контент](https://github.com/vlad13578/gulp-patreon)

[Youtube-link](https://youtu.be/jU88mLuLWlk)

Gulp - це менеджер завдань і збирач проєктів. Що вміє Gulp? Самостійно конвертує і під'єднує шрифти, а також записує під'єднання у файл стилів. Оновлює браузер. Збирає в один кілька HTML\PUG файлів. Працює з CSS препроцесорами, наприклад SASS(SCSS) і оптимізує їх. Не тільки стискає зображення, а й конвертує їх у сучасний формат WEBP, а також самостійно підключає результат до HTML і CSS файлів. Збирає в один кілька JavaScript файлів за допомогою WEBPACK, оптимізує і стискає їх. Є можливість працювати в синтаксисі ES6. Вміє створювати SVG спрайти, створювати ZIP-архів із результатом, надсилати готову верстку на FTP-сервер і багато іншого!

Якщо виникає помилка: "[HTML] Error: Callback called multiple times"...
Переконайтеся, що тег img написаний в один рядок, шлях до картинки вказано без кирилиці та пробілів.


import { deleteAsync } from "del"; 

Версії плагінів

```
  "devDependencies": {
    "browser-sync": "^2.29.3",
    "del": "^7.0.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^8.0.0",
    "gulp-clean-css": "^4.3.0",
    "gulp-file-include": "^2.3.0",
    "gulp-fonter": "^0.3.0",
    "gulp-fonter-fix": "^0.0.1",
    "gulp-group-css-media-queries": "^1.2.2",
    "gulp-if": "^3.0.0",
    "gulp-imagemin": "^8.0.0",
    "gulp-newer": "^1.4.0",
    "gulp-notify": "^4.0.0",
    "gulp-plumber": "^1.2.1",
    "gulp-rename": "^2.0.0",
    "gulp-replace": "^1.1.4",
    "gulp-sass": "^5.1.0",
    "gulp-svg-sprite": "^2.0.3",
    "gulp-ttf2woff2": "^4.0.1",
    "gulp-version-number": "^0.2.4",
    "gulp-webp": "^4.0.1",
    "gulp-webp-html-nosvg": "^1.1.1",
    "gulp-webpcss": "^1.1.1",
    "gulp-zip": "^5.1.0",
    "sass": "^1.63.6",
    "swiper": "^10.0.4",
    "webp-converter": "^2.2.3",
    "webpack": "^5.88.2",
    "webpack-stream": "^7.0.0"
  }
```