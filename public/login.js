document.querySelector('.reg').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('reg_email').value;
  const password = document.getElementById('reg_password').value;
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
});

document.querySelector('.login').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('log_email').value;
  const password = document.getElementById('log_password').value;
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');
  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem('signed', 'true');
    goToIndex();
  }
});

const goToIndex = () => document.getElementById('index').click();
