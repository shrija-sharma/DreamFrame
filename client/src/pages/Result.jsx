// Copyright 2025 PREM
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// import React, { useContext, useState } from "react";
// import { assets } from "../assets/assets";
// import { motion } from "framer-motion";
// import { AppContext } from "../context/AppContext";

// const Result = () => {
//   const [image, setImage] = useState(assets.Cat);
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [input, setInput] = useState("");

//   const { generateImage } = useContext(AppContext);
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (input) {
//       const image = await generateImage(input);
//       if (image) {
//         setIsImageLoaded(true);
//         setImage(image);
//       }
//     }
//     setLoading(false);
//   };
//   return (
//     <motion.form
//       initial={{ opacity: 0.2, y: 100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       onSubmit={onSubmitHandler}
//       className="flex flex-col min-h-[90vh] justify-center items-center"
//     >
//       <div>
//         <div className="relative">
//           <img src={image} alt="" className="max-w-sm rounded-lg" />
//           <span
//             className={`absolute bottom-0 left-0 h-1 bg-red-500 ${
//               loading ? "w-full transition-all duration-[10s]" : "w-0"
//             }`}
//           />
//         </div>
//         <p className={!loading ? "hidden" : ""}>Generating.....</p>
//       </div>
//       {!isImageLoaded && (
//         <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
//           <input
//             onChange={(e) => setInput(e.target.value)}
//             value={input}
//             type="text"
//             placeholder="Describe your idea, and our AI will generate it!"
//             className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder:color"
//           />
//           <button
//             type="submit"
//             className="bg-pink-700 px-10 sm:px-16 py-3 rounded-full"
//           >
//             Generate
//           </button>
//         </div>
//       )}
//       {isImageLoaded && (
//         <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
//           <p
//             onClick={() => {
//               setIsImageLoaded(false);
//             }}
//             className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
//           >
//             Generate Another
//           </p>
//           <a
//             href={image}
//             download
//             className="bg-yellow-900 px-10 py-3 rounded-full cursor-pointer"
//           >
//             Download
//           </a>
//         </div>
//       )}
//     </motion.form>
//   );
// };

// export default Result;

// Copyright 2025 PREM
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// import React, { useContext, useRef, useState } from "react";
// import { assets } from "../assets/assets";
// import { motion } from "framer-motion";
// import { AppContext } from "../context/AppContext";

// const Result = () => {
//   const [image, setImage] = useState(assets.Cat);
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [input, setInput] = useState("");

//   const canvasRef = useRef(null);
//   const { generateImage } = useContext(AppContext);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (input) {
//       const generatedImage = await generateImage(input);
//       if (generatedImage) {
//         setIsImageLoaded(true);
//         setImage(generatedImage);
//       }
//     }
//     setLoading(false);
//   };

//   // Convert image to desired format and trigger download
//   const downloadImage = async (format) => {
//     const img = new Image();
//     img.crossOrigin = "anonymous"; // to avoid CORS issues
//     img.src = image;

//     img.onload = () => {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);

//       // Determine MIME type based on format
//       let mimeType = "image/png";
//       if (format === "jpeg") mimeType = "image/jpeg";
//       else if (format === "heif") mimeType = "image/heif"; // Note: browser support may vary

//       const link = document.createElement("a");
//       link.download = `generated_image.${format}`;
//       link.href = canvas.toDataURL(mimeType);
//       link.click();
//     };
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0.2, y: 100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       onSubmit={onSubmitHandler}
//       className="flex flex-col min-h-[90vh] justify-center items-center"
//     >
//       <canvas ref={canvasRef} className="hidden" />

//       <div>
//         <div className="relative">
//           <img src={image} alt="Generated" className="max-w-sm rounded-lg" />
//           <span
//             className={`absolute bottom-0 left-0 h-1 bg-red-500 ${
//               loading ? "w-full transition-all duration-[10s]" : "w-0"
//             }`}
//           />
//         </div>
//         <p className={!loading ? "hidden" : ""}>Generating.....</p>
//       </div>

//       {!isImageLoaded && (
//         <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
//           <input
//             onChange={(e) => setInput(e.target.value)}
//             value={input}
//             type="text"
//             placeholder="Describe your idea, and our AI will generate it!"
//             className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder:color"
//           />
//           <button
//             type="submit"
//             className="bg-pink-700 px-10 sm:px-16 py-3 rounded-full"
//           >
//             Generate
//           </button>
//         </div>
//       )}

//       {isImageLoaded && (
//         <div className="flex flex-wrap justify-center gap-3 mt-10">
//           <p
//             onClick={() => setIsImageLoaded(false)}
//             className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
//           >
//             Generate Another
//           </p>

//           {/* Download Buttons */}
//           <button
//             onClick={() => downloadImage("png")}
//             type="button"
//             className="bg-yellow-900 text-white px-8 py-3 rounded-full cursor-pointer"
//           >
//             Download PNG
//           </button>
//           <button
//             onClick={() => downloadImage("jpeg")}
//             type="button"
//             className="bg-yellow-900 text-white px-8 py-3 rounded-full cursor-pointer"
//           >
//             Download JPEG
//           </button>
//           <button
//             onClick={() => downloadImage("heif")}
//             type="button"
//             className="bg-yellow-900 text-white px-8 py-3 rounded-full cursor-pointer"
//           >
//             Download HEIF
//           </button>
//         </div>
//       )}
//     </motion.form>
//   );
// };

// export default Result;

// Copyright 2025 PREM
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useContext, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.Cat);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("png");

  const canvasRef = useRef(null);
  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const generatedImage = await generateImage(input);
      if (generatedImage) {
        setIsImageLoaded(true);
        setImage(generatedImage);
      }
    }
    setLoading(false);
  };

  // Convert image to desired format and trigger download
  const downloadImage = async () => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Prevent CORS issues
    img.src = image;

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      let mimeType = "image/png";
      if (selectedFormat === "jpeg") mimeType = "image/jpeg";
      else if (selectedFormat === "heif") mimeType = "image/heif"; // Limited browser support

      const link = document.createElement("a");
      link.download = `generated_image.${selectedFormat}`;
      link.href = canvas.toDataURL(mimeType);
      link.click();
    };
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <canvas ref={canvasRef} className="hidden" />

      <div>
        <div className="relative">
          <img src={image} alt="Generated" className="max-w-sm rounded-lg" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-red-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={!loading ? "hidden" : ""}>Generating.....</p>
      </div>

      {/* Input Section */}
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe your idea, and our AI will generate it!"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder:color"
          />
          <button
            type="submit"
            className="bg-pink-700 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {/* Result Actions */}
      {isImageLoaded && (
        <>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <p
              onClick={() => setIsImageLoaded(false)}
              className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            >
              Generate Another
            </p>

            <button
              onClick={downloadImage}
              type="button"
              className="bg-green-900 text-white px-10 py-3 rounded-full cursor-pointer"
            >
              Download
            </button>
          </div>

          {/* Format Selector Below */}
          <div className="flex flex-col items-center mt-6 text-center">
            <p className="text-black text-sm font-medium mb-2">
              Download as:
            </p>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="bg-neutral-700 text-white px-4 py-2 rounded-full cursor-pointer text-sm focus:outline-none"
            >
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="heif">HEIF</option>
            </select>
          </div>
        </>
      )}
    </motion.form>
  );
};

export default Result;


