/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// Challenge 3 of 4:
// Extracting a list item component
// This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?

// data.js
const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

function Recipe({ name, ingredients }) {
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {/* We spread out object here  and return Component from map*/}
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}
