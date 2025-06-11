import React, { useEffect, useRef } from 'react';
import '../styles/GraphAnimation.css';

const BinaryTreeAnimation = () => {
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
    
    // Node class for binary tree
    class TreeNode {
      constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
        this.radius = 20;
        this.color = '#00ff41';
        this.left = null;
        this.right = null;
        this.highlighted = false;
      }
      
      draw() {
        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.highlighted ? '#00ffff' : this.color;
        ctx.fill();
        ctx.strokeStyle = '#004e92';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw value
        ctx.fillStyle = '#000';
        ctx.font = '16px Courier New';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.value, this.x, this.y);
        
        // Draw connections to children
        ctx.strokeStyle = this.highlighted ? 'rgba(0, 255, 255, 0.7)' : 'rgba(0, 255, 65, 0.7)';
        ctx.lineWidth = 2;
        
        if (this.left) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y + this.radius);
          ctx.lineTo(this.left.x, this.left.y - this.radius);
          ctx.stroke();
        }
        
        if (this.right) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y + this.radius);
          ctx.lineTo(this.right.x, this.right.y - this.radius);
          ctx.stroke();
        }
      }
    }
    
    // Create binary tree
    const createTree = (depth, x, y, horizontalSpacing, verticalSpacing) => {
      if (depth === 0) return null;
      
      const node = new TreeNode(x, y, Math.floor(Math.random() * 100));
      
      if (depth > 1) {
        const newHorizontalSpacing = horizontalSpacing / 2;
        const newVerticalSpacing = verticalSpacing * 0.8;
        
        node.left = createTree(depth - 1, x - horizontalSpacing, y + verticalSpacing, newHorizontalSpacing, newVerticalSpacing);
        node.right = createTree(depth - 1, x + horizontalSpacing, y + verticalSpacing, newHorizontalSpacing, newVerticalSpacing);
      }
      
      return node;
    };
    
    // Create tree with root at center top
    const rootX = canvas.width / 2;
    const rootY = 100;
    const horizontalSpacing = canvas.width / 4;
    const verticalSpacing = 120;
    
    const root = createTree(4, rootX, rootY, horizontalSpacing, verticalSpacing);
    
    // Tree traversal animation
    const traversalOrder = [];
    
    const inOrderTraversal = (node) => {
      if (!node) return;
      inOrderTraversal(node.left);
      traversalOrder.push(node);
      inOrderTraversal(node.right);
    };
    
    inOrderTraversal(root);
    
    let currentTraversalIndex = 0;
    
    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw all nodes and connections
      const drawTree = (node) => {
        if (!node) return;
        node.draw();
        if (node.left) drawTree(node.left);
        if (node.right) drawTree(node.right);
      };
      
      drawTree(root);
      
      // Highlight current node in traversal
      if (traversalOrder.length > 0) {
        // Reset previous highlight
        traversalOrder.forEach(node => node.highlighted = false);
        
        // Highlight current node
        traversalOrder[currentTraversalIndex].highlighted = true;
        
        // Move to next node every second
        if (timestamp % 1000 < 50) {
          currentTraversalIndex = (currentTraversalIndex + 1) % traversalOrder.length;
        }
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

export default BinaryTreeAnimation;