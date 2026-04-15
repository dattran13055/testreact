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
          //ham thay doi 
          handleonChangeInput=(event)=>{
            this.setState({
                name:event.target.value
            })
            
           

          }
          //ham load submit
            handleOnSubmit=(event)=>{
                event.preventDefault()
                console.log(this.state)
            }
         render(){
         return(
              <div>  
                  my name is { this.state.name}  and i am { this.state.age}
                        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                            <input type="text"
                            onChange={(event)=>this.handleonChangeInput(event)}/>
                            <button>submit</button>
                        </form>
                  </div>
          );
         }
}
export default Mycomponent
