'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GitHubStatus {
  lastCommit?: string;
  isOnline: boolean;
  loading: boolean;
}

const LiveStatus = () => {
  const [status, setStatus] = useState<GitHubStatus>({
    isOnline: true,
    loading: true,
  });

  useEffect(() => {
    // Fetch live status from API
    fetch('/api/github-status')
      .then((res) => res.json())
      .then((data) => {
        setStatus({
          lastCommit: data.lastCommit,
          isOnline: true,
          loading: false,
        });
      })
      .catch(() => {
        setStatus({
          isOnline: false,
          loading: false,
        });
      });
  }, []);

  if (status.loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
        <span>Loading status...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 text-sm text-gray-300"
    >
      <div className="flex items-center gap-2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`w-2 h-2 rounded-full ${
            status.isOnline ? 'bg-green-400' : 'bg-red-400'
          }`}
        />
        <span className="font-medium">
          {status.isOnline ? 'Available for work' : 'Offline'}
        </span>
      </div>
      {status.lastCommit && (
        <div className="text-xs text-gray-500 border-l border-gray-700 pl-3">
          Last commit: {status.lastCommit}
        </div>
      )}
    </motion.div>
  );
};

export default LiveStatus;
