//$(document).ready(function(){
	//code here...
var code = document.getElementById("code");
var editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true,
        theme: "darcula",
        mode: "text/x-java",
        styleActiveLine: true,
        lineWrapping: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
});
//});