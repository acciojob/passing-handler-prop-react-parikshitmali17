import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background,label } = config;

  return (
    <div>
    <button  style={{backgroundColor:background}} onClick={() => selectNextBackground({background: background})}>
      {label}
    </button>
    
    </div>
    
  )
}
export default ColourSelector;
