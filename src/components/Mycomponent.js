//clas[s coponent
//fuction component

import React  from "react";
class Mycomponent extends React.Component{
   handleClick(event){
    console.log(">>click me my button")
    //console.log(event.target)
   }
   handleOnMoveOver(event){
          console.log(event.pageX)
   }
    //jsx
       state={
          name: 'eric',
          address:'ha noi',
          age:16        };
         render(){
          return(
              <div>  
                  my name is { this.state.name}  and i am from { this.state.address}
                      <button onMouseOver={this.handleClick }>hover me</button>  
                        <button onClick={this.handleClick }>Click me</button>  
                
                  </div>
          );
         }
}
export default Mycomponent