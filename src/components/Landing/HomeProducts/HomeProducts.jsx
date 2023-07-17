import React from 'react'
import { FrontJSON, Reviews } from "../../../Data/FrontJSON.jsx"
const Frontproducts = () => {
    return (
        <div id='Frontproducts'>
            {
                FrontJSON.map((curr,ids1) => {
                    return (
                        <div key={ids1}>
                            <h2>{curr.Title}</h2>
                            <div className='ProductContainer'>
                                {
                                    curr.Products.map((products,ids2) => {
                                        return (
                                            <div className='FrontProduct' key={ids2}>
                                                <img src={products.Image} />
                                                <p>{products.Name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Frontproducts