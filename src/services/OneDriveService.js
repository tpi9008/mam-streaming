export const fetchAudioFiles = async (instance, account) => {
    try {
        const response = await instance.acquireTokenSilent({
            scopes: ["Files.Read.All"],
            account: account
        });

        // Using the specific folder ID from your OneDrive
        const folderId = "CDDCA99E86D7089D!620661";

        const files = await fetch(
            `https://graph.microsoft.com/v1.0/me/drive/items/${folderId}/children`,
            {
                headers: {
                    Authorization: `Bearer ${response.accessToken}`
                }
            }
        );
        const fileData = await files.json();

        // Retrieve metadata for each file and include the title under `audio`
        const enrichedFiles = await Promise.all(
            fileData.value
                .filter(file =>
                    file.name.toLowerCase().endsWith('.mp3') ||
                    file.name.toLowerCase().endsWith('.m4a') ||
                    file.name.toLowerCase().endsWith('.wav')
                )
                .map(async (file) => {
                    const metadataResponse = await fetch(
                        `https://graph.microsoft.com/v1.0/me/drive/items/${file.id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${response.accessToken}`
                            }
                        }
                    );
                    const metadata = await metadataResponse.json();

                    return {
                        id: file.id,
                        name: file.name,
                        audioMetadata: {
                            title: metadata.audio?.title || file.name.split('.')[0], // Extract title from audio metadata
                            album: metadata.audio?.album || null, // Example of additional metadata
                            artist: metadata.audio?.artist || null,
                            duration: metadata.audio?.duration || null
                        }
                    };
                })
        );

        return enrichedFiles;
    } catch (error) {
        console.error("Error fetching audio files:", error);
        throw error;
    }
};

export const getAudioStreamUrl = async (instance, account, fileId) => {
    try {
        const response = await instance.acquireTokenSilent({
            scopes: ["Files.Read.All"],
            account: account
        });

        const result = await fetch(
            `https://graph.microsoft.com/v1.0/me/drive/items/${fileId}`,
            {
                headers: {
                    Authorization: `Bearer ${response.accessToken}`
                }
            }
        );

        const data = await result.json();
        return data["@microsoft.graph.downloadUrl"];
    } catch (error) {
        console.error("Error getting stream URL:", error);
        throw error;
    }
};