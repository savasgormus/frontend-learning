import React from 'react'
// import { useState } from 'react'
// import ClassComponent from './components/ClassComponent'
// import UseStateComp from './components/UseStateComp'
// import UseEffectComp from './components/UseEffectComp'
import User from './components/Users'


function App() {
  // const [isVisible, setIsvisible] = useState(true)
  return (
    <div className="App">
      {/* <h2>LifeCycles</h2> */}
      {/* <button onClick={() => setIsvisible(!isVisible)}> Toggle Comp</button> */}
      {/* {isVisible && <ClassComponent />} */}
      {/* <UseStateComp /> */}
      {/* {isVisible && <UseEffectComp />} */}
      <User />
    </div>
  )
}

export default App
