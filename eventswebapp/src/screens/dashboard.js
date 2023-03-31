import React, { useState } from 'react'
export default function Dashboard() {
    return (
        <body>
            <div class="dashHead">
                <h1>Events</h1>
                <button class="addNewButt" onclick="openForm()">+</button>
            </div>
            <div class="row">
                <div class="column">Public
                    <div class="card">
                        Hello
                    </div>
                </div>
                <div class="column">Private
                    <div class="card"></div>
                </div>
                <div class="column">RSO
                    <div class="card"></div>
                </div>
            </div>
        </body>
    )
}