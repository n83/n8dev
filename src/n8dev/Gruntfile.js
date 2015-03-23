/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    var concatConfig = {
        files: {
            src: ['bower_components/jquery/dist/jquery.js', 'Scripts/app.js'],
            dest: 'wwwroot/scripts/scripts.js'
        }
    }

    var uglifyConfig = {
        files: {
            src: 'wwwroot/scripts/scripts.js',
            dest: 'wwwroot/scripts/scripts.min.js'
        }
    }

    grunt.initConfig({
        concat: concatConfig,
        uglify: uglifyConfig
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['concat', 'uglify']);
};