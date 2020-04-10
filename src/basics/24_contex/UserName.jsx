import React, { Component } from "react";
import {Provider} from "./Context";
import GrandFather from "./GrandFather";

class UserName extends Component {
  render() {
    return (
      <div>
        <Provider value="Badouin">
          <GrandFather />
        </Provider>
      </div>
    );
  }
}

export default UserName;
