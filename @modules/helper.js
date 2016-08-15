/**
 * Created by MOON KYUNGTAE
 */

var demoon = demoon || {};

demoon.helper = (function ($){
	function getBtnTarget(t){
		return $(t).attr('data-target') ? $(t).attr('data-target') : t.hash;
	}

	function Stack(){
		this.dataStore = [];
	}

	Stack.prototype = {
		add: function (data){
			this.dataStore.push(data);
		},
		get: function (){
			return this.dataStore.pop();
		}
	};

	function List(){
		this.dataStore = [];
	}

	List.prototype = {
		add: function (data){
			this.dataStore.push(data);
		},
		remove: function (value){
			var index = this.find(value);
			if(index > -1){
				this.dataStore.splice(index, 1);
				return true;
			}
			return false;
		},
		find: function (value){
			for (var i = 0, max = this.dataStore.length; i < max; i++) {
				if(this.dataStore[i] == value){
					return i;
				}
			}
			return -1;
		}
	};

	function setPrefix(vendor, style){
		if(vendor === false){
			return false;
		}
		if(vendor === ''){
			return style;
		}
		return vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	function hasProperty(style){
		var upper = style.charAt(0).toUpperCase() + style.substr(1);
		var props = [style, 'webkit' + upper, 'Moz' + upper, 'O' + upper, 'ms' + upper];
		for (var i = 0; i < 5; i++) {
			if(props[i] in $('body')[0].style){
				return props[i];
			}
		}
		return false;
	}

	return {
		Stack: Stack,
		List: List,
		getBtnTarget: getBtnTarget,
		setPrefix: setPrefix,
		hasProperty: hasProperty
	}
}(window.jQuery));