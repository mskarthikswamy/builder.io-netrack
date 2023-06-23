import React from 'react'

type review = { heading: string, content: string }

interface props {
    reviews: review[]
}

const Journey = (props: props) => {

    return (<>
        <div>{props?.reviews?.map((review) => {
            return (<>
                <h2>{review?.heading}</h2>
                <p>{review?.content}</p>
            </>)
        })}</div>

    </>)
}

export default Journey