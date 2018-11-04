import React from "react";

const EditExpense = (props) => (
  <div>
    {console.log(props)}
    <p>This is edit expense page with id {props.match.params.id}</p>
  </div>
);

export default EditExpense;