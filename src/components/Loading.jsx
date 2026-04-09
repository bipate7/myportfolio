import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="relative">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-2xl opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main spinner */}
        <motion.div 
          className="relative w-32 h-32"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-neutral-800 border-t-purple-500 border-r-indigo-500 rounded-full"></div>
          
          {/* Inner ring */}
          <motion.div 
            className="absolute inset-4 border-2 border-neutral-800 border-t-indigo-500 border-l-purple-500 rounded-full"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
        
        {/* Loading text */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-neutral-400 text-sm font-medium">Loading</p>
          <div className="flex gap-1 justify-center mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
