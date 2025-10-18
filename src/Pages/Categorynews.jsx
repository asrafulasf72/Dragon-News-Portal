import React from 'react';
import { useParams } from 'react-router';

const Categorynews = () => {
    const {id}=useParams()
    return (
        <div>
             <h1>Categorynews page will be here {id}</h1>
        </div>
    );
};

export default Categorynews;