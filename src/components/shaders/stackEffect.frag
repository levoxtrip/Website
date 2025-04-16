// src/shaders/stackEffect.frag.js

const stackEffectFragmentShader = `
precision mediump float;
  uniform sampler2D tDiffuse;
  uniform float uHover;
  uniform float uTime;
  varying vec2 vUv;
  
  void main() {
    // Base effect - just show the texture
    vec4 texColor = texture2D(tDiffuse, vUv);
    
    // Only apply effect when hovering
    if (uHover > 0.0) {
      // Create two additional "copies" with offset
      vec4 texColor2 = texture2D(tDiffuse, vUv + vec2(0.02, -0.02) * uHover);
      vec4 texColor3 = texture2D(tDiffuse, vUv + vec2(0.04, -0.04) * uHover);
      
      // Output the combined color with the hover effect
      gl_FragColor = mix(texColor, 
                        mix(texColor2 * 0.9, texColor3 * 0.8, 0.5), 
                        uHover * 0.6);
    } else {
      gl_FragColor = texColor;
    }
  }
`;

export default stackEffectFragmentShader;