/*
 * jQuery UI Wheel Surface Widget @VERSION
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

$.widget('ui.wheel', $.extend({}, $.ui.surface, {
	
	_getPoint: function() {
		var angle = this.options.value * 2*Math.PI,
			centre = this.centre(),
			radius = this.radius();
		
		return {
			left: Math.round(centre.x + Math.sin(angle) * radius.x),
			top: Math.round(centre.y - Math.cos(angle) * radius.y)
		};
	},
	
	_setPoint: function( x, y ) {
		var centre = this.centre();
		this.options.value = (Math.PI - Math.atan2(x - centre.x, y - centre.y)) / (2*Math.PI);
	},
	
	_ui: function(event) {
		return { value: this.options.value };
	},

	centre: function() {
		return {
			x: this.element.innerWidth()/2,
			y: this.element.innerHeight()/2		
		};
	},
	
	radius: function() {
		return {
			x: this.element.width()/2,
			y: this.element.height()/2
		};
	}

}));

$.extend($.ui.wheel, {
	version: "@VERSION",
	eventPrefix: "point",
	
	defaults: {
		reticle: '> .ui-reticle',
		cancel: null,
		delay: 0,
		distance: 0,
		value: 0
	}
});

})(jQuery);

