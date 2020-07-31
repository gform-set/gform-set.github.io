
document.getElementById('myFrame').onload = function() {
var http_request;
http_request = new XMLHttpRequest();
http_request.onreadystatechange = function () {
	
  var iframe = document.getElementById('myFrame');
  var get = iframe.contentWindow.document.getElementsByClassName('freebirdFormviewerViewResponseMessage')[0].innerText;
  document.getElementById('here').innerHTML = get;
	
};
http_request.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSfLrADgu4KmwZllG5wh4PtSwUj9iUw9f4N84CWPRtw5o29UzQ/viewform?usp=sf_link');
http_request.withCredentials = true;
http_request.setRequestHeader('Content-Type', 'text/html');

  }
