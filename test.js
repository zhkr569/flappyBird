let webSocket = require('ws');

let wss = new webSocket.Server({
  port: 4000
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: '+message);
  });
  // ws.send('something');
});





// let express = require('express');
// let app = express();

// app.listen(4000);

// app.get('/sendScore',function(req,res){
//   let score = req.query.score;
//   /* 将得分保存进数据库 */
//   res.send('你的得分是:'+score);
//   // res.send('服务器收到了你的请求');
// });




// import { Sprite } from "./js/base/Sprite.js";

// new Sprite().draw();

// Sprite.getImage();




/* class Father {
  constructor(a, b, c, d) {
    console.log('father调用了一下');
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
}
class A extends Father {
  constructor(a, b, c, d, z, x) {
    super(a, b, c, d)
    this.x = x;
    this.z = z;
  }
}

class B extends Father {
  constructor(a, b, c, d, e, f) {
    super(a, b, c, d);
    this.e = e;
    this.f = f;
  }
}

console.log(new A());
console.log(new B()); */