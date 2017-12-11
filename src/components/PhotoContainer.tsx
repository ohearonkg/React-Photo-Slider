import * as React from 'react';

export interface PhotoContainerProps {
  photoUrl: string;
}

export const PhotoContainer = (props:PhotoContainerProps) => {
  return (
    <img src={props.photoUrl} />
  )
}