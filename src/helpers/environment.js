let APIURL = '';

switch (window.location.hostname) {
    case 'localhost':
    APIURL = 'http://localhost:3000'
    break;
    case 'rbg-fullstack-client.herokuapp.com':
    APIURL = 'https://rbg-fullstack-client.herokuapp.com'
}
export default APIURL;