'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ClientLottie = dynamic(() => import('@/components/ClientLottie'), {
  ssr: false,
});

export default function PhoneScreen() {
  return (
    <div className="flex  justify-end h-screen bg-black overflow-hidden px-5 py-4">
      <motion.div
        className="iphone-frame cursor-grab active:cursor-grabbing fixed -right-2 mr-10"
    //    drag
        whileTap={{ scale: 0.95 }}
      >
        <div className="iphone-notch"></div>
        <div className="iphone-screen">
          <ClientLottie />
        </div>
        <div className="iphone-nav"></div>
      </motion.div>
    </div>
  );
}
