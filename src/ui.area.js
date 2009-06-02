/*
 * jQuery UI Area (2D) Surface Widget @VERSION
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

$.widget('ui.area', $.extend({}, $.ui.surface, {

	_set: {
		x: restrict,
		y: restrict
	},

	_getPoint: function() {
		var limits = this.limits();
		return {
			left: Math.round(this._getData('x') * limits.width),
			top: Math.round(this._getData('y') * limits.height)
		};
	},
	
	_setPoint: function( x, y ) {
		var limits = this.limits();
		this._setData('x', x / limits.width);
		this._setData('y', y / limits.height);
	},
	
	_ui: function(event) {
		return { x: this._getData('x'), y: this._getData('y') };
	},

	limits: function() {
		return {
			width: this.element.innerWidth() - 1,
			height: this.element.innerHeight() - 1
		};
	}
}));

$.extend($.ui.area, {
	version: "@VERSION",
	eventPrefix: "point",
	
	defaults: {
		reticle: '.ui-reticle',
		cancel: null,
		delay: 0,
		distance: 0,
		x: 0,
		y: 0
	}
});

})(jQuery);

