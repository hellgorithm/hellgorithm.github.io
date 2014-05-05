var gameareaScroll = 0;

window.onload = function(){
		flappy = document.getElementById("flappy"),
		flappynav = document.getElementById("nav-flappy"),
		mushroom1 = document.getElementById("mushroom"),
		mushroom2 = document.getElementById("mushroom2"),
		mess = document.getElementById("message-holder"),
		curtain = document.getElementById("black-curtain"),
		close = document.getElementById("message-close"),
		
		//spiders
		hand2 = document.getElementsByClassName("hand2"),
		hand3 = document.getElementsByClassName("hand3"),
		mouth1 = document.getElementsByClassName("mouth1"),
		mouth2 = document.getElementsByClassName("mouth2"),
		bug = document.getElementsByClassName("pl-bug"),
		gamearea = document.getElementById("gamearea"),
			moby		=	document.getElementById("moby"),
			star		=	document.getElementById("star"),
			titanic		=	document.getElementById("titanic"),
			boat1		=	document.getElementById("boat1"),
			boat2		=	document.getElementById("boat2"),
			alieneye		=	document.getElementById("alien-eye");
	
	stop();

	window.onkeydown = function(e){
		if(e.keyCode == 39){
			gameareaScroll += 50;
			gamearea.scrollLeft = gameareaScroll;
			flappynav.style.left = (gameareaScroll + 100) + "px";
			flappy.style.animationPlayState = "paused";
			flappy.style.webkitAnimationPlayState = "paused";

		}else if(e.keyCode == 37){
			if(gameareaScroll < 10){
				gameareaScroll = 50;
			}else{

			gameareaScroll -= 50;
			gamearea.scrollLeft = gameareaScroll;
			flappynav.style.left = (gameareaScroll + 100) + "px";

			}
		}

		//go();
	}
	
	window.onkeyup = function(){
		flappy.style.animationPlayState = "running";
		flappy.style.webkitAnimationPlayState = "running";
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
			star.style.left = window.getComputedStyle(gamearea).left != "0px" ? window.getComputedStyle(gamearea).left : gamearea.offsetLeft + "px";
			
		}else{
			star.style.position = "absolute";
			star.style.left = "5000px";
		}
		if(this.scrollLeft > 7400){
			titanic.style.bottom = "-600px";
		}else{
			titanic.style.bottom = "-40px";
		}
		//
		if(this.scrollLeft > 800){
			mushroom.style.animationPlayState = "paused";
			mushroom.style.webkitAnimationPlayState = "paused";
		}else{
			mushroom.style.animationPlayState = "running";
			mushroom.style.webkitAnimationPlayState = "running";
		}
		if(this.scrollLeft > 200 && this.scrollLeft < 1300){
			mushroom2.style.animationPlayState = "running";
			mushroom2.style.webkitAnimationPlayState = "running";
		}else{
			mushroom2.style.animationPlayState = "paused";
			mushroom2.style.webkitAnimationPlayState = "paused";
		}
		
		if(this.scrollLeft > 1000 && this.scrollLeft < 1700){
			
			for(var i = 0;i < hand2.length;i++){
				
				hand2[i].style.animationPlayState = "running";
				hand3[i].style.animationPlayState = "running";
				hand2[i].style.webkitAnimationPlayState = "running";
				hand3[i].style.webkitAnimationPlayState = "running";
			}
		}else{
			for(var i = 0;i < hand2.length;i++){
				
				hand2[i].style.animationPlayState = "paused";
				hand3[i].style.animationPlayState = "paused";
				hand2[i].style.webkitAnimationPlayState = "paused";
				hand3[i].style.webkitAnimationPlayState = "paused";
			}
		}
		
		if(this.scrollLeft > 2000 && this.scrollLeft <  3400){
			
			for(var i =0;i <= 2;i++){
				mouth1[i].style.animationPlayState = "running";
				mouth2[i].style.animationPlayState = "running";
				mouth1[i].style.webkitAnimationPlayState = "running";
				mouth2[i].style.webkitAnimationPlayState = "running";
			}
		}else{
			for(var i =0;i <= 2;i++){
				mouth1[i].style.animationPlayState = "paused";
				mouth2[i].style.animationPlayState = "paused";
				mouth1[i].style.webkitAnimationPlayState = "paused";
				mouth2[i].style.webkitAnimationPlayState = "paused";
			}
			
		}
		if(this.scrollLeft > 3400 && this.scrollLeft <  4200){
			
				boat1.style.animationPlayState = "running";
				boat2.style.animationPlayState = "running";
				boat1.style.webkitAnimationPlayState = "running";
				boat2.style.webkitAnimationPlayState = "running";
		}else{
				boat1.style.animationPlayState = "paused";
				boat2.style.animationPlayState = "paused";
				boat1.style.webkitAnimationPlayState = "paused";
				boat2.style.webkitAnimationPlayState = "paused";
		}
		if(this.scrollLeft > 4100 && this.scrollLeft <  5600){
			
			for(var i = 0;i < bug.length;i++){
				bug[i].style.animationPlayState = "running";
				bug[i].style.webkitAnimationPlayState = "running";
			}
		}else{
			for(var i = 0;i < bug.length;i++){
				bug[i].style.animationPlayState = "paused";
				bug[i].style.webkitAnimationPlayState = "paused";
			}
		}
		
		if(this.scrollLeft > 9600){
			
			alieneye.style.animationPlayState = "running";
			alieneye.style.webkitAnimationPlayState = "running";
		}else{
			
			alieneye.style.animationPlayState = "paused";
			alieneye.style.webkitAnimationPlayState = "paused";
		}
		
		
		
	}
	
}

window.onerror = function(e){
		console.log(e);
	}
