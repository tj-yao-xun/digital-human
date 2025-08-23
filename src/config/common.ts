const commonConfig = {
  videoTypeOptions:[
    {
      value: '1',
      key:'PureDigitalHuman',
      label: '纯数字人',
    },
    {
      value: '2',
      key: 'FreeStyleDigitalHuman',
      label: '自定义背景数字人',
    },
    {
      value: '3',
      key: 'TransparentDigitalHuman',
      label: '透明数字人',
    },
    {
      value: '4',
      key: 'ContentDigitalHuman',
      label: '内容播报数字人',
    },
    {
      value: '5',
      key: 'VoiceDigitalHuman',
      label: '纯内容配音',
    }
  ],
  //视频比例
  aspectVideoRatio:[
    {id:1,value:'16:9',width:1280,height:720},
    {id:2,value:'9:16',width:720,height:1280},
    {id:3,value:'4:3',width:640,height:480},
    {id:4,value:'16:10',width:1280,height:800},
    {id:5,value:'2.35:1',width:2048,height:872},
    {id:6,value:'1:1',width:600,height:600},
    {id:7,value:'21:9',width:2560,height:1080},
  ],
  //数字人显示配置
  videoSettingConfig:{
     //纯数字人配置
    PureDigitalHuman:{
      title:'纯数字人',
      components:[
        {
          component: () => import('@/components/DigitalImage.vue'),
          props: { title: '数字人形象' }
        },
        {
          component: () => import('@/components/DigitalVoice.vue'),
          props: { title: '数字人声音' }
        },
        // {
        //   component: () => import('@/components/BasicConfiguration.vue'),
        //   props: { title: '数字人基础配置' }
        // },
        {
          component: () => import('@/components/SubtitleConfiguration.vue'),
          props: { title: '数字人字幕配置' }
        },
        {
          component: () => import('@/components/ManuscriptContent.vue'),
          props: { title: '数字人文稿' }
        }
      ]
    },
    //自定义背景数字人
    FreeStyleDigitalHuman:{
      title:'自定义背景数字人',
      components:[
        {
          component: () => import('@/components/DigitalImage.vue'),
          props: { title: '数字人形象' }
        },
        {
          component: () => import('@/components/DigitalVoice.vue'),
          props: { title: '数字人声音' }
        },
        // {
        //   component: () => import('@/components/BasicConfiguration.vue'),
        //   props: { title: '数字人基础配置' }
        // },
        {
          component: () => import('@/components/SubtitleConfiguration.vue'),
          props: { title: '数字人字幕配置' }
        },
        {
          component: () => import('@/components/ManuscriptContent.vue'),
          props: { title: '数字人文稿' }
        },
        {
          component: () => import('@/components/BackImgSetting.vue'),
          props: { title: '背景图片设置' }
        },
      ]
    },
    //透明数字人
    TransparentDigitalHuman:{
      title:'透明数字人',
      components:[
        {
          component: () => import('@/components/DynamicTabs.vue'),
          props: { title: '透明数字人', DigitalKey:'TransparentDigitalHuman'}
        },
        {
          component: () => import('@/components/DigitalScale.vue'),
          props: { title: '视频比例配置'}
        },
        {
          component: () => import('@/components/SubtitleConfiguration.vue'),
          props: { title: '数字人字幕配置' }
        },
        {
          component: () => import('@/components/DynamicContentTabs.vue'),
          props: { title: '内容区配置' }
        },
        {
          component: () => import('@/components/ManuscriptSettings.vue'),
          props: { title: '数字人文稿设置' }
        },
      ]
    },
    // 内容播报数字人
    ContentDigitalHuman:{
      title:'内容播报数字人',
      components:[
        {
          component: () => import('@/components/DynamicTabs.vue'),
          props: { title: '动态增减tab', DigitalKey:'ContentDigitalHuman' }
        },
        {
          component: () => import('@/components/DigitalScale.vue'),
          props: { title: '视频比例配置'}
        },
        {
          component: () => import('@/components/SubtitleConfiguration.vue'),
          props: { title: '数字人字幕配置' }
        },
        {
          component: () => import('@/components/DynamicContentTabs.vue'),
          props: { title: '内容区配置' }
        },
        {
          component: () => import('@/components/ManuscriptSettings.vue'),
          props: { title: '数字人文稿设置' }
        },
      ]
    },
    // 纯内容配音
    VoiceDigitalHuman:{
      title:'纯内容配音',
      components:[
        {
          component: () => import('@/components/DynamicTabs.vue'),
          props: { title: '动态增减tab', DigitalKey:'VoiceDigitalHuman'}
        },
        {
          component: () => import('@/components/SubtitleConfiguration.vue'),
          props: { title: '数字人字幕配置' }
        },
        {
          component: () => import('@/components/DynamicContentTabs.vue'),
          props: { title: '内容区配置' }
        },
        {
          component: () => import('@/components/ManuscriptSettings.vue'),
          props: { title: '数字人文稿设置' }
        },
      ]
    }
  }
};

export default commonConfig;
