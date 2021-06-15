import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { UploadCake } from "../reduxStore/middlewares";
import Cake from '../components/Cakes';

function Admin(props) {
  let dispatch = useDispatch();
  let [image, setImage] = useState(null);
  const [fields, setFields] = useState([{ value: null }]);
  let [file, setFile] = useState(null);

  /* cake details */
  let [cakename, setCakeName] = useState(null);
  let [cakedescription, setCakeDescription] = useState(null);
  let [price, setPrice] = useState(null);
  let [weight, setWeight] = useState(null);
  let [type, setType] = useState(null);
  let [eggless, setEggless] = useState(false);
  let [flaver, setFlaver] = useState(false);

  let cakeIngredients = [];

  /** check image is upload or not  */
  let [isUpload, setUploaded] = useState(true);
  useEffect(() => {
     props.dispatch({
       type:"FETCH_CAKES_STARTED"
     })
  }, []);

  let changeName = (event) => {
    setCakeName(event.target.value);
  };

  let changeDescription = (event) => {
    setCakeDescription(event.target.value);
  };
  let changePrice = (event) => {
    setPrice(event.target.value);
  };
  let onChangeWeght = (event) => {
    setWeight(event.target.value);
  };
  let onChangeType = (event) => {
    setType(event.target.value);
  };

  let addingredient = () => {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    
  };
  let changeIngridient = (i, e) => {
    const value = [...fields];
    value[i].value = e.target.value;
    setFields(value);
  };

  let onChangeImage = (event) => {
    const image = URL.createObjectURL(event.target.files[0]);
    //console.log(image)
    setFile(event.target.files[0]);
    setImage(image);
  };

  let onUpload = (event) => {
    event.preventDefault();
    let formdata = new FormData();
    formdata.append("file", file);

    dispatch(UploadCake({ token: props.token }, formdata));
    setTimeout(function () {
      alert("Cake Added Successfully");
      setUploaded(false);
    }, 3000);
  };
  let remove = (i) => {
    
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };
  const submitCake = (event) => {
    event.preventDefault();
    fields.map((each, index) => {
      cakeIngredients.push(each.value);
    });
    if (cakename == null) {
      alert("Cake Name Can't be empty");

      return false;
    }
    if (cakedescription == null) {
      alert("description is required");
      return false;
    }
    if (weight == null) {
      alert("weight field is required");
      return false;
    }
    if (props.cakeImage == undefined) {
      alert("image field is empty");
      return false;
    }
    if (price == null) {
      alert("price can't be empty");
      return false;
    }
    if (type == null) {
      alert("please choose your specific type");
      return false;
    }
    if (flaver == null) {
      alert("please Choose flaver");
      return false;
    }
    
    dispatch({
      type: "ADD_CAKE_STARTED",
      payload: {
        name: cakename,
        description: cakedescription,
        price: price,
        weight: weight,
        image: props.cakeImage,
        type: type,
        eggless: eggless,
        flavour: flaver,
        ingredients: cakeIngredients,
      },
    });
    setTimeout(function () {
      alert("Cake Added Successfully");
     
    }, 3000);

    cakeIngredients = [];
  };

  return (
    <>
      <div>Adminstration</div>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Add New Cake</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              <h1>Add</h1>
              <form className="admon-form" id="myForm">
                <div class="form-group">
                  <label for="email">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter name"
                    id="email"
                    onChange={changeName}
                  />
                </div>

                <div class="form-group">
                  <label for="pwd">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Description"
                    id="pwd"
                    onChange={changeDescription}
                  />
                </div>
                {fields.map(function (item, index) {
                  return (
                    <div className="row" key={index}>
                      <div className="col-lg-1">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={addingredient}
                        >
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                      <div className="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Ingredient"
                          onChange={(e) => changeIngridient(index, e)}
                        />
                      </div>
                      <div className="col-lg-1">
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="btn btn-danger"
                        >
                          <i class="fa fa-minus"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}

                <div class="form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      <label for="pwd">Thumbnail</label>
                      <input
                        type="file"
                        class="form-control"
                        placeholder="Enter password"
                        id="pwd"
                        onChange={onChangeImage}
                        accept="image/*,.jpg"
                      />
                    </div>
                    <div className="col-lg-4">
                      <button
                        className="btn btn-outline-primary"
                        style={{ marginTop: "24px" }}
                        onClick={onUpload}
                      >
                        Upload
                      </button>
                    </div>
                    {image ? (
                      <div className="col-lg-4">
                        <img src={image} height="120" width="150" />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div class="form-group">
                  <label for="pwd">Price</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Price"
                    onChange={changePrice}
                  />
                </div>

                <div class="form-group">
                  <label for="pwd">Weight</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Weight"
                    onChange={onChangeWeght}
                  />
                </div>

                <div class="form-group">
                  <label for="pwd">Flavor </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Flavor"
                    onChange={(e) => setFlaver(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <label for="pwd">Type</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={onChangeType}
                  >
                    <option value="" disabled="">
                      Select Type
                    </option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="farewell">Farewell</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="pwd">Eggless</label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                    onChange={(e) => setEggless(e.target.checked)}
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={submitCake}
                  disabled={isUpload}
                >
                  Submit
                </button>
              </form>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
             All Cakes
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
              {
                props.allcakes.data&&props.allcakes.data.map(function(item,index){
                   return <Cake key={index} data={item} ></Cake>;
                })
              }
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
function mapStatetoprops(state, props) {
  
  return {
    token: state.AuthReducer?.token,
    cakeImage: state.AuthReducer?.cake_image,
    allcakes:state.CakeReducer?.allcakes
  };
}
export default connect(mapStatetoprops)(Admin);
