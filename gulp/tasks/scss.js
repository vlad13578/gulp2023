import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SCSS",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(app.plugins.replace(/@img\//g, "../img/"))
        .pipe(sass({ outputstyle: `expanded` }))
        .pipe(rename({ extname:'.min.css' }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
};
