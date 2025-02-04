'use client';

import { AuthProvider } from '@/contexts/auth';
import StyledComponentsRegistry from '@/contexts/styles-registry';

import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <AuthProvider>{children}</AuthProvider>
    </StyledComponentsRegistry>
  );
}