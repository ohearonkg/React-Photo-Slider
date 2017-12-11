import * as React from 'react';

export interface PhotoIndicatorProps {
    currentPhotoNumber: number;
    totalNumberPhotos: number;
}

export const PhotoIndicator = (props: PhotoIndicatorProps) => {
    return <div> {props.currentPhotoNumber < 10 ? '0' + props.currentPhotoNumber : props.currentPhotoNumber} of {props.totalNumberPhotos < 10 ? '0' + props.totalNumberPhotos : props.totalNumberPhotos} </div> 
}