'use client';

import { useEffect, useState } from 'react';

const useBootstrap = () => {
  const [bootstrap, setBootstrap] = useState<any>(null);

  useEffect(() => {
    const loadBootstrap = async () => {
      if (typeof window !== 'undefined') {
        const bootstrapModule = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        setBootstrap(bootstrapModule.default);
      }
    };

    loadBootstrap();
  }, []);

  return bootstrap;
};

export default useBootstrap;
