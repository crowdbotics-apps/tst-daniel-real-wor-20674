import * as types from './constants';

export const deletePost = id => ({
  type: types.DELETE_POST,
  id,
});
export const deletePostSucceeded = (id, response) => ({
  type: types.DELETE_POST_SUCCEEDED,
  id,
  response,
});
export const deletePostFailed = (id, error) => ({
  type: types.DELETE_POST_FAILED,
  id,
  error,
});
