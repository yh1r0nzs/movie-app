const apiKey = "minaAPI";
const url = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${apiKey}` },
};

const api = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/authentication",
      options,
    );
    const data = await response.json();
    console.log(data);
  } catch {
    console.log(Error, response.status);
  }
};
api();
