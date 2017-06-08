## 在gulp 使用 sass 教程

sass基于Ruby语言开发而成，因此安装sass前需要安装Ruby。
建议安装rubu的时候直接选择安装在c盘系统盘

 先安装 ruby , 再通过
 ```
 gem install sass
 gem install compass
 ```
 安装 sass ， compass
 不清楚的，具体可以看这篇文章 [如何配置sass环境](https://www.sass.hk/install/).
  
## Clone sass教程

  ```
         git clone https://github.com/MEEllis/sass-course.git
         cd sass-course
  ```


 第一步：
   ```
     npm install
  ```
 二步：(执行gulp默认的任务)
  ```
  gulp
 ```
 
 这里可能会报错
 Sass注释中文报错问题
 解决方案：
 
 找到ruby的安装目录，里面也有sass模块，如这个路径：（根据你自己的安装路径来找）
 
 C:\Ruby23-x64\lib\ruby\gems\2.3.0\gems\sass-3.4.23\lib\sass
 
 在这个文件里面engine.rb，添加一行代码（同方法1）
 
 Encoding.default_external = Encoding.find('utf-8')
 放在所有的require XXXX 之后即可。
 
## 再续
 精灵图 ，以及 64base图片，后续提交
 


