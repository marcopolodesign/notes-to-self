import React, { useState, useEffect } from "react";

const Example = ({ onSelectCategory }) => {
  const [cats, setCats] = useState([]);
  const [activeCatId, setActiveCatId] = useState(null);

  useEffect(() => {
    // const token =
    //   "0a127b1f3817d13e2259a67a0d5b4d4d53d7a924f8bfe319e5cdf13205db88382bf6b017bf04acf7381eb232a49a9acd10f67aa187d4acd9c713a1ea780e5963c9331bdf68369c9a48f9f9b9b4fecd9569b05ec52e2b618d17b6a0366b860138ca8dd40c8f1ceaea5eb1669e072c750cf1b1ce13c42cccd4f54c2f9f7c41ff55";

    // Prod Token Below
    const token =
      "83ba35153bb4f1a37913d10f91e6c79c79cd3f3dc819dfd1e9f822147f68524bddf04dcbece34240f4ad567f050da7ce89710312881dceb1adcad60f14e394fe7d2c1e427844d50e6aa4d4611ac76ee310cd343b44f5a952e2fae9829bb34ea78645372e0126193c0b90f4364f476d859a5f57426f50832a4e561543f05f18e8";

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    // const url = "http://localhost:1337";
    const url = "https://notes-to-self-mp.herokuapp.com";

    const fetchCats = async () => {
      try {
        const response = await fetch(
          `${url}/api/categories?populate=*`,
          requestOptions
        );
        const cats = await response.json();
        setCats(cats.data);
      } catch (errors) {
        console.log(errors);
      }
    };

    fetchCats();
  }, []);

  const handleSelectedCat = (catId) => {
    onSelectCategory(catId);
    console.log(catId);
    setActiveCatId(catId === activeCatId ? null : catId);
  };

  return cats.map((cat) => {
    const className =
      cat.id === activeCatId ? "active note-category ttc" : "note-category ttc";

    return (
      <div
        key={cat.id}
        id={cat.id}
        onClick={() => handleSelectedCat(cat.id)}
        className={`${className} mr3 ${cat.attributes.name}`}
      >
        <p>{cat.attributes.name}</p>
      </div>
    );
  });
};

export default Example;
