import React, { Component } from "react";

class AddRecipes extends Component {
  render() {
    const checkBoxId = this.props.checkBoxId;
    const { ingredient } = this.props;
    const { denumireing } = ingredient;

    return (
      <>
        <div key={checkBoxId} className="form-check form-check-inline">
          <input type="checkbox" name={checkBoxId} value={denumireing} />
          <label style={{ marginBottom: "0", marginLeft: "10px" }}>
            {denumireing}
          </label>
        </div>
      </>
    );
  }
}

export default AddRecipes;
