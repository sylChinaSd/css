module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			compile: {
				options: {
					compress:false
				},
				files: {
					'css/__main.css': 'less/__main.less'
				}
			},
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dynamic_mappings: {
				// Grunt will search for "**/*.js" under "lib/" when the "uglify" task
				// runs and build the appropriate src-dest file mappings then, so you
				// don't need to update the Gruntfile when files are added or removed.
				files: [{
					expand: true, // Enable dynamic expansion.
					cwd: 'js/', // Src matches are relative to this path.
					src: ['**/*.js'], // Actual pattern(s) to match.
					filter: function(filepath) {
						//var patt1=new RegExp("*.min.js");
						//return patt1.test(filepath);
						//return true;
						//grunt.log.writeln(grunt.file.match('**/*.min.js',filepath).length);
						return grunt.file.match('**/*.min.js', filepath).length == 0;
					},
					dest: 'build/js/', // Destination path prefix.
					ext: '.js', // Dest filepaths will have this extension.
					extDot: 'first' // Extensions in filenames begin after the first dot
				}, ],
			},
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css'],
					filter: function(filepath) {
						return grunt.file.match('**/*.min.css', filepath).length == 0;
					},
					dest: 'build/css',
					ext: '.css'
				}]
			}
		},
		htmlmin: { // Task 
			dist: { // Target 
				options: { // Target options 
					removeComments: true,
					collapseWhitespace: true
				},
				files: { // Dictionary of files 
					'build/addressAdd.html': 'addressAdd.html', // 'destination': 'source' 
					'build/addressEdit.html': 'addressEdit.html',
					'build/addressManage.html': 'addressManage.html',
					'build/classify.html': 'classify.html',
					'build/concern.html': 'concern.html',
					'build/index.html': 'index.html',
					'build/login.html': 'login.html',
					'build/lostPassword.html': 'lostPassword.html',
					'build/me.html': 'me.html',
					'build/order.html': 'order.html',
					'build/orderQuery.html': 'orderQuery.html',
					'build/productDetail.html': 'productDetail.html',
					'build/register.html': 'register.html',
					'build/registerContent.html': 'registerContent.html',
					'build/shoppingCart.html': 'shoppingCart.html',
				}
			}
		},
		clean: {
			contents: ['build/*'],
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'images',
					src: ['**'],
					//flatten: true,
					dest: 'build/images'
				}, {
					expand: true,
					src: ['fonts/**'],
					flatten: true,
					dest: 'build/fonts'
				}, {
					expand: true,
					cwd: 'js',
					src: ['**/*.min.js', '*.min.js'],
					//flatten: true,
					dest: 'build/js'
				}, {
					expand: true,
					cwd: 'css',
					src: ['**/*.min.css', '*.min.css'],
					//flatten: true,
					dest: 'build/css'
				}, {
					expand: true,
					cwd: 'skins',
					src: ['**'],
					//flatten: true,
					dest: 'build/skins'
				}, ],
			},
		},
		watch: {
			files: ['less/**'],
			tasks: ['less'],
		},


	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'less', 'cssmin', 'uglify', 'htmlmin', 'copy']);

};