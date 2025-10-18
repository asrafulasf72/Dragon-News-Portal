import React, { Suspense } from 'react';
import Category from './Category';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftAside;