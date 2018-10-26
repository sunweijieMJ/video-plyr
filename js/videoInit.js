function videoInit() {
  // 获取video容器
  const videoBox = document.getElementsByClassName('customvideo');
  for(let i = 0, LEN = videoBox.length; i < LEN; i++){
    // 没有video容器则不初始化
    if(!videoBox[i]) break;
    // 清空所有子节点
    videoBox[i].innerHTML = '';
    // 获取属性值
    const video_url = videoBox[i].getAttribute('data-src');
    const poster_url = videoBox[i].getAttribute('data-img');
    const video_width = parseInt(videoBox[i].getAttribute('width'), 10);
    const video_height = parseInt(videoBox[i].getAttribute('height'), 10);
    // video配置项
    const options = {
      playbackRates: [0.7, 1.0, 1.5, 2.0], // ETC 播放速度
      width: '100%',
      autoplay: false, // 如果true,浏览器准备好便开始播放
      muted: false, // 默认情况下将会消除任何音频
      loop: false, // 是否循环
      preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      language: 'en',
      aspectRatio: `${video_width}:${video_height}` || '16:9', // 将播放器置于流畅模式,并在计算播放器的动态大小时使用该值
      fluid: true, // 当true时,Video.js player将拥有流体大小
      sources: [ // 资源
        {
          type: 'video/mp4', // 资源类型
          src: video_url // 资源url
        }
      ],
      poster: poster_url, // 封面地址
      notSupportedMessage: '此视频暂无法播放,请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      controlBar: {
        playToggle: false, // 播放按钮
        progressControl: true, // 进度条
        volumePanel: false && { // 是否显示声音按钮
          inline: false,
          vertical: true
        },
        timeDivider: false, // 时间分割线
        durationDisplay: true, // 总时间
        remainingTimeDisplay: false, // 剩余时间
        fullscreenToggle: true  // 全屏按钮
      }
    };
    // 创建video标签并设置属性
    const myVideo = document.createElement('video');
    const videoId = `my-video-${String(Math.random()).slice(2)}`; // 随机数
    myVideo.setAttribute('id', videoId);
    myVideo.setAttribute('class', 'video-js');
    myVideo.setAttribute('controls', true);
    // 阻止自动全屏
    myVideo.setAttribute('playsinline', true);
    myVideo.setAttribute('x5-playsinline', true);
    myVideo.setAttribute('webkit-playsinline', true);
    myVideo.setAttribute('x-webkit-airplay', 'allow');
    // 插入video标签
    videoBox[i].appendChild(myVideo);
    // video初始化
    videojs(videoId, options, function ready() {
      let isPlaying = false;
      this.on('play', () => {
        isPlaying = true;
      });
      this.on('pause', () => {
        isPlaying = false;
      });
      function toggle() {
        if(isPlaying){
          this.pause();
        } else {
          this.play();
        }
      }
      // 播放暂停按钮事件
      this.bigPlayButton.on('touchend', toggle.bind(this));
      this.bigPlayButton.on('click', toggle.bind(this));
    });
  }
}
