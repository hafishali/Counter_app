import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redex/counterSlice'

function Buttons() {

// state to hold values from input box

const [range,setRange] =useState("")


    // hook to dispatch a function in action

    const dispatch=useDispatch()

    // components can acess the state by using useselector hook
    const count=useSelector((state)=>state.counter.value)

    console.log(range);

  return (
    <div style={{ height: '100vh' }} className="App d-flex align-items-center justify-content-center flex-column">
      <div className='bg-light rounded' style={{ height: '350px', width: '500px' }}>
        <div className='d-flex  justify-content-center mt-3'>
          <h1 className='text-primary'>Counter Application</h1>
        </div>
        <div className='d-flex  justify-content-center mt- 5'>
          <h1 style={{ fontSize: "60px", marginTop: "2rem" }} className='fw-3 '>{count}</h1>
        </div>
        <div class="d-flex justify-content-around mt-5">
          <button onClick={()=>dispatch(increment(Number(range)))}  style={{width:'100px'}} type="button" class="btn btn-success">Increment</button>
          <button onClick={()=>dispatch(decrement(Number(range)))} style={{width:'100px'}}  type="button" class="btn btn-warning">Decrement</button>
          <button onClick={()=>dispatch(reset())} style={{width:'100px'}} type="button" class="btn btn-danger">Reset</button>
          
        </div>
        <div className='d-flex   justify-content-center mt-3 w-50 ' style={{marginLeft:"8rem"}}>
          <input type="text" onChange={(e)=>setRange(e.target.value)}   className='form-control' placeholder='enter your range' />
        </div>
      </div>
    </div>
  )
}

export default Buttons