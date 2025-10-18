import React, { use } from 'react';

const promiseCategory=fetch('/categories.json')
.then(res=>res.json())
const Category = () => {
    const category=use(promiseCategory)
    return (
        <div>
           <h1>All Category{category.length}</h1> 
        </div>
    );
};

export default Category;