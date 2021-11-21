import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchEvent?search=${search}`)
      .then((res) => res.json())
      .then((result) => setEvents(result));
  };


  useEffect(() => {
    fetch('http://localhost:5000/allEvents')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])


  return (
    <div>
      <div className="text-center mt-5">
        <h1>I GROW BY HELPING PEOPLE IN NEED</h1>

        <div className="input-group mb-3 w-25 mx-auto">
          <input onChange={handleInput} id="search-field" type="text" className="form-control" placeholder="Search...."
            aria-label="Recipient's book" aria-describedby="button-addon2" />
          <button onClick={handleSearch} className="btn btn-info fs-5 text-light" type="button"
            id="button-search">search</button>
        </div>

      </div>
      <div className="events-container">
        <div className="row container mx-auto">
          {events?.map((pd) => (
            <div className="col-md-3">
              <div className="event border border">
                <div className="event-img">
                  <img className="w-100" src={pd?.img} alt="" />
                </div>
                <div
                  style={{ backgroundColor: pd?.EventColor }}
                  className="title-container p-2 "
                >
                  <h4>{pd?.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
