import React from 'react'
import { json } from 'stream/consumers'

type review = { mainheading: string, heading: string, content: string, link: string }

interface props {
    reviews: review[]
}

const AboutUs = (props: props) => {

    return (<>
        {/* {JSON.stringify(props.reviews.l)} */}
        {/* {JSON.stringify(props.reviews)} */}
        <div style={{ background: "rgb(34, 49, 106)", height: "400px" }}>
            <h2 style={{ color: "white", paddingLeft: "80px", marginTop: "50px", fontSize: "20px", fontWeight: "300" }}>{props?.reviews[0]?.mainheading}</h2>
            <p style={{ color: "white", paddingLeft: "80px", marginTop: "5px", fontSize: "42px", fontWeight: "700", width: "750px" }}>{props?.reviews[0]?.heading}</p>
            <p style={{ color: "white", paddingLeft: "80px", marginTop: "20px", width: "750px", letterSpacing: ".2px", fontSize: "15px", fontWeight: "400" }}> {props?.reviews[0]?.content}</p>
            <a style={{
                padding: "10px 32px",
                textAlign: "center",
                marginLeft: "80px",
                marginTop: "50px",
                fontWeight: "500",
                borderRadius: "5px",
                background: "white"
            }} href={props?.reviews[0].link}>Get to Know Us </a>

        </div >
    </>

    )
}

export default AboutUs