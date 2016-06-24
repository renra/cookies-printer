var http = require('http');

// Based on the accepted answer of http://stackoverflow.com/questions/3393854/get-and-set-a-single-cookie-with-node-js-http-server
function parseCookies (request) {
  var list = {},
    rc = request.headers.cookie;

  rc && rc.split(';').forEach(function( cookie ) {
    var parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return list;
}

http.createServer(function(request, response){
  var cookies = parseCookies(request)

  response.writeHead(200);
  response.end('<pre>' + JSON.stringify(cookies, null, 2) + '<pre>');
}).listen(process.env.PORT || 3000);
