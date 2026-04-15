//clas[s coponent
//fuction component

import React  from "react";
import UserInfor from "./UerInfor";
import Displayinfor from "./Displayinfor";
class Mycomponent extends React.Component{

state={
                listUser:[
                        {id:1,name:"hoi dan it", age:"30"},
                        {id:2,name:"eric", age:"10"},
                        {id:3,name:"dat", age:"32"},
                ]
    }
    //jsx
   
         render(){
         return(
              <div>  
                  
                        <UserInfor></UserInfor>
                        <br/><br/>
                        <Displayinfor listUser={this.state.listUser}
                        
                                users={this.state.listUser}                        
                        >
                        </Displayinfor>
                  </div>
          );
         }
}
export default Mycomponent
