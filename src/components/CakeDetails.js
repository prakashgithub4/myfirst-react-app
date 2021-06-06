import React, { useState, useEffect } from "react";
import axios from "axios";
import apiurls from "../apiurls";
import "../index.css";
import { Link } from "react-router-dom";
export default function CakeDetails(props) {
  let id = props.match.params.cake_id;
  let [data, setData] = useState([]);
  let [flag, setFlag] = useState(true);
  useEffect(() => {
    axios({ method: "get", url: process.env.REACT_APP_BASE_URL + "/cake/" + id, data: JSON }).then(
      (response) => {
        console.log(response);
        setData(response.data.data);
        setFlag(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  if (!flag) {
    return (
      <div class="row" style={{ marginTop: "10px" }}>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{data.name}</h5>
              <p class="card-text">
                <img src={data.image} class="img-thumbnail" alt="..." />
              </p>
              <price>RS:{data.price}/-</price>
              <div className="row">
                <div className="col-md-6" style={{ padding: "10px" }}>
                  <label>Total Ratings:</label>
                  &nbsp; &nbsp;
                  <span>{data.ratings}</span>
                </div>
                <div className="col-md-6" style={{ padding: "10px" }}>
                  <label>Total Review</label>
                  &nbsp; &nbsp;
                  <span>{data.reviews}</span>
                </div>
              </div>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              <p class="card-text">{data.description}</p>
              <div className="row">
                <div className="col-md-6">
                  <Link to="/carts" className="btn btn-primary">
                  <i class="fas fa-cart-arrow-down"></i> Cart
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/checkout" className="btn btn-warning">
                    Checkout
                  </Link>
                </div>
              </div>

              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ...</div>;
  }
}
