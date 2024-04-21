import React from 'react'

const InnerBanner = ({data,title}) => {
  return (
    <section className="inner-banner">
        <img src="/images/flame-img.png" className="img-1" alt="images" />
        <img src="/images/inner-banner.jpg" className="img-innr-bnr" alt="images"/>
        <div className="innr-bnr-mn">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8">
                        <div className="inner-baner-txt">
                           {data?.title &&<h4>{data?.title ? data?.title : "Product Title"}</h4>} 
                            <h1>{title ? title : "Page Title"}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InnerBanner