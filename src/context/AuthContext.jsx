import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);

    if (email === "test@jeffmart.com" && password === "123456") {
      const loggedUser = { id: 1, name: "Jeff Tester", email };
      setUser(loggedUser);
      setLoading(false);
      return { success: true, user: loggedUser };
    } else {
      setLoading(false);
      return { success: false, message: "Credenciales incorrectas" };
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);

    const newUser = { id: Date.now(), name, email };
    setUser(newUser);
    setLoading(false);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
