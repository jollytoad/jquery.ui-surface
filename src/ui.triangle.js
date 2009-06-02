/*
 * jQuery UI Triangle Surface Widget @VERSION
 *
 * Copyright (c) 2009 Adaptavist.com
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Depends:
 *  ui.core.js
 *  ui.surface.js
 */
(function($) {

function restrict(v) { return Math.max(0, Math.min(1, v)); }

$.widget('ui.triangle', $.extend({}, $.ui.surface, {

	_mouseCapture: function(event) {
		var offset = this.offset();
		return this._setPoint(event.pageX - offset.left, event.pageY - offset.top,
								event.target !== this.reticle[0]);
	},
	
	_mouseStart: function(event) {
		this._updated();
		this._trigger('drag', event, this._ui());
		return true;
	},

	_set: {
		v: restrict,
		s: restrict
	},

	_getPoint: function() {
		var limits = this.limits(),
			v = this._getData('v'),
			s = this._getData('s');
		return {
			left: Math.round( ( (s*v) + (1-v)/2 ) * limits.width ),
			top: Math.round(v * limits.height)
		};
	},
	
	_setPoint: function( x, y, strict ) {
		var limits = this.limits(),
			v = y / limits.height,
			s = ( (x / limits.width) - (1-v)/2 ) / v;
		
		if (strict && (v < 0 || v > 1 || s < 0 || s > 1)) { return false; }
		
		this._setData('v', v);
		this._setData('s', s);
		return true;
	},
	
	_ui: function(event) {
		return { v: this._getData('v'), s: this._getData('s') };
	},

	limits: function() {
		return {
			width: this.element.innerWidth() - 1,
			height: this.element.innerHeight() - 1
		};
	}

}));

$.extend($.ui.triangle, {
	version: "@VERSION",
	eventPrefix: "point",
	
	defaults: {
		reticle: '> .ui-reticle',
		cancel: null,
		delay: 0,
		distance: 0,
		v: 0,
		s: 0
	}
});

})(jQuery);

