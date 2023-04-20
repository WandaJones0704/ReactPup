const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;
const COHORT = "2301-FTB-ET-WEB-AM";

export async function fetchDogs() {
  try {
    const response = await fetch(`${baseUrl}/players`);
    const result = await response.json();
    const dogList = result.data.players;

    return dogList;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchSingleDog(id) {
  try {
    const response = await fetch(`${baseUrl}/player/${id}`);
    const result = await response.json();
    const singleDog = result.data.player;
    return singleDog;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlayer(name, breed) {
  try {
    const response = await fetch(`${baseUrl}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePlayer(id) {
  try {
    const response = await fetch(`${baseUrl}/players/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
