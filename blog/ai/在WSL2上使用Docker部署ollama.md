# 在WSL2上使用Docker部署

本文只针对N卡 其它显卡请自行查找方法  
网络问题也请自行解决  

本文使用环境  
系统: Windows 10 IoT 企业版 LTSC 21H2  
CPU: AMD Ryzen 7 5800H  
内存: DDR4 3200Mhz 16G x2  
GPU: NVIDIA GeForce RTX 3060 Laptop  

## 1. WSL2  
### 1.1 WSL2简介  
WSL2（Windows Subsystem for Linux 2）是微软推出的第二代 Linux 子系统，允许用户在 Windows 上无缝运行原生 Linux 环境。  

### 1.2 启用WSL2  
查看是否已经开启CPU虚拟化 若未开启 请自行搜索相关教程  
![](attachments/Pasted-image-20250206183046.png)  

搜索启用或关闭Windows功能  
![](attachments/Pasted-image-20250206182632.png)  

勾选Hyper-V , Windows虚拟机监控程序平台 , 适用于Linux的Windwos子系统 , 虚拟机平台  
![](attachments/Pasted-image-20250206182916.png)  

等待启用  
![](attachments/Pasted-image-20250206183211.png)  

重启电脑  
![](attachments/Pasted-image-20250206183221.png)  

### 1.3 安装WSL2  
按Win+R打开运行 输入cmd回车打开命令行  
![](attachments/Pasted-image-20250206183642.png)  
![](attachments/Pasted-image-20250206183651.png)  

输入`wsl --status`查看wsl2状态  
```
wsl --status
```  
![](attachments/Pasted-image-20250206183913.png)  

根据提示更新wsl2内核  
```
wsl --update
```  
![](attachments/Pasted-image-20250206184042.png)  

等待安装完成  
![](attachments/Pasted-image-20250206184335.png)  

### 1.4 安装Linux发行版  
输入`wsl -l -o`查看可安装的Linux发行版  
```
wsl -l -o
```  
![](attachments/Pasted-image-20250206184712.png)  

根据提示安装 这里选择Ubuntu 24.04 LTS  
```
wsl.exe --install Ubuntu-24.04
```  
若无法下载 可尝试使用--web-download  
```
wsl.exe --install Ubuntu-24.04 --web-download
```  
等待下载  
![](attachments/Pasted-image-20250206223901.png)  

下载完成后根据提示启动  
![](attachments/Pasted-image-20250206225050.png)  
```
wsl.exe -d Ubuntu-24.04
```  
![](attachments/Pasted-image-20250206225328.png)  

输入你的用户名  
![](attachments/Pasted-image-20250206225407.png)  

输入并确认密码 这里密码不会显示出来  
![](attachments/Pasted-image-20250206225509.png)  

完成安装  
![](attachments/Pasted-image-20250206225551.png)  

## 2. Docker  
### 2.1 Docker简介  
Docker是一种轻量级的虚拟化技术，同时是一个开源的应用容器运行环境搭建平台，可以让开发者以便捷方式打包应用到一个可移植的容器中。  

### 2.2 安装Docker Desktop  
下载[Docker Desktop](https://www.docker.com/)  
![](attachments/Pasted-image-20250206231155.png)  

点击Download Docker Desktop 选择Download for Windows - AMD64  
![](attachments/Pasted-image-20250206231215.png)  

勾选Use WSL2  
![](attachments/Pasted-image-20250206231332.png)  

等待安装  
![](attachments/Pasted-image-20250206231347.png)  

点击Close and log out 这里会注销账户  
![](attachments/Pasted-image-20250206231544.png)  

点击Accept  
![](attachments/Pasted-image-20250206231929.png)  

点击Continue without signing in  
![](attachments/Pasted-image-20250206231951.png)  

点击Skip  
![](attachments/Pasted-image-20250206232044.png)  

### 2.3 配置Docker Desktop  
点击右上角设置  
![](attachments/Pasted-image-20250206232223.png)  

选择Resources  
![](attachments/Pasted-image-20250206232257.png)  

选择WSL integration 启用Ubuntu-24.04  
![](attachments/Pasted-image-20250206232334.png)  

点击Apply & restart  
![](attachments/Pasted-image-20250206232421.png)  

### 2.4 安装Ollama  

Ollama 是一个开源的轻量级框架，旨在帮助用户**在本地计算机上快速部署和运行大型语言模型（LLMs）**，无需依赖云端服务。它专注于简化模型的下载、配置和交互流程，尤其适合开发者、研究人员或对隐私和数据控制有要求的用户。(由deepseek-r1生成)  

在cmd中使用wsl.exe -d Ubuntu-24.04进入Ubuntu终端  
```
wsl.exe -d Ubuntu-24.04
```  
![](attachments/Pasted-image-20250206232949.png)  

使用sudo su切换到root账户  
```
sudo su
```  
![](attachments/Pasted-image-20250206233110.png)  

输入密码 这里密码不会显示  
![](attachments/Pasted-image-20250206233134.png)  

前往[ollama docker镜像页面](https://hub.docker.com/r/ollama/ollama)  
点击copy复制命令  
![](attachments/Pasted-image-20250206233436.png)  

输入命令  
![](attachments/Pasted-image-20250206233506.png)  

等待下载  
![](attachments/Pasted-image-20250206233524.png)  
![](attachments/Pasted-image-20250206233814.png)  

根据[ollama docker镜像页面](https://hub.docker.com/r/ollama/ollama)的提示配置  
![](attachments/Pasted-image-20250206233935.png)  
```
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey \
    | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list \
    | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' \
    | sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
sudo apt-get update
```  

```
sudo apt-get install -y nvidia-container-toolkit
```  

```
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```  
这里可以会报错 因为没有安装systemctl，可以用windows任务栏找到docker desktop 右键点击restart重启docker  

启动容器  
```
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```  
![](attachments/Pasted-image-20250206235540.png)  

### 2.5 安装模型  
使用dokcer ps查看ollama容器id  
```
docker ps
```  
![](attachments/Pasted-image-20250207000210.png)  

使用 docker exec -it '容器id' /bin/bash 连接到容器  
```
docker exec -it '容器id' /bin/bash
```  
![](attachments/Pasted-image-20250207000311.png)  

ollama提供了一个[模型库](https://ollama.com/search)  
在这里找到你需要的模型  
![](attachments/Pasted-image-20250207000511.png)  

这里选择deepseek-r1  
![](attachments/Pasted-image-20250207000551.png)  

根据你的需求选择不同参数量的模型 这里选择7b  
![](attachments/Pasted-image-20250207000621.png)  

点击右侧图标复制命令  
![](attachments/Pasted-image-20250207000642.png)  

输入命令 等待下载  
![](attachments/Pasted-image-20250207000715.png)  

下载完成后即可与模型对话  
![](attachments/Pasted-image-20250207001353.png)  

使用`ollama run deepseek-r1:7b --verbose`可以显示性能信息  
```
ollama run deepseek-r1:7b --verbose
```  
![](attachments/Pasted-image-20250207001509.png)  

使用Ctrl+D或者/bye即可结束对话  
![](attachments/Pasted-image-20250207001545.png)  

使用exit断开容器连接  
```
exit
```  
![](attachments/Pasted-image-20250207002536.png)  

## 3. WebUI  
在命令行中使用终归还是有些不方便的 所以我们把ollama接入其它工具中 这里使用[OpenWebUI](https://openwebui.com/) 

#### 3.1 安装OpenWebUI
依旧使用docker部署 [OpenWebUI文档](https://docs.openwebui.com/getting-started/quick-start)  

拉取镜像  
```
docker pull ghcr.io/open-webui/open-webui:main
```  
![](attachments/Pasted-image-20250207002607.png)  

启动OpenWebUI  
```
docker run -d -p 3000:8080 --gpus all -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:cuda
```  
![](attachments/Pasted-image-20250207011519.png)  

打开浏览器 输入 http://localhost:3000/ 进入webui  
点击开始使用  
![](attachments/Pasted-image-20250207103717.png)  

创建管理员账户  
![](attachments/Pasted-image-20250207103751.png)  

点击确认 开始使用  
![](attachments/Pasted-image-20250207103812.png)  

即可开始对话  
![](attachments/Pasted-image-20250207103904.png)  
