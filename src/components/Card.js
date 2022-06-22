import { Component } from "react";
import img from '../logo512.png'

class Card extends Component {
  constructor() {
    super();
    this.state = [
        {
          id:1,
            names: "Esraa",
            descriptions:'esraa is a web developer'
      },
        {
        id:2,
            names: "basil",
            descriptions:'basil is a web developer'
        },
        {
            id:3,
            names: "Abdallah",
            descriptions:'Abdallah is a web developer'
        },
    ];
  }
  render() {
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "700px",
            }}
          >
            {this.state.map((data) => (
              <div
                classNameName="card"
                style={{
                  width: "18rem",
                }}
                key={data.id}
              >
                <img
                  className="card-img-top w-50"
                  src={img}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{data.names}</h5>
                  <p className="card-text">
                    {data.descriptions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      );
  }
}

export default Card;
