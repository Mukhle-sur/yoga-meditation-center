import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";

const useAddClass = () => {
  const { user } = useAuth();
  const { refetch, data: addClasses = [] } = useQuery({
    queryKey: ["addClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/studentAddClasses?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [addClasses,refetch]
};

export default useAddClass;
