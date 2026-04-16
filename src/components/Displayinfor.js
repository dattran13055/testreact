import React from "react";
import './Displayinfor.scss'
import logo from './../logo.svg';
class Displayinfor extends React.Component{
   state={
       isShowlistUser:true
   }
     constructor(props){
        console.log("call me constructor")  
        super(props);
        this.state={
            isShowlistUser:true
        }
     }
     componentDidMount(){
        console.log("call me component did mount")
        setTimeout(() => {
            document.title="hello dat"
        }, 3000);
     }
     componentDidUpdate(prevProps,prevState,snapshot){
        console.log("call me component did update",this.props,prevProps)
        if(this.props.listUser !== prevProps.listUser){
                if(this.props.listUser.length === 5){
                    alert("you have 5 user in your list")
                }
            }
        }


    handleShowhide=()=>{
            this.setState((prevState)=>({
                isShowlistUser:!prevState.isShowlistUser
            }))

    }
    
    render(){
        console.log("call me render")
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
