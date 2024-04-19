import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";


const ProductCard = ({data}) => {
  return (
    <div className="prdtc-inn">
      <div className="prdtc-inn-head">
        <a href="product-detail.html">
           {data?.images[1]? <img src={data.images[1].replace(/[\[\]"]+/g, '')} alt="images" /> : 'https://fakeimg.pl/326x326/00e1ff/000000?font=noto'  }
          
        </a>
      </div>
      <div className="prdtc-inn-bdy">
        <h6>{data?.title ? data.title :"Product Title"} </h6>
        <span>{data?.description ? data.description :"Product Description"}</span>
        <p>
            {data?.price ? "$"+data.price :"Product Title"} <span></span>{data.id} Pieces
        </p>
        <ul>
          <li>
            <a href="product-detail.html">More Detail</a>
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
