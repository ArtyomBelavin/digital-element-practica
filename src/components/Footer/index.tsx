import React from "react";

interface FooterProps {
  children: React.ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return <footer className="footer">{children}</footer>;
};
