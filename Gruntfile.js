

module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
      "compile-jade": {
        command: "find public -type f -name '*.jade' | xargs ./node_modules/.bin/jade"
      },
      "build": {
        command: "rm public/js/index.min.js; node ./bin/compile | xargs cat > build.js; mv build.js public/js/index.min.js; ./node_modules/.bin/uglify public/js/index.min.js -o public/js/index.min.js;"
      }
    },
    watch: {
      scripts: {
        files: ['public/**/*.jade'],
        tasks: ['shell:compile-jade'],
        options: {
          livereload: true,
          spawn: false
        }
      },
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'public'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['connect', 'watch']);
}


