import React from "react";
import "../css/list.css";
import { IState as IProps } from "../interface/person";

export const List = ({ person }: IProps) => {
  const handleClick = (): any[] => {
    let state: any[] = [];
    return state;
  };
  const renderList = (): JSX.Element[] => {
    return person.map((item) => {
      return (
        <div>
          <div className="list-item-container">
            {item.name} - {item.age} - {item.bio}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="list-container">
      <h1>List</h1>
      {renderList()}
    </div>
  );
};
