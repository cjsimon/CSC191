import gulp from 'gulp';
import run from 'gulp-run-command';
import sequence from 'gulp-sequence';

const cmd = {
    'production':   'pipenv run python run.py -e PRODUCTION -c -d',
    'staging':      'pipenv run python run.py -e STAGING -c -d',
    'development':  'pipenv run python run.py -e DEVELOPMENT -c -d',
    'testing':      'pipenv run python run.py -e TESTING -c -d',
    'database':     'docker-compose up --build -d',
    // This requires a TTY, so it doesn't work as a build command,
    // though it is preserved here for reference to interact with the image
    'interact':     'docker exec -it jetstox_mysql mysql -uroot -p1234',
    'clean':        'rimraf ./mysql/data/*!(.gitkeep)'
};

// Register all commands as tasks
for(let c in cmd) {
    gulp.task(c, run(cmd[c]));
}
gulp.task('serve', sequence('database', 'testing'));
