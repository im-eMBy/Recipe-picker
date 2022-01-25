import { useSelector } from "react-redux";

import { PreQueryView } from "./views/PreQueryView";
import { PostQueryView } from "./views/PostQueryView";
import { Footer } from "./components/Footer";

import "./scss/index.scss";

const App = () => {
  const { currentPage, currentSubpage } = useSelector((state) => state.app);

  const getContent = () => {
    switch (currentPage) {
      case "preQuery":
        return <PreQueryView />
      case "postQuery":
        return <PostQueryView />
      default:
        return <>
          {/* <PreQueryView /> */}
        </>
    }
  }
  return <>
    {getContent()}
    <Footer />
  </>
}

export default App;
