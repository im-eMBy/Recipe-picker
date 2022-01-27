import { useSelector } from "react-redux";

import { WelcomeView } from "./views/Welcome";
import { PreQueryView } from "./views/PreQueryView";
import { PostQueryView } from "./views/PostQueryView";
import { Footer } from "./components/Footer";

import "./scss/index.scss";

const App = () => {
  const { currentPage } = useSelector((state) => state.app);

  const getContent = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomeView />
      case "preQuery":
        return <PreQueryView />
      case "postQuery":
        return <PostQueryView />
      default:
        return <WelcomeView />
    }
  }
  return <>
    {getContent()}
    <Footer />
  </>
}

export default App;
