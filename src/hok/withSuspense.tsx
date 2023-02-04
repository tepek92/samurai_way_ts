import React, {ReactNode, Suspense} from 'react';
import {Preloader} from "../components/common/Preloader/Preloader";

export const withSuspense = (component: ReactNode) => {
  return (
    <Suspense fallback={<Preloader/>}>{component}</Suspense>
  );
};