var v_ar = new VisageAR();

var container = document.getElementById('main');
var webcam = document.getElementById('webcam');

//
var cameraAllowed = false;
var downloadComplete = false;

/*
*	Callback if the user denied camera access.
*/
function deniedStream() { alert("Camera access denied!"); }

/*
*	Callback if there was an error while getting camera access.
*/
function errorStream(e) { if (e) console.error(e); }

/*
*	Callback if the user allowed camera access.
*/
function startStream(stream) {
	console.log("camera allowed");
	var domURL = window.URL || window.webkitURL;
	video.src = domURL ? domURL.createObjectURL(stream) : stream;
	cameraAllowed = true;
	if (downloadComplete)
	{
		removeSplash();
		callbackDownload();
	}
	else{
		var cam_text = document.getElementById("camera_text");
		var dltext = document.getElementById("dl_text");
		cam_text.hidden = true;
		dltext.hidden = false;
	}
}

// get camera access
navigator.getUserMedia_ =  navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;

var video = document.getElementById('webcam');
try { navigator.getUserMedia_({ video: true, audio: false }, startStream, deniedStream); } 
catch (e) {
	try { navigator.getUserMedia_('video', startStream, deniedStream); } 
	catch (e) {
		errorStream(e);
	}
}

var Module = 
{
	onRuntimeInitialized: function()
	{
		onModuleInitialized();
	}
};

function onModuleInitialized()
{
	v_ar.initialize(container, webcam);
	
	initialized = true;
}