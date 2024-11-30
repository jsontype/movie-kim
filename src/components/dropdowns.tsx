import React, { forwardRef, ReactNode } from "react";

//react-router-dom
import Link from "next/link";

interface CustomToggleProps {
  children?: ReactNode;
  variant?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CustomToggle = forwardRef(
  ({ children, variant, onClick }: CustomToggleProps, ref) => (
    <Link
      href="/"
      ref={ref as React.RefObject<HTMLAnchorElement>}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick(e);
        }
      }}
      className={variant}
      style={{ color: "unset" }}
    >
      {children}
    </Link>
  ),
);
export default CustomToggle;
