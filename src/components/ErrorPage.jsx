import { Link } from "react-router-dom";
import error from "../assets/images/error.jpg";
import Container from "./Shared/Container";

const ErrorPage = () => {
  return (
    <Container>
      <img src={error} alt="error" className="w-full rounded-xl" />
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="btn btn-outline btn-error flex justify-center my-10">
            Back To Home
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default ErrorPage;
