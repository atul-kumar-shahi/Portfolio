// components/Container.tsx
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Container = ({ 
  children, 
  className = "", 
  fullWidth = false 
}: ContainerProps) => {
  return (
    <div 
      className={`
        mx-auto 
        w-full 
        px-4 
        sm:px-6 
        lg:px-8 
        ${fullWidth ? "" : "max-w-7xl"} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;