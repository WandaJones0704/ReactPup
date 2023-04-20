import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleDog } from "../api";

export default function SingleDog() {
  const { id } = useParams();

  const [dog, setDog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDog() {
      const dogFromApi = await fetchSingleDog(id);
      console.log("dog" + dogFromApi);
      setDog(dogFromApi);
    }
    getDog();
  }, []);

  return (
    <div>
      {dog && (
        <ul>
          <li>Name: {dog.name}</li>
          <li>Breed: {dog.breed}</li>
        </ul>
      )}
    </div>
  );
}
