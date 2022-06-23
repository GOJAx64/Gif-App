import { useState } from 'react';
import { AddCategory, GifsGrid } from './components';

export const GifApp = () => {
    const [categories, setCategories] = useState(['one punch']);

    const onAddCategory = (newCategory) => {
        categories.includes(newCategory) ? null : setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifApp</h1>
            <AddCategory onNewCategory={ onAddCategory }/>
            { 
                categories.map(category => 
                    <GifsGrid key={ category } category={ category }/>
                )
            }
        </>
    )
}
