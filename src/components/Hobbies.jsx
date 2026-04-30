import React from 'react';

class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.hobbies = [
      'Reading',
      'Gaming',
      'Cooking',
      'Hiking',
      'Photography',
      'Music',
      'Dancing',
      'Painting',
      'Swimming',
      'Traveling'
    ];
    this.top3Indices = [0, 1, 2]; // Top 3 hobbies (first three in the list)
    this.colors = this.generateRandomColors(3); // Generate 3 random colors for top 3
  }

  generateRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      colors.push(color);
    }
    return colors;
  }

  render() {
    return (
      <div>
        <h2>My Hobbies</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {this.hobbies.map((hobby, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                margin: '5px 0',
                borderRadius: '5px',
                backgroundColor: this.top3Indices.includes(index) ? this.colors[this.top3Indices.indexOf(index)] : 'transparent',
                color: this.top3Indices.includes(index) ? '#fff' : '#000',
                fontWeight: this.top3Indices.includes(index) ? 'bold' : 'normal'
              }}
            >
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Hobbies;