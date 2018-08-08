import React, { Component } from "react";
import "./App.css";

class MyTest extends Component {
  constructor() {
    super();
    this.state = {
      testEntry: ""
    };
  }

  handleChange(ev) {
    // console.log(me);
    console.log(ev.target.value);
  }

  render() {
    return (
      <div>
        <div className="form-group row colEntry3 ">
          <label
            htmlFor="inputNumber"
            className="col-sm-4 col-form-label nLabel"
          >
            Number:
          </label>
          <div className="col-sm-8">
            <input
              type="number"
              //pattern="[0-9]*"
              className="form-control nEntry"
              id="inputNumber"
              placeholder="enter number"
              onInput={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyTest;
