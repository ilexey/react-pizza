import React from 'react';

class Categories extends React.Component {
  state = {
    activeItem: 3
  };

  onSelectItem = (index) => {
    this.setState({
      activeItem: index
    })
  }

  render() {
    const { items, onClickItem} = this.props;
    return (
      <div className="categories">
        <ul>
          <li>Все</li>
          {items.map((name, index) => 
            <li key={`${name}_${index}`}
              className={this.state.activeItem === index ? "active" : ""}
              onClick={() => this.onSelectItem(index)}
            >
              {name}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
// function Categories({ items, onClickItem }) {
//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {items.map((name, index) => 
//           <li key={`${name}_${index}`}
//             onClick={() => onClickItem(name)}
//           >
//             {name}
//           </li>
//         )}
//       </ul>
//     </div>
//   )
// };

export default Categories;
