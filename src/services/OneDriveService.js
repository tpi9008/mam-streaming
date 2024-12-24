export const fetchAudioFiles = async () => {
    try {
        const shareLink = 'https://1drv.ms/f/s!Ap0I14aeqdzNpfB1CnE6rbgMInDRAA';
        const apiEndpoint = shareLink.replace('https://1drv.ms/f/', 'https://api.onedrive.com/v1.0/shares/');

        console.log('Fetching files from:', `${apiEndpoint}/root/children`);
        const response = await fetch(`${apiEndpoint}/root/children`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Files fetch error:', errorText);
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        }

        const data = await response.json();
        console.log('Files response:', data);

        // Get embedUrl for streaming access
        const audioFiles = await Promise.all(data.value
            .filter(file =>
                file.file &&
                (file.name.toLowerCase().endsWith('.mp3') ||
                    file.name.toLowerCase().endsWith('.m4a') ||
                    file.name.toLowerCase().endsWith('.wav'))
            )
            .map(async file => {
                try {
                    const embedResponse = await fetch(`${apiEndpoint}/root/children/${file.id}`, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    const embedData = await embedResponse.json();
                    console.log(`Embed data for ${file.name}:`, embedData);

                    return {
                        id: file.id,
                        name: file.name,
                        audio: {
                            title: file.name.split('.')[0],
                            album: embedData.audio?.album || null,
                            artist: embedData.audio?.artist || null,
                            duration: embedData.audio?.duration || null,
                            streamUrl: embedData['@microsoft.graph.downloadUrl'] || null
                        }
                    };
                } catch (error) {
                    console.error(`Error getting embed data for ${file.name}:`, error);
                    return {
                        id: file.id,
                        name: file.name,
                        audio: {
                            title: file.name.split('.')[0],
                            album: null,
                            artist: null,
                            duration: null,
                            streamUrl: null
                        }
                    };
                }
            }));

        console.log('Processed audio files:', audioFiles);
        return audioFiles;
    } catch (error) {
        console.error("Error in fetchAudioFiles:", error);
        throw error;
    }
};

export const getAudioStreamUrl = async (fileId) => {
    try {
        const shareLink = 'https://1drv.ms/f/s!Ap0I14aeqdzNpfB1CnE6rbgMInDRAA';
        const apiEndpoint = shareLink.replace('https://1drv.ms/f/', 'https://api.onedrive.com/v1.0/shares/');

        console.log('Fetching audio URL:', `${apiEndpoint}/root/children/${fileId}`);
        const response = await fetch(`${apiEndpoint}/root/children/${fileId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Audio URL error:', errorText);
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        }

        const data = await response.json();
        console.log('Audio URL response:', data);

        if (!data['@microsoft.graph.downloadUrl']) {
            console.error('No download URL found in response:', data);
            throw new Error('No download URL in response');
        }

        return data['@microsoft.graph.downloadUrl'];
    } catch (error) {
        console.error("Error in getAudioStreamUrl:", error);
        throw error;
    }
};