export const fetchAudioFiles = async () => {
    try {
        const shareLink = 'https://1drv.ms/f/s!Ap0I14aeqdzNpfB1CnE6rbgMInDRAA';
        const apiEndpoint = shareLink.replace('https://1drv.ms/f/', 'https://api.onedrive.com/v1.0/shares/');

        console.log('Attempting to fetch with endpoint:', apiEndpoint);

        const response = await fetch(`${apiEndpoint}/root/children`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response text:', errorText);
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        }

        const data = await response.json();
        console.log('Received data:', JSON.stringify(data, null, 2));

        const audioFiles = data.value
            .filter(file =>
                file.file &&
                (file.name.toLowerCase().endsWith('.mp3') ||
                    file.name.toLowerCase().endsWith('.m4a') ||
                    file.name.toLowerCase().endsWith('.wav'))
            )
            .map(file => ({
                id: file.id,
                name: file.name,
                audio: file.audio || {
                    title: file.name.split('.')[0],
                    album: null,
                    artist: null,
                    duration: null
                }
            }));

        console.log('Filtered audio files:', audioFiles);
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

        const response = await fetch(`${apiEndpoint}/root/children/${fileId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response text:', errorText);
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        }

        const data = await response.json();
        return data['@microsoft.graph.downloadUrl'];
    } catch (error) {
        console.error("Error in getAudioStreamUrl:", error);
        throw error;
    }
};