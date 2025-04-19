// components/ClientLottie.tsx
'use client';

import Lottie from 'lottie-react';
import animationData from '../../public/animation.json'; // adjust path

export default function ClientLottie() {
  return (
    <div className='scale-150'>

        <Lottie animationData={animationData} loop />
    </div>
  );
}
