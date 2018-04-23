import gulp from 'gulp';
import run from 'gulp-run-command';
import sequence from 'gulp-sequence';

const cmd = {
    'api': 'gulp serve --gulpfile ./api/gulpfile.babel.js',
    'app': 'gulp serve --gulpfile ./app/gulpfile.babel.js',
};

// Register all commands as tasks
for(let c in cmd) {
    gulp.task(c, run(cmd[c]));
}
gulp.task('serve', sequence('api', 'app'));
