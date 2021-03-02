import React from "react";
import styled from "styled-components";

const View = styled.button`
  color: orange;
  border: 2px solid orange;
`;

const ViewTwo = styled(View)`
  color: red;
`;
export function Login() {
  return (
    <>
      <View>Login</View>
      <ViewTwo> Logout</ViewTwo>
    </>
  );
}
