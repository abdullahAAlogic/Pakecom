import React from 'react'
import Layout from '../layout/Layout'
import UseFetch from '../hooks/useFetch/UseFetch'
import InnerBanner from '../innerBanner/InnerBanner'
import { useParams } from 'react-router-dom'
import { FaTwitter ,FaFacebookF , FaInstagram , FaLinkedinIn , FaPaperPlane } from "react-icons/fa";
import AsNavFor from '../navForSlider/NavForSlider'
import { Grid } from 'react-loader-spinner'

const ProductDetails = () => {
    const {id} = useParams();
    const {isLoading , serverError ,apiData}= UseFetch(
        "GET",
        `https://api.escuelajs.co/api/v1/products/${id}`,
        {}
    )  
    console.log("product",apiData)
  return (
    <Layout>
        <InnerBanner data={apiData} title={"SHOP DETAIL"} />

        <section className="product-detail-sc">
        {isLoading && <Grid
                    visible={true}
                    height="80"
                    width="80"
                    color="#00e1ff"
                    ariaLabel="grid-loading"
                    radius="12.5" 
                    wrapperClass="loading_bar"
                    /> }
        {!isLoading &&   ( <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-6"> 
                    <div className="prdct-dtl-sl-swiper">
                        <AsNavFor data={apiData}/> 
                    </div> 
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="prdct-dtl-txt">
                        <h6>12 orders in last 24 Hours <span><img src="/images/boy.jpg" alt="image"/>12 orders in last 24 Hours </span></h6>
                        <ul className="prd-title">
                            <li>
                                <h5>{apiData?.title ? apiData.title :"Product Title"}</h5>
                            </li>
                            <li>
                                <h4> {apiData?.price ? "$"+apiData.price +" USD" :"00"} <span></span></h4>
                            </li>
                        </ul>

                        <ul className="qntity-ul">
                            <li>
                                <h3>Quantity:</h3>
                            </li>
                            <li>
                                <div className="quanity  ">
                                    <div className="num-block skin-2">
                                        <div className="num-in">
                                            <span className="minus dis"></span>
                                            <input type="text" className="in-num" value="1"  />
                                            <span className="plus"></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>



                        <ul className="prdtl-btn">
                            <li><a href="cart.html" className="btn10">ADD TO CART</a></li>
                            {/* <li><a href="product-detail.html#" className="btn10">BUY IT NOW</a></li> */}
                        </ul>
                        {/* <p>PLEASE <a href="product-detail.html#">CONTACT</a> IF YOU ARE INTERESTED IN THIS PRODUCT</p>
                        <a href="product-detail.html#" className="inquir">Inquiry About Product?</a> */}

                        <p className="scnd-p"> {apiData?.description ? apiData.description :"Product Description"}</p>

                        <ul className="footer_social d-flex align-items-center">
                        <li><a href="index.html"><FaTwitter/> </a></li>
                            <li><a href="index.html"><FaFacebookF /></a></li>
                            <li><a href="index.html"><FaInstagram /></a></li>
                            <li><a href="index.html"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>)}
    </section>
    </Layout>
  )
}

export default ProductDetails