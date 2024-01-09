import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {fetchDatas} from './redex/Actions'
import { getRequest } from './redex/Actions'
function App() {
  const [count, setCount] = useState(0)

  useEffect(()=> {
    dispatch(getRequest())

  },[])
  const finallData = useSelector((store ) => store.data )
  console.log(finallData)

  const dispatch = useDispatch()




  return (


    <div className='App'>
      {
        finallData?.map((item)=> {
          return(
            <div key={item.id} className='flex'>
              <h1>{item.name}</h1>
              <h2>{item.email}</h2>
              <hr />
             

            </div>
          )
          

        })
      }
      
    </div>
  )
}

export default App
