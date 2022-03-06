import { useSelector } from "react-redux";

import { WelcomeView } from "./components/Welcome";
import { IsVeganSelection } from "./components/IsVeganSelection/IsVeganSelection";
import { AllergiesSelection } from "./components/AllergiesSelection/AllergiesSelection";
import { DishTypeSelection } from "./components/DishTypeSelection";
import { CuisineType } from "./components/CuisineType";
import { IngredientsSelection } from "./components/IngredientsSelection";
import { RecipeSelect } from "./components/RecipeSelect";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";

import "./scss/index.scss";


const App = () => {
  const { currentPage, recipes } = useSelector((state) => state.app);

  const getContent = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomeView />
      case "is vegan":
        return <IsVeganSelection />
      case "allergies":
        return <AllergiesSelection />
      case "dish type":
        return <DishTypeSelection />
      case "cuisine":
        return <CuisineType />
      case "ingredients - meats":
        if (recipes === null) return <Loading />
        return <IngredientsSelection ingredientsTypes={["meats", "poultry", "seafood", "cured meats"]} />
      case "ingredients - vegetables":
        return <IngredientsSelection ingredientsTypes={["vegetables", "fruit"]} />
      case "ingredients - grains":
        return <IngredientsSelection ingredientsTypes={["grains", "bread, rolls and tortillas"]} />
      case "ingredients - dairy":
        return <IngredientsSelection ingredientsTypes={["dairy", "cheese"]} />
      case "recipe select":
        return <RecipeSelect />
      default:
        return <WelcomeView />
    }
  }
  return <>
    <main>
      {getContent()}
    </main>
    <Footer />
  </>
}

export default App;
