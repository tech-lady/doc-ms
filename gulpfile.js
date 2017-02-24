var gulp = require('gulp');
nodemon = require('gulp-nodemon');

gulp.task('default', () => {
  nodemon({
      script: 'app.js',
      ext: 'js',
      env: {
        PORT: 5001
      },
      ignore: ['./node_modules/**']
    })
    .on('running on gulp', () => {
      console.log('Restarting');
    });
});
