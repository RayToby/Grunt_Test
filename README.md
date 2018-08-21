# Grunt常用的几个插件

## 1.uglify（压缩js）
## 2.cssmin (压缩css)
## 3.jshint（检测js的语法规范）
## 4.csslint（检测css的语法规范）
## 5.watch （自动化检测）
    配置watch将监控哪些文件的变化，以及这些文件一旦变化，要立即执行哪些插件功能。如下图，watch将监控src文件夹下所有js文件和css文件的变化，一旦变化，则立即执行jshint和uglify两个插件功能。
```js
    //自动监测
    watch: {
        build: {
            files: ['src/*.js','src/*.css'],
            tasks: ['jshint','uglify'],
            options: { spwan: false }
        }
    }
```

[参考文章](https://blog.csdn.net/xiejinwen/article/details/72354503)
