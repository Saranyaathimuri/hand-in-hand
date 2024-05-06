
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Firstpage from './Components/Firstpage/Firstpage';
import Secondpage from './Components/Secondpage/Secondpage';
import Sixthpage from './Components/Sixthpage/Sixthpage'
import Fifthpage from './Components/Fifthpage/Fifthpage';
import Fourthpage from './Components/Fourthpage/Fourthpage';
import Thirdpage from './Components/Thirdpage/Thirdpage';
function App() {
  return (
    <> 
   <Router>
       <Routes>
 
      <Route exact path="/" element={<Firstpage/>} />
      <Route path="/secondpage" element={<Secondpage/>} />
      <Route path="/thirdpage" element={<Thirdpage/>} />
      <Route path="/fourthpage" element={<Fourthpage/>} />
      <Route path="/fifthpage" element={<Fifthpage/>} />
      <Route path="/sixthpage" element={<Sixthpage/>} />
      
      <Route path="*" element={<Navigate to ="/"/>} />
      </Routes>
</Router>
  </>
  );
}

export default App;
