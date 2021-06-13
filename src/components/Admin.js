import {useState}from'react';
import { connect } from "react-redux";
function Admin() {
    let [image,setImage]=useState(null)
    
    let onChangeImage =(event)=>{
       const image=event.target.files[0];
       setImage(image)
    }
    let onUpload =(event)=>{
        event.preventDefault()
        const formdata = new FormData();
        formdata.append(
            'form',
            image,
            image.name

        );
        console.log(formdata)

       
    }
  return (
    <>
      <div>Add Cake</div>
      <form className="admon-form">
        <div class="form-group">
          <label for="email">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter name"
            id="email"
          />
        </div>

        <div class="form-group">
          <label for="pwd">Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Description"
            id="pwd"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Ingredients</label>
          <input
            type="text"
            class="form-control"
            placeholder="Description"
            
          />
          <button>+</button>
          <button>-</button>
        </div>

        <div class="form-group">
          <label for="pwd">Thumbnail</label>
          <input
            type="file"
            class="form-control"
            placeholder="Enter password"
            id="pwd"
            onChange={onChangeImage}
          />
        </div>


        <button type="button" onClick={onUpload} class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default connect()(Admin);
