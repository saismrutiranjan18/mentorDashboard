import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="container py-5" style={{ overflow: "hidden", wordWrap: "break-word" }}>
      {/* Mentee Section */}
      <div className="card p-5 mb-5 shadow-sm" style={{ backgroundColor: "#f0f0f0" }}>
        <h2 className="text-center mb-3" style={{ fontWeight: "bold", color: "#a01212" }}>Mentee Section</h2>
        <hr style={{ border: "2px solid #a01212", width: "100%", margin: "10px auto" }} />
        <div className="row g-4 text-center">
          <div className="col-12">
            <button className="btn w-100 py-0" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Mentee Records</button>
          </div>
          <div className="col-12 col-md-6">
            <button className="btn w-100 py-0" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Minutes of Meeting</button>
          </div>
          <div className="col-12 col-md-6">
            <button className="btn w-100 py-0" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Schedule Meeting</button>
          </div>
        </div>
      </div>
      
      {/* Chat Section */}
      <div className="card p-5 shadow-sm" style={{ backgroundColor: "#f0f0f0" }}>
        <h4 className="text-center mb-3" style={{ fontWeight: "bold", color: "#a01212" }}>Chat Section</h4>
        <hr style={{ border: "3px solid #a01212", width: "80%", margin: "10px auto" }} />
        <div className="row g-4 text-center">
          <div className="col-12 col-md-6">
            <button className="btn w-100 py-0" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Admin</button>
          </div>
          <div className="col-12 col-md-6">
            <button className="btn w-100 py-0" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Mentor Coordinator</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
