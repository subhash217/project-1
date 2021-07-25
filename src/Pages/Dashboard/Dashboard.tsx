import React from "react";

function Dashboard(props: any) {
  const call = (e: any) => {
    e.preventDefault();
    console.log("working");
  };
  return (
    <>
      {props.page}
      {props.sectionList}
      <DashBoardPage {...props} />
      <a aria-label="home page" href="/" onClick={call}>
        google
      </a>
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

export default Dashboard;
