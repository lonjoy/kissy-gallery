KISSY.add("gallery/image-dd/1.0/asdbase",function(){function d(){}d.prototype={ATTR:function(d,e){if(!(void 0===d||null===d)){var h=this.ATTRS||{};return void 0===h[d]?void 0===e?void 0:h[d]=e:void 0===e?h[d]:h[d]=e}},DATA:function(d,e){if(!(void 0===d||null===d)){var h=this.DATAS||{};return void 0===h[d]?void 0===e?void 0:h[d]=e:void 0===e?h[d]:h[d]=e}},STATU:function(d,e){if(!(void 0===d||null===d)){var h=this.STATUS||{};return void 0===h[d]?void 0===e?void 0:h[d]=e:void 0===e?h[d]:h[d]=e}}};return d});
KISSY.add("gallery/image-dd/1.0/index",function(d,w,e,h){function s(a){this.config=d.clone(x);this.ATTRS=d.clone(o);this.STATUS=d.clone(y);this.DATAS=d.clone(z);d.mix(this.config,{ele:a?d.isArray(a)?a:[a]:[]});this._init()}function t(a){a.halt();if(m<o.DEGRADATION)return++m,!1;m=0;var b=p(a),a=b.x-this.ATTR("mousedownCoo").x,b=b.y-this.ATTR("mousedownCoo").y,b=parseInt(this.ATTR("activeImgPos").top,10)+b,a=parseInt(this.ATTR("activeImgPos").left,10)+a;this.ATTR("dragInfoX").push(a);this.ATTR("dragInfoY").push(b);
this.ATTR("dragInfoTime").push((new Date).getTime());f.css(this.ATTR("activeImg"),"top",b+"px");f.css(this.ATTR("activeImg"),"left",a+"px")}function i(a){a.halt();if(q<o.WHEEL_STEP)return++q,!1;q=0;this.cleanRecords();var b="";a.deltaY&&(b=0<a.deltaY?"zoom":"shrunk");if(""==b)return!1;if(b!=u)return u=b,!1;var c=l(this.ATTR("activeImg"),"width"),d=l(this.ATTR("activeImg"),"height");if("shrunk"==b&&c<this.ATTR("defaultMinWidth")||"zoom"==b&&c>this.ATTR("defaultMaxWidth"))return!1;var a=p(a),r=parseInt(this.ATTR("activeImg").style.left,
10),f=parseInt(this.ATTR("activeImg").style.top,10),j=l(this.ATTR("activeImg"),"left"),e=l(this.ATTR("activeImg"),"top"),g=c,n=3*o.WHEEL_PIX*(c/this.ATTR("initWidth")),i=n*(d/c);if(a.x>=r&&a.x<=r+c&&a.y>=f&&a.y<=f+d){var k=1,m=k=1,k=(a.x-r)/c,m=(a.y-f)/d;"shrunk"==b?(j+=n*k,e+=i*m):(j-=n*k,e-=i*m)}else k=0.5,"shrunk"==b?(j+=n*k,e+=i*k):(j-=n*k,e-=i*k);g="shrunk"==b?g-n:g+n;this.ATTR("anim")&&this.ATTR("anim").isRunning&&this.ATTR("anim").stop(!1);this.ATTR("anim",(new h(this.ATTR("activeImg"),{left:parseInt(1E3*
j,10)/1E3+"px",top:parseInt(1E3*e,10)/1E3+"px",width:parseInt(g,10)+"px"},0.1)).run())}function v(a){var b=p(a),a=b.x-this.ATTR("mousedownCoo").x,b=b.y-this.ATTR("mousedownCoo").y,b=parseInt(this.ATTR("activeImgPos").top,10)+b,a=parseInt(this.ATTR("activeImgPos").left,10)+a;this.ATTR("dragInfoX").push(a);this.ATTR("dragInfoY").push(b);this.ATTR("dragInfoTime").push((new Date).getTime());this.cancelEvent();this.afterUserDrag_MyShowTime()}function p(a){return{x:a.pageX||a.clientX+(document.documentElement.scrollLeft||
document.body.scrollLeft),y:a.pageY||a.clientY+(document.documentElement.scrollTop||document.body.scrollTop)}}function l(a,b){var c="";if(d.UA&&d.UA.ie&&"IMG"==a.tagName&&"height"==b)return a.offsetHeight;window.getComputedStyle?c=window.getComputedStyle(a,null)[b]:(b=A(b),c=a.currentStyle[b]);c=c.replace(/[^0-9+-\.]/g,"");return parseInt(c,10)?0-(0-c):0}function A(a){return a.replace(/-([a-z])/gi,function(a,c){return c.toUpperCase()})}var f=d.DOM,g=d.Event,o={WHEEL_STEP:1,WHEEL_PIX:50,SHOW_DOWN:0,
MOUSE_MOVE_AUTO_CLOSE_TIMER:5E3,DEGRADATION:2,popup:null,activeImg:null,activeImgPos:{left:0,top:0},mousedownCoo:{},anim:null,initAnim:null,bigImgObj:new Image,initWidth:0,defaultMaxWidth:1E4,defaultMinWidth:50,ieIframeMask:null,dragInfoX:[],dragInfoY:[],dragInfoTime:[],autoSlideAnim:null,popupBd:null,popupOpacityBg:null,popupBox:null,popupHd:null},y={inited:!1},z={POPUP_HD_TPL:'<div class="box-hd close-rt-wrap" ><a href="#" title="\ufffd\ufffd\ufffd\u02f3\ufffd\ufffd\u04b2\ufffd\ufffd\ufffd\u0539\u0631\ufffd\u0176" class="close-rt J_Close" id="J_CloseImageDD"></a></div>',
POPUP_IMG:'<img title="\ufffd\ufffd\ufffd\ufffd\ufffd\u05bf\ufffd\ufffd\u0537\u0174\ufffd\u037c\u01ac" class="G_K" style="width:{{showWidth}}px;left:{{left}}px;top:{{top}}px;" src="{{imgSrc}}"  />',POPUP_TPL:'<div class="img-dd-popup">                    <div class="img-dd-opacity-bg"></div>                    <div class="img-dd-box">                    <div class="box-bd"></div>                    </div>                 </div>',POPUP_IFRAME_TPL:'<iframe class="ie-popup-mask hidden"></iframe>'},x={ele:[]},m=o.DEGRADATION,q=o.WHEEL_STEP,u="";d.augment(s,w,d.EventTarget,
{_init:function(){var a=this;d.each(a.config.ele,function(b){a._bindEvent(b)})},add:function(a,b){var c=this,e=c.config;d.isArray(a)?(e.ele=e.ele.concate(a),d.each(a,function(a){c._bindEvent(a,b)})):(e.ele.push(a),c._bindEvent(a,b))},_bindEvent:function(a,b){var c=this;if(null==a)return!1;g.on(a,"click",function(a){var d=a.target;"IMG"!=d.tagName.toUpperCase()||b&&!f.hasClass(d,b)||"G_K"==d.className||(a.halt(),!0!=c.STATU("inited")&&(c._createPopup(),c._initHTMLElement(),c._bindPopupMousedown(),
c.STATU("inited",!0)),c._showPopupImg(d.getAttribute("data-original-url"),d.getAttribute("src")),f.show(c.ATTR("popup")),f.show(c.ATTR("ieIframeMask")),f.show(c.ATTR("closeBtn")))})},_showPopupImg:function(a,b){var c=this,g=document.body.clientWidth||doucment.doucmentElement.clientWidth;c.ATTR("popupBd").innerHTML=e(c.DATA("POPUP_IMG")).render({imgSrc:b,imgAlt:"\u037c\u01ac\ufffd\ufffd\u037c",showWidth:parseInt(g/2,10),left:parseInt(g/4,10),top:0});d.UA.ie&&6==d.UA.ie&&(c.ATTR("popup").style.height=(document.body.scrollHeight||
document.documentElement.scrollHeight)+"px",c.ATTR("popup").style.width=(document.body.scrollWidth||document.documentElement.scrollWidth)+"px");c.ATTR("initWidth",parseInt(g/2,10));c.cleanRecords(!0);c.ATTR("activeImg",f.get("IMG",c.ATTR("popupBd")));c.ATTR("initAnim")&&c.ATTR("initAnim").stop(!1);c.ATTR("initAnim",(new h(c.ATTR("activeImg"),{top:(document.body.scrollTop||document.documentElement.scrollTop)+30+"px"},1,"easeOutStrong")).run());c.ATTR("bigImgObj").onload=null;if(a||""!=a)c.ATTR("bigImgObj",
null),c.ATTR("bigImgObj",new Image),c.ATTR("bigImgObj").onload=function(){c.ATTR("activeImg").src=a};c.ATTR("bigImgObj").src=a;c.registerWheelEvent()},registerWheelEvent:function(){g.on(document,"DOMMouseScroll",i,this);g.on(document,"mousewheel",i,this);g.on(document,"keyup",this.closePopup,this)},cancelWheelEvent:function(){g.remove(document,"DOMMouseScroll",i,this);g.remove(document,"mousewheel",i,this);g.remove(document,"keyup",this.closePopup,this)},registerEvent:function(){g.on(document,"mouseup",
v,this);g.on(document,"mousemove",t,this)},cancelEvent:function(){g.remove(document,"mouseup",v,this);g.remove(document,"mousemove",t,this)},_createPopup:function(){this.ATTR("popup",f.create(this.DATA("POPUP_TPL")));this.ATTR("closeBtn",f.create(this.DATA("POPUP_HD_TPL")));d.UA.ie&&6==d.UA.ie&&(this.ATTR("ieIframeMask",f.create(this.DATA("POPUP_IFRAME_TPL"))),this.ATTR("ieIframeMask").style.width=document.documentElement.scrollWidth+"px",this.ATTR("ieIframeMask").style.height=document.documentElement.scrollHeight+
"px",document.body.appendChild(this.ATTR("ieIframeMask")));document.body.appendChild(this.ATTR("popup"));this.ATTR("popup").appendChild(this.ATTR("closeBtn"))},_bindPopupMousedown:function(){var a=this;g.on(a.ATTR("popup"),"mousedown",function(b){var c=b.target;"IMG"==c.tagName.toUpperCase()&&(b.halt(),a.ATTR("initAnim")&&a.ATTR("initAnim").stop(!1),a.ATTR("initAnim",null),a.cleanRecords(!0),a.ATTR("dragInfoX").push(l(c,"left")),a.ATTR("dragInfoY").push(l(c,"top")),a.ATTR("dragInfoTime").push((new Date).getTime()),
a.ATTR("activeImg",c),a.ATTR("mousedownCoo",p(b)),a.ATTR("activeImgPos",{left:l(c,"left"),top:l(c,"top")}),a.registerEvent())});g.on(a.ATTR("closeBtn"),"click",function(b){b.halt();a.closePopup()});g.on(a.ATTR("popup"),"click",function(b){d.UA.ie&&6==d.UA.ie&&f.hasClass(b.target,"img-dd-opacity-bg")&&(b.halt(),a.closePopup())});return!0},_initHTMLElement:function(){this.ATTR("popupOpacityBg",f.get(".img-dd-opacity-bg",this.ATTR("popup")));this.ATTR("popupBox",f.get(".img-dd-box",this.ATTR("popup")));
this.ATTR("popupHd",f.get(".box-hd",this.ATTR("popup")));this.ATTR("popupBd",f.get(".box-bd",this.ATTR("popup")))},afterUserDrag_MyShowTime:function(){this.ATTR("dragInfoX");this.slide_straightLine();return!1},slide_straightLine:function(){var a=0,b=0,c,d,e,g=this.ATTR("dragInfoX");e=this.ATTR("dragInfoY");var f=g.length,a=this.ATTR("dragInfoTime"),b=1;for(t0=a[f-1];b<f&&50>t0-a[f-++b];);2==b&&500<t0-a[f-b]||(b<=f?(t1=a[f-b+1],g=g[f-1]-g[f-b],e=e[f-1]-e[f-b],a=1E3*(g/(t0-t1)),b=1E3*(e/(t0-t1)),0<
g?c=!0:c=!1,0<e?d=!0:d=!1):(b=a=100,g[f-1]>g[0]?c=!0:c=!1,e[f-1]>e[0]?d=!0:d=!1),e=parseInt(Math.abs(NaN),10),c=(c?"+=":"-=")+a*a/2/1E5,d=(d?"+=":"-=")+b*b/2/1E5,this.ATTR("autoSlideAnim",(new h(this.ATTR("activeImg"),{left:c,top:d},e,"easeOutStrong")).run()))},cleanRecords:function(){this.ATTR("dragInfoX",[]);this.ATTR("dragInfoY",[]);this.ATTR("dragInfoTime",[]);this.ATTR("autoSlideAnim")&&this.ATTR("autoSlideAnim").isRunning&&this.ATTR("autoSlideAnim").stop(!1)},closePopup:function(a){if(void 0!=
a&&a instanceof KISSY.EventObject){var b=a.keyCode||a.charCode;if(a.altKey||27!=b)return!1}this.ATTR("activeImg",null);this.cancelWheelEvent();this.cancelEvent();f.hide(this.ATTR("popup"));f.hide(this.ATTR("closeBtn"));f.hide(this.ATTR("ieIframeMask"))},destory:function(){}});return s},{requires:["./asdbase","template","anim","./assets/image-dd.css"]});