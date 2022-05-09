import React, { Component, useState } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import { Card } from "@mui/material";

const SortableItem = sortableElement(({ value }) => (
  <Card
    style={{
      maxWidth: 150,
      minWidth: 150,
      height: 120,
      paddingTop: 20,
      marginTop: 10,
      textAlign: "center",
      backgroundColor: "green",
    }}
  >
    {value}
  </Card>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

const QuestionColumn = (props) => {
  const { data } = props;
  const [items, setItems] = useState(
    Object.keys(data?.key).map((v) => {
      return data?.key[`${v}`];
    })
  );

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        {Object.keys(data?.option).map((v) => (
          <Card
            style={{
              maxWidth: 150,
              minWidth: 150,
              height: 120,
              paddingTop: 20,
              marginTop: 10,
              marginRight: 2,
              textAlign: "center",
              backgroundColor: "greenyellow",
            }}
          >
            {data?.option[`${v}`]}
          </Card>
        ))}
      </div>
      <SortableContainer onSortEnd={onSortEnd}>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
    </div>
  );
};
export default QuestionColumn;
