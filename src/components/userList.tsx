import React, { useState, useEffect } from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
} from "office-ui-fabric-react/lib/DocumentCard";
import { Shimmer } from "office-ui-fabric-react/lib/Shimmer";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions";
import "./userList.scss";
const wrapperClass = mergeStyles({
  padding: 2,
  selectors: {
    "& > .ms-Shimmer-container": {
      margin: "10px 0",
    },
  },
});

function UserList(props: any) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [state, setState] = useState(false);
  const usersResult = useSelector((state: any) => state.users);
  const dataList = usersResult.users;
  const dispatch = useDispatch();

  const getusers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUsers(result);
      });
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
      list =
        // {dataList.map()}
        null;
    }
    return list;
  };

  return (
    <React.Fragment>
      <div className="layout">
        <PrimaryButton onClick={getusers}>Get Users</PrimaryButton>
        {/* {state && data()}  */}
        <div className="card-container">
          {users.map((u: any, i: any) => {
            return (
              <div className="card">
                <DocumentCard key={i}>
                  <DocumentCardTitle title={u.name} />
                  <DocumentCardTitle title={u.email} />
                  <DocumentCardTitle title={u.phone} />
                  <DocumentCardTitle title={u.company.catchPhrase} />
                </DocumentCard>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default UserList;
