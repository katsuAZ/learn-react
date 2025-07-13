import './styles/App.scss'
import { useState } from "react";
import PostList from "./components/PostList.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";
import PostForm from "./components/PostForm.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Арбузы созрели', body: 'Я вчера купил очень сочный в пятёрке'},
        {id: 2, title: 'Якутия растаяла', body: 'Ну это я придумал просто'},
        {id: 3, title: 'Кот опять спит на кроватке', body: 'Люблю своих котяток'},
    ])
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    function getSortedPosts() {
        console.log('ono srabotalo');

        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }

    const sortedPosts = getSortedPosts();

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <>
            <PostForm create={createPost} />
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    placeholder="Поиск"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: "По названию"},
                        {value: 'body', name: "По описанию"},
                    ]}
                />
            </div>
            {posts.length
                ? <PostList remove={removePost} posts={sortedPosts} title={'Список постов'} />
                : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
            }

        </>
    )
}

export default App
