import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";

export const ButtonVariants = cva("transition-all", {
  variants: {
    variant: {
      primary: "bg-indigo-500 text-white font-medium",
      secondary: "bg-blue-100 text-indigo-600 font-medium",
    },
    size: {
      sm: "text-sm px-3 py-1",
      md: "text-md px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size,
      text,
      startIcon,
      endIcon,
      onClick,
      className = "",
      loading,
      children,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={onClick ? "button" : "submit"}
        className={cn(
          "flex items-center justify-center !cursor-pointer gap-2 rounded-md border",
          ButtonVariants({ variant, size }),
          loading &&
            "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400 outline-none",
          className
        )}
        disabled={loading}
        {...props}
        onClick={onClick}
      >
        {loading ? (
          <>
            <Loader2Icon className="animate-spin h-4 w-4" />
            {text && <div className={cn("min-w-0 truncate")}>{text}</div>}
            {children}
            {endIcon && endIcon}
          </>
        ) : (
          <>
            {startIcon && startIcon}
            {text && <div className={cn("min-w-0 truncate")}>{text}</div>}
            {children}
            {endIcon && endIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
