module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    watch: {
      scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      } 
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
          'css/*.css',
          '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },
    jshint: {
      all: ['js/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ["sass", "browserSync", "jshint", "watch"]);
};
