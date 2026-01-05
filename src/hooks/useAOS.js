import { useEffect } from 'react';
import AOS from 'aos';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 80,
    });
    
    return () => {
      AOS.refresh();
    };
  }, []);
};

export default useAOS;