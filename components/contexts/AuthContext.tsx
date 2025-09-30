// components/contexts/AuthContext.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  email: string;
};

type AuthState = {
  status: "loading" | "signed-in" | "signed-out";
  user: User | null;
  token: string | null;
};

type AuthContextType = {
  user: User | null;
  status: AuthState["status"];
  signIn: (data: { token: string; user: User }) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (data: { token: string; user: User }) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    status: "loading",
    user: null,
    token: null,
  });

  useEffect(() => {
    // Restore token on mount
    (async () => {
      try {
        const token = await AsyncStorage.getItem("@token");
        const userRaw = await AsyncStorage.getItem("@user");
        const user = userRaw ? JSON.parse(userRaw) : null;
        setState({ status: token ? "signed-in" : "signed-out", token, user });
      } catch (e) {
        console.log("🚀 ~ AuthProvider ~ e:", e);
        setState({ status: "signed-out", token: null, user: null });
      }
    })();
  }, []);

  const auth: AuthContextType = {
    user: state.user,
    status: state.status,
    signIn: async ({ token, user }) => {
      await AsyncStorage.setItem("@token", token);
      await AsyncStorage.setItem("@user", JSON.stringify(user || {}));
      setState({ status: "signed-in", token, user });
    },
    signOut: async () => {
      await AsyncStorage.removeItem("@token");
      await AsyncStorage.removeItem("@user");
      setState({ status: "signed-out", token: null, user: null });
    },
    signUp: async ({ token, user }) => {
      await AsyncStorage.setItem("@token", token);
      await AsyncStorage.setItem("@user", JSON.stringify(user || {}));
      setState({ status: "signed-in", token, user });
    },
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
