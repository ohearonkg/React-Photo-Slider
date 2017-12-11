import * as React from 'react';

export interface PhotoIndicatorProps {
    currentPhotoNumber: string;
    totalNumberPhotos: string;
}

export const PhotoIndicator = (props: PhotoIndicatorProps) => {
    return <div> {props.currentPhotoNumber} of {props.totalNumberPhotos} </div> 
}