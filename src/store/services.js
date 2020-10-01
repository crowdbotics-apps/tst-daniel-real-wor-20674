import axios from 'axios';
import {JSON_PLACEHOLDER_API_KEY} from 'react-native-dotenv';
const jsonPlaceHolder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //api_key: PET_STORE_API_KEY,
  },
});

function createPost(action) {
  return jsonPlaceHolder.post(`/posts/`, {data: action.data});
}

function deletePost(action) {
  return jsonPlaceHolder.delete(`/posts/${action.id}`);
}

export const apiService = {
  createPost,
  deletePost,
};
