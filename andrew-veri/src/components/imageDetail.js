import React from 'react'
import images from '../images';

function imageDetail({match}) {

    const image = images.imagesLG.find((a) => a.id === match.params.id)

    return (
        <main>
            <img className='singleImage' src={image.src} alt="Design Portfolio"/>
        </main>
    )

}

export default imageDetail
