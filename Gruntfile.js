//包装函数
module.exports = function(grunt){
     //任务配置，所有插件的配置信息
     grunt.initConfig({
			 //获取 package.json 的信息
             pkg: grunt.file.readJSON('package.json'),
			 //uglify插件的配置信息，压缩js
			 uglify: {
				options: {
					stripBanners: true,
					banner: '/*! <%=pkg.name%>-<%-pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				build: {
					src: 'src/public.js',
					dest: 'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
				}
			 },
			 //cssmin插件的配置信息，压缩css
			 cssmin: {
				options: {
					stripBanners: true,
					banner: '/*! <%=pkg.name%>-<%-pkg.version%>.css <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				build: {
					src: 'src/mc.css',
					dest: 'build/<%=pkg.name%>-<%=pkg.version%>.css.min.css'
				}
			 },
			 //检测js规范
			 jshint: {
				 build: ['Gruntfile.js', 'src/*.js'],
				 options: {
					 jshintrc: '.jshintrc'
				 }
			 },
			 //检测css规范
			 csslint: {
				 build: ['Gruntfile.js', 'src/*.css'],
				 options: {
					 csslintrc: '.csslintrc'
				 }
			 },
			 //自动监测
			 watch: {
				 build: {
					 files: ['src/*.js','src/*.css'],
					 tasks: ['jshint','uglify'],
					 options: { spwan: false }
				 }
			 }
	 });
	 //告诉grunt我们将使用插件
	 grunt.loadNpmTasks('grunt-contrib-uglify');
	 grunt.loadNpmTasks('grunt-contrib-cssmin');
	 grunt.loadNpmTasks('grunt-contrib-jshint');
	 grunt.loadNpmTasks('grunt-contrib-csslint');
	 grunt.loadNpmTasks('grunt-contrib-watch');

     //告诉grunt当我们在终端中输入grunt时需要做什么（注意先后顺序▒
     grunt.registerTask('default', ['csslint','jshint','uglify','cssmin','watch']);
};