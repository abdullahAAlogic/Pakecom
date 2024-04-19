import React, { useState } from 'react'
import { CiShoppingCart , CiUser ,CiSearch  } from "react-icons/ci";
import UseFetch from '../hooks/useFetch/UseFetch';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const [searchbox,setSearchBox]= useState(false)
    const {isLoading , serverError ,apiData}= UseFetch(
        "GET",
        "https://api.escuelajs.co/api/v1/categories?limit=5",
        {}
    ) 
 
  return (
    <header> 
    <div className="menuSec">
        <div className="container">
            <div className="row">
                <div className="col-lg-2  col-md-12">
                    <div className="header-logo">
                        <Link to="/"><img src="images/logo.png" alt="img"/></Link>
                    </div>

                </div>
                <div className="col-lg-8 col-md-8 d-none d-md-block">
                    <ul id="menu">
                        <li><Link to="/">home   </Link></li>
                        <li><Link to="">about us   </Link></li> 
                        <li><Link to="">Categories  </Link>
                            <ul>
                                {apiData?.map((iteam,index)=>{
                                    return(
                                        <li key={index}><Link to={`/category/${iteam.id}`}>{iteam.name}</Link></li> 
                                    )
                                })}
                            </ul>
                        </li>
                        <li><Link to="">contact us   </Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-2 col-sm-12   ">
                    <div className="menu-rgt">
                        <ul>
                            <li>
                                <a className="search-btn color-black"  onClick={()=>setSearchBox(true)}><CiSearch/></a>
                               {searchbox && 
                                <div className="search-box search-elem">
                                    <button className="close"  onClick={()=>setSearchBox(false)}>x</button>
                                    <div className="inner">
                                        <input type="text" id="search-field"/>
                                        <button className="submit btn10"    >Search</button>
                                    </div>
                                </div>}
                            </li>
                            <li>
                                <Link to="/account"><CiUser/> </Link>
                            </li>
                            <li>
                                <Link to="/cart"><CiShoppingCart/> <span>0</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header