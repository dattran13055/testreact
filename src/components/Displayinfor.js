import React from "react";
class Displayinfor extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <div>my name is {this.props.name}</div>
                <div>my age {this.props.age}</div>
            </div>
        )
    }
}
export default Displayinfor;