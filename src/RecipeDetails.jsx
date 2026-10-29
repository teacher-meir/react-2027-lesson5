import { useEffect, useState } from 'react';
import axiosInstance from './axios-config';


export default function RecipeDetails({ id }) {
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        // פונקציה של יוזאפקט אסור לה להיות אסינכרונית
        // 1.
        // fetch(`https://dummyjson.com/recipes/${id}`)
        //     .then(res => res.json())
        //     .then(data => setRecipe(data))
        //     .catch(console.log);

        // 2.
        const goToServer = async () => {
            try {
                // fetch - vanilla js (בנויה בגאווה סקריפט)
                // const res = await fetch(`https://dummyjson.com/recipes/${id}`);
                // if (res.ok) // catch-לא זרק שגיאות שרת ל
                // const data = await res.json();

                // axios (fetch++) - catch-זורק שגיאות שרת ל
                // 400..., 500...
                const { data, status } = await axiosInstance.get(`/recipes/${id}`);
                setRecipe(data);
            } catch (error) {
                console.log(error);
            }
        };

        goToServer();

        return () => {
            // פונקציית ניקוי לאפקט
            // צריך לבטל את קריאת השרת

        }
    }, [id]);

    return (
        <div>
            <h1>{recipe?.name}</h1>
            <p>{recipe?.difficulty}</p>
            <img src={recipe?.image} alt="" />
        </div>
    )
}
