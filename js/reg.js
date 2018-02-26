var number=document.getElementById('number');
var password=document.getElementById('password');
var password2=document.getElementById('password2');
var warn1=document.getElementById('warn1');
var warn2=document.getElementById('warn2');
var warn3=document.getElementById('warn3');
number.onblur = function(){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;

        if(this.value == ''||!myreg.test(this.value)){
            warn1.style.display='inline-block';
        }else if(myreg.test(this.value)==true){
           warn1.style.display='none';
        }
    };
password.onblur=function  () {
	// var mylength=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
	if(this.value == ''){
            warn2.style.display='inline-block';
        }else{
           warn2.style.display='none';
        }
}
password2.onblur=function  () {
	if(this.value == ''){
            warn3.style.display='inline-block';
        }else{
           warn3.style.display='none';
        }
}


var getCode = document.getElementById('get-mobile-code');
var text1=document.getElementById('text1');
var div2=document.getElementById('div2');	
	getCode.onclick = function(){

		var num = 60;
		getCode.style.background='url(http://static.boodoll.cn/omall/v15/images/register.png) -159px -151px'

		getCode.disabled = true;
		text1.innerHTML = num + 's';	
		div2.style.display="block";
		var timer = setInterval(function(){

			text1.innerHTML = --num + 's';

			if(num == -1){
				clearInterval(timer);
				getCode.disabled = false;
				getCode.style.background='url(http://static.boodoll.cn/omall/v15/images/register.png) 0 0'
				div2.style.display="none";
			}	

		},1000);
		


	};	




	
	var tips=document.getElementById('tips');
	number.onblur=function  () {
		var val=this.value.trim();
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function  () {
			if(xhr.readyState==4&&xhr.status==200){

				tips.innerHTML=xhr.responseText;
			}
		}
		xhr.open('POST','isAjax.php','true');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('number='+val);
	}
