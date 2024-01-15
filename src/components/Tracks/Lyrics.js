import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from "../Layout/Spinner";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
export default function Lyrics() {
    const params = useParams();
    const [lyrics, setLyrics] = useState(''); 
    const [trackInfo, setTrackInfo] = useState()
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${params.id}
        &apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                setLyrics(res.data.message.body.lyrics);
                return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${params.id}
               &apikey=${process.env.REACT_APP_MM_KEY}`)
            }).then(res => {
                setTrackInfo(res.data.message.body.track)
            })
            .catch(err => console.error(err))
    }, [params.id])
    return (
        <>
            {!lyrics || !trackInfo ? <Spinner /> : 
                <><Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                    <div className="card">
                        <h5 className="card-header">
                            {trackInfo.track_name} by{' '}
                            <span className="text-secondary">{trackInfo.artist_name}</span>
                        </h5>
                        <div className='class-body m-3'>
                            <p className="card-text">{lyrics.lyrics_body}</p>
                        </div>
                    </div>
                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album ID</strong>: {trackInfo.album_id}
                        </li>
                        {trackInfo.primary_genres.music_genre_list.length>0 &&
                            <li className="list-group-item">
                                <strong>Album ID</strong>:
                                {trackInfo.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                        </li>}
                        <li className="list-group-item">
                            <strong>Explicit Words</strong>: {' '}
                            {trackInfo.explicit  === 0?'No':'Yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{trackInfo.first_release_date}</Moment>
                        </li>
                        
                    </ul>
                </>}
        </>
    )
}