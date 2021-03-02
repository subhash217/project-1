import React from "react";
interface poop {
  title: any;
}
export default function Renderprops(props: poop) {
  console.log(props.title);
  return props.title("Render Props!!!");
}
