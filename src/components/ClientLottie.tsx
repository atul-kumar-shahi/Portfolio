'use client';

import Lottie from 'lottie-react';
import type { ComponentProps } from 'react';

type ClientLottieProps = {
  animationData: ComponentProps<typeof Lottie>['animationData'];
  loop?: boolean;
  className?: string;
};

export default function ClientLottie({
  animationData,
  loop = true,
  className = '',
}: ClientLottieProps) {
  return (
    <div className={`scale-150 ${className}`}>
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
}
