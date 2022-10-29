// import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import SignedUser from './SignedUser.jsx'
// import UnsignedUser from './UnsignedUser.jsx'
import './App.css';

function App() {
  // const [isSigned, setIsSigned] = useState(true)
  return(
    <BrowserRouter>
     <SignedUser />
    </BrowserRouter>
  )

  // return isSigned ? (
  //   <BrowserRouter>
  //     <SignedUser />
  //   </BrowserRouter>
  // ) : (
  //   <UnsignedUser />
  // )
}

export default App;
