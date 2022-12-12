import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    (async () => {
      if (token) {
        try {
          setGlobalLoading(true);
          const response = await api.get(`/profile`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);

          localStorage.setItem("@USERID", response.data.id);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
      setGlobalLoading(false);
    })();
  }, []);

  const postLogin = async (data) => {
    setLoading(true);

    try {
      setGlobalLoading(true);
      const response = await api.post("/sessions", data);
      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
      setGlobalLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, loading, postLogin, globalLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
