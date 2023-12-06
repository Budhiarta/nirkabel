import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../component/sidebar";
import Chart from "../component/chart";
import Table from "../component/table";

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="bghome col">
                    <h1>Welcome, Gardener</h1>
                    <Chart/>
                    <br/>
                    <h1>Daily Report</h1>
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default Home

