import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useClasses = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], isLoading: isAdminLoading } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classesCollection`);
      console.log("isAdmin response", res);
      return res.data.classes;
    },
  });
  return [classes, isAdminLoading];
};

export default useClasses;
