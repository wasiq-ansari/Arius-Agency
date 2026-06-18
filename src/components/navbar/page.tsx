"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (scrolled) {
      gsap.to({}, {
        duration: 0.2,
        onComplete: () => setShowText(true),
      });
    } else {
      gsap.to({}, {
        duration: 0.2,
        onComplete: () => setShowText(false),
      });
    }
  }, [scrolled]);

  return (
    <motion.nav
      animate={{
        y: scrolled ? 20 : 0,
        scale: scrolled ? 0.98 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className={`fixed top-0 z-50 w-full border transition-all duration-300 ${
        scrolled
          ? "bg-white/90 py-2 max-w-[1360px] rounded-full backdrop-blur-xs shadow-[0 1px 3px rgba(16,24,40,.08),0 4px 16px rgba(16,24,40,.06)] border-black/10"
          : "bg-white/90 py-4 max-w-[1440px] rounded-bl-4xl rounded-br-4xl backdrop-blur-xs border-black/10"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 text-black">

        {/* Logo */}
        {/* <motion.div
          animate={{ scale: scrolled ? 0.95 : 1 }}
          className="text-xl font-bold tracking-tight"
        >
          {scrolled? (<svg width="51" height="58" viewBox="0 0 51 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.2487 4.22997C29.1111 4.22984 31.6851 5.97244 32.7483 8.63008L49.7082 51.0269C50.2337 52.3406 49.2662 53.7697 47.8513 53.7697L42.0071 53.7697C39.4982 53.7697 37.2542 52.2087 36.3816 49.8565L20.4563 6.92574C19.9717 5.61937 20.938 4.23022 22.3313 4.23016L26.2487 4.22997Z" fill="#04A1F8"/>
<path d="M18.7594 17.4387C18.0932 15.7734 15.7409 15.7592 15.0546 17.4163L1.14588 51.0008C0.600518 52.3177 1.56838 53.7661 2.99369 53.7661L9.48318 53.7661C11.5796 53.7661 13.4534 52.4583 14.1764 50.4906L21.6422 30.172C22.3237 28.3173 22.2947 26.276 21.5608 24.4415L18.7594 17.4387Z" fill="#04A1F8"/>
</svg>
) : "Arius"}
        </motion.div> */}

<motion.div
      className="relative flex items-center justify-center w-[135px] h-[51px]"
      animate={{
        scale: scrolled ? 0.95 : 1,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >

      <AnimatePresence mode="wait">

        {/* ================= LOGO STATE ================= */}
        {!showText && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <svg width="135" height="51" viewBox="0 0 135 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.1577 3.67179C25.0201 3.67166 27.5942 5.41426 28.6573 8.0719L43.0021 43.9312C43.5276 45.2449 42.5601 46.674 41.1451 46.674L37.0128 46.674C34.5039 46.674 32.2599 45.113 31.3874 42.7608L17.8871 6.3675C17.4025 5.06113 18.3688 3.67197 19.7621 3.67191L22.1577 3.67179Z" fill="#04A1F8"/>
              <path d="M16.5251 15.7338C15.8589 14.0684 13.5066 14.0542 12.8203 15.7113L1.14622 43.9C0.600862 45.2168 1.56872 46.6652 2.99403 46.6652L7.77165 46.6652C9.86804 46.6652 11.7418 45.3575 12.4649 43.3897L18.6469 26.5649C19.3284 24.7102 19.2994 22.6689 18.5655 20.8344L16.5251 15.7338Z" fill="#04A1F8"/>
              <path d="M128.368 37.3583C127.098 37.3583 125.91 37.1348 124.805 36.688C123.723 36.2411 122.805 35.6178 122.053 34.8181L124.099 32.1016C124.852 32.7837 125.545 33.2776 126.18 33.5834C126.839 33.8656 127.427 34.0067 127.944 34.0067C128.344 34.0067 128.697 33.9714 129.003 33.9009C129.332 33.8068 129.591 33.6774 129.779 33.5128C129.967 33.3246 130.061 33.0894 130.061 32.8072C130.061 32.4074 129.897 32.0899 129.567 31.8547C129.262 31.6195 128.862 31.4313 128.368 31.2902C127.874 31.1255 127.345 30.9609 126.78 30.7963C125.369 30.3494 124.346 29.7026 123.711 28.8559C123.099 27.9857 122.794 27.0449 122.794 26.0335C122.794 25.2574 122.994 24.4812 123.393 23.7051C123.817 22.9054 124.475 22.2468 125.369 21.7294C126.286 21.1884 127.462 20.918 128.897 20.918C130.191 20.918 131.284 21.0473 132.178 21.306C133.072 21.5648 133.918 21.9881 134.718 22.5761L132.848 25.469C132.401 25.1162 131.896 24.8222 131.331 24.5871C130.79 24.3283 130.285 24.1872 129.814 24.1637C129.391 24.1402 129.026 24.1872 128.721 24.3048C128.438 24.4224 128.215 24.5753 128.05 24.7634C127.886 24.9516 127.803 25.1515 127.803 25.3632C127.78 25.8101 127.944 26.1629 128.297 26.4216C128.674 26.6803 129.144 26.8802 129.708 27.0213C130.273 27.1625 130.826 27.3271 131.367 27.5153C132.119 27.7505 132.766 28.068 133.307 28.4678C133.848 28.8676 134.259 29.3498 134.542 29.9143C134.847 30.4552 135 31.1138 135 31.8899C135 32.8307 134.753 33.7245 134.259 34.5712C133.789 35.3944 133.06 36.0647 132.072 36.5821C131.108 37.0996 129.873 37.3583 128.368 37.3583Z" fill="black"/>
              <path d="M107.73 37.787C106.343 37.787 105.178 37.3636 104.238 36.5169C103.297 35.6467 102.803 34.5295 102.756 33.1653V21.6289H107.695V31.3308C107.742 32.0129 107.918 32.5656 108.224 32.9889C108.53 33.3888 109.047 33.5887 109.777 33.5887C110.506 33.5887 111.129 33.3417 111.646 32.8478C112.187 32.3539 112.599 31.6836 112.881 30.8369C113.187 29.9667 113.34 28.9906 113.34 27.9087V21.6289H118.279V37.0461H113.798L113.41 34.2237L113.481 34.5413C113.128 35.1763 112.681 35.7408 112.14 36.2347C111.599 36.7286 110.952 37.1049 110.2 37.3636C109.471 37.6459 108.648 37.787 107.73 37.787Z" fill="black"/>
              <path d="M92.7328 21.6216H97.6719V37.0388H92.7328V21.6216ZM92.627 16.1533C92.627 15.4242 92.9092 14.8244 93.4737 14.354C94.0617 13.8836 94.6849 13.6484 95.3435 13.6484C96.002 13.6484 96.6018 13.8836 97.1427 14.354C97.7072 14.8244 97.9895 15.4242 97.9895 16.1533C97.9895 16.8824 97.7072 17.4822 97.1427 17.9526C96.6018 18.3994 96.002 18.6229 95.3435 18.6229C94.6849 18.6229 94.0617 18.3994 93.4737 17.9526C92.9092 17.4822 92.627 16.8824 92.627 16.1533Z" fill="black"/>
              <path d="M82.705 21.6277L83.1636 25.8613L83.0578 25.2262C83.5047 24.309 84.1162 23.5328 84.8923 22.8978C85.6685 22.2392 86.4329 21.7336 87.1855 21.3808C87.9617 21.028 88.5497 20.8516 88.9495 20.8516L88.7025 25.7907C87.5501 25.6496 86.5622 25.8378 85.739 26.3552C84.9159 26.8726 84.2808 27.5547 83.8339 28.4014C83.3871 29.2481 83.1636 30.1183 83.1636 31.0121V37.0449H78.2598V21.6277H82.705Z" fill="black"/>
              <path d="M51.5801 37.0436L63.2929 10.0547H63.5752L75.288 37.0436H69.361L61.8817 18.0632L65.5861 15.523L56.6251 37.0436H51.5801ZM59.5886 27.6592H67.3854L69.1846 31.9633H58.001L59.5886 27.6592Z" fill="black"/>
            </svg>
          </motion.div>
        )}

        {/* ================= TEXT STATE ================= */}
        {showText && (
          <motion.div
            key="text"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)", y: 10 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-2xl font-bold tracking-tight text-black"
          >
            <svg width="44" height="51" viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0969 3.6636C24.9593 3.66347 27.5334 5.40607 28.5965 8.06371L42.9029 43.8271C43.4284 45.1408 42.4609 46.5699 41.046 46.5699L36.9387 46.5699C34.4299 46.5699 32.1859 45.0089 31.3133 42.6567L17.8486 6.35931C17.364 5.05294 18.3303 3.66378 19.7237 3.66372L22.0969 3.6636Z" fill="#04A1F8"/>
              <path d="M16.4908 15.7131C15.8246 14.0478 13.4723 14.0336 12.7861 15.6907L1.14475 43.8002C0.599391 45.117 1.56725 46.5654 2.99256 46.5654L7.74507 46.5654C9.84146 46.5654 11.7153 45.2576 12.4383 43.2899L18.6015 26.5164C19.283 24.6617 19.254 22.6204 18.5201 20.7858L16.4908 15.7131Z" fill="#04A1F8"/>
            </svg>
          </motion.div>
        )}

      </AnimatePresence>

    </motion.div>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">

          {/* About */}
          <a href="#" className="text-[15px] font-bold text-[#383a3f] hover:text-black">
            About
          </a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setResourcesOpen(false);
              }}
              className="text-[15px] font-bold text-[#383a3f] hover:text-black"
            >
              Services ▾
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-48 rounded-xl border border-white/10 bg-black/80 p-2 text-white backdrop-blur-md"
                >
                  <a className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
                    Menu 1
                  </a>
                  <a className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
                    Menu 2
                  </a>
                  <a className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
                    Menu 3
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Case Study */}
          <a href="#" className="text-[15px] font-bold text-[#383a3f] hover:text-black">
            Case Study
          </a>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setResourcesOpen(!resourcesOpen);
                setServicesOpen(false);
              }}
              className="text-[15px] font-bold text-[#383a3f] hover:text-black"
            >
              Resources ▾
            </button>

            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-48 rounded-xl border border-white/10 bg-black/80 p-2 text-white backdrop-blur-md"
                >
                  <a className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
                    Blog
                  </a>
                  <a className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
                    Guides
                  </a>
                  <a className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
                    Docs
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-[#1c1f26] px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 cursor-pointer"
          >
            Book a Call
          </motion.button>
        </div>

      </div>
    </motion.nav>
  );
}