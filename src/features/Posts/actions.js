import * as types from './constants';

export const createPost = data => ({
  type: types.CREATE_POST,
  data,
});
export const createPostSucceeded = (response, starter) => ({
  type: types.CREATE_POST_SUCCEEDED,
  response,
  starter,
});
export const createPostFailed = (error, starter) => ({
  type: types.CREATE_POST_FAILED,
  error,
  starter,
});
export const deletePost = id => ({
  type: types.DELETE_POST,
  id,
});
export const deletePostSucceeded = (response, starter) => ({
  type: types.DELETE_POST_SUCCEEDED,
  response,
  starter,
});
export const deletePostFailed = (error, starter) => ({
  type: types.DELETE_POST_FAILED,
  error,
  starter,
});
