var gulp = require('gulp');
var gulp_electron = require('gulp-electron');
var gulp_sass = require('gulp-sass');
var gulp_tcs = require('gulp-tsc');
var gulp_run = require('gulp-run-command');
const shell = require('gulp-shell');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var gulp_sourcemaps = require('gulp-sourcemaps');
var fiber = require('fibers');

gulp_sass.compiler = require('sass');

//var infoJson = require('./dist/info.json');

gulp.task('copy:info', function() {
    gulp.src('./src/info.json')
    .pipe(gulp.dest('dist/'))
});

gulp.task('copy:html', function() {
    gulp.src('./src/**/*.html')
    .pipe(gulp.dest('dist/'))
});

gulp.task('clean', function() {
    return gulp.src('dist/', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('build:electronts', function() {
    gulp.src(['src/app.ts', 'src/ts/renderer.ts'])
    .pipe(gulp_tcs())
    .pipe(gulp.dest('dist/'))
});

gulp.task('build:sass', function() {
    return gulp.src('./src/scss/app.scss')
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_sass().on('error', gulp_sass.logError))
    .pipe(minifyCSS())
    .pipe(concat('app.min.css'))
    .pipe(gulp_sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', function() {

});

gulp.task('build:webpack', shell.task('npm run build'));
gulp.task('build:dev:webpack', shell.task('npm run build:dev'));
gulp.task('build:production:webpack', shell.task('npm run build:production'));

gulp.task('dev:electron', ['copy:info', 'copy:html', 'build:sass', 'build:electronts', 'build:dev:webpack']);

gulp.task('electron', function() {
    var infoJson = {
        appName: "Project Rawcliffe",
        version: "1.0.0",
        build: "100",
        identifier: "com.ashleychapman.projectrawcliffe",
        icon_macos: "",
        icon_win: "",
        icon_linux: ""
    };

    gulp.src("").pipe(gulp_electron({
        src: './dist',
        packageJson: infoJson,
        release: './dist/release',
        cache: './node_module/electron/',
        version: 'v3.0.4',
        asar: true,
        packaging: true,
        platforms: ['linux','darwin-x64','linux-ia32','linux-x64','win32-ia32','win64-64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: infoJson.appName,
                CFBundleIndentifier: infoJson.identifier,
                CFBundleName: infoJson.appName,
                CFBundleVersion: infoJson.version
            },
            win: {
                "version-string": infoJson.version,
                "file-version": infoJson.version,
                "product-version": infoJson.version,
            }
        }
    })).pipe(gulp.dest(""));

}); 

gulp.task('run', function() {
    gulp.start('copy:info');
    gulp.start('copy:html');
    gulp.start('build:electronts');
    gulp.start('electron');
});

gulp.task('run:dev', ['dev:electron'], shell.task('electron ./dist/app.js'));

gulp.task('sass:watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
}); 

gulp.task('watch', ['sass:watch'], function() {

});