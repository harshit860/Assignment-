import React, { useState, useEffect } from 'react'
import URL from './../../Axios'
import './../Styling/User.css'
import {saveUsers} from './../Redux/Actions/SaveUsers'
import {deleteUser} from './../Redux/Actions/Delete'
import {getUser} from './../Redux/Actions/GetUser'
import {SortEmail} from './../Redux/Actions/SortEmail'
import {SortName} from './../Redux/Actions/SortName'
import {connect} from 'react-redux'

 function Users(props) {
    console.log(props)
    
    useEffect(() => {

        URL.get('/')
            .then(resp => {
                props.save(resp.data)
            })
            .catch(err => console.log(err))

    }, [])

   
    return (
        <div >
            <div id="btns">
                    <button className="btn" onClick={props.sortname}>Sort By Name</button>
                    <button className="btn" onClick={props.email}> Sort By Email</button>
            </div>
            <table style={{ width: "100%" }}>
                <tbody >
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
            sortname:()=>dispatch(SortName())
        }
}
const mapStateToProps = state => {
 
    return {
        UsersReducer:state.Users || []
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)