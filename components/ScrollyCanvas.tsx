"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";

const FRAME_COUNT = 120; // 000 to 119

export default function ScrollyCanvas({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Target the specific container for scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setTimeout(() => setIsLoaded(true), 500);
        }
      };
      
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (progress: number) => {
    if (images.length === 0 || !canvasRef.current) return;

    // Precise frame mapping: progress 0.0 → frame 0, progress 1.0 → frame 119
    const frameIndex = Math.round(progress * (FRAME_COUNT - 1));

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameIndex];
    if (!img || !img.complete) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      renderHeight = canvas.height;
      offsetX = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    drawFrame(latest);
  });

  useEffect(() => {
    const handleResize = () => {
      drawFrame(scrollYProgress.get());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  useEffect(() => {
    if (images.length > 0 && images[0].complete) {
      drawFrame(scrollYProgress.get());
    }
  }, [images]);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
          >
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div 
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              Loading Sequence {loadingProgress}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>
    </>
  );
}
