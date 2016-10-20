'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bangup = function () {
	function Bangup(container, fromSum, toSum, duration) {
		_classCallCheck(this, Bangup);

		this.container = container;
		this.fromSum = Math.round(fromSum);
		this.toSum = Math.round(toSum);
		this.startTime = null;
		this.duration = Number(duration) * 1000 || 2000;

		/**
   * http://paulirish.com/2011/requestanimationframe-for-smart-animating
   * shim layer with setTimeout fallback
   */
		window.requestAnimFrame = function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
				window.setTimeout(callback, 1000 / 60);
			};
		}();

		window.requestAnimationFrame(this.pileNumbers.bind(this));
	}

	_createClass(Bangup, [{
		key: 'pileNumbers',
		value: function pileNumbers(timestamp) {
			if (!this.startTime) {
				this.startTime = timestamp;
			}

			var progress = timestamp - this.startTime;
			this.container.innerHTML = Math.round(Bangup.easeOutExpo(progress, this.fromSum, this.toSum - this.fromSum, this.duration));

			// Continue if the duration is not elapsed
			if (progress < this.duration) {
				window.requestAnimationFrame(this.pileNumbers.bind(this));
			}
		}

		/**
   * Robert Penner's easeOutExpo
   * @param currentTime current time
   * @param startValue start value
   * @param endValue end value - the value which should reach
   * @param duration duration in milliseconds
   * @returns {*}
   */

	}], [{
		key: 'easeOutExpo',
		value: function easeOutExpo(currentTime, startValue, endValue, duration) {
			return currentTime == duration ? startValue + endValue : endValue * (-Math.pow(2, -10 * currentTime / duration) + 1) + startValue;
		}
	}]);

	return Bangup;
}();

var bangup = new Bangup(document.querySelector('#prize'), 1, 100, 4);