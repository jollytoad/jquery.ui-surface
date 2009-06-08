/*
 * jQuery UI Surface @VERSION
 *
 * Copyright (c) 2009 Adaptavist.com
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Depends:
 *  ui.core.js
 */
(function($) {

$.ui.surface = $.extend({}, $.ui.extras, $.ui.mouse, {

	_init: function() {
		this.element
			.css('position', 'relative')
			.addClass('ui-surface ' + this.widgetBaseClass)
			.disableSelection();

		this._mouseInit();
		
		if ( this.options.reticle !== false ) {
			this.reticle = $(this.options.reticle, this.element);
			
			if ( !this.reticle.length ) {
				this.reticle = $('<div class="ui-reticle"></div>').prependTo(this.element);
			}
			
			this.reticle.css({
				'position': 'absolute',
				'left': 0,
				'top': 0
			});
		}
		
		this._updated();
	},
	
	offset: function() {
		return this.element.offset();
	},
	
	_updated: function() {
		if ( this.reticle && this.reticle.length ) {
			this.reticle.css(this._getPoint());
		}
	},

	_mouseCapture: function() {
		return true;
	},
	
	_mouseStart: function(event) {
		this._mouseDrag(event);
		return true;
	},
	
	_mouseDrag: function(event) {
		var offset = this.offset();
		this._setPoint(event.pageX - offset.left, event.pageY - offset.top);
		this._updated();
		this._trigger('drag', event, this._ui());
		return false;
	},
	
	_mouseStop: function(event) {
		this._trigger('point', event, this._ui());
		return false;
	}
});

})(jQuery);

