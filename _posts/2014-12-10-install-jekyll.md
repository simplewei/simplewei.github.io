---
layout: post
title: windows下安装jekyll
description: ""
category: blog
tags: []
categories:
- blog
---


windows环境搭建jekyll 和 github.io的折腾告一段落，过程中参考了网络上的大量资料，在此记录一下

1. 下载安装[RubyInstaller](http://rubyinstaller.org/)，安装时建议选中环境变量自动配置。
2. 下载解压[DevKit](http://rubyinstaller.org/downloads/)，在解压目录中输入以下命令

		ruby dk.rb init
		ruby dk.rb install

	此处需注意ruby安装路径，可能存在找不到ruby路径的情况，请根据命令行提示自行修改config.yml

3. 安装jekyll：

	鉴于国内网络不稳定，可使用淘宝ruby源
		
		gem sources --remove https://rubygems.org/
		gem sources -a https://ruby.taobao.org/

	gem安装jekyll

		gem install jekyll

4. 创建一个jefyll模板

		jekyll new sample

	以上命令创建了一个名为sample的静态模板，置于sample文件夹中

5. 运行

		jekyll serve

	你可以在 [http://localhost:4000/](http://localhost:4000/) 查看页面了

{% include JB/setup %}