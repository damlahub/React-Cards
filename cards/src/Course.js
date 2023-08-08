import React from 'react'

function Course({title,description,image}){
    return(
        <div>
            <img src={image} />
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
}
export default Course;