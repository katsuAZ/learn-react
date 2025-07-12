import './styles/App.scss'
import {useRef, useState} from "react";
import PostList from "./components/PostList.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Javascript - язык программирования'},
    {id: 2, title: 'Javascript', body: 'Javascript - язык программирования'},
    {id: 3, title: 'Javascript', body: 'Javascript - язык программирования'},
  ])
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
      e.preventDefault();

      setPosts([...posts, {...post, id: Date.now()}]);
      setPost({title: '', body: ''});
    }

  return (
    <>
      <form>
        <MyInput value={post.title}
                 onChange={e => setPost({...post, title: e.target.value})}
                 type="text"
                 placeholder="Название поста"
        />
        <MyInput value={post.body}
                 onChange={e => setPost({...post, body: e.target.value})}
                 type="text"
                 placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов'} />
    </>
  )
}

export default App
