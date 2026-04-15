import React from "react";
class UserInfor extends React.Component{
        state={
          name: 'eric',
          address:'ha noi',
          age:16        };
          //ham thay doi 
          handleonChangeInput=(event)=>{
            this.setState({
                name:event.target.value
            })
          }
           handleonChangeAge=(event)=>{
            this.setState({
                age:event.target.value
            })
          }
          
          
          //ham tranh load submit
            handleOnSubmit=(event)=>{
                event.preventDefault()
                console.log(this.state)
            }
    render(){
        return(
            <div>my name is { this.state.name}  and i am { this.state.age}
                        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                            <label>your name </label>
                            <input
                            value={this.state.name}// de cho react quan ly ten them xoa ten
                            type="text"
                            onChange={(event)=>this.handleonChangeInput(event)}/>

                            <label>your age </label>
                            <input
                            value={this.state.age}// de cho react quan ly ten them xoa ten
                            type="text"
                            onChange={(event)=>this.handleonChangeAge (event)}/>
                            <button>submit</button>
                        </form> </div>
        )
    }
}
export default UserInfor;