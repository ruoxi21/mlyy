/* eslint-disable no-console */

window.onload = function() {
  /************ '音视频互斥 只能播放一个' by chengxiang ************/
  
  // 获取 audio 和 video
  const medias = document.getElementsByClassName("medias");
  
  // 给 play 事件绑定暂停函数
  [].forEach.call(medias, function(i) {
    i.addEventListener("play", pauseAll.bind(i));
  });
  
  // 暂停函数
  function pauseAll() {
    let self = this;
    [].forEach.call(medias, function(i) {
      // 将 audios 中其他的 audio 或 video 全部暂停
      i !== self && i.pause();
    });
  }

  /************ '音视频互斥 只能播放一个' by chengxiang ************/
  
  // 吸顶
  const youlovebgHeight = document.getElementsByClassName("h-section__header")[0]
    .offsetHeight;
  const missyou = document.querySelector(".h-header");
  const xdgd = youlovebgHeight - 60;
  console.log(21, youlovebgHeight); //

  // back-to-top
  const BTT = document.querySelector(".back-to-top");

  document.onscroll = function() {
    // 获取当前滚动的距离
    let sTop = document.body.scrollTop || document.documentElement.scrollTop;
    //如果滚动距离大于吸顶元素顶部的距离
    if (sTop > xdgd) {
      missyou.style.top = "0";
    } else {
      missyou.style.top = "-60px";
    }
    
    BTT.addEventListener("click", function(e) {
      e.preventDefault();
      // window.scrollTo(0, 0); // 直接瞬间返回顶部, 太死板 替换 如下

      // -------------- begin ---------------- //
      //IE10+/Android Browser4.4+/
      let requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(clb) {
          return setTimeout(clb, 1000 / 60);
        };

      let cancelAnimationFrame =
        window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.msCancelAnimationFrame ||
        function(id) {
          clearTimeout(id);
        };

      //document.getElementById("imagePreview").scrollIntoView();
      //document.body.scrollTop = "0px";

      let top = document.body.scrollTop || document.documentElement.scrollTop;

      //滚动时长
      let duration = 300; //300ms

      //计算步长
      let step = (top / (duration / (1000 / 60))) >> 0; //取整

      //window.console && console.log(requestAnimationFrame);

      function fn() {
        if (top >= 0) {
          top -= step;
          document.documentElement.scrollTop = document.body.scrollTop = top;
          fn.rafTimer = requestAnimationFrame(fn);
        } else {
          document.body.scrollTop = 0;
          cancelAnimationFrame(fn.rafTimer);
        }
      }

      fn.rafTimer = requestAnimationFrame(fn);
      // -------------- end ---------------- //
    });

    //如果滚动距离大于吸顶元素顶部的距离
    if (sTop > 325) {
      BTT.style.top = "-345px";
    } else {
      BTT.style.top = "-900px";
    }
  };
};
