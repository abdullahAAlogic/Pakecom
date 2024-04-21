import React from 'react'

const Blogs = () => {
  return (
     <section className="blg-sc">
        <span className="shade"></span>
        <img src="images/flame-img-1.png" alt="images"/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="blog-head wow bounceInUp">
                        <h2>the latest blogs</h2>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="lts-mn-bg wow slideInLeft ">
                        <a href="index.html#">
                            <img src="images/blg-img-1.jpg" alt="images"/>
                            <div className="mn-bg-txt">
                                <h6> 05 DEC, 2022 </h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttito</p>
                             </div>
                            </a>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="blg-sml-mn wow slideInRight">
                        <div className="blg-sml">
                            <div className="sm-blg-head">
                                <a href="index.html#"><img src="images/blg-img-2.jpg" alt="images"/></a>
                                <h6>25 <span>Dec, 19</span></h6>
                            </div>
                            <div className="sm-blg-txt">
                                <h5>lorem ipsum</h5>
                                <h6>Meat Appetizers With Natu</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus vel mauris scelerisque accumsan. Maecenas quis nunc sed sapien dignissim </p>
                                <ul>
                                    <li>
                                        <p>27 March ‘17</p>
                                    </li>
                                    <li>
                                        <a href="index.html#"><i className="far fa-eye"></i> 16</a>
                                        <a href="index.html#"><i className="fal fa-comment-dots"></i> 30</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="blg-sml">
                            <div className="sm-blg-head">
                                <a href="index.html#"> <img src="images/blg-img-3.jpg" alt="images"/></a>
                                <h6>25 <span>Dec, 19</span></h6>
                            </div>
                            <div className="sm-blg-txt">
                                <h5>lorem ipsum</h5>
                                <h6>Meat Appetizers With Natu</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus vel mauris scelerisque accumsan. Maecenas quis nunc sed sapien dignissim </p>
                                <ul>
                                    <li>
                                        <p>27 March ‘17</p>
                                    </li>
                                    <li>
                                        <a href="index.html#"><i className="far fa-eye"></i> 16</a>
                                        <a href="index.html#"><i className="fal fa-comment-dots"></i> 30</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
  )
}

export default Blogs