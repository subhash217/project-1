import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { Shimmer } from "office-ui-fabric-react/lib/Shimmer";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions";
const wrapperClass = mergeStyles({
  padding: 2,
  selectors: {
    "& > .ms-Shimmer-container": {
      margin: "10px 0",
    },
  },
});

function UserList(props: any) {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const [state, setState] = React.useState(false);
  const usersResult = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  console.log(usersResult);
  const getusers = () => {
    setState(true);
    dispatch(getUsers());
    setIsloading(false);
  };
  const data = () => {
    let list;
    if (isLoading) {
      list = (
        <Fabric className={wrapperClass}>
          <Shimmer />
          <Shimmer width="80%" />
          <Shimmer width="60%" />
          <Shimmer width="40%" />
        </Fabric>
      );
    } else {
      list = (
        <ul>
          {usersResult.users.map((user: any) => {
            return <li>{user.title}</li>;
          })}
        </ul>
      );
    }
    return list;
  };
  return (
    <React.Fragment>
      <div className="layout">
        <PrimaryButton onClick={getusers}>Get Users</PrimaryButton>
        {state && data()}
        {/* <div className="image"></div> */}
      </div>
    </React.Fragment>
  );
}
export default UserList;
