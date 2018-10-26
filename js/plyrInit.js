const defaultOption = {
    enabled: true, // 禁用
    title: '', // 自定义媒体标题
    debug: false, // 调试模式
    autoplay: false, // 自动播放
    autopause: true, // 仅允许一次播放一个媒体(仅限vimeo)
    playsinline: true, // 允许iOS上的内联播放
    seekTime: 10, // 倒带/快进时跳过的默认时间
    volume: 1, // 默认音量 0-1
    muted: false, // 是否静音
    duration: null, // 指定媒体的自定义持续时间
    displayDuration: true, // 在当前时间位置显示加载时的媒体持续时间,如果您选择同时显示持续时间和当前时间,则会被忽略
    invertTime: true, // 将当前时间显示为倒计时,而不是递增计数器
    toggleInvert: true, // 单击currentTime会反转它的值以显示剩余时间而不是已经过去的时间
    ratio: '16:9', // 在嵌入式播放器上的长宽比
    clickToPlay: true, // 点击(或点击)视频容器将切换播放/暂停
    hideControls: true, // 自动隐藏控件
    resetOnEnd: false, // 播放完成后,将播放重置为开头
    disableContextMenu: true, // 禁用视频上的右键菜单以帮助进行非常原始的混淆,以防止下载内容
    loadSprite: true, // 是否加载雪碧图
    iconPrefix: 'plyr', // 指定默认控件中使用的图标的id前缀
    iconUrl: 'https://cdn.plyr.io/3.3.12/plyr.svg', // 指定SVG精灵的URL或路径
    blankVideo: 'https://cdn.plyr.io/static/blank.mp4', // 指定用于正确取消网络请求的空白视频文件的URL或路径
    // 质量默认
    quality: { // 目前仅受YouTube支持.default是由YouTube确定的默认质量级别
        default: 576,
        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240, 'default']
    },
    // 设置循环
    loop: {
        active: false // 是否循环播放当前视频
    },
    // 加速默认值和要显示的选项
    speed: {
        selected: 1, // 播放的默认速度
        options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] // 菜单中显示的选项。大多数浏览器拒绝播放速度低于0.5
    },
    // 键盘快捷键设置
    keyboard: {
        focused: true,
        global: false // 是否开启键盘快捷键
    },
    // 显示工具提示
    tooltips: {
        controls: false, // 将控件标签显示为:hover＆上的工具提示:focus（默认情况下，标签仅为屏幕阅读器）
        seek: true // 显示搜索工具提示,以指示单击媒体将寻求的位置。
    },
    // 字幕设置
    captions: {
        active: false, // 如果默认情况下字幕应处于活动状态，则切换。
        language: 'auto', // 设置要加载的默认语言（如果可用）'auto'使用浏览器语言
        update: false // 收听曲目更改和更新菜单。某些流式库需要这样做，但可能导致无法选择的语言选项）
    },
    // 全屏设置
    fullscreen: {
        enabled: true, // 切换是否应启用全屏
        fallback: true, // 允许回退到全窗口解决方案
        iosNative: false // 进入全屏时是否使用原生iOS全屏（无自定义控件）
    },
    // 本地存储
    storage: {
        enabled: true, // 允许使用本地存储来存储用户设置
        key: 'plyr' // 要使用的密钥名称
    },
    // 默认控件 https://github.com/sampotts/plyr/blob/master/controls.md
    controls: [
        'play-large', // 中心的大播放按钮
        'restart', // 重新开始播放
        'rewind', // 按查找时间倒带(默认10秒)
        'play', // 播放/暂停播放
        'fast-forward', // 快进查找时间(默认10秒)
        'progress', // 用于回放和缓冲的进度条和洗涤器
        'current-time', // 当前回放的时间
        'mute', // 切换静音
        'volume', // 音量控制
        'captions', // 切换字幕
        'settings', // 设置菜单
        'pip', // 图片-图片(目前只适用于Safari)
        'airplay', // Airplay(目前只适用于Safari)
        'fullscreen' // 切换全屏
    ],
    settings: ['captions', 'quality', 'speed'], // 如果您使用的是默认控件，则可以指定要在菜单中显示的设置
    // 用于UI中文本的国际化 https://github.com/sampotts/plyr/blob/master/src/js/config/defaults.js
    i18n: {
        restart: 'Restart',
        rewind: 'Rewind {seektime}s',
        play: 'Play',
        pause: 'Pause',
        fastForward: 'Forward {seektime}s',
        seek: 'Seek',
        seekLabel: '{currentTime} of {duration}',
        played: 'Played',
        buffered: 'Buffered',
        currentTime: 'Current time',
        duration: 'Duration',
        volume: 'Volume',
        mute: 'Mute',
        unmute: 'Unmute',
        enableCaptions: 'Enable captions',
        disableCaptions: 'Disable captions',
        enterFullscreen: 'Enter fullscreen',
        exitFullscreen: 'Exit fullscreen',
        frameTitle: 'Player for {title}',
        captions: 'Captions',
        settings: 'Settings',
        menuBack: 'Go back to previous menu',
        speed: 'Speed',
        normal: 'Normal',
        quality: 'Quality',
        loop: 'Loop',
        start: 'Start',
        end: 'End',
        all: 'All',
        reset: 'Reset',
        disabled: 'Disabled',
        enabled: 'Enabled',
        advertisement: 'Ad',
        qualityBadge: {
            2160: '4K',
            1440: 'HD',
            1080: 'HD',
            720: 'HD',
            576: 'SD',
            480: 'SD'
        }
    },
    urls: {
        vimeo: {
            sdk: 'https://player.vimeo.com/api/player.js',
            iframe: 'https://player.vimeo.com/video/{0}?{1}',
            api: 'https://vimeo.com/api/v2/video/{0}.json'
        },
        youtube: {
            sdk: 'https://www.youtube.com/iframe_api',
            api: 'https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet'
        },
        googleIMA: {
            sdk: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js'
        }
    },
    // 自定义控件监听器
    listeners: {
        seek: null,
        play: null,
        pause: null,
        restart: null,
        rewind: null,
        fastForward: null,
        mute: null,
        volume: null,
        captions: null,
        fullscreen: null,
        pip: null,
        airplay: null,
        speed: null,
        quality: null,
        loop: null,
        language: null
    },
    // 要看的事件和冒泡
    events: [
        // 观看HTML5媒体元素和泡沫事件
        'ended', 'progress', 'stalled', 'playing', 'waiting', 'canplay', 'canplaythrough', 'loadstart',
        'loadeddata', 'loadedmetadata', 'timeupdate', 'volumechange', 'play', 'pause', 'error', 'seeking',
        'seeked', 'emptied', 'ratechange', 'cuechange',
        // 自定义事件
        'enterfullscreen', 'exitfullscreen', 'captionsenabled',
        'captionsdisabled', 'languagechange', 'controlshidden', 'controlsshown', 'ready',
        // YouTube
        'statechange',
        // Quality
        'qualitychange', 'qualityrequested',
        // ads
        'adsloaded', 'adscontentpause', 'adscontentresume', 'adstarted',
        'adsmidpoint', 'adscomplete', 'adsallcomplete', 'adsimpression', 'adsclick'
    ],
    // 如果使用自定义HTML，请更改这些以匹配您的模板
    selectors: {
        editable: 'input, textarea, select, [contenteditable]',
        container: '.plyr',
        controls: {
            container: null,
            wrapper: '.plyr__controls'
        },
        labels: '[data-plyr]',
        buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]'
        },
        inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]'
        },
        display: {
            currentTime: '.plyr__time--current',
            duration: '.plyr__time--duration',
            buffer: '.plyr__progress__buffer',
            loop: '.plyr__progress__loop',
            volume: '.plyr__volume--display'
        },
        progress: '.plyr__progress',
        captions: '.plyr__captions',
        caption: '.plyr__caption',
        menu: {
            quality: '.js-plyr__menu__list--quality'
        }
    },
    // 添加到不同状态的按钮类名钩子
    classNames: {
        type: 'plyr--{0}',
        provider: 'plyr--{0}',
        video: 'plyr__video-wrapper',
        embed: 'plyr__video-embed',
        embedContainer: 'plyr__video-embed__container',
        poster: 'plyr__poster',
        posterEnabled: 'plyr__poster-enabled',
        ads: 'plyr__ads',
        control: 'plyr__control',
        controlPressed: 'plyr__control--pressed',
        playing: 'plyr--playing',
        paused: 'plyr--paused',
        stopped: 'plyr--stopped',
        loading: 'plyr--loading',
        hover: 'plyr--hover',
        tooltip: 'plyr__tooltip',
        cues: 'plyr__cues',
        hidden: 'plyr__sr-only',
        hideControls: 'plyr--hide-controls',
        isIos: 'plyr--is-ios',
        isTouch: 'plyr--is-touch',
        uiSupported: 'plyr--full-ui',
        noTransition: 'plyr--no-transition',
        menu: {
            value: 'plyr__menu__value',
            badge: 'plyr__badge',
            open: 'plyr--menu-open'
        },
        captions: {
            enabled: 'plyr--captions-enabled',
            active: 'plyr--captions-active'
        },
        fullscreen: {
            enabled: 'plyr--fullscreen-enabled',
            fallback: 'plyr--fullscreen-fallback'
        },
        pip: {
            supported: 'plyr--pip-supported',
            active: 'plyr--pip-active'
        },
        airplay: {
            supported: 'plyr--airplay-supported',
            active: 'plyr--airplay-active'
        },
        tabFocus: 'plyr__tab-focus'
    },
    // 嵌入属性
    attributes: {
        embed: {
            provider: 'data-plyr-provider',
            id: 'data-plyr-embed-id'
        }
    },
    // API密钥
    keys: {
        google: null
    },
    // 广告插件 在这里注册一个账户:http://vi.ai/publisher-video currency
    ads: {
        enabled: false, // 是否启用vi.ai广告
        publisherId: '' // 您的vi.ai发布商ID
    }
};

function plyrInit() {
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
            fullscreen: {
                enabled: true, // 切换是否应启用全屏
                fallback: false, // 允许回退到全窗口解决方案
                iosNative: false // 进入全屏时是否使用原生iOS全屏（无自定义控件）
            },
            controls: ['play-large', 'duration', 'progress', 'current-time', 'fullscreen']
        };
        // 创建video标签并设置属性
        const myVideo = document.createElement('video');
        const videoId = `my-video-${String(Math.random()).slice(2)}`; // ETC 随机数
        myVideo.setAttribute('id', videoId);
        myVideo.setAttribute('controls', true);
        // 阻止自动全屏
        myVideo.setAttribute('playsinline', true);
        myVideo.setAttribute('x5-playsinline', true);
        myVideo.setAttribute('webkit-playsinline', true);
        myVideo.setAttribute('x-webkit-airplay', 'allow');
        // 插入video标签
        videoBox[i].appendChild(myVideo);
        // video初始化
        const player = new Plyr(`#${videoId}`, options);
        // 设置video资源文件
        player.source = {
            type: 'video',
            sources: [
                {
                    src: video_url,
                    type: 'video/mp4'
                }
            ],
            poster: poster_url
        };

        const contain = document.querySelector('.customvideo').offsetWidth;
        const video = document.querySelector('.customvideo .plyr video');
        video.muted = false;
        video.style.height = (contain / (video_height >= video_width ? 1 : video_width / video_height)) + 'px';
    }
}