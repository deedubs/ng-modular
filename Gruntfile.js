module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
      "compile-jade": {
        command: "find public -type f -name '*.jade' | xargs ./node_modules/.bin/jade"
      }
    },
    watch: {
      scripts: {
        files: ['public/**/*.jade'],
        tasks: ['shell:compile-jade'],
        options: {
          livereload: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);
}


