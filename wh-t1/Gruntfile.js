module.exports = function(grunt){

	"use strict";

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

		cssc: {
	    	build: {
	        	options: {
	            	consolidateViaDeclarations: true,
	            	consolidateViaSelectors:    true,
	            	consolidateMediaQueries:    true
	        	},
	        	files: {
	            	'css/master.css': 'css/master.css'
	        	}
	    	}
		},

		cssmin: {
	    	build: {
	     	   	src: 'css/master.css',
		        dest: 'css/master.min.css'
		    }
		},

		sass: {
		    build: {
		        files: {
		            'css/master.css': 'sass/master.scss'
		        }
		    }
		},

		watch: {
    		html: {
        			files: ['index.html'],
        			tasks: ['htmlhint']
    		},
    		css: {
    			files: ['sass/**/*.scss'],
    			tasks: ['buildcss']
    		}
		},

    	htmlhint: {
    		build: {
        		options: {
            		'tag-pair': true,					// Force tags to have a closing pair
                    'tagname-lowercase': true,			// Force tags to be lowercase
                    'attr-lowercase': true,				// Force attribute names to be lowercase e.g. <div id="header"> is invalid
                    'attr-value-double-quotes': true,	// Force attributes to have double quotes rather than single
                    'doctype-first': true,				// Force the DOCTYPE declaration to come first in the document
                    'spec-char-escape': true,			// Force special characters to be escaped
                    'id-unique': true,					// Prevent using the same ID multiple times in a document
                    'head-script-disabled': true,		// Prevent script tags being loaded in the  for performance reasons
                    'style-disabled': true				// Prevent style tags. CSS should be loaded through
        		},
        		src: ['index.html']
    		}
		}
    });

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);

};