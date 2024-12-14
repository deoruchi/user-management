import axios from "axios";
import React, { useEffect, useState } from "react";

export const Update = ({ id, onHide }) => {
  const [currentUser, setCurrentUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });
  const [fname, handlefname] = useState("");
  const [lname, handleLname] = useState("");
  const [email, handleEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setCurrentUser(response.data.data);
        handlefname(response.data.data.first_name);
        handleLname(response.data.data.last_name);
        handleEmail(response.data.data.email);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://reqres.in/api/users/${id}`, {
        first_name: fname,
        last_name: lname,
        email: email,
      });
      console.log("Update Success:", res.data);
      alert("User updated successfully!");
      onHide(); // Hide Update component after success
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleDiscard = () => {
    onHide(); // Notify parent to hide Update component
  };

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname" className="font-semibold">
            First Name:
          </label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => handlefname(e.target.value)}
            className="bg-base-300 rounded-xl px-2"
          />
        </div>
        <div>
          <label htmlFor="lname" className="font-semibold">
            Last Name:
          </label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={(e) => handleLname(e.target.value)}
            className="bg-base-300 rounded-xl px-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
            className="bg-base-300 rounded-xl px-2"
          />
        </div>
        <div className="flex flex-row gap-2">
          <button type="submit" className="btn btn-primary btn-sm">
            Update
          </button>
          <button
            type="button"
            onClick={handleDiscard}
            className="btn btn-sm btn-neutral"
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};
