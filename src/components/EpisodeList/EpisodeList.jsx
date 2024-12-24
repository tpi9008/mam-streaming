import React, { useState, useEffect } from 'react';
import { fetchAudioFiles } from '@/services/OneDriveService.js';
import EpisodePlayer from '@/components/EpisodePlayer/EpisodePlayer.jsx';

const EpisodeList = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEpisodes = async () => {
            setLoading(true);
            try {
                // You'll need to modify OneDriveService to remove MSAL dependencies
                const files = await fetchAudioFiles();
                setEpisodes(files);
                setError(null);
            } catch (error) {
                console.error("Error loading episodes:", error);
                setError("Failed to load episodes");
            } finally {
                setLoading(false);
            }
        };

        loadEpisodes();
    }, []);

    if (loading) return <div className="p-4">Loading episodes...</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Episodes</h2>
            {episodes.length > 0 ? (
                <div className="space-y-4">
                    {episodes.map((episode) => (
                        <EpisodePlayer
                            key={episode.id}
                            episode={episode}
                        />
                    ))}
                </div>
            ) : (
                <p>No episodes found.</p>
            )}
        </div>
    );
};

export default EpisodeList;