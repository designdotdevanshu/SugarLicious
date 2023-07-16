import React from 'react'
import { FrontJSON, Reviews } from "../../../Data/FrontJSON.jsx"
const Frontproducts = () => {
    return (
        <div id='Frontproducts'>
            {
                FrontJSON.map((curr) => {
                    return (
                        <>
                            <h2>{curr.Title}</h2>
                            <div className='ProductContainer'>
                                {
                                    curr.Products.map((products) => {
                                        return (
                                            <div className='FrontProduct'>
                                                <img src={products.Image} />
                                                <p>{products.Name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Frontproducts