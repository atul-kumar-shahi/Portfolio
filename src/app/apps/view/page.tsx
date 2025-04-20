// app/apps/view/page.tsx

"use client";

import { Suspense } from "react";
import ViewPage from "./view-content";

const Page = () => {
  return (
    <Suspense fallback={<div className="text-white p-8">Loading app details...</div>}>
      <ViewPage />
    </Suspense>
  );
};

export default Page;
