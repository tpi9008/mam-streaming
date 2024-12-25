import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, FastForward, Rewind, Volume2, VolumeX } from 'lucide-react';

const EpisodePlayer = ({ episode }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = episode.audio?.streamUrl || null;
            audioRef.current.volume = volume;
        }
    }, [episode.audio?.streamUrl, volume]);

    const handlePlay = () => {
        if (!episode.audio?.streamUrl) return;
        if (!isPlaying) {
            audioRef.current.play().catch(console.error);
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleSeek = (e) => {
        const rect = progressRef.current.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        const newTime = pos * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleFastForward = () => {
        audioRef.current.currentTime += 30;
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleFastBackward = () => {
        audioRef.current.currentTime -= 10;
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        if (isMuted) {
            audioRef.current.volume = volume;
            setIsMuted(false);
        } else {
            audioRef.current.volume = 0;
            setIsMuted(true);
        }
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
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-24 h-24 rounded-lg flex-shrink-0 mx-auto md:mx-0">
                    <img
                        src="/images/mam-logo.png"
                        alt="MAM"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>

                <div className="flex-grow space-y-4">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {episode.audio?.title || episode.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {episode.name}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <button
                                onClick={handleFastBackward}
                                className="w-12 h-12 flex items-center justify-center rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                                title="Rewind 10 seconds"
                            >
                                <Rewind size={24} />
                            </button>

                            <button
                                onClick={handlePlay}
                                className={`w-16 h-16 flex items-center justify-center rounded-full text-white transition-all duration-200 shadow-lg hover:shadow-xl ${isPlaying ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                                    }`}
                            >
                                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                            </button>

                            <button
                                onClick={handleFastForward}
                                className="w-12 h-12 flex items-center justify-center rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                                title="Forward 30 seconds"
                            >
                                <FastForward size={24} />
                            </button>
                        </div>

                        <div className="space-y-2">
                            <div
                                ref={progressRef}
                                onClick={handleSeek}
                                className="relative w-full h-2 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
                            >
                                <div
                                    className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-150"
                                    style={{ width: `${(currentTime / duration) * 100}%` }}
                                />
                            </div>

                            <div className="flex items-center justify-between text-sm font-medium text-gray-600">
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleMute}
                                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                            >
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.05"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                className="w-24 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
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