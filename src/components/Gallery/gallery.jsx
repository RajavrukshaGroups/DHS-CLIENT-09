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


//  Previously, These images are from DHS cloudinary account

// const PLOT_IMAGES = [
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639273/gallery7_bexvwm.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery16_frq83c.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery11_ow4qtx.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery12_u9hnst.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639271/gallery14_mckffv.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery15_toeb5b.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746132/gallery9_puhau6.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639270/gallery13_qfvern.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery6_im5oly.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery10_vbwozd.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/gallery8_iqu4jd.jpg"
// ].map(url => url.replace('/image/upload/', '/image/upload/w_800,q_auto,f_auto/'));

// const CONSTRUCTION_IMAGES = [
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746133/gallery17_b7d2qk.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639985/gallery19_zw9syf.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746132/gallery18_hde4ve.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746131/gallery21_qscvwh.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746131/gallery23_yxdtok.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746128/gallery22_w6aouc.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746127/gallery20_otnnks.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746128/gallery25_dfgerz.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639982/gallery24_kmoggr.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746133/gallery26_x7hf5x.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746134/gallery27_a51vyw.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746131/gallery28_fy9kwe.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773746132/gallery29_flmc49.webp",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639273/thirdImage_b35fhs.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/second_image_sfeisi.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/imageSix_pikxhz.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery33_xdkplp.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery30_odtyij.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639272/gallery31_j4nviz.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639267/first_image_w1borf.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639266/forthImage_m6nxkt.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773639266/fifthImage_got46p.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726170/DSC04739_uwrhjp.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726199/four_cbyzhn.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726200/five_peaemw.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726205/nine_dfskgd.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726205/seven_ysaejw.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726205/eleven_eapooq.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726204/ten_iyeew0.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726207/eight_kh6y42.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726207/two_hn409p.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726206/three_rvj2rk.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726209/twelve_arc7zl.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726207/thirteen_vgk6xn.jpg",
//   "https://res.cloudinary.com/dx7pz8dor/image/upload/v1773726220/six_ops4ev.jpg"

// ].map(url => url.replace('/image/upload/', '/image/upload/w_800,q_auto,f_auto/'));

// These images are from DES cloudinary account
const PLOT_IMAGES = [
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859712/gallery8_cupcob.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859711/gallery15_aeynlu.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859710/gallery16_pzslbs.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859708/gallery13_ni14ln.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859707/gallery14_t224of.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859706/gallery12_jfo919.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859705/gallery7_gpe7s8.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859704/gallery9_xaa00q.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859703/gallery11_s0w2bj.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859700/gallery10_fu6jdi.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859699/gallery6_fgsymp.jpg"
].map(url => url.replace('/image/upload/', '/image/upload/w_800,q_auto,f_auto/'));

const CONSTRUCTION_IMAGES =[
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723185/WhatsApp_Image_2026-06-06_at_10.34.35_AM_auotkx.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723185/WhatsApp_Image_2026-06-06_at_10.34.35_AM_2_q8wzza.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723184/WhatsApp_Image_2026-06-06_at_10.34.35_AM_1_jjy25t.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723184/WhatsApp_Image_2026-06-06_at_10.34.34_AM_y8gu63.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723184/WhatsApp_Image_2026-06-06_at_10.34.33_AM_kiqqr0.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723184/WhatsApp_Image_2026-06-06_at_10.34.34_AM_2_vq00xg.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723184/WhatsApp_Image_2026-06-06_at_10.34.31_AM_sex0tx.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723183/WhatsApp_Image_2026-06-06_at_10.34.32_AM_2_gszo9s.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723183/WhatsApp_Image_2026-06-06_at_10.34.34_AM_1_peienw.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723183/WhatsApp_Image_2026-06-06_at_10.34.33_AM_1_roghjx.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723182/WhatsApp_Image_2026-06-06_at_10.34.32_AM_bifhdc.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1780723182/WhatsApp_Image_2026-06-06_at_10.34.32_AM_1_oapsaa.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859706/thirdImage_ca7jfo.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859705/second_image_be65ku.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859704/imageSix_ju5pyq.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859703/gallery33_ltbxib.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859702/gallery32_alvyhs.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859701/gallery31_ksvrk6.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859700/gallery30_epcnck.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859698/first_image_bhwhvk.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859698/forthImage_rfhkk2.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779859698/fifthImage_f00prr.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872184/four_anueh8.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872185/five_tazpk1.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872190/eight_i5euv5.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872193/nine_ehwqpa.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872194/eleven_j6vidm.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872195/DSC04739_mwc932.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872195/three_cgkdzx.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872196/two_xjshmw.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872197/ten_mvsais.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872201/six_shq4br.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872202/twelve_q9ffa6.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872203/thirteen_oqpdov.jpg",
  "https://res.cloudinary.com/dxdgk4v3t/image/upload/v1779872206/seven_gz03kq.jpg"
].map(url => url.replace('/image/upload/', '/image/upload/w_800,q_auto,f_auto/'));
const CONSTRUCTION_VIDEOS =[
  "https://res.cloudinary.com/dxdgk4v3t/video/upload/v1780723183/WhatsApp_Video_2026-06-06_at_10.34.33_AM_oqu8ct.mp4",
  "https://res.cloudinary.com/dxdgk4v3t/video/upload/v1780723183/WhatsApp_Video_2026-06-06_at_10.34.32_AM_mmvl8d.mp4"
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
      let loadedCount = 0;
      // We only need to wait for the first batch of images to load to show the gallery quickly
      const imagesToPreload = images.slice(0, 6);
      const total = imagesToPreload.length;

      // Load images concurrently instead of sequentially
      const promises = imagesToPreload.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / total) * 100);
            resolve(src);
          };
          img.onerror = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / total) * 100);
            resolve(src);
          };
        });
      });

      await Promise.all(promises);
      
      // Set all images so they are available, browser will lazy load the rest
      setLoadedImages(images);
    } catch (error) {
      console.log("Image loading failed", error);
      setLoadingMessage('Some images failed to load');
      setLoadedImages(images);
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
{activeCategory === "construction" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid md:grid-cols-3 gap-6 mt-8"
  >
    {CONSTRUCTION_VIDEOS.map((src, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: idx * 0.05 }}
        className="rounded-xl overflow-hidden shadow hover:shadow-xl group"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <video src={src} controls className="w-full h-full object-cover" />
        </div>
      </motion.div>
    ))}
  </motion.div>
)}

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