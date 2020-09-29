import React, {Component} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {deletePost} from '../../../store/actions.js';

function Post(props) {
  return (
    <View style={styles.post}>
      <Text style={styles.postField}>ID: {props.post.id}</Text>
      <Text style={styles.postField}>UserID: {props.post.userId}</Text>
      <Text style={styles.postField}>Title: {props.post.title}</Text>
      <Text style={styles.postField}>Body: {props.post.body}</Text>
      <Button title="Delete post" onPress={() => props.delete(props.post.id)} />
    </View>
  );
}

function Blank(props) {
  return (
    <View>
      {props.posts.map(post => (
        <Post key={post.id} post={post} delete={props.delete} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    padding: 10,
  },
  postField: {
    padding: 5,
  },
});

function mapStateToProps(state) {
  return {posts: state.apiReducer.posts};
}

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch(deletePost(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blank);
