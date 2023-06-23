import React from 'react'

type review = { label: string, content: string, image: string }


interface props {
    reviews: review[]
}


const MissionSection = (props: props) => {

    const FirstReview = () => {
        return (

            <div style={{ display: "flex" }}>
                <div>
                    <img src={props?.reviews[0]?.image} style={{ width: "272px", height: "222px" }}></img>
                </div>
                <div>
                    <h4 style={{ fontWeight: "800px", fontFamily: "sans-serif" }}>{props?.reviews[0]?.label}</h4>
                    <p style={{ color: "#6d6d6d" }}>{props?.reviews[0]?.content}</p>
                </div>
            </div>

        )
    }

    const SecondReview = () => {
        return (<>
            <div style={{ display: "flex" }}>
                <div>
                    <img src={props?.reviews[1]?.image} style={{ width: "272px", height: "222px" }}></img>
                </div>
                <div>
                    <h3 style={{ fontWeight: "800px", fontFamily: "sans-serif" }}>{props?.reviews[1]?.label}</h3>
                    <p style={{ color: "#6d6d6d" }}>{props?.reviews[1]?.content}</p>
                </div>
            </div>

        </>)
    }
    const ThirdReview = () => {
        return (
            <div style={{ display: "flex" }}>
                <div>
                    <img src={props?.reviews[2]?.image} style={{ width: "272px", height: "222px" }}></img>
                </div>
                <div>
                    <h3 style={{ fontWeight: "800px", fontFamily: "sans-serif" }}>{props?.reviews[2]?.label}</h3>
                    <p style={{ color: "#6d6d6d" }}>{props?.reviews[2]?.content}</p>
                </div>
            </div>

        )
    }


    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ fontWeight: "800" }}>Our Mission</h2>
                <div style={{ padding: "20px , 20px , 20px", fontSize: "20px", color: "#6d6d6d" }}>
                    <p>Unlocking the power of technology to transform lives and businesses - NetTrackers, your partner for progress and success!!!</p>
                </div>

            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: '50%', }}>
                    <FirstReview />
                </div>
                <div style={{ width: '50%', }}>
                    <SecondReview />
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '70%', }}>
                    <ThirdReview />
                </div>
            </div>
        </div>



    )
}

export default MissionSection