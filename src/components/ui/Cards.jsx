import { useState } from "react";
import { Update } from "../Update";
import axios from "axios";

export const Cards = ({ avatar, fname, lname, email, id, onDelete }) => {
  const [command, setCommand] = useState(""); // State to track actions

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://reqres.in/api/users/${id}`);
      console.log(res, "deleted");
      alert(`Deleted ${fname} ${lname}`);
      onDelete(id);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // Function to reset the command (used in Update child)
  const resetCommand = () => setCommand("");

  return (
    <section className="w-full">
      <div className="card card-side bg-base-100 shadow-lg w-full items-center p-4 flex-wrap">
        <div className="avatar">
          <div className="w-26 rounded-xl">
            <img src={avatar} alt={`${fname} avatar`} />
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title">
            {fname} {lname}
          </h2>
          <p>
            <span className="text-neutral font-bold">Contact:</span> {email}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-active btn-neutral btn-sm"
              onClick={() => setCommand("edit")}
            >
              Edit
            </button>
            <button
              className="btn btn-active btn-secondary btn-sm"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>

        {/* Conditionally render Update component */}
        {command === "edit" && <Update id={id} onHide={resetCommand} />}
      </div>
    </section>
  );
};
