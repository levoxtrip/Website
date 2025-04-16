// src/shaders/pixelTransition.frag.js

const pixelTransitionFragmentShader = `
precision mediump float;
  uniform sampler2D tDiffuse;
  uniform float uHover;
  uniform float uTime;
  varying vec2 vUv;
  
  void main() {
    // Base texture color
    vec4 texColor = texture2D(tDiffuse, vUv);
    
    // Apply pixelation effect on hover
    if (uHover > 0.0) {
      // Calculate pixelation based on hover strength
      float pixelSize = mix(1.0, 20.0, uHover * 0.3);
      
      // Create pixelated UV coordinates
      vec2 pixelatedUV = floor(vUv * pixelSize) / pixelSize;
      
      // Sample with pixelated coordinates
      vec4 pixelatedColor = texture2D(tDiffuse, pixelatedUV);
      
      // Offset color channels for chromatic aberration effect
      float aberrationStrength = 0.01 * uHover;
      vec4 offsetColorR = texture2D(tDiffuse, vUv + vec2(aberrationStrength, 0.0));
      vec4 offsetColorB = texture2D(tDiffuse, vUv - vec2(aberrationStrength, 0.0));
      
      // Create a glitch effect with subtle bands
      float glitchIntensity = uHover * 0.2;
      float glitchLine = step(0.98, sin(vUv.y * 100.0 + uTime * 5.0)) * glitchIntensity;
      
      // Apply all effects
      vec4 glitchColor = vec4(
        offsetColorR.r,
        texColor.g,
        offsetColorB.b,
        texColor.a
      );
      
      // Mix between pixelated and glitch effect
      texColor = mix(texColor, pixelatedColor, uHover * 0.5);
      texColor = mix(texColor, glitchColor, uHover * 0.5);
      
      // Add glitch line
      texColor.rgb += vec3(glitchLine);
    }
    
    gl_FragColor = texColor;
  }
`;

export default pixelTransitionFragmentShader;