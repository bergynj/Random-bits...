// global namespace
var app = app || {};
$j = jQuery.noConflict();
//$j(document).ready(app.onInit());
//app.onInit();
app.random = function () {

	var hasWidget = true;
	var tinymceDocType = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">';
	var debug;
	
	/*------------------------------- UTILS OBJ -------------------------------*/
	var utils = {
	
		isNumber: function (value) {
			if ((undefined === value) || (null === value)) {
				return false;
			}
			if (typeof value == 'number') {
				return true;
			}
			return !isNaN(value - 0);
		},

		testfunc: function () {
			alert('test func yoo!!');
		}
	};
	
	var _privateExec = {
		utils.testfunc();
	};
	
	function _privateConstruct(param) {
		this.name = param;
		alert('setting name as ' + param);
	};
	
	return {
		onInit : function(){
			alert('yellow from init.!');
			utils.isNumber('9') ? alert('yay it is number') : alert('nay it is not!');
			utils.isNumber('waht about this') ? alert('take 2 - yay it is number') : alert('take 2 - nay it is not!');
			alert(window);
			alert(testPrivateConstruct.name);
		},
		
		testPrivateConstruct : new _privateConstruct('myNameMiNem'),
		
		utils : utils
	};
}();
