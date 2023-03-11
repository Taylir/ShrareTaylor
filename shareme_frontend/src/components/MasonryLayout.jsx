import React from "react";
import Masonry from "react-masonry-css";

import Pin from "./Pin";

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

function MasonryLayout({ pins, i }) {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
      {pins?.map((pin) => (
        <Pin key={i} pin={pin} className="w-max" />
      ))}
    </Masonry>
  );
}

export default MasonryLayout;