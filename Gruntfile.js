module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        esnext: true
      },
      files: ['Gruntfile.js', 'src/**/*.js']
    },


    browserify: {
      options: {
        transform: [["babelify", { stage: 0 }]]
      },
      files: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.js', '!maps/base.js'],
        dest: 'dist/'
      }
    },

    uglify: {
      options: {
        sourceMap: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      files: {
        expand: true,
        cwd: 'dist/',
        src: ['**/*.js', '!**/*.min.js'],
        ext: '.min.js',
        dest: 'dist/'
      }
    },

    watch: {
      scripts: {
        files: ['Gruntfile.js', 'src/**/*.js'],
        tasks: ['build'],
        options: {
          debounceDelay: 250,
        },
      },
    },
  });

  grunt.registerTask('build', ['jshint', 'browserify', 'uglify']);
  grunt.registerTask('default', ['build', 'watch']);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-browserify");
};