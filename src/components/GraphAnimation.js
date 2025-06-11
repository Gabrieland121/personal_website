import React, { useEffect, useRef } from 'react';
import '../styles/GraphAnimation.css';

const GraphAnimation = () => {
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
    
    // Node class
    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 2;
        this.color = '#00ff41';
        this.connections = [];
        this.visited = false;
        this.active = false;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * (this.active ? 2.5 : 1), 0, Math.PI * 2);
        
        if (this.active) {
          ctx.fillStyle = '#00ffff';
          // Add glow effect
          ctx.shadowColor = '#00ffff';
          ctx.shadowBlur = 20;
        } else if (this.visited) {
          ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        } else {
          ctx.fillStyle = this.color;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    
    // Create nodes with better distribution
    const nodeCount = 90;
    const nodes = [];
    
    // Create nodes with better distribution
    for (let i = 0; i < nodeCount; i++) {
      let x, y, tooClose;
      
      do {
        tooClose = false;
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        
        // Check if too close to existing nodes
        for (let j = 0; j < nodes.length; j++) {
          const dx = x - nodes[j].x;
          const dy = y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 30) {
            tooClose = true;
            break;
          }
        }
      } while (tooClose);
      
      nodes.push(new Node(x, y));
    }
    
    // Create connections between nodes - more interconnected
    const maxDistance = 200;
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // Add some randomness to connections
          if (Math.random() > 0.6) {
            nodes[i].connections.push(j);
            nodes[j].connections.push(i);
          }
        }
      }
      
      // Ensure each node has at least 2 connections
      if (nodes[i].connections.length < 2) {
        // Find closest nodes
        const distances = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i !== j) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            distances.push({ index: j, distance: Math.sqrt(dx * dx + dy * dy) });
          }
        }
        
        // Sort by distance
        distances.sort((a, b) => a.distance - b.distance);
        
        // Add connections to closest nodes
        for (let k = 0; k < Math.min(2, distances.length); k++) {
          if (!nodes[i].connections.includes(distances[k].index)) {
            nodes[i].connections.push(distances[k].index);
            nodes[distances[k].index].connections.push(i);
          }
        }
      }
    }
    
    // BFS traversal animation
    let currentNode = 0;
    let queue = [currentNode];
    nodes[currentNode].visited = true;
    nodes[currentNode].active = true;
    
    const traverseStep = () => {
      // Reset active nodes
      for (const node of nodes) {
        node.active = false;
      }
      
      if (queue.length > 0) {
        const node = queue.shift();
        nodes[node].active = true;
        
        for (const connection of nodes[node].connections) {
          if (!nodes[connection].visited) {
            nodes[connection].visited = true;
            queue.push(connection);
          }
        }
      } else {
        // Reset traversal when complete
        for (const node of nodes) {
          node.visited = false;
        }
        currentNode = Math.floor(Math.random() * nodes.length);
        queue = [currentNode];
        nodes[currentNode].visited = true;
        nodes[currentNode].active = true;
      }
    };
    
    // Animation loop
    let lastTraverseTime = 0;
    const traverseInterval = 300; // milliseconds
    
    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (const connection of nodes[i].connections) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[connection].x, nodes[connection].y);
          
          if (nodes[i].visited && nodes[connection].visited) {
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.7)';
            ctx.lineWidth = 1.5;
          } else if (nodes[i].active || nodes[connection].active) {
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.9)';
            ctx.lineWidth = 2;
            // Add glow effect
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 15;
          } else {
            ctx.strokeStyle = 'rgba(0, 255, 65, 0.3)';
            ctx.lineWidth = 1;
          }
          
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }
      
      // Draw nodes
      for (const node of nodes) {
        node.draw();
      }
      
      // Traverse step at interval
      if (timestamp - lastTraverseTime > traverseInterval) {
        traverseStep();
        lastTraverseTime = timestamp;
      }
      
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate(0);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="graph-animation" />;
};

export default GraphAnimation;