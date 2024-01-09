import { fetchData } from "./ActionType"

import {useDispatch} from "react-redux"
import axios from 'axios'

const getRequest = () =>(dispatch) => {
    axios .get("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      dispatch(fetchDatas(data.data))
    })
  }
  

const fetchDatas = (payload) => {
    return {
        type : fetchData,
        payload 
    }
}

export {fetchDatas, getRequest}