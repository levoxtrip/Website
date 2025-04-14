import React, { useRef, useEffect, useState } from "react";

// Vertex shader for WebGL
const vertexShaderSource = `
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
  }
`;

// Function to create a shader
const createShader = (gl, source, type) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Error compiling shader:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
};

// WebGL Pixelation Component
const PixelatedBackground = ({ isExpanded }) => {
  const canvasRef = useRef(null);
  const [pixelSize, setPixelSize] = useState(10); // Adjust pixel size

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Create shaders
    const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(
      gl,
      pixelationShaderSource,
      gl.FRAGMENT_SHADER
    );

    // Create program and link shaders
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Error linking program:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Get attribute and uniform locations
    const positionAttribLocation = gl.getAttribLocation(program, "a_position");
    const texCoordAttribLocation = gl.getAttribLocation(program, "a_texCoord");
    const pixelSizeUniformLocation = gl.getUniformLocation(
      program,
      "u_pixelSize"
    );

    // Set up vertices for the full-screen quad
    const vertices = new Float32Array([
      -1, 1, 0, 0, -1, -1, 0, 1, 1, 1, 1, 0, 1, -1, 1, 1,
    ]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Enable attributes
    gl.vertexAttribPointer(
      positionAttribLocation,
      2,
      gl.FLOAT,
      false,
      4 * 4,
      0
    );
    gl.vertexAttribPointer(
      texCoordAttribLocation,
      2,
      gl.FLOAT,
      false,
      4 * 4,
      2 * 4
    );
    gl.enableVertexAttribArray(positionAttribLocation);
    gl.enableVertexAttribArray(texCoordAttribLocation);

    // Set pixel size uniform
    gl.uniform1f(pixelSizeUniformLocation, isExpanded ? 20 : 0);

    // Create a framebuffer to render into (for pixelation effect)
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    // Render the content with the pixelated effect...

    // Your rendering logic here (you can capture the scene or content and pass it to the shader)

    // Cleanup
    return () => {
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
      gl.deleteBuffer(vertexBuffer);
      gl.deleteFramebuffer(framebuffer);
    };
  }, [isExpanded]);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
};

export default PixelatedBackground;
