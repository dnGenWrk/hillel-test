import gulp from "gulp";
import miniHTML from "gulp-htmlmin";
import concat from "gulp-concat";
import { deleteAsync } from "del";
import stripDebug from "gulp-strip-debug";
import uglify from "gulp-uglify";
import gulpBabel from "gulp-babel";
import sass from "sass";
import gulpSass from "gulp-sass";
import connect from "gulp-connect";

const src = "./src";
const dest = "./dist";
const htmlPath = `${src}/**/*.html`;
//const scriptsPath = `${src}/**/*.js`;
const scriptsPath = ["./src/scripts/lib/functionTag.js", "./src/scripts/main.js"];
const scssPath = `${src}/scss/*.scss`;

const reset = () => {
  return deleteAsync(dest);
};

const copy = () => {
  return gulp.src([`${src}/**/*.*`, "./favicon.ico", `!${htmlPath}`, `!${scriptsPath}`, `!${scssPath}`]).pipe(gulp.dest(`${dest}`));
};

const html = () => {
  return gulp
    .src(htmlPath)
    .pipe(miniHTML({ collapseWhitespace: true }))
    .pipe(gulp.dest(`${dest}`))
    .pipe(connect.reload());
};

const scripts = () => {
  return gulp
    .src(scriptsPath)
    .pipe(stripDebug())
    .pipe(concat("script.js"))
    .pipe(gulpBabel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(gulp.dest(`${dest}/scripts/`))
    .pipe(connect.reload());
};

const sassProcessor = gulpSass(sass);
const cssCompile = () => {
  return gulp
    .src(scssPath)
    .pipe(sassProcessor({ outputStyle: "compressed" }).on("error", sassProcessor.logError))
    .pipe(gulp.dest(`${dest}/styles`))
    .pipe(connect.reload());
};

const watchers = () => {
  gulp.watch(htmlPath, html);
  gulp.watch(scriptsPath, scripts);
  gulp.watch([`${src}/**/*.*`, `!${htmlPath}`, `!${scriptsPath}`, `!${scssPath}`], copy);
};

const srv = () => {
  connect.server({ port: 8000, root: "./dist", livereload: true });
};

const mainBuild = gulp.parallel(html, cssCompile, scripts);
const launch = gulp.series(reset, mainBuild, copy, watchers);
const mainTask = gulp.parallel(launch, srv);

gulp.task("default", mainTask);
