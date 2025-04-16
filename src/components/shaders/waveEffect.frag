// src/shaders/waveEffect.frag.js

const waveEffectFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float uHover;
  uniform float uTime;
  varying vec2 vUv;
  
  void main() {
    // Create a wave effect based on time and hover
    float waveStrength = 0.515 * uHover;
    vec2 wavyUv = vUv;
    
    // Apply wave only when hovering
    if (uHover > 0.0) {
      wavyUv.x += sin(vUv.y * 10.0 + uTime * 2.0) * waveStrength;
      wavyUv.y += cos(vUv.x * 10.0 + uTime * 2.0) * waveStrength;
      
      // Add perspective shift effect
      vec2 center = vec2(0.5, 0.5);
      vec2 dir = center - vUv;
      float dist = length(dir);
      
      // Create subtle zoom toward center on hover
      wavyUv = vUv +  dist * 0.025 * uHover;
    }
    
    vec4 texColor = texture2D(tDiffuse, wavyUv);
    
    
    gl_FragColor = texColor;
  }
`;

export default waveEffectFragmentShader;