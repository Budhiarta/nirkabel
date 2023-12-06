import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../component/sidebar";


function Setup() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="bghome col">
                    <h1>Default Temperature</h1>
                    <textarea>
  Hello there, this is some text in a text area
</textarea>
                </div>
            </div>
        </div>
    )
}

export default Setup

