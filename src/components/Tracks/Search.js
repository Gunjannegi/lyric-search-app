import { useContext, useState } from "react"
import axios from 'axios';
import { Context } from "../../context";
export default function Search() {

    const [trackTitle, setTrackTitle] = useState('');
    const trackCntxt = useContext(Context);
    function handleInput(e) {
        setTrackTitle(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();

        axios.get(
       `http://api.musixmatch.com/ws/1.1/track.search?
        f_has_lyrics=1&q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc
        &apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
               trackCntxt.searchTracks(res.data.message.body.track_list);
            }).catch(err => console.error(err)) 
    }
    return (
        <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
                <i className="fas fa-music"></i>
                Search For A Song
            </h1>
            <p className="lead text-center">
                Get the lyrics for any song</p>
            <form onSubmit={handleSubmit} className="form-group">
                <input className="form-control 
from-control-lg" placeholder="Song title..."
                    value={trackTitle}
                    onChange={handleInput}></input>
                <button className="btn btn-primary btn-lg btn-block mb-3 mt-3"
                type="submit">Get Track Lyrics</button>
            </form>
        </div>
    )
}