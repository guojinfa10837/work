
import { createGlobalStyle } from 'styled-components';
export const GlobalStyled = createGlobalStyle`　
html,body,div,span,applet,object,,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
	margin:0;
	padding:0;
	border:0;
	font-size:100%;
	font:inherit;
	font-weight:normal;
	vertical-align:baseline;
}
/* HTML5 display-role reset for older browsers */
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
	display:block;
}
ol,ul,li {
	list-style:none;
}
blockquote,q {
	quotes:none;
}
blockquote:before,blockquote:after,q:before,q:after {
	content:'';
	content:none;
}
table {
	border-collapse:collapse;
	border-spacing:0;
}
th,td {
	vertical-align:middle;
}
/* custom */
a {
	outline:none;
	color:#16418a;
	text-decoration:none;
	-webkit-backface-visibility:hidden;
}
a:focus {
	outline:none;
}
input:focus,select:focus,textarea:focus {
	outline:-webkit-focus-ring-color auto 0;
}
*,*:after{
	padding:0;
	margin:0
}
#root{width:100%;
	height: 100%;}

*{
	padding:0;
	margin:0;
}
.componentsWrap{
	
	height: auto;
	position: absolute;
	z-index: 2;
}
.componentsWrap .item{
	width:150px;
	height: 150px;
	background:#ddd;
	position: absolute;
	left: 0;
	top:0;
}
.resizeWrap >span{
	position: absolute;

}
.resizeWrap >span.l{
	width:3px;
	background:red;
	top:0;
	left:0;
	z-index: 9;
	cursor:w-resize;
}
.resizeWrap >span.r{
	width:3px;
	background:red;
	top:0;
	right:0;
	z-index: 9;
	cursor:w-resize;
}
.resizeWrap >span.t{
	height:3px;
	background:red;
	top:0;
	right:0;
	z-index: 9;
	cursor:s-resize;
 }
 .resizeWrap >span.b{
	height:3px;
	background:red;
	bottom:0;
	right:0;
	z-index: 9;
	cursor:s-resize;
 }
 .resizeWrap >span.lt,.resizeWrap >span.lb,.resizeWrap >span.rt,.resizeWrap >span.rb{
	 width:10px;
	 height: 10px;
	 position: absolute;
	 border:1px solid red;
	 z-index: 10;
 }
 .resizeWrap >span.lt{
	 top:-5px;
	 left:-5px;
	 cursor:se-resize;
 }
 .resizeWrap >span.lb{
	 bottom:-5px;
	 left:-5px;
	 cursor:ne-resize;
 }
 .resizeWrap >span.rt{
	 top:-5px;
	 right:-5px;
	 cursor:ne-resize;
 }
 .resizeWrap >span.rb{
	 bottom:-5px;
	 right:-5px;
	 cursor:se-resize;
 }
 .tipsWrap{
	 position: absolute;
	 bottom:-55px;
	 right:-115px;
	 background:rgba(0, 0,0, 0.5);
	 width:100px;
	 
	 border-radius: 5px;
	 color:#fff;
 }
 .tipsWrap > p{
	 height: 25px;
	 line-height: 25px;
	 padding-left: 10px;
	 box-sizing: border-box;
	 font-size: 12px;
 }
`