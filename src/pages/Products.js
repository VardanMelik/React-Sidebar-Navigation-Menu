import React from 'react'

export default function Products() {

    const apiUrl = 'https://sports-api.adjarabet.am/sportsbook/rest/v2/matches';
    fetch(apiUrl)
        .then( response => response.json())
        .then( data => console.log('Json Data: ', data));
    return (
        <div className='products'>
            <h1>Products</h1>
        </div>
    )
}
