import React from "react";
import './Displayinfor.scss'
import logo from './../logo.svg';
// class Displayinfor extends React.Component{
  
    
//     render(){
//         console.log("call me render")
//         const {listUser}=this.props;
        
//        // console.log(this.props)
//        //dry 
//        console.table(listUser)
//         return(
//             <div className="display-infor-container">
            
//                 {true&& 
//             <>
//                 {listUser.map((user)=>{
//                      return(
//                         <div key={user.id} className={+user.age>18?"green":"red"} >
//                               <div >my name is {user.name}</div>
//                              <div>my age {user.age} </div>
//                              <button onClick={()=>this.props.handleDeleteUser(user.id)}>Delete</button>
//                         </div>
//                     )


                  
                   
//                 })}
//                 {/* <div>my name is {name}</div>
//                 <div>my age {age}</div>
//                 <hr></hr>
//                  <div>my name is {name}</div>
//                 <div>my age {age}</div>
//                 <hr></hr>
//                  <div>my name is {name}</div>
//                 <div>my age {age}</div> */}
//             </>
//                  }


//             </div>
//         )
//     }
// }
const Displayinfor=(props)=>{
     const {listUser}=props;
  
        return(
            <div className="display-infor-container">
            
                {true&& 
            <>
                {listUser.map((user)=>{
                     return(
                        <div key={user.id} className={+user.age>18?"green":"red"} >
                              <div >my name is {user.name}</div>
                             <div>my age {user.age} </div>
                             <button onClick={()=>props.handleDeleteUser(user.id)}>Delete</button>
                        </div>
                    )


                  
                   
                })}
                {/* <div>my name is {name}</div>
                <div>my age {age}</div>
                <hr></hr>
                 <div>my name is {name}</div>
                <div>my age {age}</div>
                <hr></hr>
                 <div>my name is {name}</div>
                <div>my age {age}</div> */}
            </>
                 }


            </div>
        )
    }


export default Displayinfor;
