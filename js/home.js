
    var main = document.getElementById('main');
	var list = document.getElementById('list');
	var listLi = list.getElementsByTagName('li');	
	var slide = document.getElementById('slide');
	var slideLi = slide.getElementsByTagName('li');	
	var num = 0;
	var timer;
	for(var i=0;i<slideLi.length;i++){

		slideLi[i].index = i;

		slideLi[i].onclick = function(){
			for(var i=0;i<slideLi.length;i++){
				slideLi[i].className = '';
			}
			this.className = 'slide-active';
			list.style.left = - this.index * 1090 + 'px';
			num = this.index;
		};
	}

	main.onmouseover = function(){
		clearInterval(timer);
	};
	main.onmouseout = function(){
		timer = setInterval(run,5000);
	};

	timer = setInterval(run,5000);

	function run(){
		for(var i=0;i<slideLi.length;i++){
			slideLi[i].className = '';
		}
		if(num == slideLi.length-1){
			num = 0;
		}
		else{
			num++;	
		}
		slideLi[num].className = 'slide-active';
		list.style.left = - num * 1090 + 'px';
	}




var jsonData=[

{
	src:"http://img.muyingzhijia.com/img/201802/20180208092322_31_5.jpg",
	h2:"MINI SED果冻款童鞋冬季专场",
	p:"MINI SED果冻款童鞋冬季专场",
	count:"49"
},
{
	src:"http://img.muyingzhijia.com/img/201802/20180208092322_31_5.jpg",
	h2:"MINI SED果冻款童鞋冬季专场",
	p:"MINI SED果冻款童鞋冬季专场",
	count:"49"
},
{
	src:"http://img.muyingzhijia.com/img/201802/20180208092322_31_5.jpg",
	h2:"MINI SED果冻款童鞋冬季专场",
	p:"MINI SED果冻款童鞋冬季专场",
	count:"49"
},
{
	src:"http://img.muyingzhijia.com/img/201802/20180208092322_31_5.jpg",
	h2:"MINI SED果冻款童鞋冬季专场",
	p:"MINI SED果冻款童鞋冬季专场",
	count:"49"
},
{
	src:"http://img.muyingzhijia.com/img/201802/20180208092322_31_5.jpg",
	h2:"MINI SED果冻款童鞋冬季专场",
	p:"MINI SED果冻款童鞋冬季专场",
	count:"49"
}


]

for(i in jsonData){
	var main3=document.getElementsByClassName('main3')[0];
main3.innerHTML = `
            <ul  class="main3-list">
               
               <li>${jsonData[i].src}</li>
               <li>
					<h1>${jsonData[i].h2}</h1>
					<p>${jsonData[i].p}</p>
					<p>
						<span>￥${jsonData[i].count}起</span>
					<a href="#">点击进入</a>	
					</p>
					
				</li>
            </ul>
           
            `
}
 






