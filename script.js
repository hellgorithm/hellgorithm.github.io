window.onload = function(){
	var flappy = document.getElementById("flappy");
	var floor = document.getElementById("floor");
	var pipe1 = document.getElementById("pipe");
	var pipe2 = document.getElementById("pipe2");
	var bar = document.getElementById("house-bar");
	var pl = document.getElementById("pl");
	var mushroom = document.getElementById("mushroom");
	var mushroom2 = document.getElementById("mushroom2");
	var bugs = document.getElementsByClassName("pl-bug");
	
	this.onkeypress = function(e){
		
		try{
			flappy.style.animationPlayState = "running";
			flappy.style.webkitAnimationPlayState = "running";
			floor.style.animationPlayState = "running";
			floor.style.webkitAnimationPlayState = "running";
			pipe1.style.animationPlayState = "running";
			pipe1.style.webkitAnimationPlayState = "running";
			pipe2.style.animationPlayState = "running";
			pipe2.style.webkitAnimationPlayState = "running";
			bar.style.animationPlayState = "running";
			bar.style.webkitAnimationPlayState = "running";
			pl.style.animationPlayState = "running";
			pl.style.webkitAnimationPlayState = "running";
			mushroom.style.animationPlayState = "running";
			mushroom.style.webkitAnimationPlayState = "running";
			mushroom2.style.animationPlayState = "running";
			mushroom2.style.webkitAnimationPlayState = "running";
			for(var i = 0;i < bugs.length;i++){
				bugs[i].style.animationPlayState = "running";
				bugs[i].style.webkitAnimationPlayState = "running";
			}
		}catch(e){
			alert(e);
		}
	}
	
	this.onkeyup = function(e){
		
		setTimeout(function(){
			flappy.style.animationPlayState = "paused";
			flappy.style.webkitAnimationPlayState = "paused";
			floor.style.animationPlayState = "paused";
			floor.style.webkitAnimationPlayState = "paused";
			pipe1.style.animationPlayState = "paused";
			pipe1.style.webkitAnimationPlayState = "paused";
			pipe2.style.animationPlayState = "paused";
			pipe2.style.webkitAnimationPlayState = "paused";
			bar.style.animationPlayState = "paused";
			bar.style.webkitAnimationPlayState = "paused";
			pl.style.animationPlayState = "paused";
			pl.style.webkitAnimationPlayState = "paused";
			mushroom.style.animationPlayState = "paused";
			mushroom.style.webkitAnimationPlayState = "paused";
			mushroom2.style.animationPlayState = "paused";
			mushroom2.style.webkitAnimationPlayState = "paused";
			
			for(var i = 0;i < bugs.length;i++){
				bugs[i].style.animationPlayState = "paused";
				bugs[i].style.webkitAnimationPlayState = "paused";
			}
		},100);
	}
	
}

window.onerror = function(){
		alert("something wrong");
	}
