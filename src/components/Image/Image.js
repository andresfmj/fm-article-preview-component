import React from 'react';

import "./Image.scss";

function Image({ alt, srcImage, ...params }) {
    return (
        <img src={srcImage} alt={alt} {...params} />
    )
}

export default Image;
