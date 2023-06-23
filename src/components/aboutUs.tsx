import React from 'react'

type review = { mainheading: string, heading: string, content: string, link: string }

interface props {
    reviews: review[]
}

const AboutUs = (props: props) => {
    return (<>
        <div>
            <h2>{props?.reviews[0]?.mainheading}</h2>
            <p>{props?.reviews[0]?.heading}</p>
            <p>{props?.reviews[0]?.content}</p>
            <button onClick={() => { props?.reviews[0]?.link }}></button>

        </div>
    </>

    )
}

export default AboutUs