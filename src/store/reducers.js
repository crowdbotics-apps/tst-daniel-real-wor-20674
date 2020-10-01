import * as types from './constants';

const initialState = {
  postsNextId: 101,
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
    case types.CREATE_POST:
      return state;
    case types.CREATE_POST_SUCCEEDED:
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          {
            id: state.postsNextId++, //fakes a well behaved API
            ...action.response.data.data,
          },
        ],
      });
    case types.CREATE_POST_FAILED:
      return Object.assign({}, state, {
        posts: state.posts,
      });
    case types.DELETE_POST:
      return state;
    case types.DELETE_POST_SUCCEEDED:
      return Object.assign({}, state, {
        posts: state.posts.filter(record => record.id != action.starter.id),
      });
    case types.DELETE_POST_FAILED:
      return Object.assign({}, state, {
        posts: state.posts,
      });
    default:
      return state;
  }
}
