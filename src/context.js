import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const Context = React.createContext();
export default function TrackProvider(props) {
    const [track, setTrack] = useState([]);
    console.log(track)
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1
        &apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                console.log(res.data);
                setTrack(res.data.message.body.track_list)
            }).catch(err => console.error(err))
    }, []);
    function handleSearchTracks(tracks) {
        setTrack(tracks);
    }
    const state = {
        track_list: track,
        searchTracks : handleSearchTracks,
        heading:'Top 10 tracks'
    }
    return (
        <Context.Provider value={state}>{props.children}</Context.Provider>
    )
}