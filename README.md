使用说明
安装：
1.需要node环境与npm
2.git clone https://github.com/hzy9738/wpcss.git
3.cd wpcss 之后 npm install
使用：
webpack.config.js是配置文件
1.常量 static为生成外部的静态文件夹名，默认为'static'
2.entry为数组(默认只写了一个)，key为生成到static/css里的css名字，值为选中css模板路径
3.css模板路径默认为src/css/***.css

自定义css模板,可在static/css生成被处理过css文件，默认生成index.css,
可保证css代码兼容，图片将转为base64格式
