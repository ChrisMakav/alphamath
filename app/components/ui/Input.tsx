import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, icon, className = "", id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium"
            style={{ color: "var(--am-text-secondary)" }}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--am-text-muted)" }}
            >
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className="w-full h-11 rounded-[var(--am-radius-lg)] text-sm outline-none transition-all"
            style={{
              background: "var(--am-bg-raised)",
              border: `1px solid ${error ? "#f87171" : "var(--am-border)"}`,
              color: "var(--am-text)",
              fontFamily: "var(--am-font-sans)",
              paddingLeft: icon ? "2.5rem" : "0.875rem",
              paddingRight: "0.875rem",
              boxShadow: error ? "0 0 0 3px rgba(248,113,113,0.15)" : "none",
            }}
            onFocus={(e) => {
              if (!error) {
                e.target.style.borderColor = "var(--am-green-dim)";
                e.target.style.boxShadow = "var(--am-green-glow-sm)";
              }
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              if (!error) {
                e.target.style.borderColor = "var(--am-border)";
                e.target.style.boxShadow = "none";
              }
              props.onBlur?.(e);
            }}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs" style={{ color: "#f87171" }}>
            {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-xs" style={{ color: "var(--am-text-muted)" }}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
