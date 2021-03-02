export const getUsers = () => {
  return (dispatch: any) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: "GET_USERS",
          res: result,
        });
      });
  };
};
