import React from "react"
import { WrapperData } from "../../data/data"
import './Wrapper.css'

const Wrapper = () => {
    return (
        <>
            <section className="wrapper background">
                <div className="container f_flex">
                    {WrapperData.map((item, i) => {
                        return (
                            <div className="box">
                                <div className="icon-circle">{item.cover}</div>
                                <h3>{item.title}</h3>
                                <p>{item.decs}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Wrapper