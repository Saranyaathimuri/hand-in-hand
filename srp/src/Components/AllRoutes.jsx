import React from "react";
// import Mainpage from './Mainpage/mainpage'
import Mainpage from "./Mainpage/mainpage"
import {Router,Routes, Route} from 'react-router-dom';
function AllRoutes() {
    return(
        
        <Routes>
          <Route path="/mainpage" element={<Mainpage/>} />
        </Routes>
     
    )

}
export default AllRoutes;