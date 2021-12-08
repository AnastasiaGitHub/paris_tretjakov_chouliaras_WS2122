//Import der benötigten Dependencies
import express from "express";
import fetch from "node-fetch";
//Import der Obst-/Gemüse- sorten aus dem Saisonkalender
import {SeasonalIngredientRepository} from "./seasonalIngredientRepository.js";

//Konstruktoren
const ingredientRepository = new SeasonalIngredientRepository();
const app = express();

//Test, ob Webservice läuft
app.get('/', (req, res) => {
    res.send("servus");
});
//Anfrage an API mit den Parametern Essgewohnheit(month) und Saisonalen Produkten(Ingredients) bsp. recipe?month=februar&diet=vegan
app.get('/api/recipe', async (req, res) => {
    const diet = req.query.diet;
    const month = req.query.month;
    const ingredients = ingredientRepository.getIngredientsByMonth(month);
    const recipeIdSet = new Set();
    await Promise.all(ingredients.map(async ingredient => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&includeIngredients=${ingredient}&number=2&apiKey=810e03f604834678b86d3b66e640feac`);
        const data = await response.json();
        const results = data.results;
        results.forEach(result => {
            recipeIdSet.add(result.id);
        });
    }));
    // Set an Rezeptids werden hanhand der Values ID in ein Array gesetzt
    const recipeIds = Array.from(recipeIdSet.values());
    // Array wird in String umgewandelt und in die Rezeptanfrage anhand der IDs eingefügt
    const response = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds.toString()}&apiKey=810e03f604834678b86d3b66e640feac`);
    const data = await response.json();
    res.send(data);
});

//webservice wird gestartet
app.listen(3000, () => {
    console.log('servus');
});
// TODO: Tabelle oder ähnlich für Ingredients (Repo). Für github git ignore node_modules

