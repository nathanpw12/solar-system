import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.prop;
    return (
      <h2>{headline}</h2>
    );
  }
}

export default Title;
