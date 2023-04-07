import React, { useState } from 'react'
function openForm() {
    //document.getElementById("myForm").style.display = "block";
    console.log("Open");
}
  
function closeForm() {
//document.getElementById("myForm").style.display = "none";
    console.log("Close");
}
export default function Dashboard() {
    return (
        <body>
            <div className="dashHead">
                <h1>Events</h1>
                <button className="addNewButt" onClick={openForm()}>+</button>
                <div className="form-popup" id="myForm">
                    <form action='/action_page.php' className="form-container">
                    <h1>New Event</h1>
                        <label id="event"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name of Event" name="event" required />

                        <label id="date"><b>Date</b></label>
                        <input type="text" placeholder="Enter Date of Event" name="date" required/>

                        <label id="time"><b>Time</b></label>
                        <input type="text" placeholder="Enter Time of Event" name="time" required/>

                        <label id="location"><b>Location</b></label>
                        <input type="text" placeholder="Enter Location of Event" name="location" required/>

                        <label id="category"><b>Category</b></label>
                        <input type="text" placeholder="Enter Category of Event" name="category" required/>

                        <label id="pnumber"><b>Phone Number</b></label>
                        <input type="text" placeholder="Enter Number for Event" name="pnumber" required/>

                        <label id="email"><b>Email Address</b></label>
                        <input type="text" placeholder="Enter Email for Event" name="email" required/>

                        <label id="description"><b>Description</b></label>
                        <input type="text" placeholder="Enter Description of Event" name="description" required/>
                    
                        <button type="submit" className="btn">Create</button>
                        <button type="button" className="btn cancel" onClick={closeForm()}>Close</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="column">Public
                    <div className="card">
                        Hello
                    </div>
                </div>
                <div className="column">Private
                    <div className="card"></div>
                </div>
                <div className="column">RSO
                    <div className="card"></div>
                </div>
            </div>
        </body>
    )
}