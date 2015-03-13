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
            './' + source + '/server.js',
        ],
        destination: './' + build + '/'
    },
    nodemon: {
        script: './' + build + '/server.js',
        ext: 'html js',
        ignore: []
    }
};