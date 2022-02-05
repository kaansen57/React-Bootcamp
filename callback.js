import fetch from "node-fetch";
import axios from "axios";
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users yüklendi", users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => {
//         console.log("Post1 yüklendi", post);
//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((post) => console.log("Post2 yüklendi", post));
//       });
//   });

// async function getData() {
//   const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
//     (data) => data.json()
//   );
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   console.log(users);
//   console.log(post1);
// }

// getData();

// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   console.log(users);
//   console.log(post1);
// })();

const getPost = (postId) => {
  return new Promise(async (resolve, reject) => {
    const { data: post1 } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    resolve(post1);
  });
};
const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users/"
    );
    resolve(users);
  });
};

/* aşağıda promiseları çağırdık ama bunlar asenktron şekilde çalışmıyolar */
// getUsers().then(data=>console.log(data));
// getPost(1).then(data=>console.log(data));

(async () => {
  const users = await getUsers();
  const post = await getPost(1);

  console.log(users);
  console.log(post);
})();

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);


  