import React, { useEffect, useRef } from 'react';
import '../styles/AVLAnimation.css';

const AVLAnimation = ({ position }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    canvas.width = 120;
    canvas.height = 120;
    
    // AVL Tree Node class
    class AVLNode {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.x = 0;
        this.y = 0;
      }
    }
    
    // AVL Tree class
    class AVLTree {
      constructor() {
        this.root = null;
        this.rotationPhase = 0;
        this.rotationSteps = 60;
        this.currentStep = 0;
        this.rotationType = 'right'; // 'right', 'left', 'rightLeft', 'leftRight'
        this.rotationTypes = ['right', 'left', 'rightLeft', 'leftRight'];
        this.rotationIndex = 0;
      }
      
      // Get height of a node
      height(node) {
        return node ? node.height : 0;
      }
      
      // Get balance factor of a node
      getBalanceFactor(node) {
        return node ? this.height(node.left) - this.height(node.right) : 0;
      }
      
      // Right rotation
      rightRotate(y) {
        if (!y || !y.left) return y;
        
        const x = y.left;
        const T2 = x.right;
        
        x.right = y;
        y.left = T2;
        
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        
        return x;
      }
      
      // Left rotation
      leftRotate(x) {
        if (!x || !x.right) return x;
        
        const y = x.right;
        const T2 = y.left;
        
        y.left = x;
        x.right = T2;
        
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        
        return y;
      }
      
      // Create a simple 3-node AVL tree
      createSampleTree() {
        this.root = new AVLNode(20);
        this.root.left = new AVLNode(10);
        this.root.right = new AVLNode(30);
        this.updateNodePositions();
      }
      
      // Update node positions for drawing
      updateNodePositions() {
        const updatePosition = (node, x, y, level) => {
          if (!node) return;
          
          node.x = x;
          node.y = y;
          
          const gap = 30 / (level + 1);
          updatePosition(node.left, x - gap, y + 30, level + 1);
          updatePosition(node.right, x + gap, y + 30, level + 1);
        };
        
        updatePosition(this.root, canvas.width / 2, 30, 1);
      }
      
      // Perform rotation animation
      animateRotation() {
        this.currentStep++;
        
        if (this.currentStep >= this.rotationSteps) {
          this.currentStep = 0;
          this.rotationIndex = (this.rotationIndex + 1) % this.rotationTypes.length;
          this.rotationType = this.rotationTypes[this.rotationIndex];
          
          // Reset tree to initial state
          this.createSampleTree();
        }
        
        // Perform the actual rotation at the midpoint
        if (this.currentStep === Math.floor(this.rotationSteps / 2)) {
          if (this.rotationType === 'right' && this.root && this.root.left) {
            this.root = this.rightRotate(this.root);
          } else if (this.rotationType === 'left' && this.root && this.root.right) {
            this.root = this.leftRotate(this.root);
          } else if (this.rotationType === 'rightLeft' && this.root && this.root.right) {
            if (this.root.right.left) {
              this.root.right = this.rightRotate(this.root.right);
            }
            this.root = this.leftRotate(this.root);
          } else if (this.rotationType === 'leftRight' && this.root && this.root.left) {
            if (this.root.left.right) {
              this.root.left = this.leftRotate(this.root.left);
            }
            this.root = this.rightRotate(this.root);
          }
          this.updateNodePositions();
        }
      }
      
      // Draw the tree
      draw(ctx) {
        const drawNode = (node) => {
          if (!node) return;
          
          // Draw connections to children
          ctx.strokeStyle = '#00ff41';
          ctx.lineWidth = 2;
          
          if (node.left) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node.left.x, node.left.y);
            ctx.stroke();
          }
          
          if (node.right) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node.right.x, node.right.y);
            ctx.stroke();
          }
          
          // Draw node
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = '#00ff41';
          ctx.fill();
          ctx.strokeStyle = '#004e92';
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Draw value
          ctx.fillStyle = '#000';
          ctx.font = '10px Courier New';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.value, node.x, node.y);
          
          // Draw children
          if (node.left) drawNode(node.left);
          if (node.right) drawNode(node.right);
        };
        
        drawNode(this.root);
      }
    }
    
    // Create and initialize AVL tree
    const avlTree = new AVLTree();
    avlTree.createSampleTree();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      avlTree.animateRotation();
      avlTree.draw(ctx);
      
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [position]);
  
  return <canvas ref={canvasRef} className={`avl-animation ${position}`} />;
};

export default AVLAnimation;