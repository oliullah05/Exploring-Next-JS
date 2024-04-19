import React from 'react';

const DynamicPage = ({params,searchParams}) => {
    console.log(params,searchParams);
    return (
        <div>
            <h1>Dynamic product page {params.productId}</h1>
        </div>
    );
};

export default DynamicPage;