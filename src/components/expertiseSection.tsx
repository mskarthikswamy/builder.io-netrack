import React from 'react'

type review = { heading: string, content: string, info: string, image: string }

interface props {
    reviews: review[]
}
const ExpertiseSection = (props: props) => {
    return (<>

        <div style={{ marginTop: "40px" }}>
            <h1 style={{ textAlign: "center", maxWidth: "550px", margin: "0 auto" }}>{props?.reviews[0]?.heading}</h1>
            <div>
                <p style={{ fontWeight: "1px", textAlign: "center", maxWidth: "900px", margin: "0 auto", marginTop: "30px", color: " #6d6d6d" }}>{props?.reviews[0]?.content}</p>
            </div>
            <div style={{ display: "flex", height: "200px", gap: "30px", margin: "90px 90px 60px 60px" }}>
                {props?.reviews?.map((review) => {
                    if (review?.info?.length > 0) {
                        return <>
                            <div style={{ padding: "2px 16px", width: "200px", background: "#22316a", height: "200px", borderRadius: "30px" }}>
                                <p style={{ width: "100%", position: "relative", color: "white", textAlign: "center", alignItems: "center", marginTop: "90px" }}>{review?.info}</p>
                            </div>
                        </>
                    } else { null }
                })}
            </div >
        </div>
    </>)
}

export default ExpertiseSection