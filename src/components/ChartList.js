import React from 'react';
import ChartSong from './ChartSong';

const ChartList = (props) => {
    const songNodes = props.songs.map(song => {
        return(
            <ChartSong title={song.title.label} key={song.id.label}>
                
            </ChartSong>
        )
    })
    
    return (
        <ol>
            {songNodes}
        </ol>
    )
}

export default ChartList;