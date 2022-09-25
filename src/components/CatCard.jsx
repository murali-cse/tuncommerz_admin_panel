import React from "react";
import { Badge } from "react-bootstrap";

const CatCard = () => {
  return (
    <div className="m-5">
      <div className="text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          className="tz-cat-img"
        />
        <h4 className="mt-2">Title</h4>
        <Badge pill bg="success">
          Active
        </Badge>
      </div>
    </div>
  );
};

export default CatCard;
