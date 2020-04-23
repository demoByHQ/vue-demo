# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## src 目录下各个目录及文件简介

* api:
* assets: 项目静态资源
  * img：存放页面中所用到的图片
  * scss：项目的公共样式
* components：项目的通用组件存放点
* router 目录 (存放 vue-router 相关配置)
  * routes.js 文件 (存放 vue-router 的所有 route 配置)
* store 目录 (存放vuex、store 相关配置)
  * modules 目录 (按模块分隔 store 配置，如果是所有模块的通用配置可以直接写在 store/index.js 文件中)
* utils 目录 (存放全局共享的工具函数)
* views: 项目内容文件，存放项目不同模块的组件，且按模块划分，每个模块一个文件夹。
* APP.vue: 项目入口文件，勿在里边添加其他的组件内容
* main.js：项目的核心文件

#### 文件和文件夹命名
  * 统一采用 _小写字母加中划线_ 方式  
    ```
    work-flow-list
    ```
    
#### 组件 name 配置
  * 统一采用 _小写字母加中划线_ 方式
    ```
    work-flow-list
    ```
    
#### 组件及js变量和方法
  * 统一采用 _首字母小写的驼峰_ 方式
    ```
    workFlowList
    ```
    
#### 组件引用
  * 统一采用 _首字母大写的驼峰_ 方式
    ```
    import { Alert } from 'vux'
  