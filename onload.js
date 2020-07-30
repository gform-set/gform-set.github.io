document.getElementById('myFrame').onload = function() {

  var iframe = document.getElementById('myFrame');
  var get = iframe.contentWindow.document.getElementsByClassName('freebirdFormviewerViewResponseMessage')[0].innerText;
  document.getElementById('here').innerHTML = get;
  }