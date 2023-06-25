import React from 'react'
// import Dropdown from "./dropdownMenu"
// import '@builder.io/widgets';

type review = { heading: string }
// type menuItem = { items: string }

interface props {
    reviews: review[]
    // menuItems: menuItem[]
}

const MenuBar = (props: props) => {

    return (<>

        <div style={{ marginTop: "10px" }}>
            <div>
                <h1>{props?.reviews[0]?.heading}</h1>
            </div>


        </div>


    </>)
}

export default MenuBar
