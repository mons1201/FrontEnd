import { useEffect, useState } from "react"
import { onDelete, onTraverse } from "./join"

// export const Traverse=()=>
export const Traverse=(props)=>
{
    const[mylist,setMylist]=useState([])

    const loads=async()=>{
        const hai = await onTraverse()
        setMylist(hai.data)
        //alert(JSON.stringify(mylist))
    }

    // useEffect(()=>{
    //     loads()
    // },[])
    useEffect(()=>{
        if(props.myown){
            setMylist(props.myown)
        }
        else{
            loads()
        }
    },[])

    return(
        <>
        <div className="mt-4 row justify-content-center">
            <p className="text-center display-5 text-warning">Available Companies</p>
            <div className="col-lg-7 col-md-8 col-sm-12 p-3 shadow text-nowrap">
                <div className="table-responsive">
                    <table className="table table-striped text-center" cellPadding="4px" cellSpacing="4px">
                        <thead>
                            <tr>
                                <th>CompanyName</th>
                                <th>JobRole</th>
                                <th>Availablevacancy</th>
                                <th>SelectedCandidates</th>
                                <th>Qualification</th>
                                <th>ConductingDate</th>
                                <th>Salery</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mylist.map((each)=>(
                                    <tr>
                                        <td>
                                            <a href={`/modify/${each.CompanyName}`} className="text-warning">
                                                <span className="bi bi-pencil-fill"></span>
                                            </a>
                                            {each.CompanyName}
                                            <button className="ms-2 btn btn-outline-danger" onClick={async()=>{
                                                const tt = await onDelete(each.CompanyName)
                                                alert(tt.data)
                                                window.location.assign("/")
                                            }}>
                                            <span class="bi bi-trash3-fill"></span>

                                            

                                            </button>
                                            {/* // <a href={`/modify/${each.CompanyName}`}>
                                            //    <i class="bi bi-pencil-fill"></i>{each.CompanyName}
                                            //</a>  
                                            //{each.CompanyName} */}
                                            
                                        </td>
                                        <td>{each.JobRole}</td>
                                        <td>{each.Availablevacancy}</td>
                                        <td>{each.SelectedCandidates}</td>
                                        <td>{each.Qualification}</td>
                                        <td>{JSON.stringify(each.ConductingDate)}</td>
                                        <td>{each.Salery}</td>
                                        </tr>
                                        
                                        
                                    

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>

    )


}