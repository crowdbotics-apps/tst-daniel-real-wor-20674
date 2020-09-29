import * as types from './constants';

export const deletePost = petId => ({
  type: types.DELETE_POST,
  petId,
});
export const deletePostSucceeded = response => ({
  type: types.DELETE_POST_SUCCEEDED,
  response,
});
export const deletePostFailed = error => ({
  type: types.DELETE_POST_FAILED,
  error,
});
