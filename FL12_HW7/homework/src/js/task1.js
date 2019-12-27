let userLogin = prompt('Please, enter your login.');
let loginLength = 5;
let correctUserLog = 'user@gmail.com';
let correctAdminLog = 'admin@gmail.com';
let correctUserPass = 'UserPass';
let correctAdminPass = 'AdminPass';
let newPassLenght = 6;

if (userLogin === '' || userLogin === null) {
  alert('Canceled.');
} else if (userLogin.length < loginLength) {
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (userLogin !== correctUserLog && userLogin !== correctAdminLog) {
  alert('I don\'t know you!');
} else {
  let userPassword = prompt('Please, enter your password.');
  if (userPassword === '' || userPassword === null) {
    alert('Canceled.');
  } else if (
    userPassword !== correctUserPass &&
    userPassword !== correctAdminPass
  ) {
    alert('Wrong password!');
  } else {
    let passwordChange = confirm('Do you want to change your password?');
    if (!passwordChange) {
      alert('You have failed the change.');
    } else {
      let oldUserPass = prompt('Please, enter your old password.');
      if (oldUserPass === '' || oldUserPass === null) {
        alert('Canceled.');
      } else if (oldUserPass !== userPassword) {
        alert('Wrong password!');
      } else {
        let newPass = prompt('Please, enter your new password.');
        if (newPass === '' || newPass === null) {
          alert('Canceled.');
        } else if (newPass.length < newPassLenght) {
          alert('It\'s too short password. Sorry.');
        } else {
          let newPassAgain = prompt('Please, enter your new password again.');
          if (newPassAgain !== newPass) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password.');
          }
        }
      }
    }
  }
}
