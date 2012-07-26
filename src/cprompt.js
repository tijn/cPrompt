/**
	Simple Cookie Prompt
	Idea: @panda_doodle - Coded: @michaelw90
**/
var cPrompt = {

	cookie: false,

	n: 3,

	hideOnAccept: false,

	minimisePrompt: false,

	cookieLink: '',

	prompts: [],

	p: null,

	init: function(){
		this.prompts = [
			['background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAIAAAAY12rUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkREMThCNEU2OTUzNTExRTE5QzQwRjBEMTRDNjk0REVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkREMThCNEU3OTUzNTExRTE5QzQwRjBEMTRDNjk0REVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REQxOEI0RTQ5NTM1MTFFMTlDNDBGMEQxNEM2OTRERUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REQxOEI0RTU5NTM1MTFFMTlDNDBGMEQxNEM2OTRERUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7TFExmAAABlklEQVR42mL8+fQZA17w//FTBgF+Rl4e/MqY8Ev/2bLjR2L6j9CYfydPk2/Q/zdv/8ycCzbvz6/+Kf+/fyfToN+z58E1gwxdvoYcg/5eufZ370Egg1FMlFFSAiSyfhPQOJIN+jN9DpBk8fHgWDafY/EcFk83oOuAbiTNIKBb/t28BZLW1YWIMKqpQMSBLiXWIPw2/5k8g+HvP6IM+rNsJZ6w+Hf33p9dewgb9P/5iz+rNxBIXAuXYiYFdIN+L1gMTDUE0jowKSxbic8geJQTBEBX/3/2HIdBf/+BAhLN8mfQnPj/6XNUk/78mjoLWYAFIbVtBzAg0W1esfrfkycMv/7+PXYMPdRPnv534SKTgT6Ki4CBBwxCrL5gFBRiUpJn5ODEkoemz4UnBSZElH/4iKmU2debNSOZJTaSNTEWe1LYtgNhEDDYcEb5z58wJ//AHurzFv3//AUaRr9nzcMV5UAL/3/+zMjJ+XffAexJ4fOXP7PmsRbnMf64ev1HeCzWVE884Ni8GuQ1Rl5eSkxh1tECOhkgwAA7U9lztkN0jwAAAABJRU5ErkJggg==) no-repeat 8px center; color: #f02932;  background-color: #f9e5e6; padding: 6px 10px 10px 40px;', "Opting out or refusing to accept cookies may cause this website to function incorrectly. <label for='cPrompt_check'>To accept cookies please tick this box</label><input type='checkbox' style='position: relative; top: 3px;' id='cPrompt_check' onclick='cPrompt.doClick(1);'>"],

			['background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFCNDIzQTJEOTUzNjExRTFCRTFGOTM2REI5RERBRTJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFCNDIzQTJFOTUzNjExRTFCRTFGOTM2REI5RERBRTJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUI0MjNBMkI5NTM2MTFFMUJFMUY5MzZEQjlEREFFMkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUI0MjNBMkM5NTM2MTFFMUJFMUY5MzZEQjlEREFFMkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Ud/f0AAACN0lEQVR42mK88eYrA27w++/f159ACkR4udhYWPCoxC738PWHs3ef3H7+9uvP33BBTnZWFQlhYyVpJXFBTC2MaC569+Xb9rO3bj5/g8dyoEFeRhpi/Nw4DQI6YfWxyz9+/2EgBIDeDLLQ0pIRg4swIZuy9NAFYkwBgl9//qw4cunG09foBgF9BHTLv///GUgBa45fffXxK4pBwHDB5RZZEX5vY3VgrGF11+Yz1xEGPX7zEU/oAk0xV5W11lDAFb/AMIEadPHBczzu333xzqWHL47feohLAUQ7KB3hcg4zM5OsED8vB9vWcze/IyUoNHD7BchFLMC0+/HrD0xpYDLxNdGUFOQBxvSn7z8nbjkGVInVIKAdQAVMn7//xCoNjI65e88A4wXI5uNkF+LlxOP9rz9/Mf35iy/KZUT4geT7L99ff/yKPymwAIMAlxwwjIwUpYCMw9cf4E9i3OxsTMCsyM/NgT1PiQnygK25/uQVHlOAJgD9Dop+DSlRrCo42FghDB6gWmZmXAapSwpD05GhkiRWFVcfvdxz8Q4wuTpoKwLdhssgI2VpRO5fefTy1ccvGUgH8qICyc4miLzmpq/Czc5KqikcrCz+ZloomVaQhzPUSg8YTcSbwsTIGGylA8/MTMjlXryDISdx7gIm92g7A3VJEZxFLTDt7bxw+xre+AbqdzdSQytYGLHWIk/efjx958ndF+8+IWUgYJpSEhcyVZEBBjDhwh8TvPzw5e//f1KCfPiVAQQYAGqD6SyKz14dAAAAAElFTkSuQmCC) no-repeat 8px center; color: #5694b1; border-color: #9ac9df; background-color: #d8ecf5; padding: 10px 10px 10px 40px;', "Some of the cookies we store are essential to make our site work and have already been set. " + (this.cookieLink != ''? "You can find out how and why we use cookies in our <a style='color: #5694b1; font-weight: bold;' href='" + this.cookieLink + "'>cookie policy</a>." : '') + "<br /><label for='cPrompt_check'>To accept cookies please tick this box</label><input type='checkbox' style='position: relative; top: 3px;' id='cPrompt_check' onclick='cPrompt.doClick(1);'>"],

			['background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAZCAIAAACza+nDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZEOEE3RjI3OTUzNTExRTE5NEZDOTk1NDQ1NkEwMTk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZEOEE3RjI4OTUzNTExRTE5NEZDOTk1NDQ1NkEwMTk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkQ4QTdGMjU5NTM1MTFFMTk0RkM5OTU0NDU2QTAxOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkQ4QTdGMjY5NTM1MTFFMTk0RkM5OTU0NDU2QTAxOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qbRAvAAACm0lEQVR42mJ8/PoYA+mABYi/ff/w/ccnIIOPR5SVlZMobYdPL7t1/zgnBx9EJxBwsPNwcwmxs3IATeHnE5MUUxcWkEbTxvT63UMgJS+ly87GZajlqavh8uPnF6A6OWndG/eOnryw/tSFdWh6vnx9ywLTziQhpqooa/Dr9/fLN/ZIiavJSWqfOL8WKPPs1S2gi4QFZFhYWL98fX/v8VkOdl4WuBkCvBLrdraLiygnh00+cGLh0bOrgIwbdw6zsnFevL77/uNzfLziX76++fnrG4o2Hm5BRRkDoK+AbgOyleVNgIyfv7/9/P1DSkyNkZEJ6E+g8759//zpy2smuDYuDj5DbU8FGb2jZ1YI8kuZ6foCGV++f3z/8Zm6kiVc3NIwCBoBMN8x7zu+ACgR4Fp64/6J63eOABnPX99hYWI9c3kLMzMbRBzocxYWDoRtrCzsRMY1MxMzQhvQr06WCdqqtht2d0uIKLnbpgMZH7+8efHmnomuD1zc2zGfmZmVceISX6DrNVRsxYUUHz27BAwSiNeBIQGMvZ8/vwCdD0wJyEHy4+dnJNt+f73/5AIw9jWUrIHxc/fhGSCDnZULGKrAqIOL335wAiVIgMEa5F4JjO65q3KBrtJQtgYygFHy+88vR4t4iLiDRby1cdj+EwsR2l6/fcjOyv3n328gGxh0oCjhFPj77y/QuPuPL7CxcUBsu/XgJMK2Dx+fA50BRDzcwsCUKSIkKyIoC9QGlAKmmPPXtgPTOjDdAhM90BRZSW2oNqAGVQULNUVzCVEVtODW13QFBvL3n1++//oiL6MvKiQvI64O1aYqb2ZtEoE1loAJwN0uEz3jwNMISbmbiYEsMDS0AQsCJiYWYEYkSRsjsJwEljnA0ookbQABBgCiHi0T7EeNbwAAAABJRU5ErkJggg==) no-repeat 10px center; color: #91a44d; border-color: #c2d288; background-color: #e3ebc6; padding: 10px 10px 10px 40px;', "Thank you, cookies have been accepted. You can opt out of this at any time by <a style='color: #91a44d; font-weight: bold;' href='javascript: void(0);' onclick='cPrompt.doClick(0);'>clicking here</a>."],

			['background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAIAAAAY12rUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVCRTQ1MzgzOTUzNTExRTFBMDExQzkzQUFFRTAzRDEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVCRTQ1Mzg0OTUzNTExRTFBMDExQzkzQUFFRTAzRDEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUJFNDUzODE5NTM1MTFFMUEwMTFDOTNBQUVFMDNEMTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUJFNDUzODI5NTM1MTFFMUEwMTFDOTNBQUVFMDNEMTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5OychJAAABnElEQVR42mL88/0mA17w6+sTZnZ+ZhZe/MqY8Et/err18fGkh4fCv705Sb5Bf36+eXt7FpDx/9+f19cn/vvznUyD3t6eA9cMNPTDw5XkGPTjw5UvL/YBGSwcYqycEkDGx8frgcaRbNCbWzOBJJ+0t7zNEjnrRXzSHkDXAd1ImkFAt/z8BIpNTkFdiAgbrxpEHOhSYg3Cb/PrG1MZ/v8lyqAPD5bhCYtfX+5+erabsEG/v7/48Ggt/iTz/t4izKSAbtC7uwuAqQa/QaCk8GAZPoPgUU4QAF39+9tTHAb9/wsKSLQQ+fYM6gpUbUBXv7k1A1mEBc76+HQ7MCDRbX648ve3Jwz/fn95fQxNCpj7vr+7wClkgOIiYOC9v7sQqy9Y2ARZeRSZmDmwJ1pYUmCCR/nf3x8xlfJL+wirpQspxQgpJ2BNCkB/IAwCBhuuKP//7yfUyX9/YE8Kd+b//fMZGkbAdIwryoEW/v39mYmF8/OL/VgVAE15d3u2qGYR489Ppx4cisCa6okHig4bQV5jZuGhxBQOAR2gkwECDAApyuQsTTT/JwAAAABJRU5ErkJggg==) no-repeat 8px center; color: #d9b31f; border-color: #f5dc7d; background-color: #fcf7d9; padding: 6px 10px 10px 40px;', "This site uses cookies to store information on your computer. " + (this.cookieLink != ''? "To find out how we use them please <a style='color: #d9b31f; font-weight: bold;' href='" + this.cookieLink + "'>click here</a>." : '') + "<br /><input type='checkbox' onclick='cPrompt.doClick(1);' style='position: relative; top: 3px;' id='cPrompt_check'> <label for='cPrompt_check'>I accept cookies from this site.</label>"]
		];
		var cookie = this.checkCookie();

		if(window.console){
			console.log(cookie, this.hideOnAccept, ((cookie == 2 && this.hideOnAccept) || cookie != 2));
		}

		if((cookie == 2 && !this.hideOnAccept) || cookie != 2){
			this.loadPrompt(cookie);
			this.p = document.getElementById('cookie_prompt_' + this.n);
			if(document.cookie.match(/cPrompt_hide=/) || this.minimisePrompt){
				this.hidePrompt(null);
			}
		}
	},
	checkCookie: function(){
		if(this.cookie === false){
			if(!document.cookie.match(/cPrompt_useCookies=/)){
				this.cookie = 3;
			}else if(document.cookie.match(/cPrompt_useCookies=(\d)($|;)/)){
				this.cookie = parseInt(RegExp.$1);
			}
		}
		return this.cookie;
	},

	loadPrompt: function(n){
		if(n == 3){
			this.saveCookie('useCookies', 1);
		}
		if(n > 3 || n < 0){
			if(window.console){
				console.log('Error: Undefined num (' + n + ')');
			}
		}else{
			this.n = n;
			var h = document.createElement('div');
			with(h){
				innerHTML = this.prompts[n][1] + "<a style='float: right; font-weight: bold; color: #333;' class='close' onclick='cPrompt.hidePrompt(event)'>×</a>";
				style.cssText = 'font-family: sans-serif; border: solid 1px; border-left: solid 3px;' + this.prompts[n][0];
				className = 'cookie_box';
				id = 'cookie_prompt_' + n;
			}
			var b = document.body;
			b.insertBefore(h, b.firstChild);
		}
	},

	saveCookie: function(c, v){
		document.cookie = "cPrompt_" + c + "=" + v + ";path=/" + ";expires=" + (new Date()).toGMTString().replace(/\d{4}/, '2050');
	},

	hidePrompt: function(e){
		if(e != null){
			this.saveCookie('hide', 1);
			e.stopPropagation();
		}
		var h = this.p;
		with(h){
			style.cssText = this.prompts[this.n][0] + 'width: 0; background-position: 3px center; padding: 15px; border: 1px solid; font-family: sans-serif;';
			innerHTML = '';
			h.onclick = function(){
				cPrompt.reshow();
			}
		}
		document.body.appendChild(h);
	},

	reshow: function(){
		with(this.p){
			style.cssText = 'font-family: sans-serif; border: solid 1px; border-left: solid 3px;' + this.prompts[this.n][0];
			innerHTML = this.prompts[this.n][1] + "<a style='float: right; font-weight: bold; color: #333;' class='close' onclick='cPrompt.hidePrompt(event)'>×</a>";
		}
	},

	doClick: function(type){
		this.saveCookie('useCookies', (type == 0? 0 : 2));
		this.p.style.display = 'none';
		location.reload(true);
	},

	allowCookies: function(){
		return (cPrompt.checkCookie() == 1 || cPrompt.checkCookie() == 2);
	}
}
if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		cPrompt.init();
	}, false);
}else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		if(document.readyState === "complete"){
			cPrompt.init();
		}
	});
};
