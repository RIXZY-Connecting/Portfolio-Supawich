import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * WinWindow — Reusable Windows-style window wrapper.
 * XP mode: gradient blue title bar
 * Win7 Aero mode: glass translucent title bar
 */
const WinWindow = ({
  id,
  title,
  icon,
  children,
  isActive,
  isMinimized,
  onFocus,
  onMinimize,
  onClose,
  zIndex = 10,
  className = "",
}) => {
  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          className={`win-window ${className}`}
          style={{ zIndex }}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onMouseDown={() => onFocus?.(id)}
          id={id}
        >
          {/* Title Bar */}
          <div className="win-titlebar">
            <div className="win-titlebar-left">
              <span className="win-titlebar-icon">{icon}</span>
              <span className="win-titlebar-text">{title}</span>
            </div>
          </div>

          {/* Window Body */}
          <div className="win-body">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WinWindow;
