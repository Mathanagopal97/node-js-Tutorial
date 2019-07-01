var http = require('http');
const url = require('url');

const myURL = new URL('https://example.org/foobar?superman');
console.log(myURL.hash); //Gets and sets the fragment portion of the URL.
//Also we can change the hash in the url by mentioning
myURL.hash='abcd';
console.log(myURL.href);
//We can change the host in the same way
//hostname:port_number
myURL.host='mathan.gopal:8383'
console.log('Host - ',myURL.host);
console.log('Host name - ',myURL.hostname);
console.log('Origin ',myURL.origin);//Gets the read-only serialization of the URL's origin.
console.log('Pathname - ',myURL.pathname);
console.log('Port number - ',myURL.port);
/**
 * Rules in port number assignment:
 * Completely invalid port strings are ignored.
 * Leading numbers are treated as a port number.
 * Non-integers are truncated.
 * Out-of-range numbers which are not represented in scientific notation
   will be ignored.
 */
console.log('Protocol - ',myURL.protocol);//Prints the protocol. Can be changed.
console.log('Search string - ',myURL.search);//Gives the search term after the question mark.

//Params in URL

let params;

// Using an array
params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second']
]);
console.log(params.toString());
console.log(params.getAll('query'));
// Prints 'user=abc&query=first&query=second'

// Using a Map object
const map = new Map();
map.set('user', 'abc');
map.set('query', 'xyz');
params = new URLSearchParams(map);
console.log(params.toString());
console.log(params.getAll('query'));
// Prints 'user=abc&query=xyz'

// Using a generator function
function* getQueryPairs() {
  yield ['user', 'abc'];
  yield ['query', 'first'];
  yield ['query', 'second'];
}
params = new URLSearchParams(getQueryPairs());
console.log(params.toString());
console.log(params.getAll('query'));

myURLNew = new URL('https://abc:xyz@example.com');
console.log('Password - ',myURLNew.password);
