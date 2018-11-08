# vue-tree-menu

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

 ``` bash
## '/src/components'
# (1) TreeMenu1 是VUE Element-UI 的多级菜单动态渲染的组件
	---菜单数据 /static/menu.json
# (2) TreeMenu2 是VUE VUEX 的树形菜单（多级菜单）功能模块
	---菜单数据 /static/menu1.json
	---store的使用
	---router 配置
```

vuex [docs for vuex](https://vuex.vuejs.org/zh/guide/actions.html)

 ``` bash
## '/utils/request'
# (1) axios拦截器配置
# (2) 封装统一处理请求函数get/post
```

Axios [docs for axios](https://www.kancloud.cn/yunye/axios/234845)
