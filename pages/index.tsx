import type { NextPage } from "next";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const Home: NextPage = () => {
  return (
    <div>
      <button onClick={() => toast.success("Hello toast!")}>Toast Me</button>
    </div>
  );
};

export default Home;
