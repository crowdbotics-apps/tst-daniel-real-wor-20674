import React, {Component} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

function Post(props) {
  return (
    <View style={styles.post}>
      <Text style={styles.postField}>ID: {props.post.id}</Text>
      <Text style={styles.postField}>UserID: {props.post.userId}</Text>
      <Text style={styles.postField}>Title: {props.post.title}</Text>
      <Text style={styles.postField}>Body: {props.post.body}</Text>
      {props.children}
    </View>
  );
}

function Blank(props) {
  return (
    <View>
      {props.posts.map(post => (
        <View>
          <Post key={post.id} post={post} />
          <Button
            key={post.id}
            title="Delete post"
            onPress={props.delete(post.id)}
          />
        </View>
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
    delete: postId => dispatch({type: 'DELETE_POST', id: postId}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blank);
