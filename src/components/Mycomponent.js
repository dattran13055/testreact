//clas[s coponent
//fuction component

import React  from "react";
class Mycomponent extends React.Component{
   handleClick=(event)=>{
    console.log(">>click me my button");
    console.log("my name is",this.state.name);
// cap nhat state cua component
    this.setState({
        name:'datdepzai',
        age:Math.floor((Math.random() * 100) + 1)
    })
     this.setState({
        age:Math.floor((Math.random() * 100) + 1)
    })
    
    //console.log(event.target)
   }
   handleOnMoveOver = () => {
        const randomAge = Math.floor((Math.random() * 100) + 1);
        console.log("random", randomAge);
        this.setState({
            age: randomAge
        });
   }
    //jsx
       state={
          name: 'eric',
          address:'ha noi',
          age:16        };
         render(){
         return(
              <div>  
                  my name is { this.state.name}  and i am { this.state.age}
                      <button onMouseOver={this.handleOnMoveOver}>hover me</button>  
                        <button onClick={(event)=> {this.handleClick(event)} }>Click me</button>  
                
                  </div>
          );
         }
}
export default Mycomponent
