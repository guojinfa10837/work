import {ComponentMap, dataMap} from './commonData';


interface option {
    type:string;
    data:any;
    metaData:any;
}
export class RegisterService{

  constructor() {
     this.initPc();
  }
  register(opt:option) {
    console.log('register:', opt.type);
    ComponentMap.set(opt.type, opt.metaData);
    dataMap[opt.type] = opt.data;
    

  }

  initPc(){
  	this.register({
      type: 'font',
      data: {
        type: 'font',
        selected: false,
        text: 'my name is font',
        width: 300,
        height: 200,
        color: '#000',
        fontSize: 14,//缩放组件占用字段
        link: '',
        isBold: false,
        isBlank:false,
        lineHeight: 1.5,
        config: {
          sizeList: [12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72]
        }
      },
      metaData: {
        html: `<div style="position:absolute;z-index:1000;left:{{x}}px;top:{{y}}px;width:{{width}}px;height:{{height}}px;line-height:{{lineHeight}}em;color:{{color}};font-size:{{fontSize}}px;{{if isBold}}font-weight:bold;{{/if}};overflow-y:hidden;word-break: break-word" >
                {{if link}}<a href="{{link}}" target="{{if isBlank}}_blank {{else}}_self{{/if}}" style="color:{{color}};text-decoration:none;">{{/if}}{{@text.replace(/\\u0020/g,"&nbsp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/[\\r\\n]/g,"<br>")}}{{if link}}</a>{{/if}}
            </div>`,
        cssDepends: [],
        jsDepends: [],
        css: '',
        code: ''
      },

    });

      //图片
      this.register({
        type: 'banner',
        data: {
          type: 'banner',
          selected: false,
          imgSrc: '//asserts.xcarimg.com/ztEditor/assets/img/tuwen.png',
          url: '',
          width: 500,
          height: 300,
          fileName: '',
          isBlank:true,
          left:0,
          top:30,
          x:100
        },
        metaData: {
          html: '<div class="banner" style="position:absolute;z-index:{{zIndex}};left:{{x}}px; top:{{y}}px;width:{{width}}px;height:{{height}}px"><a {{if isBlank}} target="_blank" {{else}} target="_self"{{/if}}{{if url}}href="{{url}}" {{/if}}><img src="{{imgSrc}}"  style="width:100%;height:100%;" /></a></div>',
          cssDepends: [],
          jsDepends: [],
          css: '',
          code: ''
        }
      });
  }
}