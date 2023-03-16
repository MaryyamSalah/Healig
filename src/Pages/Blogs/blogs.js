import React ,{useEffect} from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../../Redux/actionTypes";
import { Post } from "../../Components/Post";

const Blogs = ({dispatch, loading, posts, hasErrors}) => {
 useEffect(()=> {
    dispatch(fetchPosts())
 }, [dispatch])

 const renderPosts =() => {
    if(loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
 return posts.map((post) => <Post key ={post.id} post={post} />)
}


 
    return (
    <section>
    <h1 className="my-4 text-xl font-bold text-purple-900">Posts</h1>
    {renderPosts()}
  </section>
  )
}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})




export default connect (mapStateToProps) (Blogs)