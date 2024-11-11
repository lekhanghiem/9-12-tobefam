// icons/CustomIcons.tsx
import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function CustomIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3zM7 8a1 1 0 000 2h6a1 1 0 100-2H7zm-4 5a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </SvgIcon>
  );
}

export function DownloadIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M9 2a7 7 0 000 14v-2a5 5 0 110-10v2a3 3 0 000 6 3 3 0 000-6V2zm0 8a1 1 0 110 2 1 1 0 010-2z" />
    </SvgIcon>
  );
}

export function LookupIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" d="M8.5 3a1.5 1.5 0 013 0v7.879l2.293-2.292a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8.5 10.879V3z" clipRule="evenodd" />
    </SvgIcon>
  );
}
