import React, { Component } from "react";
import Classes from "./Classes";

let data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class Content extends Component {
  state = {
    item: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  chooseClasses = (matkinh) => {
    this.setState({
      item: matkinh
    })
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center">TRY GLASSES APP ONLINE</h2>
        <div className="model row">
          <div className="model-left col-6">
            <div className="model-content">
              <img src="./glassesImage/model.jpg" alt="..." />
              <div className="desc-content">
                <h3 className="desc-name">{this.state.item.name}</h3>
                <p className="desc">
                  {this.state.item.desc}
                </p>
              </div>
            </div>
            <div className="matkinh">
              <img src={this.state.item.url} alt="..." />
            </div>
          </div>
          <div className="model-right col-6">
            <img
              src="./glassesImage/model.jpg"
              alt="..."
              className="model-content1"
            />
            <img src={this.state.item.url} alt="..." className="matkinh1" />
          </div>
        </div>
        <div className="classes">
          <div className="row">
            <div className="classes-wrap col-12">
              {data.map((item,index) => {
                return <Classes item={item} chonKinh = {this.chooseClasses} id={index}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
