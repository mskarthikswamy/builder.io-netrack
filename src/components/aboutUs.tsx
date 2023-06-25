import React from 'react'

type review = { mainheading: string, heading: string, content: string, link: string }

interface props {
    reviews: review[]
}

const AboutUs = (props: props) => {
    return (<>
        <div style={{ background: "rgb(34, 49, 106)", height: "400px" }}>
            <h2 style={{ color: "white", paddingLeft: "80px", marginTop: "50px", fontSize: "20px", fontWeight: "300" }}>{props?.reviews[0]?.mainheading}</h2>
            <p style={{ color: "white", paddingLeft: "80px", marginTop: "5px", fontSize: "42px", fontWeight: "700", width: "750px" }}>{props?.reviews[0]?.heading}</p>
            <p style={{ color: "white", paddingLeft: "80px", marginTop: "20px", width: "750px" }}> {props?.reviews[0]?.content}</p>
            <button style={{
                padding: "15px 32px",
                textAlign: "center",
                marginLeft: "80px",
                fontWeight: "500",
                borderRadius: "5px",
                cursor: "pointer"


            }} onClick={() => { props?.reviews[0]?.link }}>Get to Know Us </button>

        </div >
    </>

    )
}

export default AboutUs