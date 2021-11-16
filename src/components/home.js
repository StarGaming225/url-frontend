import React, { useState, useEffect } from 'react';

export default function Home() {
    const [allUrlKeys, setUrlKeys] = useState([]);
    
    const getAllUrlKeys = () => {
        fetch('http://127.0.0.1:5000/url/get')
        .then(res => res.json())
        .then(resData => setUrlKeys(resData))
        .catch(error => console.log('Error with getting keys/urls.', error))
    };

    useEffect(() => {
        getAllUrlKeys();
    });

    return (
        <div>
            
        </div>
    );
}
