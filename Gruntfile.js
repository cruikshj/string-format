/*jshint node:true, es3:false*/
(function() {
  'use strict';
  module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); 
    
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
        all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
      },
      watch: {
        options: {
          spawn: false
        },
        scripts: {
          files: ['<%= jshint.all %>'],
          tasks: ['jshint']
        }
      },
      copy: {
        dist: {
          src: 'src/string-format.js',
          dest: 'dist/string-format.js'
        }
      },
      uglify: {
        dist: {
          files: {
            'dist/string-format.min.js': ['dist/string-format.js']
          }
        }
      },
      nugetpack: {
        dist: {
          src: 'package.nuspec',
          dest: 'nuget/'
        }
      }
    });

    grunt.registerTask('dev', ['jshint', 'watch:scripts']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['copy', 'uglify']);
    grunt.registerTask('ci', ['test', 'build']);
    grunt.registerTask('pack', ['nugetpack']);
  };
})();
