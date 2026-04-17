"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface DemoModalContextType {
  isOpen: boolean;
  isSuccess: boolean;
  source: string | null;
  openModal: (source?: string) => void;
  closeModal: () => void;
  setSuccess: (val: boolean) => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(
  undefined,
);

export const DemoModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [source, setSource] = useState<string | null>(null);

  const openModal = (modalSource?: string) => {
    if (modalSource) setSource(modalSource);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Reset after animation (delay)
    setTimeout(() => {
      setIsSuccess(false);
      setSource(null);
    }, 300);
  };

  const setSuccess = (val: boolean) => setIsSuccess(val);

  return (
    <DemoModalContext.Provider
      value={{ isOpen, isSuccess, source, openModal, closeModal, setSuccess }}
    >
      {children}
    </DemoModalContext.Provider>
  );
};

export const useDemoModal = () => {
  const context = useContext(DemoModalContext);
  if (context === undefined) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
};
