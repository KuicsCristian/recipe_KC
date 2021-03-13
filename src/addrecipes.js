import React, { Component } from "react";

class AddRecipes extends Component {
  render() {
    const checkBoxId = this.props.checkBoxId;
    const { ingredient } = this.props;
    const { ingname } = ingredient;

    return (
      <>
        <div key={checkBoxId} className="form-check form-check-inline">
          <input type="checkbox" name={checkBoxId} value={ingname} />
          <label style={{ marginBottom: "0", marginLeft: "10px" }}>
            {ingname}
          </label>
        </div>
      </>
    );
  }
}

export default AddRecipes;
