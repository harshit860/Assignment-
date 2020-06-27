import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../Styling/UserDetail.css'

function UserDetail(props) {

    function go(){
        props.history.push('/')
    }
    return (
        <>
        <div className="holder2">
           
        </div>
        
        <div className="holder">
        
            <div className="outer">
                <div className="main">
                <button style={{width:'40%'}} onClick={go}>Back</button>
                    <h4><b>Contact Info :{props.current.name}</b></h4>
                    <p> Username : {props.current.username}</p>
                    <p> Email : {props.current.email}</p>
                    <p> Contact : {props.current.phone}</p>
                    <p> Website : {props.current.website}</p>
                </div>
                <div className="main">
                    <h4><b>Address Info</b></h4>
                    <p>{props.current.address.suite}</p>
                    <p>{props.current.address.street}</p>
                    <p>{props.current.address.city}</p>
                    <p>{props.current.address.zipcode}</p>
                    <p> Latitude:{props.current.address.geo.lat} | Longitude: {props.current.address.geo.lng}</p>
                </div>
                
                <div className="main">
                    <h4><b>Company Info</b></h4>
                    <p>{props.current.company.name}</p>
                    <p>{props.current.company.catchPhrase}</p>
                   
                </div>
                <div className="main">
                    
                   
                </div>
            </div>
        </div>
        </>
    )

}
const mapStateToProps = state => {
    return {
        current: state.CurrentUser
    }
}
export default connect(mapStateToProps)(UserDetail)