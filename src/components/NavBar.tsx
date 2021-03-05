import React from "react";
import "./NavBar.scss";
export default function NavBar() {
  const [render, setRender] = React.useState(false);
  if (render) {
    return <Header />;
  } else {
    throw new Error("Error Object");
  }
}

const Header = () => {
  return (
    <>
      <header>
        <div className="Navbar">
          <div>
            <img
              style={{ width: "90px", height: "31px", marginTop: "7px" }}
              src={`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png`}
            />
          </div>

          <div className="box-container">
            <div className="input-container">
              <div></div>
              <div style={{ flex: 1 }}>
                <input type="text" />
              </div>
              <div style={{ paddingRight: "23px" }}>
                <svg
                  style={{ height: "30px" }}
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                    fill="#4285f4"
                  ></path>
                  <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
                  <path
                    d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                    fill="#f4b400"
                  ></path>
                  <path
                    d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                    fill="#ea4335"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div style={{ width: "208px" }}></div>
          <div className="user-menu">
            <svg
              style={{
                color: "#5f6368",
                height: "22px",
                width: "27px",
                marginTop: "8px",
              }}
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
            <button
              onClick={() =>
                window.open(
                  "https://reactrouter.com/web/api/Router",
                  "",
                  "height=400,width=400"
                )
              }
            >
              {false ? "Sing Out" : "Sign In"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
