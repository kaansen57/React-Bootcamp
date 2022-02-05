import axios from "axios";

//  function getData(userId) {
//    return new Promise(async (resolve, reject) => {
//          const { data: users } = await axios.get(
//            `https://jsonplaceholder.typicode.com/users/${userId}`
//          );

//          const { data: posts } = await axios.get(
//            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//         );
//         resolve({ users, posts });
//     }) 
// }


async function getData(userId) {
    const { data: users } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    return {
        users,
        posts
    }
}

let datas = await getData(1)