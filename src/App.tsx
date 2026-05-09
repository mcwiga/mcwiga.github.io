import { HomeComponent } from "./components/HomeComponent/HomeComponent";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import "./App.css";
import Me from "./assets/me.jpg";
import { Avatar } from "@mui/material";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section className="contentSection">
        <Avatar
          onClick={() => console.log("click")}
          src={Me}
          sx={{
            width: "170px",
            height: "170px",
            margin: "20px",
            border: "thick double rgba(109, 104, 128, 0.9)",
            cursor: "pointer",
          }}
        ></Avatar>
        <HomeComponent></HomeComponent>
      </section>
    </>
  );
}

export default App;
