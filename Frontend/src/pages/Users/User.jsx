import React from "react";
import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      <h3 className="py-2">This is User page!!</h3>
      <p className="fs-4">
        If you have not Rgistered then please{" "}
        <Link to="/user/register"> Register</Link> first.
      </p>
      <p className="fs-4">
        If you are alredy registered then please{" "}
        <Link to="/user/login"> Login</Link> to continue.
      </p>
    </div>
  );
}

export default User;
