import React, { Component } from "react";

export default class Classes extends Component {
  renderClasses = () => {};
  render() {
    let {item,chonKinh,id} = this.props;

    return (
        <button className="btn btn-classes" key={id} onClick={(event)=>{
            chonKinh(item)
            
        }}>

            <img src={item.url} alt="..." style={{objectFit:'contain'}}/>

        </button>

        
      
    );
  }
}
