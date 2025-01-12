import Home from "./page/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Loading from "./component/Loading/Loading.jsx";
import { useEffect, useState } from "react";

function App() {
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    // window.onload = ()=>{
    //   setLoading(true);
    // }
    setTimeout(()=>{
      setLoading(false);
    }, 5000);
  },[]);
  return (
    <>
      {
        loading? (<Loading />)
        :(
          <Home />
        )
      }
    </>
  )
}

export default App;
