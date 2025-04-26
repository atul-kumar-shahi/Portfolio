"use client";

import { Download } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

const ResumeViewer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenViewer = () => setIsOpen(true);
  const handleCloseViewer = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpenViewer}
        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:shadow-lg hover:-translate-y-1 transition"
      >
        <Download className="w-5 h-5" />
        View Resume
      </button>

      {/* Modal Viewer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-5xl bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-white text-lg font-semibold">Resume</h2>
              <div className="flex gap-3">
               
                <button onClick={handleCloseViewer} className="text-white hover:text-red-400 transition">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <iframe
              src="/resume.pdf"
              className="w-full h-[80vh]"
              title="Resume PDF"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeViewer;
