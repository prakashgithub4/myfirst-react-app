import { Children } from "react";
import { Link } from "react-router-dom";

export default function Cake(props) {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          margin: "0",
          padding: "10px",
         
          height:"272px"
        }}
      >
        <Link style={{ textDecoration: "none" }}>
          <div
            className="card transform"
            style={{ width: "15rem", marginTop: "0", padding: "0" }}
          >
            <img
              src={props.data.image}
              className="card-img-top alias"
              alt=""
              style={{ height: "100px" }}
            />
            <div className="card-body">
              <p className="card-text alias">{props.data.name}</p>
              <p className="card-text alias">
                Rs:
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "INR",
                  maximumSignificantDigits: 2,
                }).format(props.data.price)}
                /-
              </p>
              {/* {props.data.price} */}
              <div class="row">
                <div className="col-md-12">
                  <Link
                    to={"/cakedetails/" + props.data.cakeid}
                    class="btn btn-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
