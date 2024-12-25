import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, FastForward, Rewind, Volume2, VolumeX } from 'lucide-react';

const EpisodePlayer = ({ episode }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = episode.audio?.streamUrl || null;
        }
    }, [episode.audio?.streamUrl]);

    const handlePlay = () => {
        if (!episode.audio?.streamUrl) {
            console.error('No stream URL available for:', episode);
            return;
        }
        console.log('Playing audio from URL:', episode.audio.streamUrl);
        if (!isPlaying) {
            audioRef.current.play().catch(error => {
                console.error('Error playing audio:', error);
            });
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleSeek = (e) => {
        const value = parseFloat(e.target.value);
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    const handleFastForward = () => {
        audioRef.current.currentTime += 30;
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleFastBackward = () => {
        audioRef.current.currentTime -= 10;
        setCurrentTime(audioRef.current.currentTime);
    };

    const toggleMute = () => {
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(!isMuted);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.ontimeupdate = () => {
                setCurrentTime(audioRef.current.currentTime);
            };
            audioRef.current.ondurationchange = () => {
                setDuration(audioRef.current.duration);
            };
            audioRef.current.onended = () => {
                setIsPlaying(false);
            };
        }
    }, [audioRef]);

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mb-8">
            <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-lg flex-shrink-0">
                    <img
                        src="/images/mam-logo.png"
                        alt="MAM"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>

                <div className="flex-grow space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-tight">
                            {episode.audio?.title || episode.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {episode.name}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleFastBackward}
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                title="Rewind 10 seconds"
                                disabled={!episode.audio?.streamUrl}
                            >
                                <Rewind size={20} />
                            </button>

                            <button
                                onClick={handlePlay}
                                className={`${isPlaying ? 'bg-blue-600' : 'bg-blue-500'
                                    } text-white p-4 rounded-full hover:bg-blue-600 transition-colors duration-200 disabled:bg-gray-400 shadow-md hover:shadow-lg`}
                                disabled={!episode.audio?.streamUrl}
                            >
                                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                            </button>

                            <button
                                onClick={handleFastForward}
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                title="Forward 30 seconds"
                                disabled={!episode.audio?.streamUrl}
                            >
                                <FastForward size={20} />
                            </button>

                            <button
                                onClick={toggleMute}
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                disabled={!episode.audio?.streamUrl}
                            >
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>

                            <div className="text-sm font-medium text-gray-600 min-w-[100px]">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </div>
                        </div>

                        <div className="relative w-full h-2 group">
                            <input
                                type="range"
                                min="0"
                                max={duration || 100}
                                value={currentTime}
                                onChange={handleSeek}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
                                         hover:bg-gray-300 transition-colors duration-200"
                                disabled={!episode.audio?.streamUrl}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <audio ref={audioRef} />
        </div>
    );
};

export default EpisodePlayer;