(function(){
var src = "myopera2Weibo.js";
var newScript = document.createElement('script');
newScript.src = src;

var body = document.body;
if(body){
	body.appendChild(newScript);
}
})();