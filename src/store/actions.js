import * as types from './constants';

export const deletePost = id => ({
  type: types.DELETE_POST,
  id,
});
export const deletePostSucceeded = (response, action) => ({
  type: types.DELETE_POST_SUCCEEDED,
  response,
  action,
});
export const deletePostFailed = error => ({
  type: types.DELETE_POST_FAILED,
  error,
});
