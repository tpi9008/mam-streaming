import React, { useState, useEffect } from 'react';
import { useMsal } from "@azure/msal-react";
import { fetchAudioFiles } from '@/services/OneDriveService.js';
import EpisodePlayer from '@/components/EpisodePlayer/EpisodePlayer.jsx';

const EpisodeList = () => {
    const { instance, accounts } = useMsal();
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadEpisodes = async () => {
            if (!accounts[0]) return;
            setLoading(true);
            try {
                const files = await fetchAudioFiles(instance, accounts[0]);
                setEpisodes(files);
            } catch (error) {
                console.error("Error loading episodes:", error);
            } finally {
                setLoading(false);
            }
        };

        loadEpisodes();
    }, [instance, accounts]);

    if (loading) return <div className="p-4">Loading episodes...</div>;
    if (!accounts[0]) return <div className="p-4">Please sign in</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Episodes</h2>
            {episodes.length > 0 ? (
                <div className="space-y-4">
                    {episodes.map((episode) => (
                        <EpisodePlayer
                            key={episode.id}
                            episode={episode} // Pass the full enriched episode object
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