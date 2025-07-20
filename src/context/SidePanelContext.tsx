import React from "react";

export type SidePanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SidePanelContext = React.createContext<SidePanelProps | undefined>(
  undefined
);

export const SidePanelProvider: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <SidePanelContext.Provider value={{ isOpen, onClose }}>
      {children}
    </SidePanelContext.Provider>
  );
};

export const useSidePanel = () => {
  const context = React.useContext(SidePanelContext);
  if (!context) {
    throw new Error("useSidePanel must be used within a SidePanelProvider");
  }
  return context;
};
