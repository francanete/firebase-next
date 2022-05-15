import type { NextPage } from "next";
import Loader from "../components/Loader";

const Home: NextPage = () => {
  return (
    <div>
      <Loader show />
    </div>
  );
};

export default Home;
