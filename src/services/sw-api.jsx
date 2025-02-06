
const SWAPI_BASE_URL = 'https://swapi.dev/api/';


export async function getAllStarships() {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}starships/`);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
}