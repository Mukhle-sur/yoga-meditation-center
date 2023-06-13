import { Navigate, useLocation } from "react-router";
import useAuth from "../components/hooks/useAuth/useAuth";
import useInstructor from "../components/hooks/useInstructor/useInstructor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor  ,isAdminLoading] = useInstructor();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;