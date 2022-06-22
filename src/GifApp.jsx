import { useState } from 'react';

export const GifApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Zelda']);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);
        //setCategories(cat => [...cat, 'Valorant']);
    };

    return (
        <>
            {/*Title*/}
            <h1>GifApp</h1>

            {/*Input*/}


            {/*Gif list*/}
            <button onClick={ onAddCategory }>Add Category</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={ category}>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}
