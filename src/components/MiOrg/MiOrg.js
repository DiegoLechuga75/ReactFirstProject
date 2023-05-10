import { useState } from "react"
import "./MiOrg.css"

const MiOrg = () => {

    const manejarClick = () => {
        console.log(useState())
    }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="Add" onClick={manejarClick}/>
    </section>
}

export default MiOrg