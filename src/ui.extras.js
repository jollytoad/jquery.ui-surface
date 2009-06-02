/*
 * jQuery UI Extra core features @VERSION
 *
 * Copyright (c) 2009 Adaptavist.com
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 */
(function($) {

$.ui.extras = {
	
	option: function(key, value) {
		var options = key,
			self = this;

		if (typeof key == "string") {
			if (value === undefined) {
				return this._getData(key);
			}
			options = {};
			options[key] = value;
		}

		$.each(options, function(key, value) {
			self._setData(key, value);
		});
		
		this._updated(options);
	},
	
	_getData: function(key) {
		return this._get && this._get[key] ? this._get[key].call(this, this.options[key]) : this.options[key];
	},
	
	_setData: function(key, value) {
		if (this._set && this._set[key]) {
			this.options[key] = this._set[key].call(this, value, this.options[key]);
		} else {
			this.options[key] = value;

			if (key == 'disabled') {
				this.element.toggleClass(
						this.widgetBaseClass + '-disabled' + ' ' +
						this.namespace + '-state-disabled', value)
					.attr("aria-disabled", value);
			}
		}
	},
	
	_updated: function() {}
};

})(jQuery);

