import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cards } from "../ui/Cards.jsx";

export const User = () => {
  const [user, setUser] = useState([]); // Correct naming for user state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [disableBack, setDisableBack] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  // Fetch user data based on the page number
  const handleUserFetch = async (page_no) => {
    try {
      const fetch_data = await axios.get(
        `https://reqres.in/api/users?page=${page_no}`
      );
      const user_data = fetch_data.data.data;

      setUser(user_data); // Set the fetched user data
      setTotalPages(fetch_data.data.total_pages);
      setCurrentPage(page_no);

      // Manage button states
      setDisableBack(page_no === 1);
      setDisableNext(page_no === fetch_data.data.total_pages);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Handle "Next" button click
  const handleNext = () => {
    if (currentPage < totalPages) {
      handleUserFetch(currentPage + 1);
    }
  };

  // Handle "Previous" button click
  const handleBack = () => {
    if (currentPage > 1) {
      handleUserFetch(currentPage - 1);
    }
  };

  // Handle user delete - removes a user locally
  const handleDeleteUser = (id) => {
    setUser((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  // Fetch user data on component mount
  useEffect(() => {
    handleUserFetch(1);
  }, []);

  return (
    <article className="m-2">
      <h1 className="text-2xl text-center font-semibold">Daily Users</h1>

      <section className="m-4 flex flex-wrap flex-row gap-2 overflow-y-scroll h-[70vh]">
        {user.length > 0 ? (
          user.map((items) => (
            <Cards
              key={items.id}
              avatar={items.avatar}
              fname={items.first_name}
              lname={items.last_name}
              email={items.email}
              id={items.id}
              onDelete={handleDeleteUser} // Pass delete callback to Cards
            />
          ))
        ) : (
          <>Loading...</>
        )}
      </section>

      <div className="join grid grid-cols-2 w-1/2 md:w-1/3 mx-auto mt-4">
        <button
          className="join-item btn btn-outline btn-sm"
          disabled={disableBack}
          onClick={handleBack}
        >
          Previous page
        </button>
        <button
          className="join-item btn btn-outline btn-sm"
          disabled={disableNext}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </article>
  );
};
