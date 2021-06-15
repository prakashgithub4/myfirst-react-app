function Addmore(props){
   console.log(props);
  return (<div>
       <div className="row" index={props.key}>
         
          
            <div className="col-lg-11">
            <input
            type="text"
            class="form-control"
            placeholder="Ingredient"
            
          />
            </div>
            <div className="col-lg-1">
               <button type="button" className="btn btn-danger" onClick={()=>props.remove(props.key)}><i class="fa fa-minus"></i></button>
            </div>
           
          </div>
  </div>)
}
export default Addmore;