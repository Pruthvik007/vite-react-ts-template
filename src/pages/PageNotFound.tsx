import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/Config";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white w-screen">
      <div className="text-center">
        <h1 className="text-4xl font-medium">404</h1>
        <p className="text-xl font-medium m-6">
          Sorry, The Page You're looking for Cannot Be Found.
        </p>
        <Link
          to={BASE_URL}
          className="bg-blue-500 hover:bg-blue-600 text-white hover:text-white py-2 px-4 rounded"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
