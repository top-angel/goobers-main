import { useEffect } from "react";
import useAuth from "./useAuth";
import { ConnectorNames } from "../utils/providers";

export const useEagerConnect = (): void => {
  const { login } = useAuth();

  useEffect(() => {
    const connectorName = localStorage.getItem("connector") as ConnectorNames;

    if (!connectorName) return;

    login(connectorName);
  }, [login]);
};
