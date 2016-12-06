var v_ar = new VisageAR();

var container = document.getElementById('main');
var webcam = document.getElementById('webcam');

var Module = 
{
	onRuntimeInitialized: function()
	{
		onModuleInitialized();
	}
};