import gulp from 'gulp';
import run from 'gulp-run-command';

const cmd = {
    'clean':    'yarn run clean',
    'build':    'yarn run build',
    'start':    'yarn run start',
    'ios':      'yarn run ios',
    'android':  'yarn run android',
    'test':     'yarn run test',
};

// Register all commands as tasks
for(let c in cmd) {
    gulp.task(c, run(cmd[c]));
}
gulp.task('serve', ['start']);
