import { useState } from "react"
import {onFilterQualification, onFilterJobRole, onFilterSalery } from "./join"

import { Traverse } from "./traverse"


export const Filter=()=>
{
    const[grp,setGrp]=useState({
        "JobRole":"",
        "Salery":0,
        "Qualification":""

    })
    const[store,setStore]=useState([])

    const observe=(eve)=>{
        const{name,value}=eve.target
        setGrp((old)=>{
            if(name==="Salery"){
                return{
                    ...old,
                    [name]:parseInt(value)
                }        
            }
            else{
                return{
                    ...old,
                    [name]:value
                }
            }
        })
    }

    const onFilter=async()=>
    {
        if(grp.JobRole===""&& grp.Salery===0)
        {
            const h = await onFilterQualification(grp.Qualification)
            setStore(h.data)
        }
        else if(grp.JobRole===""){
            const h = await onFilterSalery(grp.Salery)
            setStore(h.data)
        }
        else{
            const h = await onFilterJobRole(grp.JobRole)
            setStore(h.data)
        }
        
    }

    const res=()=>
    {
        setGrp(()=>{
            return{
                "JobRole":"",
                "Salery":0,
                "Qualification":""
                
            }
            
        })
    }
    
    return(
        <>{
            (store.length>0)?
            <>
            <Traverse myown={store} />
            </>
            :
            <>
            <div className="mt-4 row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12 p-5 shadow">
                    <div className="form group">
                        <label>Filter by Qualification</label>
                        <input type="text" name="Qualification" onChange={observe} value={grp.Qualification} className="form-control" placeholder="Enter the Qualification" />

                    </div>
                    <p className="text-center display-4">OR</p>
                    <div className="form group">
                        <label>Filter by JobRole</label>
                        <input type="text" name="JobRole" onChange={observe} value={grp.JobRole} className="form-control" placeholder="Enter the Role" />
                    </div>
                    <p className="text-center display-4">OR</p>
                    <div className="form group">
                        <label>Filter by Salery</label>
                        <input type="text" name="Salery" onChange={observe} value={grp.Salery} className="form-control" placeholder="Enter the Salery" />
                    </div>

                    <div className="mt-2 row justify-content-around">
                        <button className="col-2 btn btn-outline-info" onClick={onFilter}>
                            <i class="bi bi-funnel"></i>
                        </button>
                        <button className="col-2 btn btn-outline-dark"onClick={res}>
                            <i class="bi bi-x-circle-fill"></i>

                        </button>
                    </div>
                </div>
            </div>
            </>
        }</>
      

    )
}

