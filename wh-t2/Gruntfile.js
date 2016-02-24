module.exports = function(grunt){

	"use strict";

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

		watch: {
    		html: {
        			files: ['index.html'],
        			tasks: ['htmlhint']
    		},
    		js: {
    			  	files: ['js/main.js', 'js/plugin.js'],
        			tasks: ['uglify']
    		}
		},
		uglify: {
    		build: {
        		files: {
            		'js/main.min.js': ['js/main.js'],
            		'js/plugins.min.js': ['js/plugins.js']
        		}
			}
    	}
    });

    grunt.registerTask('default', ['uglify']);


};