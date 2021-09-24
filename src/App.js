import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Nevbar from "./components/Nevbar";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
      params={{
        Particles:{
          Number:{
            value:5,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type: "star",
            stroke:{
              width: 6,
              color:"#f9ab00"
            }
          }
        }
      }}
    />
    <Nevbar/>
    <Header/>
    </>
  );
}

export default App;
