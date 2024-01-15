import { useContext } from "react";
import Spinner from "../Layout/Spinner";
import { Context } from "../../context";
import Track from "./Track";
const Tracks = () => {
    const trackCntxt = useContext(Context);
    return (
        <>
            {trackCntxt.track_list.length === 0 ? <Spinner /> :
                <>
                    <h3 className="text-center mb-4">{trackCntxt.heading}</h3>
                    <div className="row">
                        {trackCntxt.track_list.map(item => (
                            <Track key={item.track.track_id} track={item.track} />
                        ))}

                    </div>
            </>}

        </>
    )
}
export default Tracks;