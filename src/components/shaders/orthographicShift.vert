// src/shaders/orthographicShift.vert.js

const orthographicShiftVertexShader = `
  uniform float uHover;
  uniform float uTime;
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    
    // Original position
    vec3 pos = position;
    
    // Add a subtle motion effect
    if (uHover > 0.0) {
      // Create a small distortion that simulates turning to orthographic
      float distortion = uHover * 0.15;
      
      // Simulate changing from perspective to orthographic view
      // by flattening the z based on distance from center
      float distanceFromCenter = length(position.xy);
      pos.z -= distortion * distanceFromCenter * distanceFromCenter;
      
      // Create slight rotation effect
      float angle = uHover * 0.15;
      float cosA = cos(angle);
      float sinA = sin(angle);
      
      pos.x = cosA * position.x - sinA * position.z;
      pos.z = sinA * position.x + cosA * position.z;
    }
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export default orthographicShiftVertexShader;