import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Input = React.forwardRef(({
    className,
    type = "text",
    label,
    description,
    error,
    required = false,
    id,
    ...props
}, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random()?.toString(36)?.substr(2, 9)}`;

    // Base input classes
    const baseInputClasses = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200";

    // Checkbox-specific styles
    if (type === "checkbox") {
        return (
            <motion.input
                type="checkbox"
                className={cn(
                    "h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
                    className
                )}
                ref={ref}
                id={inputId}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
                {...props}
            />
        );
    }

    // Radio button-specific styles
    if (type === "radio") {
        return (
            <motion.input
                type="radio"
                className={cn(
                    "h-4 w-4 rounded-full border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
                    className
                )}
                ref={ref}
                id={inputId}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
                {...props}
            />
        );
    }

    // For regular inputs with wrapper structure
    return (
        <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {label && (
                <motion.label
                    htmlFor={inputId}
                    className={cn(
                        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors duration-200",
                        error ? "text-destructive" : "text-foreground",
                        isFocused && !error && "text-primary"
                    )}
                    animate={{
                        scale: isFocused ? 1.02 : 1,
                        color: isFocused && !error ? "var(--color-primary)" : undefined
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {label}
                    {required && (
                        <motion.span
                            className="text-destructive ml-1"
                            animate={{ scale: error ? [1, 1.2, 1] : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            *
                        </motion.span>
                    )}
                </motion.label>
            )}

            <motion.div
                animate={{
                    boxShadow: isFocused
                        ? "0 0 0 3px rgba(var(--color-ring), 0.1)"
                        : "0 0 0 0px rgba(var(--color-ring), 0)",
                }}
                transition={{ duration: 0.2 }}
            >
                <motion.input
                    type={type}
                    className={cn(
                        baseInputClasses,
                        error && "border-destructive focus-visible:ring-destructive",
                        isFocused && !error && "border-primary",
                        className
                    )}
                    ref={ref}
                    id={inputId}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => {
                        setHasValue(e.target.value.length > 0);
                        props.onChange?.(e);
                    }}
                    animate={{
                        scale: isFocused ? 1.01 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    {...props}
                />
            </motion.div>

            {description && !error && (
                <motion.p
                    className="text-sm text-muted-foreground"
                    animate={{
                        opacity: hasValue ? 0.7 : 1,
                        y: hasValue ? -2 : 0
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {description}
                </motion.p>
            )}

            {error && (
                <motion.p
                    className="text-sm text-destructive"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    {error}
                </motion.p>
            )}
        </motion.div>
    );
});

Input.displayName = "Input";

export default Input;