import * as React from 'react';
require('../styles/_photo-container.scss');

export interface PhotoContainerProps {
  photoUrl: string;
}

export class PhotoContainer extends React.Component<PhotoContainerProps, {}> {
  private photoReference: HTMLImageElement;

  componentDidMount() {
    setTimeout( () => {
      this.photoReference.style.clipPath = "polygon(0 0, 100% 0, 100% 100% ,0 100%)";
      this.photoReference.style.opacity = '1';
    }, 1000);
  }

  render() {
    return (
      <div className='photo-container'>
        <div className='photo-container__wrapper'>
          <img className='photo-container__photo' ref={ photo => this.photoReference = photo } src={this.props.photoUrl} />
        </div>
      </div>
    )
  }
}