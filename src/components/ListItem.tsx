import React from 'react';
import styled from 'styled-components';
import { randomByRange, compare4Sort } from '../share/utils';
import { getData } from '../share/data';
import { Item } from './Item';

const Wrap = styled.div`
  margin: 0 auto;
  width: 320px;
`;

export class ListItem extends React.Component {
  intervalId = 0;

  state = {
    data: getData(),
  };

  componentDidMount() {
    // fetch('https://webcdn.17app.co/campaign/pretest/data.json')
    //   .then(response => response.json())
    //   .then(response => {});
    this.intervalId = setInterval(this.randomUpdateScore, 300);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  randomUpdateScore = () => {
    const { data } = this.state;
    if (data.length > 0) {
      const index = randomByRange(0, 10);
      const newData = data.slice();
      newData[index].score += randomByRange(200, 500);
      this.setState(state => {
        return {
          ...state,
          data: newData.sort(compare4Sort),
        };
      });
    }
  };

  render() {
    const { data } = this.state;
    if (data && data.length) {
      return (
        <Wrap>
          {data.map((item, index) => {
            return <Item key={item.userID} {...item} index={index} />;
          })}
        </Wrap>
      );
    }
    return <div>Loading...</div>;
  }
}

export default ListItem;
