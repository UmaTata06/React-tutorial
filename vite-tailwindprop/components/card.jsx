import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

// const Card = (props) => {
const Card = useMemo(({ name ='Uma',Technology='React'}) => {
    console.log("rendered");
    
    return (
        <>
            <div className='bg-green-500 text-center p-3 text-3xl rounded-md'><h5>
                {/* Name:{props.name} */}
                
                    Name :{name}
                
            </h5>       
            
                <h3>
                    Technology:{Technology}

                </h3></div>

        </>
    )
},[])

export default Card;