// Copyright 2013 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function() {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

function anima(num) {

	var coin,
		coinImage,
		local,
		w,
		h,
		nof,
		c,
		tpf,
		canvas;					

	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);

	  coin.update();
	  coin.render();
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {
				tickCount = 0;
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                    if (num == 1 || num == 2 || num == 3) {
                    	if(frameIndex == 4){
                    		sleep(700);
                    	}
                    }else if(num == 4){
                    	if(frameIndex == 1){
                    		sleep(700);
                    	}
                    }
                } else {
                	//Aqui que rola o loop
                    // frameIndex = 0;
                }
            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	if (num < 4) {
		c = "animation";
	}else if (num == 4) {
		c = "animation1";
	}else if (num == 5) {
		c = "animation2";
	}else if (num == 6) {
		c = "animation3";
	}else if (num == 7) {
		c = "animation5";
	}else if (num == 8) {
		c = "animation4";
	}else if (num == 9) {
		c = "animation6";
	}else if (num == 10) {
		c = "animation7";
	}else if (num == 11) {
		c = "animation8";
	}else if (num == 12) {
		c = "animation9";
	}
	// Get canvas
	canvas = document.getElementById(c);
	if (num == 1) {
		canvas.width = 416;
		canvas.height = 516;
	}else{
		canvas.width = 508;
		canvas.height = 516;
	}
	
	// Create sprite sheet
	coinImage = new Image();	
	
	if (num == 0) {
		local = "./assets/images/animacoes/oisheet.png";
		w = 2032;
		h = 516;
		nof = 4;
	}else if (num == 1) {
		local = "./assets/images/animacoes/bomdiasheet.png";
		w = 6101;
		h = 516;
		nof = 12;
	}else if (num == 2) {
		local = "./assets/images/animacoes/boatardesheet.png";
		w = 6096;
		h = 516;
		nof = 12;
	}else if (num == 3) {
		local = "./assets/images/animacoes/boanoitesheet.png";
		w = 6604;
		h = 516;
		nof = 13;
	}else if (num == 4) {
		local = "./assets/images/animacoes/maçasheet.png";
		w = 1016;
		h = 516;
		nof = 2;
	}else if (num == 5) {
		local = "./assets/images/animacoes/ovosheet.png";
		w = 3556;
		h = 516;
		nof = 7;
	}else if (num == 6) {
		local = "./assets/images/animacoes/aguasheet.png";
		w = 3556;
		h = 516;
		nof = 7;
	}else if (num == 7) {
		local = "./assets/images/animacoes/chocolatesheet.png";
		w = 3556;
		h = 516;
		nof = 7;
	}else if (num == 8) {
		local = "./assets/images/animacoes/queijosheet.png";
		w = 1524;
		h = 516;
		nof = 3;
	}else if (num == 9) {
		local = "./assets/images/animacoes/amerelosheet.png";
		w = 2032;
		h = 516;
		nof = 4;
	}else if (num == 10) {
		local = "./assets/images/animacoes/verdesheet.png";
		w = 2032;
		h = 516;
		nof = 4;
	}else if (num == 11) {
		local = "./assets/images/animacoes/azulsheet.png";
		w = 3048;
		h = 516;
		nof = 6;
	}else if (num == 12) {
		local = "./assets/images/animacoes/vermelhosheet.png";
		w = 3556;
		h = 516;
		nof = 7;
	}

	// Create sprite
	coin = sprite({
		context: canvas.getContext("2d"),
		width: w,
		height: h,
		image: coinImage,
		numberOfFrames: nof,
		ticksPerFrame: 8
	});
	
	// Load sprite sheet
	coinImage.addEventListener("load", gameLoop);
	coinImage.src = local;

}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

function att(n){
	aaa = n;
}

function aprendi(){
	if (aaa == 4) {
    	$("#animation1").hide();
    }else if (aaa == 5) {
    	$("#animation2").hide();
    }else if (aaa == 6) {
    	$("#animation3").hide();
    }else if (aaa == 7) {
    	$("#animation5").hide();
    }else if (aaa == 8) {
    	$("#animation4").hide();
    }else if (num == 9) {
    	$("#animation6").hide();
    	$("#viewport").show();
    }else if (num == 10) {
    	$("#animation7").hide();
    	$("#viewport").show();
    }else if (num == 11) {
    	$("#animation8").hide();
    	$("#viewport").show();
    }else if (num == 12) {
    	$("#animation9").hide();
    	$("#viewport").show();
    }
}