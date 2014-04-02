module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
		my_target: {
			files: {
				
				'assets/js/*.js' :
				['assets/js/plugins/*.js']  				
				
			}//files
		}//my_target
    },//uglify
    
    
    less: {
    
    	my_less_target: {
		    files: {
			    
			    'style.css' :
			    ['assets/style.less','assets/less/variables.less']
			    
		    }//files
	    }//my_less_target
    },//less
    
    watch: {
	    
	    options: {livereload:true },
	    scripts:{
		    files:['assets/js/plugins/*.js'],
		    tasks:['uglify']
	    },//scripts
	    
	    styles:{
		    files:['assets/style.less','assets/less/variables.less'],
		    tasks:['less']
	    },//styles
	    
	    markup: {
		    files:['*.html']
	    }//markup, so everytime you change the html will update the browser
	    
    }//watch
 
  });//initConfig

  // Load the plugin(s)
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};