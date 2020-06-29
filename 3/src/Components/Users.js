import React, { useState, useEffect } from 'react'
import URL from './../../Axios'
import './../Styling/User.css'

//Actions.....
import {saveUsers} from './../Redux/Actions/SaveUsers'
import {deleteUser} from './../Redux/Actions/Delete'
import {getUser} from './../Redux/Actions/GetUser'
import {SortEmail} from './../Redux/Actions/SortEmail'
import {SortName} from './../Redux/Actions/SortName'
import {PageSize} from './../Redux/Actions/PageSize'
import {Paginate} from './../Redux/Actions/Paginate'

import {connect} from 'react-redux'

 function Users(props) {
    
    const [prev,handlePrev] = useState(true)
    const [next,handleNex] = useState(false)
    const [pageSize,handleSize] = useState(2)


    // pageSize = () => {

    // }
    useEffect(() => {
        console.log('indside')
        URL.get('/')
            .then(resp => {
                console.log(resp)
                props.save(resp.data)
            })
            .catch(err => console.log(err))

    }, [])

   
    return (
        <div >
            <div className="btns">
                    <button className="btn" onClick={props.sortname}>Sort By Name</button>
                    <button className="btn" onClick={props.email}> Sort By Email</button>
                    <p>Page Size:</p>
                    <select onChange={(e)=>{props.size(e.target.value)}}>
                            <option  value={2}>2</option>
                            <option  value={5}>5</option>
                            <option  value={10}>10</option>
                    </select>

            </div>
            <table style={{ width: "100%" }}>
                <tbody >
                    <tr className="mainRow">
                        <td><b>Name </b></td>
                        <td><b>Username</b></td>
                        <td><b>Email</b></td>
                        <td>
                            <b>
                            Address
                            </b>
                        </td>
                        <td><b>Phone</b></td>
                        <td><b>Website</b></td>
                        <td ><b>Company Name</b></td>
                        <td ><b>Open</b> </td>
                        <td><b>Delete</b></td>
                    </tr>
                    {/* display name, username, email, address, phone, website,company, */}
                    {props.UsersReducer.map(user => {
                       
                        return <tr className="mainRow">
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <p>
                                    Suite: {user.address.suite}
                                    <br></br>
                                    Street: {user.address.street}
                                    <br></br>
                                    City: {user.address.city}
                                    
                                </p>
                            </td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td><button style={{backgroundColor:"grey"}} className="btn" onClick={()=>{
                                    props.get(user)
                                    props.history.push(`/user/${user.id}`)
                            }}>Open</button></td>
                            <td><button className="btn" style={{backgroundColor:"red"}} onClick={()=>props.delete(user.id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="btns1">
                    <button disabled={props.pageprev}  onClick={()=>props.paginate('prev')}>Prev</button>
                    <button disabled={props.pagenext} onClick={()=>props.paginate('next')}>Next</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
        console.log(dispatch)
        return {
            save : (users)=>dispatch(saveUsers(users)),
            delete: (id)=>dispatch(deleteUser(id)),
            get:(user)=>dispatch(getUser(user)),
            email:()=>dispatch(SortEmail()),
            sortname:()=>dispatch(SortName()),
            size:(pagesize)=>dispatch(PageSize(pagesize)),
            paginate:(val)=>dispatch(Paginate(val)),
        }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        pageprev:state.prev,
        pagenext:state.next,
        UsersReducer:state.Users || []
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)