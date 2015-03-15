var source = 'source';
var build = 'build';

module.exports = {
    clean: {
        source: build
    },
    browsersync:
    {
        server: {
            baseDir: [source, build]
        }
    },
    bundle: {
        output: 'client.js' ,
        source: './' + source + '/client.js',
        destination: build + '/public/js/'
    },
    copy: {
        base: { base: './source/' },
        source: [
            './' + source + '/components/**/*',
            './' + source + '/views/**/*',
            './' + source + '/routes/**/*',
            './' + source + '/server.js',
            './' + source + '/database/development.db',
            './' + source + '/infrastructure/**/*'
        ],
        destination: './' + build + '/'
    },
    nodemon: {
        script: './' + build + '/server.js',
        ext: 'html js',
        ignore: []
    }
};