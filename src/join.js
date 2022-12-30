import axios from "axios";
const url="http://127.0.0.1:1122"


export const onDelete=async(ComName)=>{
    const t = await axios.delete(`${url}/erase/${ComName}`)
    return t
}

export const onFilterJobRole=async(jr)=>{
    const t = await axios.get(`${url}/Job/${jr}`)
    return t
}

export const onFilterQualification=async(quali)=>{
    //alert("Qual before "+quali)
    const t = await axios.get(`${url}/qual/${quali}`)
    return t;
}
export const onFilterSalery=async(rup)=>{
    const t = await axios.get(`${url}/Sale/${rup}`)
    return t
}

export const onUpdate=async(key,obj)=>{
    const t = await axios.put(`${url}/${key}`,obj)
    return t
}

export const onTraverse=async()=>{
    const t = await axios.get(`${url}/`)
    // alert(JSON.stringify(t.data)+" @ AXIOS")
    return t
}

export const onFetch=async(key)=>{
    const t = await axios.get(`${url}/${key}`)
    return t
}



export const onCreate=async(ComName)=>
{
    alert(JSON.stringify(ComName))
    const t = await axios.post(`${url}/Create`,ComName)
    return t
}