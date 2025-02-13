// src/hooks/useVisitorData.js
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

export const useVisitor = () => {
  const { data } = useVisitorData({ extendedResult: true }, { immediate: true });

  return { data };
};