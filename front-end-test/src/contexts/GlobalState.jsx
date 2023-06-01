import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const data = {
    openRemoveModal,
    setOpenRemoveModal,
    openEditModal,
    setOpenEditModal,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
