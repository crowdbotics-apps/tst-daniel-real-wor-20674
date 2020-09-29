import * as types from './constants';

const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title:
        'facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  ],
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.DELETE_POST:
      console.log(action);
      return state;
    case types.DELETE_POST_SUCCEEDED:
      console.log(action);
      return Object.assign({}, state, {
        posts: state.posts.filter(record => record.id != action.action.id),
      });
    case types.DELETE_POST_FAILED:
      console.log(action);
      return Object.assign({}, state, {
        posts: state.posts,
      });
    default:
      return state;
  }
}
