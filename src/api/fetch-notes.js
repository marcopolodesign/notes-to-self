// const token =
//   "0a127b1f3817d13e2259a67a0d5b4d4d53d7a924f8bfe319e5cdf13205db88382bf6b017bf04acf7381eb232a49a9acd10f67aa187d4acd9c713a1ea780e5963c9331bdf68369c9a48f9f9b9b4fecd9569b05ec52e2b618d17b6a0366b860138ca8dd40c8f1ceaea5eb1669e072c750cf1b1ce13c42cccd4f54c2f9f7c41ff55";

// Prod token below
const token =
  "83ba35153bb4f1a37913d10f91e6c79c79cd3f3dc819dfd1e9f822147f68524bddf04dcbece34240f4ad567f050da7ce89710312881dceb1adcad60f14e394fe7d2c1e427844d50e6aa4d4611ac76ee310cd343b44f5a952e2fae9829bb34ea78645372e0126193c0b90f4364f476d859a5f57426f50832a4e561543f05f18e8";

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  // body: raw,
  redirect: "follow"
};

// const url = "http://localhost:1337";
const url = "https://notes-to-self-mp.herokuapp.com";

const userId = localStorage.getItem("userId");

const fetchNotes = async ({ setNotes }) => {
  try {
    const response = await fetch(
      `${url}/api/notes?filters[author][id][$eq]=${userId}&populate=*`,
      requestOptions
    );

    const notes = await response.json();
    // console.log(notes.data);
    setNotes(notes.data.reverse());
  } catch (errors) {
    console.log(errors);
  }
};

export default fetchNotes;
