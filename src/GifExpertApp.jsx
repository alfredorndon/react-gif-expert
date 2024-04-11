import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Legend of Korra'])

    const onAddCategory = (NewCategory) => {

        if (categories.includes(NewCategory)) return;

        // para insertar en arreglos no usar push, para evitar mutaciones
        setCategories([NewCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            />

            {
                categories.map( (category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }

        </>
    )
}