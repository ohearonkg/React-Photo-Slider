import * as React from 'react';

export interface PhotoIndicatorProps {
    currentPhoto: string;
}

export const PhotoIndicator = (props: PhotoIndicatorProps) => {
    return <div> {props.currentPhoto} </div> 
}