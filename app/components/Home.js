import React from 'react';
import FilePicker from './FilePicker';
import OrderedArtifactList from './OrderedArtifactList';
import Test from './Test';

class Home extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        <Test />
        <div>~*~*YATTO*~*~</div>
        <FilePicker />
        <OrderedArtifactList />
      </div>
    );
  }
}

export default Home;