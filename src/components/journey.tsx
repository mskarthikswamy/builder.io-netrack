import React from 'react'

type review = { heading: string, subheading: string, content: string }

interface props {
    reviews: review[]
}

const Journey = (props: props) => {

    return (<>
        <div>{props?.reviews[0]?.heading}</div>
        {props?.reviews?.map((review) => {
            return (<>
                <h2>{review?.subheading}</h2>
                <p>{review?.content}</p>
            </>)
        })}

    </>)
}

export default Journey