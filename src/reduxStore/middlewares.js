import axios from "axios";
import { data } from "jquery";
export function loginMiddlware(data) {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_STARTED",
    });

    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/login",
      data: {
        email: data.email,
        password: data.password,
      },
    }).then(
      (response) => {
        console.log(response.data);
        if (response.data.token) {
          let obj = {
            token: response.data.token,
            name: response.data.name,
            email: response.data.email,
            role:response.data.role,
            flag: true,
          };
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: obj,
          });
          localStorage.token = response.data.token;
         
        } else {
          // this.setState({
          //   flag:false
          //  })
          dispatch({
            type: "LOGIN_FAIL",
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  // alert(JSON.stringify(data))
}
export function AddToCart(data) {
  return (dispatch) => {
    dispatch({
      type: "CART_STARTED",
    });
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/addcaketocart",
      headers: {
        authtoken: data.token,
      },
      data: data,
    }).then(
      (response) => {
        console.log(response.data);
        dispatch({
          type: "CART_SUCCESS",
          payload: response.data,
        });
        //props.history.push('/carts')
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
/** cart list fetch */
export function CartList(data) {
  return (dispatch) => {
    dispatch({
      type: "CART_LIST_FETCH_STARTED",
    });

    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/cakecart",
      headers: {
        authtoken: data,
      },
    }).then(
      (response) => {
        dispatch({
          type: "CART_LIST_FETCH_SUCCESSFULLY",
          payload: response.data.data,
        });
        // props.history.push('/carts')
      },
      (error) => {
        dispatch({
          type: "CART_LIST_FETCH_FAILD",
          // payload:response.data.data
        });
      }
    );
  };
}
export function cakeDetails(data) {
  return (dispatch) => {
    dispatch({
      type: "CAKE_DETAILS_FETCH_STARTED",
    });
    axios({
      method: "get",
      url: process.env.REACT_APP_BASE_URL + "/cake/" + data.id,
      data: JSON,
    }).then(
      (response) => {
        dispatch({
          type: "CAKE_DETAILS_FETCH_SUCCESSFULLY",
          payload: response.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
/** Remove cart function  */
export function Removecart(data) {
  // alert(JSON.stringify(data))
  return (dispatch) => {
    dispatch({
      type: "REMOVE_CART_STARTED",
    });
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/removecakefromcart",
      headers: {
        authtoken: data.token,
      },
      data: { cakeid: data.cakeid },
    }).then(
      (response) => {
        console.log("single remove");
        dispatch({
          type: "REMOVE_CART_SUCCESSFULLY",
          payload: JSON.parse(response.config.data),
        });
        window.location.reload(false);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
export function OrderDtails(data) {
  return (dispatch) => {
    dispatch({
      type: "CONFIRM_ORDER_STARTED",
    });

    dispatch({
      type: "CONFIRM_ORDER_SUCCESS",
      payload: data.sum,
    });
  };
}

/** Call order place api */
export function OrderPlace(data) {
  return (dispatch) => {
    dispatch({
      type: "ORDER_PLACE_STARTED",
    });
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/addcakeorder",
      headers: {
        authtoken: data.token,
      },
      data: { ...data },
    }).then(
      (response) => {
        dispatch({
          type: "ORDER_PLACED_SUCCESS",
          payload: response,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
/** Get My order List */
export function MyorderList(data) {
  return (dispatch) => {
    dispatch({
      type: "ORDER_LIST_FETCH_STARTED",
    });
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/cakeorders",
      headers: {
        authtoken: data,
      },
      data: JSON,
    }).then(
      (response) => {
        //console.log("raw",response.data.cakeorders)
        dispatch({
          type: "ORDER_LIST_FETCH_SUCCESSFULLY",
          payload: response.data.cakeorders,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
export function RemoveAllCart(token) {
  return (dispatch) => {
    dispatch({
      type: "CAKE_ALL_CART_STARTED",
    });
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/clearcart ",
      headers: {
        authtoken: token,
      },
      data: JSON,
    }).then(
      (response) => {
        dispatch({
          type: "CAKE_ALL_CART_REMOVED",
          payload: response,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
export function AddOrder(data,props) {
  return (dispatch) => {
    dispatch({
      type: "ORDER_PLACE_PROCESS_STARTED",
    });

    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/addcakeorder ",
      headers: {
        authtoken: data.token,
      },
      data: { ...data },
    }).then(
      (response) => {
        dispatch({
          type: "ORDER_PLACE_SUCCESSFULLY",
          payload: response.order,
        });
        RemoveAllCart(data.token);
        props.history.push('/checkout/confirm')
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
/** Cake image upload function */

export function UploadCake(data,formdata){
  return (dispatch)=>{
    dispatch({
      type:"UPLOAD_CAKE_IMAGE_STARTED"
    });
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/upload ",
      headers: {
        authtoken: data.token,
      },
      data:formdata,
    }).then(
      (response) => {
        
        dispatch({
          type: "UPLOAD_CAKE_IMAGE_SUCCESSFULLY",
          payload: response.data.imageUrl,
        });
        alert("Cake image Uploaded successfully")
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
export function Addcake(data){
 return (dispatch)=>{
    dispatch({
      type:"ADD_CAKE_STARTED"
    })

    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + '/addcake',
      headers: {
        authtoken: data.token,
      },
      data:{...data},
    }).then(
      (response) => {
        
        dispatch({
          type: "UPLOAD_CAKE_IMAGE_SUCCESSFULLY",
          payload: response.data.imageUrl,
        });
      },
      (error) => {
        console.log(error);
      }
    );
 }
}