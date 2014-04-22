window.onload = function(){
	var name = document.getElementById("name");
	var flappy = document.getElementById("flappy");
	var floor = document.getElementById("floor");
	var pipe1 = document.getElementById("pipe");
	var pipe2 = document.getElementById("pipe2");
	var bar = document.getElementById("house-bar");
	var pl = document.getElementById("pl");
	var mushroom = document.getElementById("mushroom");
	var mushroom2 = document.getElementById("mushroom2");
	var mushcover = document.getElementById("mushcover");
	var bugs = document.getElementsByClassName("pl-bug");
	var cloud1 = document.getElementById("cloud-cluster1");
	var cloud2 = document.getElementById("cloud-cluster2");
	var coin1 = document.getElementById("coin1"),
		dir1 = document.getElementById("dir1"),
		dir2 = document.getElementById("dir2"),
		curtain = document.getElementById("black-curtain"),
		close = document.getElementById("message-close"),
		mess = document.getElementById("message-holder"),
		count = 0;
	var interval;
	
	stop();

	window.onkeydown = function(e){
		name.style.animationPlayState = "running";
		name.style.webkitAnimationPlayState = "running";
		if(e.keyCode == 32){
			go();
			direction("normal");
		}else if(e.keyCode == 66){
			go();
			direction("reverse");
		}
		/*interval = setInterval(function(){
			console.log(count);
			count++;
		},1000);*/
	}
	
	this.onkeyup = function(e){
		//clearInterval(interval);
		stop();	
	}

	function go(){

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
			cloud1.style.animationPlayState = "running";
			cloud2.style.animationPlayState = "running";
			cloud1.style.animationPlayState = "running";
			cloud2.style.animationPlayState = "running";
			cloud1.style.webkitAnimationPlayState = "running";
			cloud2.style.webkitAnimationPlayState = "running";
			coin1.style.animationPlayState = "running";
			coin1.style.webkitAnimationPlayState = "running";
			
			dir1.style.animationPlayState = "running";
			dir1.style.webkitAnimationPlayState = "running";
			dir2.style.animationPlayState = "running";
			dir2.style.webkitAnimationPlayState = "running";

			for(var i = 0;i < bugs.length;i++){
				bugs[i].style.animationPlayState = "running";
				bugs[i].style.webkitAnimationPlayState = "running";
			}
	}

	function stop(){
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
			cloud1.style.animationPlayState = "paused";
			cloud1.style.webkitAnimationPlayState = "paused";
			cloud2.style.animationPlayState = "paused";
			cloud2.style.webkitAnimationPlayState = "paused";
			coin1.style.animationPlayState = "paused";
			coin1.style.webkitAnimationPlayState = "paused";
			
			dir1.style.animationPlayState = "paused";
			dir1.style.webkitAnimationPlayState = "paused";
			dir2.style.animationPlayState = "paused";
			dir2.style.webkitAnimationPlayState = "paused";
			
			for(var i = 0;i < bugs.length;i++){
				bugs[i].style.animationPlayState = "paused";
				bugs[i].style.webkitAnimationPlayState = "paused";
			}
		},100);
	}


	function direction(move){
			flappy.style.animationDirection = move;
			flappy.style.webkitAnimationDirection = move;
			floor.style.animationDirection = move;
			floor.style.webkitAnimationDirection = move;
			pipe1.style.animationDirection = move;
			pipe1.style.webkitAnimationDirection = move;
			pipe2.style.animationDirection = move;
			pipe2.style.webkitAnimationDirection = move;
			bar.style.animationDirection = move;
			bar.style.webkitAnimationDirection = move;
			pl.style.animationDirection = move;
			pl.style.webkitAnimationDirection = move;
			mushroom.style.animationDirection = move;
			mushroom.style.webkitAnimationDirection = move;
			mushroom.style.animationDirection = move;
			mushroom.style.webkitAnimationDirection = move;
			mushroom2.style.animationDirection = move;
			mushroom2.style.webkitAnimationDirection = move;
			coin1.style.animationDirection = move;
			coin1.style.webkitAnimationDirection = move;
			dir1.style.animationDirection = move;
			dir1.style.webkitAnimationDirection = move;
			dir2.style.animationDirection = move;
			dir2.style.webkitAnimationDirection = move;
			
			for(var i = 0;i < bugs.length;i++){
				bugs[i].style.animationDirection = move;
				bugs[i].style.webkitAnimationDirection = move;
			}
	}

	coin1.onclick = function(){
		mess.innerHTML = "<br>root@bonakid:~# whoami<br><img id='me' src='img/me.png'><br><span class='bold'>Jim-Bert Amante</span><br>Bachelor of Science in Information Technology"
		curtain.style.animation = "fadein 1s forwards";
		curtain.style.webkitAnimation = "fadein 1s forwards";
	}
	mushcover.onclick = function(){
		mess.innerHTML = "<br>root@bonakid:~# whoami<br><img id='me' src='img/me.png'><br><span class='bold'>Jim-Bert Amante</span><br>Bachelor of Science in Information Technology"
		curtain.style.animation = "fadein 1s forwards";
		curtain.style.webkitAnimation = "fadein 1s forwards";
	}

	close.onclick = function(){
		curtain.style.animation = "fadeout1 1s forwards";
		curtain.style.webkitAnimation = "fadeout1 1s forwards";
		setTimeout(function(){
			curtain.style.animation = "";
			curtain.style.webkitAnimation = "";
		},1000);
	}
	
}

window.onerror = function(e){
		console.log(e);
	}
