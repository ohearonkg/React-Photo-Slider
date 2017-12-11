import * as React from 'react';

export interface PhotoContainerProps {
  photoUrl: string;
}

export class PhotoContainer extends React.Component<PhotoContainerProps, {}> {

  componentDidMount() {
    console.log('Hello');
  }

  render() {
    return (
      <img src={this.props.photoUrl} />
    )
  }
}