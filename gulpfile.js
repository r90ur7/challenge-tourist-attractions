const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const connect = require('gulp-connect');


function watcher(){
    watch('src/styles/**/*.scss',{ignoreinicial:false},styles)
    watch('src/templates/**/*.html',{ignoreinicial:false},index)
    // watch('src/styles/**/*.scss',{ignoreinicial:false},styles)
}

function styles() {
    return src("./src/styles/Main.scss")
    .pipe(sass({outputStyle:"compressed"}).on('error', sass.logError))
    .pipe(dest('dist'))
    }

function index() {
    return src("./src/templates/index.html")
    .pipe(dest('dist'))
    }

// function server(){
//         connect.server({
//             root: 'dist',
//             livereload: true
//     })
//     }
        exports.index = index;
        exports.watcher = watcher;
        // exports.server = server;