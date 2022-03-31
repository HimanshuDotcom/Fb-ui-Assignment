import { useState } from 'react';
import './App.scss';
import CreatePost from './components/createpost';
import Post from './components/post';




function App() {
  const [postModel, setPostModel] = useState(false);
  const [posts, setPosts] = useState([]);



  const addToPosts = (msg, gif) => {
    let newPosts = [...posts];
    newPosts.unshift({
      'msg':msg,
      'gif': gif
    })
    setPosts(newPosts);
  }

  const postItems = posts.map((item,index) => {
    return <Post key = {"item" + index} item = {item} /> 
  })

  return (
    <div className="App">
      <button className='post_button' onClick={() => setPostModel(true)}>
        Create a new post
      </button>
      <div className='post_container'>
        {postModel && <CreatePost setPostModel = {setPostModel} addToPosts = {addToPosts}/>}
      </div>
      {posts.length ? 
        postItems : 
        <h1 style={{'textAlign' : 'center', 'color': 'white'}}> 
          You haven't posted anything ! Go to "Create a new Post" &rarr; 
        </h1>
        }
      
    </div>
  );
}

export default App;
