import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * WinWindow — Reusable Windows-style window wrapper.
 * XP mode: gradient blue title bar
 * Win7 Aero mode: glass translucent title bar
 * Uses IntersectionObserver for smooth scroll-reveal animations.
 */
const WinWindow = ({
  id,
  title,
  icon,
  children,
  isActive,
  onFocus,
  zIndex = 10,
  className = "",
  revealDelay = 0,
}) => {
  const revealRef = useScrollReveal({ threshold: 0.06 });

  return (
    <div
      ref={revealRef}
      className={`win-window win-scroll-reveal ${className}`}
      style={{ zIndex, transitionDelay: `${revealDelay}ms` }}
      onMouseDown={() => onFocus?.(id)}
      id={id}
    >
      {/* Title Bar */}
      <div className="win-titlebar">
        <div className="win-titlebar-left">
          {icon && (
            <span className="win-titlebar-icon">
              {React.isValidElement(icon)
                ? icon
                : typeof icon === "function"
                ? React.createElement(icon, { size: 14 })
                : icon}
            </span>
          )}
          <span className="win-titlebar-text">{title}</span>
        </div>
      </div>

      {/* Window Body */}
      <div className="win-body">
        {children}
      </div>
    </div>
  );
};

export default WinWindow;
