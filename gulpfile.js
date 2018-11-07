var gulp = require('gulp'),
    log = require('gulp-util').log,
    path = require('path');
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

var config = {
  watch: './src/**/*.*',
  server: {
    port: '8000',
    path: './dist'
  },
  html: {
    src: './src/templates/**',
    destination: 'dist/'
  },
  css: {
    src: './src/styles/style.less',
    destination: 'dist/css'
  },
  js: {
    src: './src/js/**',
    destination: 'dist/js'
  },
  img: {
    src: './src/img/**',
    destination: 'dist/img'
  }
};

gulp.task("connect",function(){
  connect.server({
    port:config.server.port,
    livereload:true,
    root:config.server.path});
});

gulp.task('html', function () {
  gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.destination))
    .pipe(connect.reload());
});

gulp.task('less', function () {
  gulp.src(config.css.src)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(config.css.destination))
    .pipe(connect.reload());
});

gulp.task('scripts', function () {
  gulp.src(config.js.src)
    .pipe(gulp.dest(config.js.destination))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  gulp.src(config.img.src)
    .pipe(gulp.dest(config.img.destination))
});

gulp.task('watch', function () {
  log('Watching file');
  gulp.watch(config.watch, ['build']);
});

gulp.task('build', ['html','less','images','scripts']);
gulp.task('default',['build','connect','watch']);
