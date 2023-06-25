import React from "react";

type review = { heading: string; subheading: string; content: string };

interface props {
    reviews: review[];
}

const Journey = (props: props) => {
    return (
        <div style={{ background: "rgb(34, 49, 106)" }}>
            <div>
                <h1 style={{ color: "white", textAlign: "center", marginTop: "30px" }}>
                    {props?.reviews[0]?.heading}
                </h1>
            </div>
            <div style={{ display: "flex", width: '30 %', gap: "40px", margin: "50px 50px 50px 50px" }}>{props?.reviews?.map((review) => {
                return (
                    <div style={{ width: "90%", background: "white", padding: "2px 16px", borderRadius: "20px" }}>
                        <h2 style={{ textAlign: "center", fontFamily: "sans-serif", fontWeight: "350" }}>{review?.subheading}</h2>
                        <p style={{ margin: "50px , 50px, 50px, 50px", color: "#2b292a" }}>{review?.content}</p>
                    </div>


                );
            })}</div>



        </div >
    );
};

export default Journey;
