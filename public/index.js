// Activate selected tab in navigation bar
const href = document.location.href.split('/');
const pageName = href[href.length - 1].split('.')[0];
document.getElementById(pageName).classList.add('active');

// Get page loading time
document.getElementById('page-loading').innerHTML = (function onLoad() {
  const now = new Date().getTime();
  const pageLoadTime = now - performance.timing.navigationStart;
  console.log('Page loading time: ' + pageLoadTime);
  return 'Page loading time: ' + pageLoadTime / 1000 + 's';
})();

const logOut = () => localStorage.setItem('signed', 'false');

const replaceIfLoggedIn = () => {
  const isSigned = localStorage.getItem('signed') === 'true';
  if (isSigned) {
    return 'Logged in as '.concat(
      localStorage.getItem('email'),
      '<a id="logout" href="login.hbs" onclick="logOut()"> Logout</a>',
    );
  }
  return 'Login';
};
document.getElementById('login').innerHTML = replaceIfLoggedIn();
