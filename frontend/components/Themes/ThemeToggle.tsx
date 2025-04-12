"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Handle hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        // <Button
        //     variant="ghost"
        //     size="icon"
        //     onClick={toggleTheme}
        //     aria-label="Toggle theme"
        // >
        //     {theme === "light" ? (
        //         <SunIcon className="h-5 w-5" />
        //     ) : (
        //         <MoonIcon className="h-5 w-5" />
        //     )}
        //     <span className="sr-only">
        //         {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        //     </span>
        // </Button>
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="relative"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                    <motion.div
                        key="moon"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="h-5 w-5" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="h-5 w-5" />
                    </motion.div>
                )}
            </AnimatePresence>
        </Button>
    );
};

export default ThemeToggle;