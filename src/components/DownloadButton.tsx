"use client";

import React, { useState } from "react";
import { Download, Check } from "lucide-react";

const useDownloadHandler = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    try {
      // Open PDF in new window/tab, which will trigger browser's native PDF viewer
      // and allow saving to custom location
      window.open("/Resume/Resume.pdf", "_blank");

      setTimeout(() => setIsDownloading(false), 2000);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
    }
  };

  return { isDownloading, handleDownload };
};

const DownloadButton = () => {
  const { isDownloading, handleDownload } = useDownloadHandler();

  return (
    <div>
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 
                  text-white rounded-lg font-medium transition-all hover:scale-105 relative overflow-hidden"
        type="button"
      >
        {isDownloading ? (
          <>
            <Check className="w-4 h-4" />
            <span>Opened!</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            <span>View Resume</span>
          </>
        )}
      </button>
    </div>
  );
};

export default DownloadButton;
