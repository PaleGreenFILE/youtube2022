import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import "../../pages/home/home.scss";
import 'react-toastify/dist/ReactToastify.css';
import Widget from "../../widget/Widget";
import Featured from "../featured/Featured";
import Chart from "../chart/Chart";
import Table from "../table/Table";

const Acceuil = () => {

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer" >
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Lastest Transaction</div>
          <Table/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acceuil;
