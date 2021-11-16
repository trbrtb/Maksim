function Accept() {
  var pass = document.getElementById('pass').value;
  win = document.getElementById('pass-window');
  mask = document.getElementById('mask');
  if (pass == '1985') { // Указываем правильный пароль
    win.style.display = 'none';
    mask.style.display = 'none';
  } else { alert('Введенный Вами пароль неверен!'); }
}
