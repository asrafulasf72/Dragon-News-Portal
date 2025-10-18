import React, { use } from 'react';
import CategoryNavlink from './CategoryNavlink';

const promiseCategory=fetch('/categories.json')
.then(res=>res.json())
const Category = () => {
    const category=use(promiseCategory)
    return (
        <div>
           <h1 className=' font-medium text-black'>All Category</h1>

            <div>
                {
                    category.map(cate=> <CategoryNavlink key={cate.id} cate={cate}></CategoryNavlink>)
                }
            </div>
        </div>
    );
};

export default Category;