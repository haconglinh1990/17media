import React from 'react';
import styled from 'styled-components';
import { animate } from '../share/utils';

type ItemInterface = {
  userID: string;
  picture: string;
  displayName: string;
  score: number;
  index: number;
};

const DivRow = styled.div<{ top: number }>`
  width: 320px;
  height: 52px;
  position: absolute;
  margin: 0 auto;
  display: flex;
  align-items: center;
  top: ${props => props.top}px;
  border: 1px solid #ccc;
  :not(:last-child) {
    border-bottom: none;
  }
`;
const DivNo = styled.div`
  width: 50px;
  padding-left: 10px;
`;
const DivPicture = styled.div.attrs<{ style: string }>(props => ({
  style: {
    background: props.style.background,
  },
}))`
  background-size: 100%;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: 2px solid #fff;
  background-size: cover;
`;
const DivName = styled.div`
  padding-left: 7px;
`;
const DivScore = styled.div`
  flex-grow: 1;
  text-align: right;
  padding-right: 10px;
  ::after {
    content: 'pt';
  }
`;

export class Item extends React.Component<
  ItemInterface,
  { scoreState: number; indexState: number }
> {
  constructor(props: ItemInterface) {
    super(props);
    const { score, index } = this.props;
    this.state = {
      scoreState: score,
      indexState: index,
    };
  }

  componentDidUpdate(preState: { score: number; index: number }) {
    const { score, index } = this.props;
    if (preState.score !== score) {
      animate({
        duration: 300,
        timings: (t: number) => {
          return t;
        },
        draw: (p: number) => {
          this.setState({
            scoreState:
              preState.score + Math.round(p * (score - preState.score)),
          });
        },
      });
    }

    if (preState.index !== index) {
      animate({
        duration: 300,
        timings: (t: number) => {
          return t;
        },
        draw: (p: number) => {
          this.setState({
            indexState: preState.index + p * (index - preState.index),
          });
        },
      });
    }
  }

  render() {
    const { index, picture, displayName } = this.props;
    const { scoreState, indexState } = this.state;
    const top: number = indexState * 50;
    return (
      <DivRow top={top}>
        <DivNo>{index + 1}</DivNo>
        <DivPicture
          style={{
            backgroundImage: `url(${picture}), url(https://webcdn.17app.co/17live/ig-default.svg)`,
          }}
        />
        <DivName>{displayName}</DivName>
        <DivScore>{scoreState}</DivScore>
      </DivRow>
    );
  }
}

export default Item;
