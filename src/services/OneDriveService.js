export const fetchAudioFiles = async () => {
    try {
        // Convert share links to embed format
        const files = [
            {
                id: '1',
                name: 'mam010106.mp3',
                audio: {
                    title: 'mam010106',
                    // Convert from share to embed URL
                    streamUrl: 'https://onedrive.live.com/embed?cid=A0E6F611C5599F2C&resid=A0E6F611C5599F2C%21620692&authkey=AFIjS7lMsmCkQdo'
                }
            }
        ];
        return files;
    } catch (error) {
        console.error("Error in fetchAudioFiles:", error);
        throw error;
    }
};

export const getAudioStreamUrl = async (fileId) => {
    try {
        const files = await fetchAudioFiles();
        const match = files.find(f => f.id === fileId);
        return match?.audio?.streamUrl;
    } catch (error) {
        console.error("Error in getAudioStreamUrl:", error);
        throw error;
    }
};