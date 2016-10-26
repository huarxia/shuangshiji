# 雙什記
雙什記-記錄我的菜譜
## 啟動 
```
hexo s
```
## 命令的使用

```
hexo help #查看帮助
hexo init #初始化目录
hexo new "postName" #新建文章
hexo new page "pageName" #新建页面
hexo generate #生成网页, 可以在public目录查看整个网站的文件
hexo server #本地预览,'Ctrl+C'关闭
hexo deploy #部署.deploy目录
hexo clean #清除缓存, 建议每次执行命令前先清理缓存
hexo n == hexo new
hexo g == hexo generate
hexo s == hexo server
hexo d == hexo deploy

```
## 上線前注意

```
hexo clean #清除缓存, 建议每次执行命令前先清理缓存
hexo deploy #部署.deploy目录

```
## 寫文章

```
hexo new "文章标题"

---
title: 文章標題
date: 2016-10-26 14:32:18
---
tags:
- 标签1
- 标签2
- 标签3
categories: [分类1,分类2,分类3]
---
正文, 使用 Markdown 语法书写
```
## 部署上传更新
以github为例，打开站点根目录下的_config.yml文件，找到deploy部分，更改配置
```
deploy:
  type: git
  repository: git@github.com:test/test.git #在仓库找到该仓库的ssh
  branch: github-pages #分支，这里为github-pages
```
然后就可以部署了，在文件根目录执行命令行
```
$ hexo clean
$ hexo deploy
```
这里有可能会报个错误ERROR Deployer not found : git
这里需要安装一个包
```
$ npm install hexo-deployer-git --save
```