import React from "react";

export function Dashboard(props: any) {
  return (
    <>
      {props.page}
      {props.sectionList}
      <DashBoardPage {...props} />
    </>
  );
}

const DashBoardPage = (props: any) => {
  console.log(props);
  return <p>Dashboard Page</p>;
};

Dashboard.defaultProps = {
  page: "Dashboard",
  sectionList: 5,
};
