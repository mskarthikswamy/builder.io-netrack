import React from 'react'
type review = { heading: string }

interface props {
    reviews: review[]
}

const Dropdown = (props: props) => {
    return (<>
        {/* {JSON.stringify(props.re)} */}
        <div style={{ display: "flex", gap: "30px", }}>
            {props.reviews.map((review) => {
                return (<>

                    <p>{review.heading}</p>
                </>)
            })}
        </div>
    </>)
}
export default Dropdown