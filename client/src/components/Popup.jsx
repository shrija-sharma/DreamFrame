import React, { useState, useEffect } from "react";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Show popup after 1 second
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
          <div className="bg-[#E6E6FA] text-gray-800 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md mx-auto text-center animate-fadeIn">
            <h2 className="text-2xl font-bold mb-3 text-purple-700">
              🎉 Welcome!
            </h2>
            <p className="text-base leading-relaxed">
              You’ve received{" "}
              <span className="font-semibold">5 free credits</span> to generate
              stunning images! <br />
              After using them, please subscribe to generate more images.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
