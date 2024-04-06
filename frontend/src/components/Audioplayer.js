import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import sound1 from '../assets/rickroll.mp3'
import '../index.css'

const Player = () => {
    return ( 
        <footer>
            <div className="player">
                <AudioPlayer
                    autoPlay
                    src={sound1}
                    onPlay={e => console.log("onPlay")}
                // other props here
            />
            </div>
        </footer>
    )
}

export default Player