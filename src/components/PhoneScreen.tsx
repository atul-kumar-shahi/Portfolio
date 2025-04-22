'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import React from 'react';

const ClientLottie = dynamic(() => import('@/components/ClientLottie'), {
  ssr: false,
});

type PhoneScreenProps = {
  animationData: ComponentProps<typeof ClientLottie>['animationData'];
};

export default function PhoneScreen({ animationData }: PhoneScreenProps) {
  return (
    <div className="flex justify-end h-screen overflow-hidden px-5 py-4">
      <motion.div
        className="iphone-frame cursor-grab active:cursor-grabbing fixed -right-2 mr-10"
        whileTap={{ scale: 0.95 }}
      >
        <div className="iphone-notch"></div>
        <div className="iphone-screen">
          <ClientLottie animationData={animationData} className=''/>
        </div>
        <div className="iphone-nav"></div>
      </motion.div>
    </div>
  );
}
