import  Axios  from "axios";
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    Axios.get("http://localhost:8888/product/getAll")
    .then(res => console.log(res.data)).catch(err => console.log(err))
  },[])
  return (
    <div>
      ok
    </div>
  );
}

export default App;
