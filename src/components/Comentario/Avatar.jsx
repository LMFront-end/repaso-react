import React from 'react'

const Avatar = ({urlImage}) => {
    return (
        <>
            <img src={urlImage} alt="" className="mr-3"/>   
        </>
    )
}

export {Avatar}