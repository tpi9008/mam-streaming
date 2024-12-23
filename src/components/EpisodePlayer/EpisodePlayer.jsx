import React, { useState, useEffect, useRef } from 'react';
import { useMsal } from '@azure/msal-react';
import { getAudioStreamUrl } from '@/services/OneDriveService.js';
import { Play, Pause, FastForward, Rewind, Volume2, VolumeX } from 'lucide-react';

const EpisodePlayer = ({ episode }) => {
    const { instance, accounts } = useMsal();
    const [audioUrl, setAudioUrl] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const fetchAudioUrl = async () => {
            const url = await getAudioStreamUrl(instance, accounts[0], episode.id);
            setAudioUrl(url);
        };
        fetchAudioUrl();
    }, [instance, accounts, episode.id]);

    const handlePlay = () => {
        if (!audioUrl) return;
        if (!isPlaying) {
            audioRef.current.play();
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
        audioRef.current.currentTime += 30; // 30 seconds forward
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleFastBackward = () => {
        audioRef.current.currentTime -= 10; // 10 seconds back
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
        }
    }, [audioRef]);

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-start space-x-4">
                {/* Placeholder for episode artwork */}
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400">MAM</span>
                </div>

                <div className="flex-grow">
                    {/* Display title metadata */}
                    <h3 className="text-lg font-semibold mb-2">
                        {episode.audioMetadata?.title || 'Untitled Episode'} {/* Use title metadata or fallback */}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Filename: {episode.name} {/* Optional: Still display filename */}
                    </p>

                    {/* Audio controls */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleFastBackward}
                                className="text-gray-600 hover:text-gray-800"
                                title="Rewind 10 seconds"
                            >
                                <Rewind size={20} />
                            </button>

                            <button
                                onClick={handlePlay}
                                className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
                            >
                                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                            </button>

                            <button
                                onClick={handleFastForward}
                                className="text-gray-600 hover:text-gray-800"
                                title="Forward 30 seconds"
                            >
                                <FastForward size={20} />
                            </button>

                            <button
                                onClick={toggleMute}
                                className="text-gray-600 hover:text-gray-800"
                            >
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>

                            <div className="text-sm text-gray-600 min-w-[100px]">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </div>
                        </div>

                        {/* Progress bar */}
                        <input
                            type="range"
                            min="0"
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <audio ref={audioRef} src={audioUrl} />
        </div>
    );
};

export default EpisodePlayer;