var canvas= document.getElementById('test');
canvas.width=window.innerWidth="1500";
canvas.height=window.innerHeight="800";
var c = canvas.getContext("2d");

var x=innerWidth/2;
var y=innerHeight/2;
var dx =Math.random();
var dy =Math.random();
var r =25;
var bounce = 0.89;
var gravity =2;

function animation() {
	requestAnimationFrame(animation);
	c.clearRect(0,0,innerWidth,innerHeight);
	c.beginPath();
	c.arc(x,y,r,0,Math.PI*2);
	c.stroke();
	c.fillStyle="green";
	c.fill();

	
	// if(x+r>innerWidth || x-r<0){
	// 	dx=-dx;
	// }
	if(y+r>innerHeight){
		dy=-dy*bounce;
	}
	else{
		dy=dy+gravity;
	}
	// if(y+r>innerHeight || y-r<0){
	// 	dy=-dy;
	// }
	//x+=dx;
	y+=dy;
	//c.clearRect(250,250,innerWidth,innerHeight);
	//console.log(x);
	//console.log(y);
	
	}
	    
	
	


animation();