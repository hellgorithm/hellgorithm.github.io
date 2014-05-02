window.onload = function(){
		flappy = document.getElementById("flappy"),
		mushroom1 = document.getElementById("mushroom"),
		mushroom2 = document.getElementById("mushroom2");
		
		var gamearea = document.getElementById("gamearea"),
			moby		=	document.getElementById("moby"),
			star		=	document.getElementById("star"),
			titanic		=	document.getElementById("titanic");
	
	stop();

	window.onkeydown = function(e){
		if(e.keyCode == 32){
			go();
			direction("normal");
		}else if(e.keyCode == 66){
			go();
			direction("reverse");
			
			bar.style.animation = "rbars 10s forwards";
		}
	}
	
	this.onkeyup = function(e){
		stop();	
	}

	function go(){
			flappy.className = "flapping";
			mushroom1.style.animationPlayState = "running";
			mushroom2.style.animationPlayState = "running";
	}

	function stop(){
			flappy.className = "";
			flappy.style.transition = "bottom 500ms";
			mushroom1.style.animationPlayState = "paused";
			mushroom2.style.animationPlayState = "paused";
	}


	function direction(move){
			flappy.style.animationDirection = move;
			flappy.style.webkitAnimationDirection = move;
	}

	coin1.onclick = function(){
		mess.innerHTML = "<br>root@bonakid:~# whoami<br><img id='me' src='img/me.png'><br><span class='bold'>Jim-Bert Amante</span><br>Bachelor of Science in Information Technology"
		curtain.style.animation = "fadein 1s forwards";
		curtain.style.webkitAnimation = "fadein 1s forwards";
	}
	/*mushcover.onclick = function(){
		mess.innerHTML = "<br>root@bonakid:~# bonakid -v<br><br>I love technology...so much that i ended up experimenting (almost) all the technology ever existed to create virtual classroom(yeah college project), virtual assistant(another college project), websites and online systems, helping people deal with viruses, helping people fix their computers(for free), installing softwares, mentor for their thesis and speaker for some College seminars and workshops.";
		curtain.style.animation = "fadein 1s forwards";
		curtain.style.webkitAnimation = "fadein 1s forwards";
	}*/

	close.onclick = function(){
		curtain.style.animation = "fadeout1 1s forwards";
		curtain.style.webkitAnimation = "fadeout1 1s forwards";
		setTimeout(function(){
			curtain.style.animation = "";
			curtain.style.webkitAnimation = "";
		},1000);
	}
	
	gamearea.onscroll = function(){
		console.log(this.scrollLeft);
		if(this.scrollLeft > 4000){
			this.style.background = "rgba(17, 74, 116, 1)";
		}else{
			this.style.background = "#0099CC";
		}
		
		if(this.scrollLeft > 5800){
			moby.style.bottom = "-300px";
		}else{
			moby.style.bottom = "0px";
		}
		if(this.scrollLeft > 5000){
			star.style.position = "fixed";
			star.style.left = window.getComputedStyle(gamearea).left;
		}else{
			star.style.position = "absolute";
			star.style.left = "5000px";
		}
		if(this.scrollLeft > 7400){
			titanic.style.bottom = "-600px";
		}else{
			titanic.style.bottom = "-40px";
		}
	}
	
}

window.onerror = function(e){
		console.log(e);
	}
