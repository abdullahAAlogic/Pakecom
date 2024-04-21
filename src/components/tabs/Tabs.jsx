import React, { useState } from 'react'
import UseFetch from '../hooks/useFetch/UseFetch'
import ProductCard from '../productCard/ProductCard';
import { Grid } from 'react-loader-spinner'
const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0);
    const {isLoading , serverError ,apiData}= UseFetch(
        "GET",
        `https://api.escuelajs.co/api/v1/products/?categoryId=${activeTab}`,
        {}
    ) 
    // console.log("activeTab",apiData)

    const handleTabClick = (tab)=>{
        setActiveTab(tab)
    }

  return (
    <section className="product-sec">
        <span className="shade"></span>
        <img src="images/flame-img.png" className="img2" alt="images"/>
        <img src="images/flame-img-1.png" className="img3" alt="images"/>
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-12 col-lg-8 centerCol">
                    <div className="prdtc-head  ">
                        <h2>best fitness products </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="prdtc-tab ">
                        <ul className="nav nav-tabs" id="myTab" role="tablist"> 
                            <li className="nav-item" role="presentation">
                                <button  onClick={()=>handleTabClick(0)} className={activeTab === 0 ? 'active':''}>  All </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button  onClick={()=>handleTabClick(5)} className={activeTab === 5 ? 'active':''}>  Fashion </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button  onClick={()=>handleTabClick(2)} className={activeTab === 2 ? 'active':''}>  Gadegets </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button  onClick={()=>handleTabClick(4)} className={activeTab === 4 ? 'active':''}>  Foot Wear </button>
                            </li>
                        </ul>
                        <div className="tab-content" > 
                            {isLoading && <Grid
                                visible={true}
                                height="80"
                                width="80"
                                color="#00e1ff"
                                ariaLabel="grid-loading"
                                radius="12.5" 
                                wrapperClass="loading_bar"
                                /> }
                            {!isLoading &&   (
                            <div className="tab-pane   active"  >
                                <div className="prdt-sc-dv">
                                    <div className="container">
                                        <div className="row"> 
                                            {apiData?.slice(0, 6).map((item,index)=>{
                                                return(
                                                    <div key={index} className="col-md-6  col-lg-4"> 
                                                            <ProductCard data={item} /> 
                                                    </div> 
                                                )
                                            })}
                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tabs