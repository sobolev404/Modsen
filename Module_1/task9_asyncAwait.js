// Напишите функцию fetchUserData, которая
// использует async/await для загрузки данных
// о пользователе с сервера по его
// идентификатору. Функция должна
// принимать идентификатор пользователя в
// 2024 Page 4 of 5
// качестве аргумента и возвращать объект с
// данными о пользователе.

async function fetchUserData(userId) {
  const apiUrl = `https://jsonpl1aceholder.typicode.com/users/${userId}`;
  const response = await fetch(apiUrl);
  const userData = await response.json();
  return userData;
}

fetchUserData(1)
  .then((userData) => {
    console.log("User Data:", userData);
  })
  .catch((error) => {
    console.error("Error!", error);
  });
