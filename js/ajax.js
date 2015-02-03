window.http = {
  get: function(url, success, failure) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 || xhr.status >= 200 && xhr.status < 300) {
        var data = xhr.responseText;
        try {
          data = JSON.parse(data);
        } catch(e) {
        }
        success(data);
      } else {
        failure(xhr.responseText, xhr.status);
      }
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
  }
}
