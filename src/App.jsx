import './styles/App.scss'
import {useMemo, useState} from "react";
import PostList from "./components/PostList.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";
import PostForm from "./components/PostForm.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/modal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Арбузы созрели', body: 'Я вчера купил очень сочный в пятёрке'},
        {id: 2, title: 'Якутия растаяла', body: 'Ну это я придумал просто'},
        {id: 3, title: 'Кот опять спит на кроватке', body: 'Люблю своих котяток'},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()) || post.body.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <>
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
