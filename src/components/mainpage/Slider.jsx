import React from "react"
import SlideCard from "./SlideCard"

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth' data-aos="zoom-in-left">
        <div className='container'>
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default SliderHome