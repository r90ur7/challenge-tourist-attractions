const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserify = require('browserify');
const babelify =require('babelify');
const source = require("vinyl-source-stream");
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const connect = require('gulp-connect');
// const image = require('gulp-image');
// const webp = require('gulp-webp');
const path={
    html:{
        all:"src/templates/**/*.html",
    },
    styles:{
        all:"src/styles/**/*.scss",
        main:"src/styles/Main.scss"

    },
    scripts:{
        all:"src/scripts/**/*.js",
        main:"src/scripts/apps.js"

    },
    Images:"src/assets/img/**/**",
    output:"docs",
    outputimg:"docs/img",
};

function server(){
        connect.server({
            root: path.output,
            livereload: true,
            port: 5000,
    })
    }

    function sentinel(){
        watch(path.html.all,{ignoreInitial:false},html);
        watch(path.Images,{ignoreInitial:false},Image);
        watch(path.styles.all,{ignoreInitial:false},styles);
        watch(path.scripts.all,{ignoreInitial:false},scripts);
    }

function styles() {
    return src(path.styles.main)
    .pipe(sass({outputStyle:"compressed"}).on('error', sass.logError))
    .pipe(dest(path.output))
    .pipe(connect.reload());
    }

    function scripts(){
        return browserify((path.scripts.main))
        .transform(
            babelify.configure({
            presets: ["@babel/preset-env"],
            })
        )
        .bundle()
        .pipe(source("bundle.min.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(dest(path.output))
        .pipe(connect.reload())
    }
function html() {
    return src(path.html.all)
    .pipe(dest(path.output))
    .pipe(connect.reload());
    }
function Image() {
    return src(path.Images)
    .pipe(dest(path.outputimg))
    .pipe(connect.reload());
    }

        exports.default = parallel(server,sentinel);
        exports.build = parallel(html, styles, scripts, Image);
        // exports.server = server;