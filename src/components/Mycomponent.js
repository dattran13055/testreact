//clas[s coponent
//fuction component

import React  from "react";
import UserInfor from "./UerInfor";
import Displayinfor from "./Displayinfor";
class Mycomponent extends React.Component{


    //jsx
   
         render(){
         return(
              <div>  
                  
                        <UserInfor></UserInfor>
                        <br/><br/>
                        <Displayinfor name ="hoi dan it" age ='30'></Displayinfor>
                        <hr></hr>
                        <Displayinfor name ="eric" age ='16'></Displayinfor>
                  </div>
          );
         }
}
export default Mycomponent
