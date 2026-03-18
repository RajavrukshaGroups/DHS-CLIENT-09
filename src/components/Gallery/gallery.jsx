// import React, { useState } from "react";
// import "../Gallery/gallery.css";
// import Video from "../../videos/galleryjcb.mp4";
// import One from "../Project_Images/two.jpg";
// import Two from "../Project_Images/three.jpg";
// import Three from "../Project_Images/four.jpg";
// import Four from "../Project_Images/five.jpg";
// import Five from "../Project_Images/DSC04739.jpg";
// import Six from "../Project_Images/six.jpg";
// import Seven from "../Project_Images/seven.JPG";
// import Eight from "../Project_Images/eight.JPG";
// import Nine from "../Project_Images/nine.JPG";
// import thirteen from "../Project_Images/thirteen.JPG";
// import ten from '../Project_Images/ten.JPG';
// import twelve from "../Project_Images/twelve.JPG";
// import RecentImgfirst from "../../images/galleryImages/first_image.jpg"
// import RecentImgSecond from "../../images/galleryImages/second_image.jpg"
// import RecentImgThird from "../../images/galleryImages/thirdImage.jpg"
// import RecentImgFourth from "../../images/galleryImages/forthImage.jpg"
// import RecentImgFifth from "../../images/galleryImages/fifthImage.jpg"
// import RecentImgSixth from "../../images/galleryImages/imageSix.jpg"

// import gallery6 from "../../images/galleryImages/gallery6.jpeg";
// import gallery7 from "../../images/galleryImages/gallery7.jpeg";
// import gallery8 from "../../images/galleryImages/gallery8.jpeg";
// import gallery9 from "../../images/galleryImages/gallery9.jpeg";
// import gallery10 from "../../images/galleryImages/gallery10.jpeg";
// import gallery11 from "../../images/galleryImages/gallery11.jpeg";
// import gallery12 from "../../images/galleryImages/gallery12.jpeg";
// import gallery13 from "../../images/galleryImages/gallery13.jpeg";
// import gallery14 from "../../images/galleryImages/gallery14.jpeg";
// import gallery15 from "../../images/galleryImages/gallery15.jpeg";
// import gallery16 from "../../images/galleryImages/gallery16.jpeg";
// import gallery17 from "../../images/galleryImages/gallery17.jpeg";
// import gallery18 from "../../images/galleryImages/gallery18.jpeg";
// import gallery19 from "../../images/galleryImages/gallery19.jpeg";
// import gallery20 from "../../images/galleryImages/gallery20.jpeg";
// import gallery21 from "../../images/galleryImages/gallery21.jpeg";
// import gallery22 from "../../images/galleryImages/gallery22.jpeg";
// import gallery23 from "../../images/galleryImages/gallery23.jpeg";
// import gallery24 from "../../images/galleryImages/gallery24.jpeg";
// import gallery25 from "../../images/galleryImages/gallery25.jpeg";
// import gallery26 from "../../images/galleryImages/gallery26.jpeg";
// import gallery27 from "../../images/galleryImages/gallery27.jpeg";
// import gallery28 from "../../images/galleryImages/gallery28.jpeg";
// import gallery29 from "../../images/galleryImages/gallery29.jpeg";
// import gallery30 from "../../images/galleryImages/gallery30.jpeg";
// import gallery31 from "../../images/galleryImages/gallery31.jpeg";
// import gallery32 from "../../images/galleryImages/gallery32.jpeg";
// import gallery33 from "../../images/galleryImages/gallery33.jpeg";


// function Gallery() {
//   const allImages = [gallery6,gallery7,gallery8,gallery9,gallery10,gallery11,gallery12,gallery13,gallery14,gallery15,gallery16,gallery17,gallery18,gallery19,gallery20,gallery21,gallery22,gallery23,gallery24,gallery25,gallery26,gallery27,gallery28,gallery29,gallery30,gallery31,gallery32,gallery33,RecentImgfirst,RecentImgSecond,RecentImgThird,RecentImgFourth,RecentImgFifth,RecentImgSixth,One, Five, Three, Six, Two, thirteen, Seven, ten, twelve,];
//   const [visibleImages, setVisibleImages] = useState(6);

//   const loadMore = () => {
//     if (visibleImages === 6) {
//       setVisibleImages(allImages.length); // Show all images
//     } else {
//       setVisibleImages(6);
//     }
//   };

//   return (
//     <div>
//       <section className="video-section">
//         <div className="auto-container">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="sec-title">
//                 <p className="sec-titles">
//                   Join us at Defence Habitat, where your vision for the perfect
//                   property is our mission. Let us help you navigate the real
//                   estate market with confidence and ease.
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="video-box">
//                 <video
//                   controls
//                   autoPlay
//                   muted
//                   playsInline
//                   loop
//                   className="mostvideo"
//                 >
//                   <source src={Video} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="containers">
//         {allImages.slice(0, visibleImages).map((image, index) => (
//           <div className="img-container" key={index}>
//             <img src={image} alt={`img-${index + 1}`} />
//           </div>
//         ))}
//       </div>

//       <button className="loadMore-btn" onClick={loadMore}>
//   {visibleImages === 6 ? "Load More" : "Show Less"}
//   <span>
//     {visibleImages === 6 ? (
//       <p>
//         <i className="arrow down"></i>
//       </p>
//     ) : (
//       <p>
//         <i className="arrow up"></i>
//       </p>
//     )}
//   </span>
// </button>
//     </div>
//   );
// }

// export default Gallery;


// import React, { useState } from "react";
// import "../Gallery/gallery.css";
// import Video from "../../videos/galleryjcb.mp4";
// import One from "../Project_Images/two.jpg";
// import Two from "../Project_Images/three.jpg";
// import Three from "../Project_Images/four.jpg";
// import Four from "../Project_Images/five.jpg";
// import Five from "../Project_Images/DSC04739.jpg";
// import Six from "../Project_Images/six.jpg";
// import Seven from "../Project_Images/seven.JPG";
// import Eight from "../Project_Images/eight.JPG";
// import Nine from "../Project_Images/nine.JPG";
// import thirteen from "../Project_Images/thirteen.JPG";
// import ten from '../Project_Images/ten.JPG';
// import twelve from "../Project_Images/twelve.JPG";
// import RecentImgfirst from "../../images/galleryImages/first_image.jpg"
// import RecentImgSecond from "../../images/galleryImages/second_image.jpg"
// import RecentImgThird from "../../images/galleryImages/thirdImage.jpg"
// import RecentImgFourth from "../../images/galleryImages/forthImage.jpg"
// import RecentImgFifth from "../../images/galleryImages/fifthImage.jpg"
// import RecentImgSixth from "../../images/galleryImages/imageSix.jpg"

// import gallery6 from "../../images/galleryImages/gallery6.jpeg";
// import gallery7 from "../../images/galleryImages/gallery7.jpeg";
// import gallery8 from "../../images/galleryImages/gallery8.jpeg";
// import gallery9 from "../../images/galleryImages/gallery9.jpeg";
// import gallery10 from "../../images/galleryImages/gallery10.jpeg";
// import gallery11 from "../../images/galleryImages/gallery11.jpeg";
// import gallery12 from "../../images/galleryImages/gallery12.jpeg";
// import gallery13 from "../../images/galleryImages/gallery13.jpeg";
// import gallery14 from "../../images/galleryImages/gallery14.jpeg";
// import gallery15 from "../../images/galleryImages/gallery15.jpeg";
// import gallery16 from "../../images/galleryImages/gallery16.jpeg";
// import gallery17 from "../../images/galleryImages/gallery17.jpeg";
// import gallery18 from "../../images/galleryImages/gallery18.jpeg";
// import gallery19 from "../../images/galleryImages/gallery19.jpeg";
// import gallery20 from "../../images/galleryImages/gallery20.jpeg";
// import gallery21 from "../../images/galleryImages/gallery21.jpeg";
// import gallery22 from "../../images/galleryImages/gallery22.jpeg";
// import gallery23 from "../../images/galleryImages/gallery23.jpeg";
// import gallery24 from "../../images/galleryImages/gallery24.jpeg";
// import gallery25 from "../../images/galleryImages/gallery25.jpeg";
// import gallery26 from "../../images/galleryImages/gallery26.jpeg";
// import gallery27 from "../../images/galleryImages/gallery27.jpeg";
// import gallery28 from "../../images/galleryImages/gallery28.jpeg";
// import gallery29 from "../../images/galleryImages/gallery29.jpeg";
// import gallery30 from "../../images/galleryImages/gallery30.jpeg";
// import gallery31 from "../../images/galleryImages/gallery31.jpeg";
// import gallery32 from "../../images/galleryImages/gallery32.jpeg";
// import gallery33 from "../../images/galleryImages/gallery33.jpeg";

// function Gallery() {

//   /* --- CATEGORY IMAGES --- */

//   const plotAllotmentImages = [
   
//     gallery7,
//     gallery9,
    
//     gallery11,
//     gallery12,
//     gallery13,
//     gallery14,
//     gallery15,
//     gallery16,
//     gallery10,
//     gallery6,
//     gallery8,

//   ];

//   const constructionImages = [
//     gallery17,
//     gallery18,
//     gallery19,
//     gallery20,
//     gallery21,
//     gallery22,
//     gallery23,
//     gallery24,
//     gallery25,
//     gallery26,
//     gallery27,
//     gallery28,
//     gallery29,
//     gallery30,
//     gallery31,
//     gallery32,
//     gallery33,
//     RecentImgfirst,
//     RecentImgSecond,
//     RecentImgThird,
//     // RecentImgFourth,
//     RecentImgFifth,
//     RecentImgSixth,
//     One,
//     Two,
//     Three,
//     Four,
//     Five,
//     Six,
//     Seven,
//     Eight,
//     Nine,
//     ten,
//     twelve,
//     thirteen
//   ];

//   /* --- STATES --- */

//   const [activeCategory, setActiveCategory] = useState("plots");
//   const [visibleImages, setVisibleImages] = useState(6);

//   const handleCategory = (category) => {
//     setActiveCategory(category);
//     setVisibleImages(6);

//     const section = document.getElementById(category);
//     section?.scrollIntoView({ behavior: "smooth" });
//   };

//   const currentImages =
//     activeCategory === "plots"
//       ? plotAllotmentImages
//       : constructionImages;

//   const loadMore = () => {
//     if (visibleImages === 6) {
//       setVisibleImages(currentImages.length);
//     } else {
//       setVisibleImages(6);
//     }
//   };

//   return (
//     <div>

//       {/* VIDEO SECTION */}

//       <section className="video-section">
//         <div className="auto-container">
//           <div className="row">

//             <div className="col-md-6">
//               <p className="sec-titles">
//                 Join us at Defence Habitat, where your vision for the perfect
//                 property becomes reality.
//               </p>
//             </div>

//             <div className="col-md-6">
//               <video controls autoPlay muted loop className="mostvideo">
//                 <source src={Video} type="video/mp4" />
//               </video>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* CATEGORY BUTTONS */}

//       <div className="gallery-tabs">

//         <button
//           className={activeCategory === "plots" ? "active-tab" : ""}
//           onClick={() => handleCategory("plots")}
//         >
//           Plot Allotment
//         </button>

//         <button
//           className={activeCategory === "construction" ? "active-tab" : ""}
//           onClick={() => handleCategory("construction")}
//         >
//           Construction Progress
//         </button>

//       </div>


//       {/* PLOT ALLOTMENT SECTION */}

//       {activeCategory === "plots" && (
//         <section id="plots" className="gallery-section">

//           <h2 className="gallery-title">Plot Allotment</h2>

//           <div className="containers">

//             {plotAllotmentImages.slice(0, visibleImages).map((img, index) => (
//               <div className="img-container" key={index}>
//                 <img src={img} alt={`plot-${index}`} />
//               </div>
//             ))}

//           </div>

//         </section>
//       )}


//       {/* CONSTRUCTION SECTION */}

//       {activeCategory === "construction" && (
//         <section id="construction" className="gallery-section">

//           <h2 className="gallery-title">Construction Progress</h2>

//           <div className="containers">

//             {constructionImages.slice(0, visibleImages).map((img, index) => (
//               <div className="img-container" key={index}>
//                 <img src={img} alt={`construction-${index}`} />
//               </div>
//             ))}

//           </div>

//         </section>
//       )}


//       {/* LOAD MORE */}

//       <div className="load-btn-container">
//         <button className="loadMore-btn" onClick={loadMore}>
//           {visibleImages === 6 ? "Load More" : "Show Less"}
//         </button>
//       </div>

//     </div>
//   );
// }

// export default Gallery;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// import React, { useState, useMemo, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp, Play, Image as ImageIcon, HardHat } from "lucide-react";
// import Video from "../../videos/galleryjcb.mp4";
// import One from "../Project_Images/two.jpg";
// import Two from "../Project_Images/three.jpg";
// import Three from "../Project_Images/four.jpg";
// import Four from "../Project_Images/five.jpg";
// import Five from "../Project_Images/DSC04739.jpg";
// import Six from "../Project_Images/six.jpg";
// import Seven from "../Project_Images/seven.JPG";
// import Eight from "../Project_Images/eight.JPG";
// import Nine from "../Project_Images/nine.JPG";
// import thirteen from "../Project_Images/thirteen.JPG";
// import ten from '../Project_Images/ten.JPG';
// import twelve from "../Project_Images/twelve.JPG";
// import RecentImgfirst from "../../images/galleryImages/first_image.jpg"
// import RecentImgSecond from "../../images/galleryImages/second_image.jpg"
// import RecentImgThird from "../../images/galleryImages/thirdImage.jpg"
// import RecentImgFourth from "../../images/galleryImages/forthImage.jpg"
// import RecentImgFifth from "../../images/galleryImages/fifthImage.jpg"
// import RecentImgSixth from "../../images/galleryImages/imageSix.jpg"

// import gallery6 from "../../images/galleryImages/gallery6.jpeg";
// import gallery7 from "../../images/galleryImages/gallery7.jpeg";
// import gallery8 from "../../images/galleryImages/gallery8.jpeg";
// import gallery9 from "../../images/galleryImages/gallery9.jpeg";
// import gallery10 from "../../images/galleryImages/gallery10.jpeg";
// import gallery11 from "../../images/galleryImages/gallery11.jpeg";
// import gallery12 from "../../images/galleryImages/gallery12.jpeg";
// import gallery13 from "../../images/galleryImages/gallery13.jpeg";
// import gallery14 from "../../images/galleryImages/gallery14.jpeg";
// import gallery15 from "../../images/galleryImages/gallery15.jpeg";
// import gallery16 from "../../images/galleryImages/gallery16.jpeg";
// import gallery17 from "../../images/galleryImages/gallery17.jpeg";
// import gallery18 from "../../images/galleryImages/gallery18.jpeg";
// import gallery19 from "../../images/galleryImages/gallery19.jpeg";
// import gallery20 from "../../images/galleryImages/gallery20.jpeg";
// import gallery21 from "../../images/galleryImages/gallery21.jpeg";
// import gallery22 from "../../images/galleryImages/gallery22.jpeg";
// import gallery23 from "../../images/galleryImages/gallery23.jpeg";
// import gallery24 from "../../images/galleryImages/gallery24.jpeg";
// import gallery25 from "../../images/galleryImages/gallery25.jpeg";
// import gallery26 from "../../images/galleryImages/gallery26.jpeg";
// import gallery27 from "../../images/galleryImages/gallery27.jpeg";
// import gallery28 from "../../images/galleryImages/gallery28.jpeg";
// import gallery29 from "../../images/galleryImages/gallery29.jpeg";
// import gallery30 from "../../images/galleryImages/gallery30.jpeg";
// import gallery31 from "../../images/galleryImages/gallery31.jpeg";
// import gallery32 from "../../images/galleryImages/gallery32.jpeg";
// import gallery33 from "../../images/galleryImages/gallery33.jpeg";

// // Placeholder assets
// const PLACEHOLDER_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

// const PLOT_IMAGES =[
//       gallery7,
//     gallery9,
    
//     gallery11,
//     gallery12,
//     gallery13,
//     gallery14,
//     gallery15,
//     gallery16,
//     gallery10,
//     gallery6,
//     gallery8,

// ]

// const CONSTRUCTION_IMAGES =[ 
//       gallery17,
//     gallery18,
//     gallery19,
//     gallery20,
//     gallery21,
//     gallery22,
//     gallery23,
//     gallery24,
//     gallery25,
//     gallery26,
//     gallery27,
//     gallery28,
//     gallery29,
//     gallery30,
//     gallery31,
//     gallery32,
//     gallery33,
//     RecentImgfirst,
//     RecentImgSecond,
//     RecentImgThird,
//     // RecentImgFourth,
//     RecentImgFifth,
//     RecentImgSixth,
//     One,
//     Two,
//     Three,
//     Four,
//     Five,
//     Six,
//     Seven,
//     Eight,
//     Nine,
//     ten,
//     twelve,
//     thirteen
// ]


// export default function App() {
//   const [activeCategory, setActiveCategory] = useState("plots");
//   const [visibleCount, setVisibleCount] = useState(6);

//   const plotsRef = useRef(null);
//   const constructionRef = useRef(null);


//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//      if (category === "plots") {
//       plotsRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   const currentImages = useMemo(() => 
//     activeCategory === "plots" ? PLOT_IMAGES : CONSTRUCTION_IMAGES
//   , [activeCategory]);

//     if (category === "construction") {
//       constructionRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const toggleLoadMore = () => {
//     if (visibleCount === 6) {
//       setVisibleCount(currentImages.length);
//     } else {
//       setVisibleCount(6);
//       // Optional: scroll back to top of gallery
//       document.getElementById("gallery-content")?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
//       <style>
//         {`
//           @theme {
//             --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
//             --color-brand-primary: #1a365d;
//             --color-brand-secondary: #2d3748;
//           }

//           .gallery-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//             gap: 1.5rem;
//           }
//         `}
//       </style>
//       {/* Header / Hero Section */}
   

//       <main className="flex-grow">
//         {/* Video Section */}
//         <section className="bg-white text-white py-10 px-4">
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h2 className="text-4xl text-black font-bold leading-tight">
//                 Your Vision, <br />
//                 <span className="text-emerald-900 text-5xl">Our Mission.</span>
//               </h2>
//               <p className="text-slate-900 text-lg leading-relaxed max-w-lg">
//                 Join us at Defence Habitat, where your vision for the perfect property is our mission. 
//                 Let us help you navigate the real estate market with confidence and ease.
//               </p>
//               <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-slate-600">
//                 <span className="w-12 h-px bg-slate-700"></span>
//                 Experience the progress
//               </div>
//             </motion.div>

//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
//             >
//               <video
//                 controls
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover"
//               >
//                 <source src={Video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none flex items-center justify-center">
//                 <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <Play className="text-white fill-white" size={24} />
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//    <header className="bg-transparent py-6 px-4 sticky z-50 "
//       style={{position:"sticky" , top:"130px"}}
//       >
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             {/* <h1 className="text-2xl font-bold text-brand-primary tracking-tight">Defence Habitat</h1> */}
//             {/* <p className="text-slate-800 text-sm">Visualizing your future home</p> */}
//           </div>
          
//           <nav className="flex bg-blue-100 p-1 rounded-xl">
//             <button
//               onClick={() => handleCategoryChange("plots")}
//               className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-all ${
//                 activeCategory === "plots" 
//                 ? "bg-white text-brand-primary shadow-sm" 
//                 : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               <ImageIcon size={16} />
//               Plot Allotment
//             </button>
//             <button
//               onClick={() => handleCategoryChange("construction")}
//               className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-all ${
//                 activeCategory === "construction" 
//                 ? "bg-white text-brand-primary shadow-sm" 
//                 : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               <HardHat size={16} />
//               Construction Progress
//             </button>
//           </nav>
//         </div>
//       </header>
//         {/* Gallery Section */}
//         <section id="gallery-content" className="py-20 px-4 max-w-7xl mx-auto">
//           <div className="mb-12 flex items-end justify-between">
//             <div>
//               <h3 className="text-3xl font-bold text-slate-900 capitalize">
//                 {activeCategory === "plots" ? "Plot Allotment" : "Construction Progress"}
//               </h3>
//               <p className="text-slate-500 mt-2">
//                 Showing {Math.min(visibleCount, currentImages.length)} of {currentImages.length} images
//               </p>
//             </div>
//           </div>

//           <motion.div 
//             layout
//             className="gallery-grid"
//           >
//             <AnimatePresence mode="popLayout">
//               {currentImages.slice(0, visibleCount).map((image, index) => (
//                 <motion.div
//                   key={image.id}
//                   layout
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3, delay: index % 6 * 0.05 }}
//                   className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-xl transition-all"
//                 >
//                   <img
//                     src={image}
                    
//                     referrerPolicy="no-referrer"
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
//                     <p className="text-white font-medium text-lg">{image.title}</p>
//                     <p className="text-white/70 text-sm">Defence Habitat Project</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {/* Load More Button */}
//           <div className="mt-16 flex justify-center">
//             <button
//               onClick={toggleLoadMore}
//               className="group flex items-center gap-3 px-6 py-3 bg-blue-800 text-white rounded-full font-semibold shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-1 transition-all active:scale-95"
//             >
//               {visibleCount === 6 ? (
//                 <>
//                   Load More Images
//                   <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
//                 </>
//               ) : (
//                 <>
//                   Show Less
//                   <ChevronUp className="group-hover:-translate-y-1 transition-transform" size={20} />
//                 </>
//               )}
//             </button>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t border-slate-200 py-12 px-4">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//           <div className="space-y-4">
//             <h4 className="font-bold text-brand-primary">Defence Habitat</h4>
//             <p className="text-slate-500 text-sm leading-relaxed">
//               Leading the way in premium real estate developments. Quality, transparency, and excellence in every brick.
//             </p>
//           </div>
//           <div className="space-y-4">
//             <h4 className="font-bold text-slate-900">Quick Links</h4>
//             <ul className="text-slate-500 text-sm space-y-2">
//               <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
//               <li><a href="#" className="hover:text-brand-primary transition-colors">Our Projects</a></li>
//               <li><a href="#" className="hover:text-brand-primary transition-colors">Contact Support</a></li>
//             </ul>
//           </div>
//           <div className="space-y-4">
//             <h4 className="font-bold text-slate-900">Stay Updated</h4>
//             <p className="text-slate-500 text-sm">Subscribe to our newsletter for the latest progress updates.</p>
//             <div className="flex gap-2">
//               <input 
//                 type="email" 
//                 placeholder="Email address" 
//                 className="bg-slate-100 border-none rounded-lg px-4 py-2 text-sm flex-grow focus:ring-2 focus:ring-brand-primary outline-none"
//               />
//               <button className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium">Join</button>
//             </div>
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
//           © {new Date().getFullYear()} Defence Habitat. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// import React, { useState, useMemo , useRef, useEffect} from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp, Play, Image as ImageIcon, HardHat } from "lucide-react";

// import Video from "../../videos/galleryjcb.mp4";

// import One from "../Project_Images/two.jpg";
// import Two from "../Project_Images/three.jpg";
// import Three from "../Project_Images/four.jpg";
// import Four from "../Project_Images/five.jpg";
// import Five from "../Project_Images/DSC04739.jpg";
// import Six from "../Project_Images/six.jpg";
// import Seven from "../Project_Images/seven.JPG";
// import Eight from "../Project_Images/eight.JPG";
// import Nine from "../Project_Images/nine.JPG";
// import thirteen from "../Project_Images/thirteen.JPG";
// import ten from "../Project_Images/ten.JPG";
// import twelve from "../Project_Images/twelve.JPG";

// import RecentImgfirst from "../../images/galleryImages/first_image.jpg";
// import RecentImgSecond from "../../images/galleryImages/second_image.jpg";
// import RecentImgThird from "../../images/galleryImages/thirdImage.jpg";
// import RecentImgFifth from "../../images/galleryImages/fifthImage.jpg";
// import RecentImgSixth from "../../images/galleryImages/imageSix.jpg";

// import gallery6 from "../../images/galleryImages/gallery6.jpeg";
// import gallery7 from "../../images/galleryImages/gallery7.jpeg";
// import gallery8 from "../../images/galleryImages/gallery8.jpeg";
// import gallery9 from "../../images/galleryImages/gallery9.jpeg";
// import gallery10 from "../../images/galleryImages/gallery10.jpeg";
// import gallery11 from "../../images/galleryImages/gallery11.jpeg";
// import gallery12 from "../../images/galleryImages/gallery12.jpeg";
// import gallery13 from "../../images/galleryImages/gallery13.jpeg";
// import gallery14 from "../../images/galleryImages/gallery14.jpeg";
// import gallery15 from "../../images/galleryImages/gallery15.jpeg";
// import gallery16 from "../../images/galleryImages/gallery16.jpeg";
// import gallery17 from "../../images/galleryImages/gallery17.jpeg";
// import gallery18 from "../../images/galleryImages/gallery18.jpeg";
// import gallery19 from "../../images/galleryImages/gallery19.jpeg";
// import gallery20 from "../../images/galleryImages/gallery20.jpeg";
// import gallery21 from "../../images/galleryImages/gallery21.jpeg";
// import gallery22 from "../../images/galleryImages/gallery22.jpeg";
// import gallery23 from "../../images/galleryImages/gallery23.jpeg";
// import gallery24 from "../../images/galleryImages/gallery24.jpeg";
// import gallery25 from "../../images/galleryImages/gallery25.jpeg";
// import gallery26 from "../../images/galleryImages/gallery26.jpeg";
// import gallery27 from "../../images/galleryImages/gallery27.jpeg";
// import gallery28 from "../../images/galleryImages/gallery28.jpeg";
// import gallery29 from "../../images/galleryImages/gallery29.jpeg";
// import gallery30 from "../../images/galleryImages/gallery30.jpeg";
// import gallery31 from "../../images/galleryImages/gallery31.jpeg";
// import gallery32 from "../../images/galleryImages/gallery32.jpeg";
// import gallery33 from "../../images/galleryImages/gallery33.jpeg";


// /* ---------- IMAGE COLLECTIONS ---------- */

// const PLOT_IMAGES = [
//   gallery7,
//   gallery9,
//   //gallery11,
//   gallery12,
//   gallery13,
//   gallery14,
//   gallery15,
//   gallery16,
//   gallery10,
//   gallery6,
//   gallery8,
// ];

// const CONSTRUCTION_IMAGES = [
//   gallery17,
//   gallery18,
//   gallery19,
//   gallery20,
//   gallery21,
//   gallery22,
//   gallery23,
//   gallery24,
//   gallery25,
//   gallery26,
//   gallery27,
//   gallery28,
//   gallery29,
//   gallery30,
//   gallery31,
//   gallery32,
//   gallery33,
//   RecentImgfirst,
//   RecentImgSecond,
//   RecentImgThird,
//   RecentImgFifth,
//   RecentImgSixth,
//   One,
//   Two,
//   Three,
//   Four,
//   Five,
//   Six,
//   Seven,
//   Eight,
//   Nine,
//   ten,
//   twelve,
//   thirteen,
// ];


// const PLOT_IMAGES = [
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639273/gallery7_bexvwm.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery16_frq83c.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery11_ow4qtx.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery12_u9hnst.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery14_mckffv.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery15_toeb5b.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery9_talkke.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery13_qfvern.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery6_im5oly.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery10_vbwozd.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery8_iqu4jd.jpg"
// ]

// const CONSTRUCTION_IMAGES = [
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639985/gallery17_rk17ui.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639985/gallery19_zw9syf.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639984/gallery18_xjr518.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639984/gallery21_zwjehx.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639984/gallery23_rssdtb.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639983/gallery22_ieachh.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639983/gallery20_fnkdv5.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639983/gallery25_hwo6ts.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639982/gallery24_kmoggr.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639982/gallery26_m0wjnu.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639981/gallery27_mjkwvi.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639981/gallery28_zqekef.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639981/gallery29_fhglt4.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639273/thirdImage_b35fhs.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/second_image_sfeisi.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/imageSix_pikxhz.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery33_xdkplp.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery30_odtyij.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery31_j4nviz.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/first_image_w1borf.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639266/forthImage_m6nxkt.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639266/fifthImage_got46p.jpg"

// ]

// export default function App() {

//   const [activeCategory, setActiveCategory] = useState("plots");
//   const [visibleCount, setVisibleCount] = useState(6);

//   const galleryRef = useRef(null);

// useEffect(() => {

//   if (window.location.hash === "#plots") {

//     const section = document.getElementById("plots");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     }

//   }

// }, []);


//   /* ---------- CATEGORY CHANGE ---------- */

//   const handleCategoryChange = (category) => {

//     setActiveCategory(category);

//     galleryRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     });

//     setVisibleCount(6);
//   };

//   /* ---------- CURRENT IMAGES ---------- */

//   const currentImages = useMemo(() =>
//       activeCategory === "plots" ? PLOT_IMAGES : CONSTRUCTION_IMAGES,
//     [activeCategory]
//   );

//   /* ---------- LOAD MORE ---------- */

//   const toggleLoadMore = () => {

//     if (visibleCount === 6) {
//       setVisibleCount(currentImages.length);
//     } else {

//       setVisibleCount(6);

//       galleryRef.current?.scrollIntoView({
//         behavior: "smooth"
//       });

//     }
//   };

//   return (

//     <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">

//       {/* ---------- HERO VIDEO SECTION ---------- */}

//       <section className="bg-white py-10 px-4">

//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//           <motion.div
//             initial={{ opacity:0, x:-20 }}
//             whileInView={{ opacity:1, x:0 }}
//             viewport={{ once:true }}
//           >

//             <h2 className="text-4xl font-bold text-black">
//               Your Vision <br/>
//               <span className="text-emerald-900 text-5xl">
//                 Our Mission
//               </span>
//             </h2>

//             <p className="text-slate-700 mt-4">
//               Join us at Defence Habitat, where your vision
//               for the perfect property becomes reality.
//             </p>

//           </motion.div>

//           <motion.div
//             initial={{ opacity:0, scale:0.9 }}
//             whileInView={{ opacity:1, scale:1 }}
//             viewport={{ once:true }}
//             className="rounded-2xl overflow-hidden shadow-xl"
//           >

//             <video
//               autoPlay
//               muted
//               loop
//               controls
//               className="w-full h-full object-cover"
//             >
//               <source src={Video} type="video/mp4" />
//             </video>

//           </motion.div>

//         </div>

//       </section>


//       {/* ---------- CATEGORY NAV ---------- */}

//       <header
//         className="sticky z-50 py-6 px-4"
//         style={{ top:"130px" }}
//       >

//         <div className="max-w-7xl mx-auto flex justify-end">

//           <nav className="flex bg-blue-100 p-1 rounded-xl">

//             <button
//               onClick={() => handleCategoryChange("plots")}
//               className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition ${
//                 activeCategory === "plots"
//                 ? "bg-white shadow text-blue-900"
//                 : "text-slate-600"
//               }`}
//             >
//               <ImageIcon size={16}/>
//               Plot Allotment
//             </button>

//             <button
//               onClick={() => handleCategoryChange("construction")}
//               className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition ${
//                 activeCategory === "construction"
//                 ? "bg-white shadow text-blue-900"
//                 : "text-slate-600"
//               }`}
//             >
//               <HardHat size={16}/>
//               Construction Progress
//             </button>

//           </nav>

//         </div>

//       </header>


//       {/* ---------- GALLERY ---------- */}

//       <section
//       id="plots"
//         ref={galleryRef}
//         className="py-20 px-4 max-w-7xl mx-auto"
//       >

//         <div className="mb-12">

//           <h3 className="text-3xl font-bold">

//             {activeCategory === "plots"
//               ? "Plot Allotment"
//               : "Construction Progress"
//             }

//           </h3>

//           <p className="text-slate-500 mt-2">
//             Showing {Math.min(visibleCount, currentImages.length)} of {currentImages.length}
//           </p>

//         </div>


//         {/* ---------- IMAGE GRID ---------- */}

//         <div className="grid md:grid-cols-3 gap-6">

//           <AnimatePresence>

//             {currentImages.slice(0, visibleCount).map((image,index)=> (

//               <motion.div
//                 key={index}
//                 initial={{ opacity:0, y:20 }}
//                 animate={{ opacity:1, y:0 }}
//                 exit={{ opacity:0 }}
//                 transition={{ duration:0.3 }}
//                 className="rounded-xl overflow-hidden shadow hover:shadow-xl"
//               >

//                 <img
//                   src={image}
//                   className="w-full h-full object-cover hover:scale-110 transition duration-500"
//                 />

//               </motion.div>

//             ))}

//           </AnimatePresence>

//         </div>


//         {/* ---------- LOAD MORE ---------- */}

//         <div className="flex justify-center mt-16">

//           <button
//             onClick={toggleLoadMore}
//             className="flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-full"
//           >

//             {visibleCount === 6
//               ? <>Load More <ChevronDown size={18}/></>
//               : <>Show Less <ChevronUp size={18}/></>
//             }

//           </button>

//         </div>

//       </section>


//       {/* ---------- FOOTER ---------- */}

//       {/* <footer className="bg-white border-t py-10 text-center text-sm text-gray-500">

//         © {new Date().getFullYear()} Defence Habitat

//       </footer> */}

//     </div>

//   );

// }

// import React, { useState, useMemo , useRef, useEffect} from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp, Image as ImageIcon, HardHat } from "lucide-react";

// import Video from "../../videos/galleryjcb.mp4";
// import One from "../Project_Images/two.jpg";
// import Two from "../Project_Images/three.jpg";
// import Three from "../Project_Images/four.jpg";
// import Four from "../Project_Images/five.jpg";
// import Five from "../Project_Images/DSC04739.jpg";
// import Six from "../Project_Images/six.jpg";
// import Seven from "../Project_Images/seven.JPG";
// import Eight from "../Project_Images/eight.JPG";
// import Nine from "../Project_Images/nine.JPG";
// import thirteen from "../Project_Images/thirteen.JPG";
// import ten from '../Project_Images/ten.JPG';
// import twelve from "../Project_Images/twelve.JPG";
// import RecentImgfirst from "../../images/galleryImages/first_image.jpg"
// import RecentImgSecond from "../../images/galleryImages/second_image.jpg"
// import RecentImgThird from "../../images/galleryImages/thirdImage.jpg"
// import RecentImgFourth from "../../images/galleryImages/forthImage.jpg"
// import RecentImgFifth from "../../images/galleryImages/fifthImage.jpg"
// import RecentImgSixth from "../../images/galleryImages/imageSix.jpg"

// import gallery6 from "../../images/galleryImages/gallery6.jpeg";
// import gallery7 from "../../images/galleryImages/gallery7.jpeg";
// import gallery8 from "../../images/galleryImages/gallery8.jpeg";
// import gallery9 from "../../images/galleryImages/gallery9.jpeg";
// import gallery10 from "../../images/galleryImages/gallery10.jpeg";
// import gallery11 from "../../images/galleryImages/gallery11.jpeg";
// import gallery12 from "../../images/galleryImages/gallery12.jpeg";
// import gallery13 from "../../images/galleryImages/gallery13.jpeg";
// import gallery14 from "../../images/galleryImages/gallery14.jpeg";
// import gallery15 from "../../images/galleryImages/gallery15.jpeg";
// import gallery16 from "../../images/galleryImages/gallery16.jpeg";
// import gallery17 from "../../images/galleryImages/gallery17.jpeg";
// import gallery18 from "../../images/galleryImages/gallery18.jpeg";
// import gallery19 from "../../images/galleryImages/gallery19.jpeg";
// import gallery20 from "../../images/galleryImages/gallery20.jpeg";
// import gallery21 from "../../images/galleryImages/gallery21.jpeg";
// import gallery22 from "../../images/galleryImages/gallery22.jpeg";
// import gallery23 from "../../images/galleryImages/gallery23.jpeg";
// import gallery24 from "../../images/galleryImages/gallery24.jpeg";
// import gallery25 from "../../images/galleryImages/gallery25.jpeg";
// import gallery26 from "../../images/galleryImages/gallery26.jpeg";
// import gallery27 from "../../images/galleryImages/gallery27.jpeg";
// import gallery28 from "../../images/galleryImages/gallery28.jpeg";
// import gallery29 from "../../images/galleryImages/gallery29.jpeg";
// import gallery30 from "../../images/galleryImages/gallery30.jpeg";
// import gallery31 from "../../images/galleryImages/gallery31.jpeg";
// import gallery32 from "../../images/galleryImages/gallery32.jpeg";
// import gallery33 from "../../images/galleryImages/gallery33.jpeg";

// /* -------------------------------------------------------------------------- */
// /*                               IMAGE COLLECTIONS                            */
// /* -------------------------------------------------------------------------- */

// /* 
// PREVIOUS LOCAL IMAGE IMPORTS (COMMENTED)

// import One from "../Project_Images/two.jpg";
// import Two from "../Project_Images/three.jpg";
// import Three from "../Project_Images/four.jpg";
// import Four from "../Project_Images/five.jpg";
// import Five from "../Project_Images/DSC04739.jpg";
// import Six from "../Project_Images/six.jpg";
// import Seven from "../Project_Images/seven.JPG";
// import Eight from "../Project_Images/eight.JPG";
// import Nine from "../Project_Images/nine.JPG";
// import thirteen from "../Project_Images/thirteen.JPG";
// import ten from "../Project_Images/ten.JPG";
// import twelve from "../Project_Images/twelve.JPG";
// */


// const PLOT_IMAGES = [
//   gallery7,
//   gallery9,
//   //gallery11,
//   gallery12,
//   gallery13,
//   gallery14,
//   gallery15,
//   gallery16,
//   gallery10,
//   gallery6,
//   gallery8,
// ];

// const CONSTRUCTION_IMAGES = [
//   gallery17,
//   gallery18,
//   gallery19,
//   gallery20,
//   gallery21,
//   gallery22,
//   gallery23,
//   gallery24,
//   gallery25,
//   gallery26,
//   gallery27,
//   gallery28,
//   gallery29,
//   gallery30,
//   gallery31,
//   gallery32,
//   gallery33,
//   RecentImgfirst,
//   RecentImgSecond,
//   RecentImgThird,
//   RecentImgFifth,
//   RecentImgSixth,
//   One,
//   Two,
//   Three,
//   Four,
//   Five,
//   Six,
//   Seven,
//   Eight,
//   Nine,
//   ten,
//   twelve,
//   thirteen,
// ];
// /* -------------------------- PLOT ALLOTMENT IMAGES ------------------------- */

// // const PLOT_IMAGES = [
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639273/gallery7_bexvwm.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery16_frq83c.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery11_ow4qtx.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery12_u9hnst.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery14_mckffv.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery15_toeb5b.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery9_talkke.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery13_qfvern.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery6_im5oly.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery10_vbwozd.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery8_iqu4jd.jpg"
// // ];

// /* -------------------------- CONSTRUCTION IMAGES --------------------------- */

// // const CONSTRUCTION_IMAGES = [
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639985/gallery17_rk17ui.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639985/gallery19_zw9syf.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639984/gallery18_xjr518.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639984/gallery21_zwjehx.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639984/gallery23_rssdtb.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639983/gallery22_ieachh.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639983/gallery20_fnkdv5.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639983/gallery25_hwo6ts.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639982/gallery24_kmoggr.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639982/gallery26_m0wjnu.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639981/gallery27_mjkwvi.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639981/gallery28_zqekef.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639981/gallery29_fhglt4.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639273/thirdImage_b35fhs.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/second_image_sfeisi.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/imageSix_pikxhz.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery33_xdkplp.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery30_odtyij.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery31_j4nviz.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/first_image_w1borf.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639266/forthImage_m6nxkt.jpg",
// //   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639266/fifthImage_got46p.jpg"
// // ];

// export default function App() {

//   /* -------------------------- STATE MANAGEMENT -------------------------- */

//   const [activeCategory, setActiveCategory] = useState("plots");
//   const [visibleCount, setVisibleCount] = useState(6);

//   /* NEW STATE FOR ASYNC IMAGE LOADING */
//   const [loadedImages, setLoadedImages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const galleryRef = useRef(null);

//   /* ----------------------- HASH BASED SCROLL ---------------------------- */

//   useEffect(() => {

//     if (window.location.hash === "#plots") {

//       const section = document.getElementById("plots");

//       if (section) {
//         section.scrollIntoView({
//           behavior: "smooth",
//           block: "start"
//         });
//       }

//     }

//   }, []);

//   /* ----------------------- CURRENT IMAGES ------------------------------- */

//   const currentImages = useMemo(() =>
//       activeCategory === "plots"
//         ? PLOT_IMAGES
//         : CONSTRUCTION_IMAGES,
//   [activeCategory]);

//   /* ---------------------------------------------------------------------- */
//   /*                     ASYNC IMAGE PRELOADER FUNCTION                     */
//   /* ---------------------------------------------------------------------- */

//   const loadImages = async (images) => {

//     setLoading(true);

//     try {

//       const promises = images.map((src) => {

//         return new Promise((resolve, reject) => {

//           const img = new Image();

//           img.src = src;

//           img.onload = () => resolve(src);
//           img.onerror = () => reject(src);

//         });

//       });

//       /* WAIT FOR ALL IMAGES */

//       const results = await Promise.all(promises);

//       setLoadedImages(results);

//     }

//     catch (error) {

//       console.log("Image loading failed", error);

//     }

//     finally {

//       setLoading(false);

//     }

//   };

//   /* ---------------- LOAD IMAGES WHEN CATEGORY CHANGES ---------------- */

//   useEffect(() => {

//     loadImages(currentImages);

//   }, [currentImages]);

//   /* ---------------- CATEGORY CHANGE ---------------- */

//   const handleCategoryChange = (category) => {

//     setActiveCategory(category);

//     galleryRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     });

//     setVisibleCount(6);

//   };

//   /* ---------------- LOAD MORE ---------------- */

//   const toggleLoadMore = () => {

//     if (visibleCount === 6) {

//       setVisibleCount(loadedImages.length);

//     } else {

//       setVisibleCount(6);

//       galleryRef.current?.scrollIntoView({
//         behavior: "smooth"
//       });

//     }

//   };

//   return (

//     <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">

//       {/* ------------------------------------------------------------------ */}
//       {/*                         HERO VIDEO SECTION                         */}
//       {/* ------------------------------------------------------------------ */}

//       <section className="bg-white py-10 px-4">

//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//           <motion.div
//             initial={{ opacity:0, x:-20 }}
//             whileInView={{ opacity:1, x:0 }}
//             viewport={{ once:true }}
//           >

//             <h2 className="text-4xl font-bold text-black">
//               Your Vision <br/>
//               <span className="text-emerald-900 text-5xl">
//                 Our Mission
//               </span>
//             </h2>

//             <p className="text-slate-700 mt-4">
//               Join us at Defence Habitat, where your vision
//               for the perfect property becomes reality.
//             </p>

//           </motion.div>

//           <motion.div
//             initial={{ opacity:0, scale:0.9 }}
//             whileInView={{ opacity:1, scale:1 }}
//             viewport={{ once:true }}
//             className="rounded-2xl overflow-hidden shadow-xl"
//           >

//             <video
//               autoPlay
//               muted
//               loop
//               controls
//               className="w-full h-full object-cover"
//             >
//               <source src={Video} type="video/mp4" />
//             </video>

//           </motion.div>

//         </div>

//       </section>

//       {/* ------------------------------------------------------------------ */}
//       {/*                           CATEGORY NAV                             */}
//       {/* ------------------------------------------------------------------ */}

//       <header
//         className="sticky z-50 py-6 px-4"
//         style={{ top:"130px" }}
//       >

//         <div className="max-w-7xl mx-auto flex justify-end">

//           <nav className="flex bg-blue-100 p-1 rounded-xl">

//             <button
//               onClick={() => handleCategoryChange("plots")}
//               className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition ${
//                 activeCategory === "plots"
//                 ? "bg-white shadow text-blue-900"
//                 : "text-slate-600"
//               }`}
//             >
//               <ImageIcon size={16}/>
//               Plot Allotment
//             </button>

//             <button
//               onClick={() => handleCategoryChange("construction")}
//               className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition ${
//                 activeCategory === "construction"
//                 ? "bg-white shadow text-blue-900"
//                 : "text-slate-600"
//               }`}
//             >
//               <HardHat size={16}/>
//               Construction Progress
//             </button>

//           </nav>

//         </div>

//       </header>

//       {/* ------------------------------------------------------------------ */}
//       {/*                              GALLERY                               */}
//       {/* ------------------------------------------------------------------ */}

//       <section
//         id="plots"
//         ref={galleryRef}
//         className="py-20 px-4 max-w-7xl mx-auto"
//       >

//         <div className="mb-12">

//           <h3 className="text-3xl font-bold">

//             {activeCategory === "plots"
//               ? "Plot Allotment"
//               : "Construction Progress"
//             }

//           </h3>

//           <p className="text-slate-500 mt-2">
//             Showing {Math.min(visibleCount, loadedImages.length)} of {loadedImages.length}
//           </p>

//         </div>

//         {/* ---------------------- LOADING INDICATOR ---------------------- */}

//         {loading && (

//           <div className="flex justify-center py-20">

//             <motion.div
//               animate={{ rotate:360 }}
//               transition={{ repeat:Infinity, duration:1 }}
//               className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full"
//             />

//           </div>

//         )}

//         {/* ------------------------ IMAGE GRID --------------------------- */}

//         <div className="grid md:grid-cols-3 gap-6">

//           <AnimatePresence>

//             {loadedImages.slice(0, visibleCount).map((image,index)=> (

//               <motion.div
//                 key={index}
//                 initial={{ opacity:0, y:20 }}
//                 animate={{ opacity:1, y:0 }}
//                 exit={{ opacity:0 }}
//                 transition={{ duration:0.3 }}
//                 className="rounded-xl overflow-hidden shadow hover:shadow-xl"
//               >

//                 <img
//                   src={image}
//                   alt="gallery"
//                   loading="lazy"
//                   className="w-full h-full object-cover hover:scale-110 transition duration-500"
//                 />

//               </motion.div>

//             ))}

//           </AnimatePresence>

//         </div>

//         {/* ----------------------- LOAD MORE ----------------------------- */}

//         <div className="flex justify-center mt-16">

//           <button
//             onClick={toggleLoadMore}
//             className="flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-full"
//           >

//             {visibleCount === 6
//               ? <>Load More <ChevronDown size={18}/></>
//               : <>Show Less <ChevronUp size={18}/></>
//             }

//           </button>

//         </div>

//       </section>

//     </div>

//   );

// }

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Image as ImageIcon, HardHat, Camera, Sparkles } from "lucide-react";

 import Video from "../../videos/galleryjcb.mp4";
// import One from "../Project_Images/two.jpg";
 //import Two from "../Project_Images/three.jpg";
// import Three from "../Project_Images/four.jpg";
// import Four from "../Project_Images/five.jpg";
// import Five from "../Project_Images/DSC04739.jpg";
// import Six from "../Project_Images/six.jpg";
// import Seven from "../Project_Images/seven.JPG";
// import Eight from "../Project_Images/eight.JPG";
// import Nine from "../Project_Images/nine.JPG";
// import thirteen from "../Project_Images/thirteen.JPG";
// import ten from '../Project_Images/ten.JPG';
// import twelve from "../Project_Images/twelve.JPG";
// import RecentImgfirst from "../../images/galleryImages/first_image.jpg"
// import RecentImgSecond from "../../images/galleryImages/second_image.jpg"
// import RecentImgThird from "../../images/galleryImages/thirdImage.jpg"
// import RecentImgFourth from "../../images/galleryImages/forthImage.jpg"
// import RecentImgFifth from "../../images/galleryImages/fifthImage.jpg"
// import RecentImgSixth from "../../images/galleryImages/imageSix.jpg"

// import gallery6 from "../../images/galleryImages/gallery6.jpeg";
// import gallery7 from "../../images/galleryImages/gallery7.jpeg";
// import gallery8 from "../../images/galleryImages/gallery8.jpeg";
// import gallery9 from "../../images/galleryImages/gallery9.jpeg";
// import gallery10 from "../../images/galleryImages/gallery10.jpeg";
// import gallery11 from "../../images/galleryImages/gallery11.jpeg";
// import gallery12 from "../../images/galleryImages/gallery12.jpeg";
// import gallery13 from "../../images/galleryImages/gallery13.jpeg";
// import gallery14 from "../../images/galleryImages/gallery14.jpeg";
// import gallery15 from "../../images/galleryImages/gallery15.jpeg";
// import gallery16 from "../../images/galleryImages/gallery16.jpeg";

// import gallery17 from "../../images/galleryImages/gallery17.webp";
// import gallery18 from "../../images/galleryImages/gallery18.webp";
// import gallery19 from "../../images/galleryImages/gallery19.webp";
// import gallery20 from "../../images/galleryImages/gallery20.webp";
// import gallery21 from "../../images/galleryImages/gallery21.jpeg";
// import gallery22 from "../../images/galleryImages/gallery22.jpeg";
// import gallery23 from "../../images/galleryImages/gallery23.jpeg";
// import gallery24 from "../../images/galleryImages/gallery24.jpeg";
// import gallery25 from "../../images/galleryImages/gallery25.jpeg";
// import gallery26 from "../../images/galleryImages/gallery26.jpeg";
// import gallery27 from "../../images/galleryImages/gallery27.jpeg";
// import gallery28 from "../../images/galleryImages/gallery28.jpeg";
// import gallery29 from "../../images/galleryImages/gallery29.jpeg";
// import gallery30 from "../../images/galleryImages/gallery30.jpeg";
// import gallery31 from "../../images/galleryImages/gallery31.jpeg";
// import gallery32 from "../../images/galleryImages/gallery32.jpeg";
// import gallery33 from "../../images/galleryImages/gallery33.jpeg";

// /* -------------------------------------------------------------------------- */
// /*                               IMAGE COLLECTIONS                            */
// /* -------------------------------------------------------------------------- */

// const PLOT_IMAGES = [
//   gallery7,
//   gallery9,
//   gallery12,
//   gallery13,
//   gallery14,
//   gallery15,
//   gallery16,
//   gallery10,
//   gallery6,
//   gallery8,
// ];

// const CONSTRUCTION_IMAGES = [
//   gallery17,
//   gallery18,
//   gallery19,
//   gallery20,
//   gallery21,
//   gallery22,
//   gallery23,
//   gallery24,
//   gallery25,
//   gallery26,
//   gallery27,
//   gallery28,
//   gallery29,
//   gallery30,
//   gallery31,
//   gallery32,
//   gallery33,
//   RecentImgfirst,
//   RecentImgSecond,
//   RecentImgThird,
//   RecentImgFifth,
//   RecentImgSixth,
//   One,
//   Two,
//   Three,
//   Four,
//   Five,
//   Six,
//   Seven,
//   Eight,
//   Nine,
//   ten,
//   twelve,
//   thirteen,
// ];

const PLOT_IMAGES = [
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639273/gallery7_bexvwm.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery16_frq83c.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery11_ow4qtx.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery12_u9hnst.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery14_mckffv.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery15_toeb5b.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746132/gallery9_puhau6.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery13_qfvern.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery6_im5oly.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery10_vbwozd.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery8_iqu4jd.jpg"
]

const CONSTRUCTION_IMAGES = [
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746133/gallery17_b7d2qk.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639985/gallery19_zw9syf.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746132/gallery18_hde4ve.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746131/gallery21_qscvwh.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746131/gallery23_yxdtok.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746128/gallery22_w6aouc.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746127/gallery20_otnnks.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746128/gallery25_dfgerz.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639982/gallery24_kmoggr.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746133/gallery26_x7hf5x.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746134/gallery27_a51vyw.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746131/gallery28_fy9kwe.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746132/gallery29_flmc49.webp",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639273/thirdImage_b35fhs.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/second_image_sfeisi.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/imageSix_pikxhz.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery33_xdkplp.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery30_odtyij.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery31_j4nviz.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/first_image_w1borf.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639266/forthImage_m6nxkt.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639266/fifthImage_got46p.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726170/DSC04739_uwrhjp.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726199/four_cbyzhn.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726200/five_peaemw.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726205/nine_dfskgd.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726205/seven_ysaejw.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726205/eleven_eapooq.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726204/ten_iyeew0.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726207/eight_kh6y42.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726207/two_hn409p.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726206/three_rvj2rk.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726209/twelve_arc7zl.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726207/thirteen_vgk6xn.jpg",
  "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726220/six_ops4ev.jpg"

]

export default function App() {
  /* -------------------------- STATE MANAGEMENT -------------------------- */
  const [activeCategory, setActiveCategory] = useState("plots");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadedImages, setLoadedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Loading images...');
  const [showLoadingDetails, setShowLoadingDetails] = useState(false);

  const galleryRef = useRef(null);

  /* ----------------------- HASH BASED SCROLL ---------------------------- */
  useEffect(() => {
    if (window.location.hash === "#plots") {
      const section = document.getElementById("plots");
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }, []);

  /* ----------------------- CURRENT IMAGES ------------------------------- */
  const currentImages = useMemo(() =>
    activeCategory === "plots"
      ? PLOT_IMAGES
      : CONSTRUCTION_IMAGES,
  [activeCategory]);

  /* ---------------------- LOADING MESSAGES ----------------------------- */
  const loadingMessages = {
    plots: [
      'Loading plot layouts...',
      'Arranging property views...',
      'Preparing site visuals...',
      'Organizing plot gallery...',
      'Almost there...'
    ],
    construction: [
      'Loading construction updates...',
      'Preparing progress photos...',
      'Organizing site images...',
      'Almost ready to showcase...',
      'Just a moment...'
    ]
  };

  /* ---------------------------------------------------------------------- */
  /*                     ASYNC IMAGE PRELOADER FUNCTION                     */
  /* ---------------------------------------------------------------------- */
  const loadImages = async (images) => {
    setLoading(true);
    setLoadingProgress(0);
    
    // Rotate loading messages
    const messageInterval = setInterval(() => {
      const messages = loadingMessages[activeCategory];
      setLoadingMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 2000);

    try {
      const loaded = [];
      const total = images.length;

      for (let i = 0; i < images.length; i++) {
        const src = images[i];
        
        await new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loaded.push(src);
            setLoadingProgress(((i + 1) / total) * 100);
            resolve(src);
          };
          img.onerror = () => reject(src);
        });
      }

      setLoadedImages(loaded);
    } catch (error) {
      console.log("Image loading failed", error);
      setLoadingMessage('Some images failed to load');
    } finally {
      clearInterval(messageInterval);
      setLoading(false);
      setShowLoadingDetails(false);
    }
  };

  /* ---------------- LOAD IMAGES WHEN CATEGORY CHANGES ---------------- */
  useEffect(() => {
    loadImages(currentImages);
  }, [currentImages]);

  /* ---------------- CATEGORY CHANGE ---------------- */
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    galleryRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setVisibleCount(6);
  };

  /* ---------------- LOAD MORE ---------------- */
  const toggleLoadMore = () => {
    if (visibleCount === 6) {
      setVisibleCount(loadedImages.length);
    } else {
      setVisibleCount(6);
      galleryRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* ------------------------------------------------------------------ */}
      {/*                         HERO VIDEO SECTION                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black">
              Your Vision <br/>
              <span className="text-emerald-900 text-5xl">
                Our Mission
              </span>
            </h2>
            <p className="text-slate-700 mt-4">
              Join us at Defence Habitat, where your vision
              for the perfect property becomes reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <video
              autoPlay
              muted
              loop
              controls
              className="w-full h-full object-cover"
            >
              <source src={Video} type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*                           CATEGORY NAV                             */}
      {/* ------------------------------------------------------------------ */}
      <header
        className="sticky z-50 py-6 px-4"
        style={{ top: "130px" }}
      >
        <div className="max-w-7xl mx-auto flex justify-end">
          <nav className="flex bg-blue-100 p-1 rounded-xl">
            <button
              onClick={() => handleCategoryChange("plots")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition ${
                activeCategory === "plots"
                  ? "bg-white shadow text-blue-900"
                  : "text-slate-600"
              }`}
            >
              <ImageIcon size={16} />
              Plot Allotment
            </button>
            <button
              onClick={() => handleCategoryChange("construction")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition ${
                activeCategory === "construction"
                  ? "bg-white shadow text-blue-900"
                  : "text-slate-600"
              }`}
            >
              <HardHat size={16} />
              Construction Progress
            </button>
          </nav>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/*                              GALLERY                               */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="plots"
        ref={galleryRef}
        className="py-20 px-4 max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <h3 className="text-3xl font-bold">
            {activeCategory === "plots"
              ? "Plot Allotment"
              : "Construction Progress"
            }
          </h3>
          <p className="text-slate-500 mt-2">
            {!loading && `Showing ${Math.min(visibleCount, loadedImages.length)} of ${loadedImages.length}`}
          </p>
        </div>

        {/* ---------------------- INTERACTIVE LOADING ---------------------- */}
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-16 px-4"
            >
              {/* Main spinner with progress ring */}
              <div className="relative mb-8">
                {/* Background ring */}
                <div className="w-20 h-20 border-4 border-blue-100 rounded-full" />
                
                {/* Rotating progress ring - THIS ONE ROTATES COMPLETELY */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-700 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
                
                {/* Center icon with pulse animation */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {activeCategory === "plots" ? (
                    <Camera className="w-8 h-8 text-blue-700" />
                  ) : (
                    <HardHat className="w-8 h-8 text-blue-700" />
                  )}
                </motion.div>
              </div>

              {/* Animated loading message */}
              <motion.p
                key={loadingMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-lg font-medium text-blue-900 mb-2"
              >
                {loadingMessage}
              </motion.p>

              {/* Progress bar */}
              <div className="w-64 h-2 bg-blue-100 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-blue-700"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Progress percentage */}
              <p className="text-sm text-blue-600 mb-4">
                {Math.round(loadingProgress)}% complete
              </p>

              {/* Interactive details toggle */}
              <button
                onClick={() => setShowLoadingDetails(!showLoadingDetails)}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
              >
                <Sparkles size={14} />
                {showLoadingDetails ? 'Hide details' : 'Show details'}
              </button>

              {/* Expandable details */}
              <AnimatePresence>
                {showLoadingDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-800 overflow-hidden"
                  >
                    <p>• Loading {currentImages.length} images</p>
                    <p>• {Math.round(loadingProgress)}% loaded successfully</p>
                    <p>• Category: {activeCategory === 'plots' ? 'Plot Allotment' : 'Construction'}</p>
                    <p>• Please wait while we optimize your experience</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Loading particles */}
              <div className="flex gap-2 mt-8">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ------------------------ IMAGE GRID --------------------------- */}
        <AnimatePresence>
          {!loading && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {loadedImages.slice(0, visibleCount).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-xl overflow-hidden shadow hover:shadow-xl group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <motion.div
                      className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ----------------------- LOAD MORE ----------------------------- */}
        {!loading && loadedImages.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={toggleLoadMore}
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all hover:shadow-lg"
            >
              {visibleCount === 6 ? (
                <>Load More <ChevronDown size={18} /></>
              ) : (
                <>Show Less <ChevronUp size={18} /></>
              )}
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}