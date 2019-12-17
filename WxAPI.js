export class WxAPI{
  constructor(){
    
  }

  // 播放背景音乐
  playMusic(){
    const music = wx.createInnerAudioContext();
    music.src = './audio/bgm.mp3';
    music.loop = true; // 循环播放
    // music.autoplay = true; // 自动播放
    music.play();
  }

  // 小鸟撞击的音效
  boom(){
    const music = wx.createInnerAudioContext();
    music.src = './audio/boom.mp3';
    // music.autoplay = true; // 自动播放
    music.play();
  }

  // 获取手机基本信息
  getSysInfo(){
    wx.getSystemInfo({
      success(res){
        console.log(res);
      }
    })
  }

  // 获取登录用户的信息
  getUserInfo(callback){
    // 创建用户信息按钮
    let button = wx.createUserInfoButton({
      type: "text",
      text: "点击授权",
      style: {
        left: 100,
        top: 200,
        width: 150,
        height: 50,
        backgroundColor: "#aabbcd",
        borderColor: "#403623",
        borderWidth: 5,
        borderRadius: 10,
        color: "#00ff00",
        textAlign: "center",
        lineHeight: 40,
        fontSize: 16
      }
    });
    // 监听用户点击按钮
    button.onTap(res=>{
      // console.log(res);
      if(res.userInfo){
        // 有userInfo属性,说明已经授权过了
        this.userInfo = res.userInfo;
        button.destroy();
        callback();
      }
    });
  }

  // 发送http请求
  sendHttp(){
    wx.request({
      url: 'http://localhost:4000/sendScore?score='+120,
      success(res){
        console.log(res);
      }
    })
  }

  // socket连接
  socket(){
    // 连接服务器
    wx.connectSocket({
      url: 'ws://localhost:4000',
      success(res){
        console.log('连接成功');
      },
      fail(err){
        console.log('连接失败');
      }
    })
    // 连接成功后
    wx.onSocketOpen(function(){
      // 向服务器发送数据
      wx.sendSocketMessage({
        data: "微信小游戏发送给服务器的数据"
      });
      // 接收服务器发送的数据
      wx.onSocketMessage(function(res){
        console.log(res);
      })
    });
  }

  // 下载文件
  downLoad(){
    wx.downloadFile({
      url:"",
      success(res){
        let path = res.tempFilePath;
        const music = wx.createInnerAudioContext();
        music.src = 'path';
        music.loop = true; // 循环播放
        // music.autoplay = true; // 自动播放
        music.play();
      }
    })
    // wx.downloadFile({
    //   url:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%A5%A5%E7%89%B9%E6%9B%BC&step_word=&hs=0&pn=205&spn=0&di=54120&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=307167794%2C68351178&os=4245434837%2C886921056&simid=3391104910%2C105049978&adpicid=0&lpn=0&ln=1657&fr=&fmq=1576573235915_R&fm=result&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg10.ccnxs.cn%2Fuploadfile%2Fhbase%2F201801%2F0106%2FHBC5A50C2859FA37.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3F4_z%26e3Bi7wktwg_z%26e3Bv54AzdH3FkwtpwtAzdH3Fda8ba8amAzdH3Fnba0bc_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined",
    //   success(res){
    //     console.log(res);
    //     let path = res.tempFilePath;//获取临时地址
    //     // 将下载的文件保存到手机相册中
    //     wx.saveImageToPhotosAlbum({
    //       filePath: 'path',
    //       success(r){
    //         console.log(r);
    //       }
    //     })
    //   }
    // })
  }
}

