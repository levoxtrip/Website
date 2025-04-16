// src/shaders/tunnelEffect.frag.js

const tunnelEffectFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float uHover;
  uniform float uTime;
  uniform vec2 uMouse;  // Mouse position normalized (0-1)
  varying vec2 vUv;
  
  // Helper function for repeating textures
  vec4 sampleWithWrap(sampler2D tex, vec2 uv) {
    // Ensure UVs are always within the proper range using fract
    return texture2D(tex, fract(uv));
  }
  
  void main() {
    // Get normal texture color
    vec4 normalColor = texture2D(tDiffuse, vUv);
    
    // Calculate distance between mouse position and current fragment
    vec2 mousePos = uMouse;
    float distanceFromMouse = length(vUv - mousePos);
    
    // Convert distance to effect strength - closer means stronger effect
    // Clamp the max distance to create a "radius of influence"
    float maxDistance = 1.2;  // Increased radius of influence around mouse
    float effectStrength = 1.0 - clamp(distanceFromMouse / maxDistance, 0.0, 1.0);
    
    // Calculate overall tunnel effect strength
    float tunnelStrength = uHover * effectStrength;
    
    // Always calculate tunnel effect, but blend based on strength
    // Convert UV coordinates to centered coordinates (-1 to 1)
    vec2 p = (vUv * 2.0 - 1.0);
    
    // Calculate polar coordinates
    float radius = length(p);
    float angle = atan(p.y, p.x);
    
    // Create tunnel effect parameters
    float tunnelSpeed = 0.5 * uTime * max(tunnelStrength, 0.01); // Small minimum to keep calculation active
    float twistAmount = 0.50 * max(tunnelStrength, 0.01);
    
    // Create tunnel coordinates - these formulas map the texture onto the tunnel walls
    float tunnelRadius = radius;
    
    // Create repeating pattern along tunnel
    float repeat = 1.0 + 1.0 * max(tunnelStrength, 0.01);
    
    // Calculate final texture coordinates for tunnel
    vec2 tunnelUV = vec2(
      // Angle creates the circular wrapping
      angle / (2.0 * 3.14159) + 0.5 + tunnelSpeed * 0.1, 
      
      // Radius determines how far down the tunnel we're looking
      // Modulo to create repeating sections
      mod(tunnelRadius * repeat + tunnelSpeed, 1.0)
    );
    
    // Add some twist to the tunnel based on hover
    tunnelUV.x += tunnelUV.y * twistAmount * sin(uTime * 0.5);
    
    // Sample texture with tunnel coordinates and explicit wrapping
    vec4 tunnelColor = sampleWithWrap(tDiffuse, tunnelUV);
    
    // Smoothly blend between normal image and tunnel effect based on tunnel strength
    // This ensures full color blending without any transparency
    vec4 blendedColor = mix(normalColor, tunnelColor, smoothstep(0.0, 0.10, tunnelStrength));
    gl_FragColor = vec4(blendedColor.rgb, 1.0); // Force full opacity
  }
`;

export default tunnelEffectFragmentShader;