// https://w3collective.com/gulp-frontend-workflow/

// complie CSS: gulp css
const {
    src,
    dest,
    watch
} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css() {
    return src("./src/css/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("./public/dist/assets/"));
}
exports.css = css;


// complie JS: gulp js
const concat = require("gulp-concat");

function js() {
    return src("./src/js/**/*.js")
        .pipe(concat("script.js"))
        .pipe(dest("./public/dist/assets/"));
}
exports.js = js;


// comlie PUG: gulp html
const pug = require("gulp-pug");

function html() {
    return src("./src/views/**/*.pug")
        .pipe(pug({
            pretty: true,
        }))
        .pipe(dest("./public/dest"));
}
exports.html = html;


// watch files changes
exports.watch = function () {
    watch("./src/css/**/*.scss", css);
    watch("./src/views/**/*.pug", html);
    watch("./src/js/**/*.js", js);
};