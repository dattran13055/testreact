//clas[s coponent
//fuction component

import React  from "react";
import AddUserInfor from "./AddUserInfor";
import Displayinfor from "./Displayinfor";
class Mycomponent extends React.Component{

state={
                listUser:[
                        {id:1,name:"hoi dan it", age:"16"},
                        {id:2,name:"eric", age:"89"},
                        {id:3,name:"dat", age:"32"},
                ]
    }
    handleAddNewUser= (userobj)=>{
        this.setState({
            listUser:[...this.state.listUser,userobj]
        })
    }
    //jsx
   
         render(){
         return(
              <div>  
                  
                        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                        <br/><br/>
                        <Displayinfor listUser={this.state.listUser}
                                                          
                        >
                        </Displayinfor>
                  </div>
          );
         }
}
export default Mycomponent
