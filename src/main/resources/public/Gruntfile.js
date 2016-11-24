module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "styles/scss/*.scss",
        tasks: ['sass']
      }
    },
    sass: {
        dev: {
            files: {
                "rps.css" : "styles/scss/rps.scss"
            }
        }
    },
  	browserSync: {
	  default_options: {
	    bsFiles: {
	      src: [
	        "css/*.css",
	        "*.html"
	      ]
	    },
	    options: {
	      watchTask: true,
	      //proxy: "localhost:4567"
        server: {
          baseDir: "./"
        }
	    }
	  }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  //Default grunt task
  grunt.registerTask('default', ['browserSync', 'watch']);
};