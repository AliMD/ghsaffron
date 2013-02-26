(function($) {
	$.fn.shiningImage = function(params) {
		params = $.extend({
			color : '#FFFFFF',
			delay : 2000,
			direction : 'z',
			opacity : 0.5,
			scale : 0.25,
			speed : 60
		}, params);

		function init() {

			var timer;
			var gradPointPos_1 = 0;
			var gradPointPos_2 = 0;
			var gradPointPos_3 = 0;
			var playFx = true;

			if(isCanvasSupported) {
				var _originalImg = $(this);
				var width = _originalImg.width();
				var height = _originalImg.height();
				var ctx;
				var _self;
				var img;
				var imgFx;
				var gradient;
				_self = $('<canvas width="' + width + '" height="' + height + '"></canvas>');
				_self.attr('class', _originalImg.attr('class'));
				_self.attr('style', _originalImg.attr('style'));
				_self.attr('id', _originalImg.attr('id'));
				_originalImg.attr('id', _originalImg.attr('id') + '_');
				_originalImg.after(_self);
				_originalImg.hide();
				ctx = _self.get(0).getContext('2d');
				imgFx = new Image();
				imgFx.onload = function() {
					initDesign();
				};
				imgFx.src = _originalImg.attr('src');
				_self.click(function() {
					_originalImg.trigger('click');
				});
				_self.mouseover(function() {
					_originalImg.trigger('mouseover');
				});
				_self.mouseout(function() {
					_originalImg.trigger('mouseout');
				});
				_self.mouseup(function() {
					_originalImg.trigger('mouseup');
				});
				_self.mousedown(function() {
					_originalImg.trigger('mousedown');
				});
			}
			function initDesign() {
				gradPointPos_1 += params.scale / 3;
				gradPointPos_2 += params.scale / 3;
				gradPointPos_3 += params.scale / 3;

				if(params.direction == 'x') {
					grad = ctx.createLinearGradient(0, 0, width, 0);
				} else if(params.direction == 'y') {
					grad = ctx.createLinearGradient(0, 0, 0, height);
				} else {
					grad = ctx.createLinearGradient(0, 0, width, height);
				}

				if((gradPointPos_1 == params.scale / 3) && (gradPointPos_2 == params.scale / 3) && (gradPointPos_3 == params.scale / 3)) {
					gradPointPos_1 = 0;
					gradPointPos_3 = (params.scale / 3) * 2;
				} else if((gradPointPos_1 == params.scale / 3) && (gradPointPos_2 == params.scale / 3)) {
					gradPointPos_2 = (params.scale / 3) * 2;
				}

				if(gradPointPos_3 > 1) {
					gradPointPos_3 = 1;
				}
				if(gradPointPos_2 > 1) {
					gradPointPos_2 = 1;
				}
				if(gradPointPos_1 > 1) {
					playFx = false;
					timer = setTimeout(function() {
						playFx = true;
						initDesign();
					}, params.delay);
				}
				if(playFx) {
					grad.addColorStop(gradPointPos_1, 'rgba(' + hexToRGBA(params.color) + ',0)');
					grad.addColorStop(gradPointPos_2, 'rgba(' + hexToRGBA(params.color) + ',1)');
					grad.addColorStop(gradPointPos_3, 'rgba(' + hexToRGBA(params.color) + ',0)');
				} else {
					gradPointPos_1 = 0;
					gradPointPos_2 = 0;
					gradPointPos_3 = 0;

					grad.addColorStop(gradPointPos_1, 'rgba(' + hexToRGBA(params.color) + ',0)');
					grad.addColorStop(gradPointPos_2, 'rgba(' + hexToRGBA(params.color) + ',0)');
					grad.addColorStop(gradPointPos_3, 'rgba(' + hexToRGBA(params.color) + ',0)');
				}
				ctx.clearRect(0, 0, width, height);
				ctx.globalCompositeOperation = "source-over";
				ctx.globalAlpha = 1;
				ctx.drawImage(imgFx, 0, 0, width, height);
				ctx.globalAlpha = params.opacity;
				ctx.globalCompositeOperation = "source-atop";
				ctx.fillStyle = grad;
				ctx.fillRect(0, 0, width, height);
				ctx.globalAlpha = 1;
				if(playFx) {
					timer = setTimeout(initDesign, params.speed);
				}
			}

			function cutHex(hex) {
				return (hex.charAt(0) == "#") ? hex.substring(1, 7) : hex;
			}

			function hexToRGBA(hex) {
				var rgba = parseInt((cutHex(hex)).substring(0, 2), 16);
				rgba += ',' + parseInt((cutHex(hex)).substring(2, 4), 16);
				rgba += ',' + parseInt((cutHex(hex)).substring(4, 6), 16);
				return rgba;
			}

			function isCanvasSupported() {
				var elem = document.createElement('canvas');
				return !!(elem.getContext && elem.getContext('2d'));
			}

		}

		$(this).each(init);

		return $(this);
	}
})(jQuery);
