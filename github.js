// From http://stackoverflow.com/a/6954277/3410
function addParameter(url, parameterName, parameterValue) {
  replaceDuplicates = true;

  if(url.indexOf('#') > 0){
    var cl = url.indexOf('#');
    urlhash = url.substring(url.indexOf('#'),url.length);
  } else {
    urlhash = '';
    cl = url.length;
  }

  sourceUrl = url.substring(0,cl);

  var urlParts = sourceUrl.split("?");
  var newQueryString = "";

  if (urlParts.length > 1) {
    var parameters = urlParts[1].split("&");
    for (var i=0; (i < parameters.length); i++) {
      var parameterParts = parameters[i].split("=");
      if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
        if (newQueryString == "") {
          newQueryString = "?";
        } else {
          newQueryString += "&";
        }
        newQueryString += parameterParts[0] + "=" + parameterParts[1];
      }
    }
  }
  if (newQueryString == "") {
    newQueryString = "?";
  } else {
    newQueryString += "&";
  }
  newQueryString += parameterName + "=" + parameterValue;
  return urlParts[0] + newQueryString + urlhash;
}

var url = document.location.href;
if(url.indexOf("w=1") < 0) {
  document.location = addParameter(document.location.href, 'w', '1');
}

