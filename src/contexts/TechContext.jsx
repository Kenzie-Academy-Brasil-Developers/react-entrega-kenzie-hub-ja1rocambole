import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const { setUser } = useContext(UserContext);

  const [modalVisible, setModalVisible] = useState(false);

  const postCreateUser = async (data) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const userResponse = await api.get(`/profile`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setUser(userResponse.data);

      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    } finally {
      setModalVisible(false);
    }
  };

  return (
    <TechContext.Provider
      value={{ postCreateUser, modalVisible, setModalVisible }}
    >
      {children}
    </TechContext.Provider>
  );
};
