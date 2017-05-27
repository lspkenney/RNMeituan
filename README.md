## RNMeituan ##

**RNMeituan** 基于React Native 0.44.2版,其中用到的API接口及模拟数据参考自https://github.com/huanxsd/MeiTuan,在此非常感谢原作者。

本项目属于个人学习Demo，历时一周左右，目前只实现了一级页面。导航组件使用的是官方推荐的react-navigation，另外在更多模块中实现了一个二级页面【Realm数据库Demo】

### Screenshsot ###
![](https://github.com/lspkenney/RNMeituan/blob/master/screenshot/20170527_111615.png)
![](https://github.com/lspkenney/RNMeituan/blob/master/screenshot/20170527_111622.jpg)
![](https://github.com/lspkenney/RNMeituan/blob/master/screenshot/20170527_111626.jpg)
![](https://github.com/lspkenney/RNMeituan/blob/master/screenshot/20170527_111636.jpg)

### Setup ###

(windows)

1、clone项目。

2、cd到项目目录。

3、npm install

4、npm link

5、react-native start

6、react-native run-android

### 项目亮点 ###


1、采用组件化开发方式。

2、列表采用最新FlatList组件，支持下拉刷新、上拉加载更多。

3、导航采用官方推荐的react-navigation。

4、所有组件均采用的跨平台方式（由于没有IOS环境所以没测试）。

5、项目使用了Realm跨平台、轻量级数据库。

6、移动平台代码复用率95%（瞎掰的！！！）

### 项目用到的开源组件库 ###

1、react-native-scrollable-tab-view  版本0.6.6

2、react-native-swipeout  版本2.1.1

3、react-navigation  版本1.0.0-beta.11

4、 realm  版本1.3.1

### 关于作者 ###

一直从事Android开发，现已转向跨平台开发方向，本Demo只是作为练习React Native这门技术所开发的。另外作者已经开发过微信小程序并已经发布线上，具体小程序名称由于某些原因在这就不透露了。
有任何建议或者工作机会【深圳】请联系luo807564621@163.com