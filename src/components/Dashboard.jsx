import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="container py-5" style={{ overflow: "hidden", wordWrap: "break-word" }}>
      {/* Mentee Section */}
      <div className="card p-5 mb-5 shadow-sm" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="text-center">
          <h2 className="mb-3" style={{ fontWeight: "bold", color: "#a01212" }}>Mentee Section</h2>
        </div>
        <div className="text-center">
          <hr style={{ border: "1.5px solid #7d0a0a", width: "100%", margin: "10px auto" }} />
        </div>

        <div className="row g-4 text-center">
          <div className="col-12">
            <button className="btn w-100 py-1" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Mentee Records</button>
          </div>
          <div className="col-12 col-md-6">
            <button className="btn w-100 py-1" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Minutes of Meeting</button>
          </div>
          <div className="col-12 col-md-6">
            <button className="btn w-100 py-1" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Schedule Meeting</button>
          </div>
        </div>
      </div>
      
      {/* Chat Section */}
      <div className="card p-5 shadow-sm" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="text-center">
          <h2 className="mb-3" style={{ fontWeight: "bold", color: "#a01212" }}>Chat Section</h2>
        </div>

        <div className="text-center">
          <hr style={{ border: "1.5px solid #7d0a0a", width: "100%", margin: "10px auto" }} />
        </div>

        <div className="row g-4 text-center">
          <div className="col-12 col-md-6">
            <button className="btn w-100 py-1" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Admin</button>
          </div>
          <div className="col-12 col-md-6">
            <button className="btn w-100 py-1" style={{ backgroundColor: "#a01212", color: "white", outline: "none", boxShadow: "none", fontSize: "1.6rem", fontWeight: "300", maxWidth: "100%" }}>Mentor Coordinator</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
