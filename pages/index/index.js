//index.js
//获取应用实例
const app = getApp()

const context = wx.createCanvasContext('love');
var winWidth = wx.getSystemInfoSync().windowWidth;
var winHeight = wx.getSystemInfoSync().windowHeight;
var originX = winWidth / 2;
var originY = 150;

Page({
  data: {
    formula:"r=a(1-sinθ)"
  },

  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },

  onReady: function () {
    context.setStrokeStyle("#000000");
    context.setLineWidth(1);
    context.moveTo(10, originY);
    context.lineTo(winWidth-10,originY);
    context.stroke();
    context.setLineWidth(1);
    context.moveTo(originX, 10);
    context.lineTo(originX, 400);
    context.stroke();
    context.draw();

    //r=a(1-sinθ)
    var num = 100;
    var a = 100;
    var lastx = originX + a;
    var lasty = originY;
    for(var i=1; i<=num; i++){
      let theta = 2 * Math.PI * i / num;
      let r = a * (1 - Math.sin(theta));
      let x = r * Math.cos(theta) + originX;
      let y = originY - r * Math.sin(theta);

      context.setStrokeStyle("#ff0000");
      context.setLineWidth(1);
      context.moveTo(lastx, lasty);
      context.lineTo(x, y);
      context.stroke();
      lastx = x;
      lasty = y;
    }
    context.draw(true);
  }
})
