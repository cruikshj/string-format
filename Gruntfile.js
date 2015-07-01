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
      nugetpack: {
        dist: {
          src: 'package.nuspec',
          dest: 'dist/nuget/'
        }
      }
    });

    //For development
    grunt.registerTask('dev', ['jshint', 'watch:scripts']);

    //For testing
    grunt.registerTask('test', ['jshint']);
    
    //For release
    grunt.registerTask('pack', ['nugetpack']);
  };
})();
