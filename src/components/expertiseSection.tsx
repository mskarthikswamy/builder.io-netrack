import React from 'react'

type review = { heading: string, content: string, info: string }

interface props {
    reviews: review[]
}
const ExpertiseSection = (props: props) => {
    return (<>
        <h2 style={{ textAlign: "center" }}>{props?.reviews[0]?.heading}</h2>
        <p style={{ textAlign: "center", width: "80%" }}>{props?.reviews[0]?.content}</p>
        <div style={{ display: "flex" }}>
            {props?.reviews?.map((review) => {
                return <><p>{review?.info}</p>
                </>
            })}
        </div>
    </>)
}

export default ExpertiseSection