window.localStorage.setItem('registeredUsersList', JSON.stringify([]));

export const registerUser = (login, email, password) => {
  return new Promise((resolve, reject) => {
    let usersList = JSON.parse(window.localStorage.getItem('registeredUsersList'));
    if (!usersList) usersList = [];
    const userID = Math.floor(Math.random() * 10000);
    usersList.push({login, email, password, userID});
    window.localStorage.setItem('registeredUsersList', JSON.stringify(usersList));
    resolve({data: userID})
  })
}

export const logInUser = (email, password) => {
  return new Promise((resolve, reject) => {
    let usersList = JSON.parse(window.localStorage.getItem('registeredUsersList'));
    if (!usersList) reject('Error');
    console.log('userList', usersList)
    const userData = usersList.find(user => user.email === email && user.password === password);
    const userID = userData.userID;
    if (userData) {
      resolve({data: userID})
    } else {
      reject('Error');
    }
  })
}