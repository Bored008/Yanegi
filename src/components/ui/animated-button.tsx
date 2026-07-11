import React, { ReactNode } from "react";
import Link from "next/link";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "black" | "white";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function AnimatedButton({
  href,
  variant = "white",
  className = "",
  children,
  onClick,
  ...props
}: AnimatedButtonProps) {
  const isBlack = variant === "black";

  // The base setup required for the animation to work properly
  const baseWrapperClasses = "relative z-0 group overflow-hidden";
  
  // Text color transition for black variant
  const textTransitionClasses = isBlack ? "transition-colors duration-300 hover:text-black" : "";

  // The animated background sweep
  const swipeClasses = `absolute inset-0 z-[-1] origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
    isBlack ? "bg-white" : "bg-neutral-200"
  }`;

  // Combine everything, prioritizing specific classes passed via className
  const finalClasses = `${baseWrapperClasses} ${textTransitionClasses} ${className}`;

  const content = (
    <>
      <span className={swipeClasses} />
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={finalClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={finalClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
