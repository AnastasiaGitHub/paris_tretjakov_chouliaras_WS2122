//Import der benötigten Dependencies
import express from "express";
import fetch from "node-fetch";
//Import der Obst-/Gemüse- sorten aus dem Saisonkalender und User
import {SeasonalIngredientRepository} from "./seasonalIngredientRepository.js";
import {user} from "./user.js";
import {hideKey}from "./hideKey.js";

//Konstruktoren
const ingredientRepository = new SeasonalIngredientRepository();
const userobj = new user();
const app = express();
const today = new Date();
const ourKey = hideKey;


const monthNames = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];
const todaymonth = monthNames[today.getMonth()];

//Test, ob Webservice läuft. Gibt String "Servus" zurück
app.get('/', (req, res) => {
    res.send("servus");
});



//Anfrage an API mit den Parametern Essgewohnheit(diet),Saisonalen Produkten(Ingredients), Portion(portion) und Zubereitungsaufwand(zubauf) bsp. recipe?diet=vegan
app.get('/api/recipe', async (req, res) => {
    const diet = req.query.diet;
    const servings = req.query.servings; //EINFÜGEN
    const duration = req.query.duration; //EINFÜGEN
    const ingredients = ingredientRepository.getIngredientsByMonth(todaymonth);
    const recipeIdSet = new Set();
    await Promise.all(ingredients.map(async ingredient => {
<<<<<<< HEAD
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?servings=${servings}&maxReadyTime=${duration}diet=${diet}&includeIngredients=${ingredients.toString()}&number=2&apiKey=ourKey`);
=======
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&includeIngredients=${ingredient}&servings=${servings}&duration=${duration}&number=2&apiKey=ourKey`);
>>>>>>> 3d496d7026df977ed4bd9d6d23a2239e5d34a136
        const data = await response.json();
        const results = data.results;
        results.forEach(result => {
            recipeIdSet.add(result.id);
        });
    }));

// Set an Rezeptids werden anhand der Values ID in ein Array gesetzt
    const recipeIds = Array.from(recipeIdSet.values());
    // Array wird in String umgewandelt und in die Rezeptanfrage anhand der IDs eingefügt
    const response = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds.toString()}&apiKey=ourKey`);
    const data = await response.json();
    res.send(data);
});

//Abfrage für user?pers=1111
app.get('/user',  (req, res) => {
    const pers = req.query.pers;
    const user = userobj.getuser(pers);
    res.send(user);
});

//Zutaten der Saison werden ausgegeben
app.get('/api/recipe/saison/location',  (req, res) => {
    const countr = req.query.countr;
    if (countr == 'Germany'){
        res.send(ingredientRepository.getIngredientsByMonth(todaymonth));
    }
    else{
        res.send("Other countries than Germany are not available")
    }

});

//Änderung der Essgewohnheit und Land

app.put('/user', function (req, res) {
    const pers = req.query.pers;
    const countr = req.query.countr;
    const gewohnheit = req.query.gewohnheit;
    userobj.a["essgew"]= gewohnheit;
    userobj.a["land"]= countr;



    res.send(userobj.a);
});




//webservice wird gestartet
const port = process.env.PORT || 3001


app.listen(port, (err) => {
    if (err) {
        console.log('Error: ', err)
    } else {
        console.log('Server is up on port: ', port)
    }
    console.log('servus');
})

// TODO: Tabelle oder ähnlich für Ingredients (Repo). Für github git ignore node_modules

