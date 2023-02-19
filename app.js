let ellipse = document.querySelector('.ellipse');
let girl = document.querySelector('.image1');
let girl2 = document.querySelector('.image2');

function browser()
{
	var ua = navigator.userAgent;
	
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/Konqueror/) > 0) return 'Konqueror';
    if (ua.search(/Iceweasel/) > 0) return 'Debian Iceweasel';
    if (ua.search(/SeaMonkey/) > 0) return 'SeaMonkey';
	
    // Браузеров очень много, все вписывать смысла нет, Gecko почти везде встречается
    if (ua.search(/Gecko/) > 0) return 'Gecko';

    // а может это вообще поисковый робот
    return 'Search Bot';
}
console.log (browser());

if (browser() == 'Safari') {
    girl2.style.top = '882px';
}


function ellip () {
    ellipse.style.width = '346.78px';
    ellipse.style.height = '61.14px';
    // girl2.style.left = '-33px';    
}


function goimage () {
    girl.style['-webkit-transition'] = 'transform 5s ease-in-out';
    girl.style.WebkitTransition = 'transform 5s ease-in-out';
    girl.style.transition = 'transform 5s ease-in-out';

    girl.style['-webkit-transform'] ='translateY(-850px)';
    girl.style.WebkitTransform = 'translateY(-850px)';
    girl.style.transform ='translateY(-850px)';

    girl2.style['-webkit-transition'] = 'transform 5s ease-in-out';
    girl2.style.WebkitTransition = 'transform 5s ease-in-out';
    girl2.style.transition = 'transform 5s ease-in-out';

    girl2.style['-webkit-transform'] ='translateY(-850px)';
    girl2.style.WebkitTransform = 'translateY(-850px)';
    girl2.style.transform ='translateY(-850px)';

}
function widthEllipse () {
    ellipse.style.width = '193.78px';
    girl.style.zIndex = 10;
    girl2.style.opacity = '0';
  
}




setTimeout (ellip,1000);
setTimeout(goimage, 1000);
setTimeout(widthEllipse, 5000);



