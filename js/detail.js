var conTopLeftBox=document.getElementsByClassName('conTopLeftBox');
var preview=document.getElementsByClassName('preview');
var jqzoom=document.getElementById('jqzoom');
var zoomPup=jqzoom.getElementsByTagName('span')[0];
var jqzoom2=document.getElementById('jqzoom2');
var bigImg=jqzoom2.getElementsByTagName('img')[0];

var list=document.getElementById('list');

	var lis=list.getElementsByTagName('li');
	console.log(lis);
	for(i=0;i<4;i++){
		lis[i].index=i;
		console.log(i);
		lis[i].onclick=function  () {

			for(i=0;i<4;i++){
				lis[i].style.background="";
			}
			this.style.background="red";

			jqzoom.style.top=- this.index * 380 + 'px';
				}	

				}



				
			jqzoom.onmouseover=function  () {
	zoomPup.style.display="block";
	jqzoom2.style.display="block";
};
jqzoom.onmouseout = function(){
		zoomPup.style.display = 'none';
		jqzoom2.style.display = 'none';
	};
jqzoom.onmousemove = function(ev){
		var L = ev.pageX - zoomPup.offsetWidth/2-jqzoom.offsetLeft;
		var T = ev.pageY - zoomPup.offsetHeight/2-jqzoom.offsetTop;

		if(L<0){
			L = 0;
		}
		else if(L>jqzoom.offsetWidth - zoomPup.offsetWidth){
			L = jqzoom.offsetWidth - zoomPup.offsetWidth;

		}

		if(T<0){
			T = 0;
		}
		else if(T>jqzoom.offsetHeight - zoomPup.offsetHeight){
			T = jqzoom.offsetHeight - zoomPup.offsetHeight;
		}

		zoomPup.style.left = L + 'px';
		zoomPup.style.top = T + 'px';

		var scaleX = L / (jqzoom.offsetWidth - zoomPup.offsetWidth);
		var scaleY = T / (jqzoom.offsetHeight - zoomPup.offsetHeight);

		bigImg.style.left = - scaleX * (bigImg.offsetWidth - jqzoom2.offsetWidth) + 'px';
		bigImg.style.top = - scaleY * (bigImg.offsetHeight - jqzoom2.offsetHeight) + 'px';

	};
	

		


	
		
	
	