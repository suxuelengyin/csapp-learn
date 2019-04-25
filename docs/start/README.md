---
title: 安装
---
# Windows
## 安装编译器
你可以参考[教程](http://rsreland.net/archives/1760)，教程过于傻瓜式，适合新手。  
[MinGW-w64 ](https://sourceforge.net/projects/mingw-w64/)集成了 gcc（编译C）和 g++（编译C++）编译器，只需在官网下载安装即可，下载过程可能比较慢，耐心等待。 
## 配置环境变量 
安装完成后为了方便调用，可以添加到环境变量，将安装路径下的`bin`目录的路径放在`Path`变量中，就可以全局调用了。
```sh
# 检测是否安装
gcc -v
```