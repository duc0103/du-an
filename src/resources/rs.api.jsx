import axios from "axios"
const URL='http://54.210.133.144:8080'

export const getAll = (data)=>{
    return axios({
        method:'GET',
        url:`${URL}/play`
    })
}