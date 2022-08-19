import React, { useState } from "react";
import FormComponent from "../components/Form";
import { List } from "../components/List";
import { IState } from "../interface/person";
import "./index.css";

export default function Homeaa() {

  const [person, setPerson] = useState<IState["person"]>([
    { name: "son", age: 22, bio: "developer" },
    { name: "son", age: 22, bio: "developer" },
    { name: "son", age: 22, bio: "developer" },
    { name: "son", age: 22, bio: "developer" },
  ]);

  return (
    <div className="container">
      <FormComponent person={person} setPerson={setPerson} />
      <List person={person} />
    </div>
  );
}
