/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */
// @ts-nocheck 

import * as React from 'react';
import cn from 'classnames';
import { lazy, memo, Suspense } from 'react';

export default memo(function CodeBlockWrapper(props: {
  children: React.ReactNode & {
    props: {
      className: string;
      children: string;
      meta?: string;
    };
  };
  noMargin?: boolean;
  noMarkers?: boolean;
}): any {
  const { children } = props;
  return (
    <Suspense
      fallback={
        <pre
          translate="no"
          dir="ltr"
          className={cn(
            'rounded-lg leading-6 h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg text-[13.6px] overflow-hidden'
          )}>
          <div className="py-[18px] ps-5 font-normal ">
            <p className="sp-pre-placeholder overflow-hidden">{children}</p>
          </div>
        </pre>
      }></Suspense>
  );
});
