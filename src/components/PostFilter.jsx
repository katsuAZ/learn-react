import React from 'react';
import MyInput from "./UI/input/MyInput.jsx";
import MySelect from "./UI/select/MySelect.jsx";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Поиск"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: "По названию"},
                    {value: 'body', name: "По описанию"},
                ]}
            />
        </div>
    );
};

export default PostFilter;