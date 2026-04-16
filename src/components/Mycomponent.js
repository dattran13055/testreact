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
            listUser:[userobj,...this.state.listUser]
        })
    }
    handleDeleteUser=(userId)=>{        
        let listUserClone=[...this.state.listUser]
        listUserClone=listUserClone.filter(item=>item.id !== userId)
        this.setState({
            listUser:listUserClone
        })
    }
    //jsx
   
         render(){
               
         return(
              <>
                
              <div className="a">
                  
                        <AddUserInfor 
                        handleAddNewUser={this.handleAddNewUser} 
                        />
                        <br/><br/>
                        <Displayinfor 
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                                                          
                        />
                        </div> 
                      
                  <div className="b">
                        </div>
                         
                  </>
          );
         }
}
export default Mycomponent
