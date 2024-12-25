// Static list of episode files
const S3_BASE_URL = 'https://mamstreaming.s3.us-east-2.amazonaws.com/';

const audioFiles = [
    {
        id: '1',
        name: 'mam010106.mp3',
        audio: {
            title: 'mam010106',
            streamUrl: S3_BASE_URL + 'mam010106.mp3'
        }
    }
    // We'll add all files here after upload
];

export const fetchAudioFiles = async () => {
    return audioFiles;
};

export const getAudioStreamUrl = async (fileId) => {
    const file = audioFiles.find(f => f.id === fileId);
    return file?.audio?.streamUrl;
};