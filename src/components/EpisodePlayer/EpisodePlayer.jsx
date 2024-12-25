import React, { useState, useEffect, useRef } from 'react';
import { getAudioStreamUrl } from '@/services/OneDriveService.js';
import { Play, Pause, FastForward, Rewind, Volume2, VolumeX } from 'lucide-react';

const EpisodePlayer = ({ episode }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            const streamUrl = episode.audio?.streamUrl || null;
            console.log('Setting audio source:', streamUrl);
            audioRef.current.src = streamUrl;
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
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-start space-x-4">
                <div className="w-24 h-24 rounded-lg flex-shrink-0">
                    <img
                        src="/images/mam-logo.png"
                        alt="MAM"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">
                        {episode.audio?.title || episode.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Filename: {episode.name}
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleFastBackward}
                                className="text-gray-600 hover:text-gray-800"
                                title="Rewind 10 seconds"
                                disabled={!episode.audio?.streamUrl}
                            >
                                <Rewind size={20} />
                            </button>

                            <button
                                onClick={handlePlay}
                                className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 disabled:bg-gray-400"
                                disabled={!episode.audio?.streamUrl}
                            >
                                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                            </button>

                            <button
                                onClick={handleFastForward}
                                className="text-gray-600 hover:text-gray-800"
                                title="Forward 30 seconds"
                                disabled={!episode.audio?.streamUrl}
                            >
                                <FastForward size={20} />
                            </button>

                            <button
                                onClick={toggleMute}
                                className="text-gray-600 hover:text-gray-800"
                                disabled={!episode.audio?.streamUrl}
                            >
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>

                            <div className="text-sm text-gray-600 min-w-[100px]">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </div>
                        </div>

                        <input
                            type="range"
                            min="0"
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            disabled={!episode.audio?.streamUrl}
                        />
                    </div>
                </div>
            </div>
            <audio ref={audioRef} />
        </div>
    );
};

export default EpisodePlayer;