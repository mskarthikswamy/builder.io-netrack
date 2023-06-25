import React from 'react'

type review = { heading: string, content: string, info: string }

interface props {
    reviews: review[]
}
const ExpertiseSection = (props: props) => {
    return (<>

        <h2 style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>{props?.reviews[0]?.heading}</h2>
        <div>
            <p style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto", paddingTop: "12px", color: " #6d6d6d" }}>{props?.reviews[0]?.content}</p>
        </div>

        <div style={{ display: "flex", height: "200px", gap: "5px", margin: "20px 20px 20px 20px" }}>
            {props?.reviews?.map((review) => {

                return <>
                    <div style={{ padding: "2px 16px", width: "40%", background: "#22316a" }}>
                        <p style={{ color: "white", textAlign: "center", marginTop: "60px" }}>{review?.info}</p>
                    </div>




                </>


            })}
        </div >
    </>)
}

export default ExpertiseSection