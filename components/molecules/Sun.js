import React from "react";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

import { sunSlide } from "../../utils/motion";

export default function Sun() {
  return (
    <motion.div
      animate={{
        rotate: [0, 360],
      }}
      transition={{ duration: 10, repeat: Infinity }}
      className="  h-full w-screen"
    >
      <Spline scene="https://prod.spline.design/2yBeogvUluorjGaw/scene.splinecode" />
    </motion.div>
  );
}
