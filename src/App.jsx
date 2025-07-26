import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaDownload,
  FaSun,
  FaMoon,
  FaCode, // For job icon (programmer)
} from "react-icons/fa";

const contact = {
  name: "مهدی کاظمی",
  phone: "09393591452",
  jobTitle: "برنامه نویس",
};

export default function NFCBusinessCard() {
  const [dark, setDark] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Function to trigger vibration & sound for NFC feedback
  const handleSaveContact = () => {
    // Vibration (if supported)
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
    // Play sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    // For saving contact, initiate a tel link (or can be improved)
    const link = document.createElement("a");
    link.href = `tel:${contact.phone}`;
    link.click();
  };

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-colors duration-700 ${
        dark ? "bg-stone-950 text-stone-100" : "bg-stone-100 text-stone-900"
      } flex flex-col items-center justify-center p-6 space-y-8`}
    >
      {/* Background Animated Gradient Blobs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full -z-10 top-[-150px] left-[-150px]"
        style={{
          background: dark
            ? "radial-gradient(circle at 30% 30%, #9f7aea80, transparent 70%), radial-gradient(circle at 70% 70%, #f472b680, transparent 70%)"
            : "radial-gradient(circle at 30% 30%, #a78bfa80, transparent 70%), radial-gradient(circle at 70% 70%, #fbbf2470, transparent 70%)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }}
      />

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDark(!dark)}
          className={`text-xl p-2 rounded-full transition-all duration-300 ${
            dark
              ? "bg-stone-800 text-yellow-300"
              : "bg-stone-300 text-yellow-600"
          } hover:scale-105 shadow-md`}
          aria-label="Toggle dark mode"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Name and Job Title with Icon */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-center space-y-2"
      >
        <h1 className="text-5xl font-extrabold tracking-tight">
          {contact.name}
        </h1>
        <motion.div
          className="flex items-center justify-center space-x-3 rtl:space-x-reverse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <FaCode className="text-2xl text-indigo-500" />
          <span className="text-xl font-medium opacity-90">
            {contact.jobTitle}
          </span>
        </motion.div>
      </motion.div>

      {/* Social Icons Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="grid grid-cols-2 gap-6"
      >
        {[
          {
            icon: <FaInstagram />,
            href: "https://instagram.com/mahdi_kazemi2004",
            color: "text-pink-500",
          },
          {
            icon: <FaWhatsapp />,
            href: "https://wa.me/989393591452",
            color: "text-green-500",
            title: "واتساپ شخصی",
          },
          {
            icon: <FaWhatsapp />,
            href: "https://wa.me/989102254699",
            color: "text-lime-400",
            title: "واتساپ بیزینس",
          },
          {
            icon: <FaTelegramPlane />,
            href: "https://t.me/mahdi_kazemi2004",
            color: "text-blue-400",
          },
        ].map((item, index) => (
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            key={index}
            title={item.title || ""}
            className={`w-20 h-20 rounded-full flex items-center justify-center ${
              item.color
            } text-3xl shadow-lg ring-2 ring-transparent hover:ring-${
              dark ? "stone-100" : "stone-900"
            } transition-all duration-300 ${
              dark ? "bg-stone-800" : "bg-stone-200"
            }`}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Save Contact Button */}
      <motion.button
        onClick={handleSaveContact}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
      >
        <FaDownload /> ذخیره مخاطب
      </motion.button>

      {/* Audio for NFC feedback */}
      <audio
        ref={audioRef}
        src="https://actions.google.com/sounds/v1/buttons/button_press.wav"
        preload="auto"
        aria-hidden="true"
      />
    </main>
  );
}
