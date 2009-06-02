/*
 * jQuery UI Vertical Surface Widget @VERSION
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

$.widget('ui.vertical', $.extend({}, $.ui.surface, {

	_set: {
		value: function( value ) {
			return Math.max(0, Math.min(1, value));
		}
	},

	_getPoint: function() {
		return {
			top: Math.round(this._getData('value') * this.limit())
		};
	},
	
	_setPoint: function( x, y ) {
		this._setData('value', y / this.limit());
	},
	
	_ui: function(event) {
		return { value: this._getData('value') };
	},
	
	limit: function() {
		return this.element.innerHeight() - 1;
	}
}));

$.extend($.ui.vertical, {
	version: "@VERSION",
	eventPrefix: "point",
	
	defaults: {
		reticle: '.ui-reticle',
		cancel: null,
		delay: 0,
		distance: 0,
		value: 0
	}
});

})(jQuery);

