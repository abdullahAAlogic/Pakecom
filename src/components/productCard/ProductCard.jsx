import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



const ProductCard = ({data}) => {
  return (
    <div className="prdtc-inn">
      <div className="prdtc-inn-head">
      <Link to={`/product/${data.id}`}>
           {data?.images[1]? <img src={data.images[1].replace(/[\[\]"]+/g, '')} alt="images" /> : <img src="https://fakeimg.pl/326x326/00e1ff/000000?font=noto" alt="images" />   }
          
           </Link>
      </div>
      <div className="prdtc-inn-bdy">
        <h6>{data?.title ? data.title :"Product Title"} </h6>
        <span>{data?.description ? data.description :"Product Description"}</span>
        <p>
            {data?.price ? "$"+data.price :"00"} <span></span>{data.id} Pieces
        </p>
        <ul>
          <li>
            <Link to={`/product/${data.id}`}>More Detail</Link>
          </li>
          <li>
            <a   className="crt-icn">
              <IoBagHandleOutline/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
