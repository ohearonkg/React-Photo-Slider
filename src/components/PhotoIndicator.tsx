import * as React from 'react';

export interface PhotoIndicatorProps {
    currentPhotoNumber: number;
    totalNumberPhotos: number;
    nextArrowClickFunction: any;
}

export const PhotoIndicator = (props: PhotoIndicatorProps) => {
    return (
        <div className='photo-indicator'> 

            <div className='photo-indicator__previous-arrow-container'>
                <svg width="16px" height="12px" viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Home-Category" transform="translate(-293.000000, -955.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <g id="Group-Copy" transform="translate(293.000000, 951.000000)">
                                <path d="M7,11 L15,11 C15.6,11 16,10.6 16,10 C16,9.4 15.6,9 15,9 L7,9 L7,4 L0,10 L7,16 L7,11 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </svg>        
            </div>

            <div className='photo-indicator__text-container'>
                {props.currentPhotoNumber < 10 ? '0' + props.currentPhotoNumber : props.currentPhotoNumber}/{props.totalNumberPhotos < 10 ? '0' + props.totalNumberPhotos : props.totalNumberPhotos} 
            </div>

            <div onClick={props.nextArrowClickFunction} className='photo-indicator__next-arrow-container'>
                <svg width="16px" height="12px" viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Home-Category" transform="translate(-373.000000, -955.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <g id="Group-Copy" transform="translate(293.000000, 951.000000)">
                                <path d="M89,9 L81,9 C80.4,9 80,9.4 80,10 C80,10.6 80.4,11 81,11 L89,11 L89,16 L96,10 L89,4 L89,9 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}