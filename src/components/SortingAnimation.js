import React, { useEffect, useRef } from 'react';
import '../styles/GraphAnimation.css';

const SortingAnimation = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Create array of bars
    const barCount = 40;
    const barWidth = (canvas.width * 0.7) / barCount;
    const barSpacing = 1;
    const maxBarHeight = canvas.height * 0.15;
    const startX = canvas.width * 0.15;
    const startY = canvas.height * 0.95;
    
    let bars = [];
    
    for (let i = 0; i < barCount; i++) {
      bars.push({
        height: Math.random() * maxBarHeight,
        color: 'rgba(0, 255, 65, 0.3)',
        comparing: false
      });
    }
    
    // Quick sort animation
    let sortingSteps = [];
    let currentStep = 0;
    
    const partition = (arr, low, high, steps) => {
      const pivot = arr[high].height;
      let i = low - 1;
      
      for (let j = low; j < high; j++) {
        steps.push({ compare: [j, high] });
        
        if (arr[j].height <= pivot) {
          i++;
          steps.push({ swap: [i, j] });
          const temp = arr[i].height;
          arr[i].height = arr[j].height;
          arr[j].height = temp;
        }
      }
      
      steps.push({ swap: [i + 1, high] });
      const temp = arr[i + 1].height;
      arr[i + 1].height = arr[high].height;
      arr[high].height = temp;
      
      return i + 1;
    };
    
    const quickSort = (arr, low, high, steps) => {
      if (low < high) {
        const pi = partition(arr, low, high, steps);
        quickSort(arr, low, pi - 1, steps);
        quickSort(arr, pi + 1, high, steps);
      }
    };
    
    // Create a copy of bars for sorting
    const barsCopy = bars.map(bar => ({ ...bar }));
    quickSort(barsCopy, 0, barsCopy.length - 1, sortingSteps);
    
    // Animation loop
    let lastStepTime = 0;
    const stepInterval = 150; // milliseconds
    
    const animate = (timestamp) => {
      // Draw bars with subtle opacity
      for (let i = 0; i < bars.length; i++) {
        const x = startX + i * (barWidth + barSpacing);
        const y = startY - bars[i].height;
        
        ctx.fillStyle = bars[i].comparing ? 'rgba(0, 255, 255, 0.5)' : 'rgba(0, 255, 65, 0.2)';
        ctx.fillRect(x, y, barWidth, bars[i].height);
      }
      
      // Process sorting step
      if (timestamp - lastStepTime > stepInterval && sortingSteps.length > 0) {
        // Reset comparing state
        for (let bar of bars) {
          bar.comparing = false;
        }
        
        if (currentStep >= sortingSteps.length) {
          // Reset and shuffle bars
          for (let i = 0; i < bars.length; i++) {
            bars[i].height = Math.random() * maxBarHeight;
            bars[i].comparing = false;
          }
          
          // Regenerate sorting steps
          sortingSteps = [];
          const barsCopy = bars.map(bar => ({ ...bar }));
          quickSort(barsCopy, 0, barsCopy.length - 1, sortingSteps);
          currentStep = 0;
        } else {
          const step = sortingSteps[currentStep];
          
          if (step.compare) {
            bars[step.compare[0]].comparing = true;
            bars[step.compare[1]].comparing = true;
          }
          
          if (step.swap) {
            const [i, j] = step.swap;
            const temp = bars[i].height;
            bars[i].height = bars[j].height;
            bars[j].height = temp;
            
            bars[i].comparing = true;
            bars[j].comparing = true;
          }
          
          currentStep++;
        }
        
        lastStepTime = timestamp;
      }
      
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate(0);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="graph-animation sorting-animation" />;
};

export default SortingAnimation;