import axios from 'axios';

export default async (id) => {
  const {data : user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const {data : post} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  
  console.log(user);
  console.log(post);
};
