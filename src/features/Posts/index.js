import React from 'react';
import {Text, Button, View, SafeAreaView, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {createPost, deletePost} from './actions';
import styles from './styles';

function Post(props) {
  return (
    <View style={styles.post}>
      <Text style={styles.postFieldTitle}>
        #{props.post.id} - {props.post.title}
      </Text>
      <Text style={styles.postFieldBody}>{props.post.body}</Text>
      <Button title="Delete post" onPress={() => props.delete(props.post.id)} />
    </View>
  );
}

function PostList(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.postCount}>Total Posts: {props.posts.length}</Text>
        <Button title="Create post from template" onPress={props.create} />
        {props.posts.map(post => (
          <Post key={post.id} post={post} delete={props.delete} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {posts: state.Posts.posts};
}

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch(deletePost(id)),
    create: id =>
      dispatch(
        createPost({
          userId: 1,
          title: 'lorem ipsum',
          body: 'ipsum lorem',
        }),
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
