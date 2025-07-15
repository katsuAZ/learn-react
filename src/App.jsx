import './styles/App.scss'
import {useState} from "react";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/modal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import {usePosts} from "./hooks/usePosts.js";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    async function fetchPosts() {
        console.log("getting data")
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response);
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <>
            <button onClick={fetchPosts}>GET POSTS</button>
            <MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'} />
        </>
    )
}

export default App
