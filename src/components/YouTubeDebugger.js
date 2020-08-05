// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
    
    state = {
        errors: [],
        user: null, 
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings:{
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    changeResolution = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings:{
                    ...previousState.settings,
                    video:{
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.changeResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}