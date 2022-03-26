import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectComp = () => {

  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)

  useEffect(() => {
    console.log("useEffect!");
    // count !== 0 && alert(`New Notification!, total: ${count}`)
    // setCount(count + 1)  count'ı koşula aldığımız için setCount sürekli ilerlemeye devam eder. sonsuz döngüye girdi.

    // let timer = setTimeout(()=>{
    //   alert("hello")
    // },3000)

    // return () => {
    //   console.log("Functional Component Unmount!");
    //   clearTimeout(timer)
    // } //! cleanup function 
  }, [count])
  console.log("func component render");
  const increase = () => setCount(count + 1)
  const increaseAge = () => setAge(age + 1)


  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count : {count}</p>
      <button onClick={increase}>Increase</button>
      <p>Age : {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
      
    </div>
  )
}

export default UseEffectComp
