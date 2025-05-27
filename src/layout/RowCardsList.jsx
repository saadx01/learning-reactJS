import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RowCardsList = ({ data, Card }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.firstChild?.offsetWidth || 392; // fallback width
    if (direction === 'left') {
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="listContainer relative w-full px-8">
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        onClick={() => scroll('left')}
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 no-scrollbar"
      >
        {data.map((item, index) => (
          <div key={index} className="snap-start shrink-0">
            <Card data={item} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        onClick={() => scroll('right')}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default RowCardsList;
