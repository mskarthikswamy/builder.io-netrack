import React from 'react'

type review = { label: string, content: string, image: string }


interface props {
    reviews: review[]
}


const MissionSection = (props: props) => {

    const FirstReview = () => {
        return (

            <div>
                <div>
                    <img src={props?.reviews[0]?.image}></img>
                </div>
                <div>
                    <h4>{props?.reviews[0]?.label}</h4>
                    <p>{props?.reviews[0]?.content}</p>
                </div>
            </div>

        )
    }

    const SecondReview = () => {
        return (<>
            <div>
                <div>
                    <img src={props?.reviews[1]?.image}></img>
                </div>
                <div>
                    <h4>{props?.reviews[1]?.label}</h4>
                    <p>{props?.reviews[1]?.content}</p>
                </div>
            </div>

        </>)
    }
    const ThirdReview = () => {
        return (
            <div>
                <div>
                    <img src={props?.reviews[2]?.image}></img>
                </div>
                <div>
                    <h4>{props?.reviews[2]?.label}</h4>
                    <p>{props?.reviews[2]?.content}</p>
                </div>
            </div>

        )
    }


    return (
        <div>
            <div>
                <h2>Our Mission</h2>
                <p>Unlocking the power of technology to transform lives and businesses - NetTrackers, your partner for progress and success!!!</p>
            </div>
            <div>
                <FirstReview />
                <SecondReview />
            </div>
            <div>
                <ThirdReview />
            </div>
        </div>



    )
}

export default MissionSection