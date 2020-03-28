import { useState } from "react";

const useLogin = () => {
  const [authenticating] = useState(false);
  const [isAuthenticated] = useState(true);

  return { authenticating, isAuthenticated };
};

export default useLogin;
