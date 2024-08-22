import React from 'react';
import NavToolbar from './navtoolbar';

const PositionedNavToolbar: React.FC = () => {
  return (
    <div className="w-full max-w-[640px] mx-auto mt-8 sm:mt-16">
      <NavToolbar />
    </div>
  );
};

export default PositionedNavToolbar;
