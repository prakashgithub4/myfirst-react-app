import React,{Component} from "react"
import axios from"axios";
import data from "../data";
class Content extends Component{
    constructor(){
        super();
        this.state={
            load:false,
            loaddata:[]
        }
    }
    componentDidMount(){
        axios({method:'get',url:"http://apibyashu.herokuapp.com/api/allcakes",data:JSON}).then((response)=>{
         
            this.setState({
                load:true,
                loaddata:response.data.data
            })
        },(error)=>{});
    }
    render(){
       
      let data = this.state.loaddata;
       let html = data.map((item,index)=>{
           return <li>{item.name}</li>
       })
        
        
        return <div><ul>{html}</ul></div>
    }

}
export default Content;