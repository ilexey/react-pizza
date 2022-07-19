import React from 'react';

function Categories({ items, onClickItem }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name, index) => 
          <li key={`${name}_${index}`}
            onClick={() => onClickItem(name)}
          >
            {name}
          </li>
        )}
      </ul>
    </div>
  )
};

export default Categories;
