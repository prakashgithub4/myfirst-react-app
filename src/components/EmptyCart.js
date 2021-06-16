import { Link, withRouter } from "react-router-dom";
export default function EmptyCart(){
    return (<div >
       
    <div class="row " >
        <div class="col-md-12">
            <div class="card">
                
                <div class="background-control card-body cart">
                    <div class="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3"/>
                        <h3><strong>Your Cart is Empty</strong></h3>
                        <h4>Add something to make me happy :)</h4> <Link to={'/'} class="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    
</div>

    </div>)
}