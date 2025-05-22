'use client';

import { useRef, useState } from 'react';

export default function ResizableSidebar() {
  const [width, setWidth] = useState(256); // px
  const [dragging, setDragging] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    const newWidth = Math.max(150, e.clientX);
    setWidth(newWidth);
  };

  const handleMouseUp = () => setDragging(false);
  const handleMouseDown = () => setDragging(true);

  const handleSave = async () => {
    const remWidth = (width / 16).toFixed(2) + 'rem';

    await fetch('/api/save-sidebar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ width: remWidth }),
    });

    alert('Width saved! Please restart the dev server to see it in Tailwind.');
  };

  return (
    <div
      className="flex"
      onMouseMove={(e) => handleMouseMove(e.nativeEvent)}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="bg-gray-200 h-screen"
        style={{ width }}
      >
        <p className="p-4">Sidebar ({width}px)</p>
        <button
          className="mt-4 ml-4 bg-blue-500 text-white px-2 py-1 rounded"
          onClick={handleSave}
        >
          Save Width
        </button>
      </div>
      <div
        className="cursor-col-resize w-2 bg-gray-400"
        onMouseDown={handleMouseDown}
      ></div>
      <div className="flex-1 bg-white p-4">
        <p>Main content</p>
      </div>
    </div>
  );
}
