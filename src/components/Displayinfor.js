import React from "react";
class Displayinfor extends React.Component{
    
    render(){
        const {listUser}=this.props;
        
       // console.log(this.props)
       //dry 
        return(
            <div>
                {listUser.map((user)=>{
                    return(
                        <div key={user.id}>
                              <div>my name is {user.name}</div>
                             <div>my age {user.age} </div>
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
            </div>
        )
    }
}
export default Displayinfor;
