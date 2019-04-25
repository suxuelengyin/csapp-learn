---
title: 起步
---
# 起步
按照传统，我们从一个 hello world 程序开始。  
创建一个 `hello.c` 文件，并添加如下代码：  
```c
#include <stdio.h>
int main()
{
    printf("hello, world\n");
    return 0;
}
```
在命令行找到该文件目录并执行：
```sh
# 生成 hello.exe 可执行文件
gcc -o hello hello.c
# 执行 hello.exe
hello.exe
# 执行结果
hello world 
```
至此，完成运行第一个 c 程序