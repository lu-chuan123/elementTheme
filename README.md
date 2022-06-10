# hello-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
主题切换步骤：
1：再：root下注册所需的css变量，之后可直接使用
   kk.scc
      :root {
           --color-bg:blue;
           $--aa:blue;
         }

      html[data-theme='dark'] {
        --color-bg:red;
        $--aa:green;
      }

      $--color-bg:#EEEEEE;
2.再main.js中引用看看kk.css
3.构建element ui主题
https://element.eleme.cn/2.13/#/zh-CN/component/custom-theme
https://www.jianshu.com/p/725f69a6ae5d

4.在element-variables.scss使用变量，可能会报错，是因为mix函数的参数不能是var()的引用
  解决办法：npm i 安装themes文件下的所需要的包，修改主题源码，去除相关的引用

5.node_modules源码修改采用打补丁的方式进行，指令见  themes/package.json
   "build-node": "npx patch-package element-theme-chalk --patch-dir=patches"       修改源码后创建新的补丁文件
    "postinstall": "patch-package --patch-dir=patches"                             安装时自动将补丁插入源码