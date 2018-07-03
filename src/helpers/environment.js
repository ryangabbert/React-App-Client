let APIURL = '';

switch (window.location.hostname) {
    case 'localhost':
    APIURL = 'http://localhost:3000'
    break;
    case 'rbg-fullstack-client.herokuapp.com':
    APIURL = 'https://rbg-server.herokuapp.com'
}
export default APIURL;