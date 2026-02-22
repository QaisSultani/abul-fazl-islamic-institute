'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomScrollbar() {
  const [mounted, setMounted] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  // Only render on client to avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Update scroll percentage when page scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollPercentage(scrolled);

      // Show scrollbar when scrolling
      setIsVisible(true);

      // Hide after 1 second of no scrolling
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
      hideTimeout.current = setTimeout(() => {
        if (!isDragging && !isHovering) {
          setIsVisible(false);
        }
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, [isDragging, isHovering]);

  // Handle thumb drag
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setIsVisible(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!trackRef.current) return;

      const track = trackRef.current;
      const trackRect = track.getBoundingClientRect();
      const trackHeight = trackRect.height;

      // Calculate new scroll position based on mouse position
      const mouseY = e.clientY - trackRect.top;
      const percentage = Math.max(0, Math.min(1, mouseY / trackHeight));

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: percentage * docHeight,
        behavior: 'auto'
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Calculate thumb height based on viewport to document ratio
  const navbarHeight = 80;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const availableTrackHeight = viewportHeight - navbarHeight;

  // Calculate thumb height as percentage of available track height
  const calculatedThumbHeight = (viewportHeight / documentHeight) * 100;
  const minThumbHeightPx = 40;
  const minThumbHeightPercentage = (minThumbHeightPx / availableTrackHeight) * 100;

  // Use the larger of calculated or minimum height
  const thumbHeightPercentage = Math.max(minThumbHeightPercentage, Math.min(100, calculatedThumbHeight));
  const thumbTopPosition = scrollPercentage * (100 - thumbHeightPercentage);

  return (
    <div
      ref={trackRef}
      className={`fixed right-0.5 z-30 w-1.5 hover:w-2.5 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        top: `${navbarHeight}px`,
        height: `calc(100vh - ${navbarHeight}px)`,
        transition: 'width 0.3s ease, opacity 0.3s ease',
      }}
      onMouseEnter={() => {
        setIsVisible(true);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        if (!isDragging) {
          setIsVisible(false);
        }
      }}
    >
      {/* Scrollbar thumb */}
      <div
        className="absolute right-0 w-full rounded-full cursor-pointer bg-emerald-dark"
        style={{
          top: `${thumbTopPosition}%`,
          height: `${thumbHeightPercentage}%`,
          opacity: isHovering ? 1 : 0.7,
          transition: 'opacity 0.2s ease',
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}
