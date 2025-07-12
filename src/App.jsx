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
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewPost = (e) => {
      e.preventDefault();

      const newPost = {
        id: Date.now(),
        title,
        body
      }
      setPosts([...posts, newPost]);
      setTitle('');
      setBody('');
    }

  return (
    <>
      <form>
        <MyInput value={title}
                 onChange={e => setTitle(e.target.value)}
                 type="text"
                 placeholder="Название поста"
        />
        <MyInput value={body}
                 onChange={e => setBody(e.target.value)}
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
