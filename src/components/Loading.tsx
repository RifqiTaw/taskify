"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to Task Minder";
  const description = "Organize your tasks efficiently.";

  useEffect(() => {
    let textIndex = 0;

    const typeText = () => {
      if (textIndex < fullText.length) {
        setTypedText(fullText.slice(0, textIndex + 1));
        textIndex++;
        setTimeout(typeText, 100);
      }
    };

    typeText();

    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 z-50">
        {/* Animasi Fade-in untuk Text Typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {typedText}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg text-gray-500 dark:text-gray-300"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
