import React from "react";
import './Displayinfor.scss'
import logo from './../logo.svg';
class Displayinfor extends React.Component{
   state={
       isShowlistUser:true
   }

    handleShowhide=()=>{
            this.setState({isShowlistUser:!this.state.isShowlistUser})

    }
    
    render(){
        const {listUser}=this.props;
        
       // console.log(this.props)
       //dry 
       console.table(listUser)
        return(
            <div className="display-infor-container">
                {/* <img src={logo}/> */}
                <div>
                    <span onClick={()=>{this.handleShowhide()}}>
                        {this.state.isShowlistUser=== true? "hide list user:":"show list user" }
                    </span>
                </div>
                {this.state.isShowlistUser && 
            <>
                {listUser.map((user)=>{
                     return(
                        <div key={user.id} className={+user.age>18?"green":"red"} >
                              <div >my name is {user.name}</div>
                             <div>my age {user.age} </div>
                             <button onClick={()=>this.props.handleDeleteUser(user.id)}>Delete</button>
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
}
export default Displayinfor;
