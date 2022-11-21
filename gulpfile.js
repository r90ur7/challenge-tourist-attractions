const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function watcher(){
    watch('src/styles/**/*.scss',{ignoreinicial:false},styles)
    watch('src/templates/**/*.html',{ignoreinicial:false},index)
    // watch('src/styles/**/*.scss',{ignoreinicial:false},styles)
}

function styles() {
    return gulp.src("./src/styles/Main.scss")
    .pipe(sass({outputStyle:"compressed"}).on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    }

function index() {
    return src("./src/templates/index.html")
    .pipe(dest('dist'))
    }
        exports.index = index;
        exports.watcher = watcher;