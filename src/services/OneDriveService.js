// Static list of episode files
const S3_BASE_URL = 'https://mamstreaming.s3.us-east-2.amazonaws.com/';

const audioFiles = [
    {
        "id": "1",
        "name": "mam010106.mp3",
        "audio": {
            "title": "Mad about Music 01/01/06",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam010106.mp3"
        }
    },
    {
        "id": "2",
        "name": "mam010106a.mp3",
        "audio": {
            "title": "Mad about Music Seg 1 01/01/2006",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam010106a.mp3"
        }
    },
    {
        "id": "3",
        "name": "mam010108.mp3",
        "audio": {
            "title": "Dr. Thomas Sculco",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam010108.mp3"
        }
    },
    {
        "id": "4",
        "name": "mam010111.mp3",
        "audio": {
            "title": "Franz Wesler-Most",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam010111.mp3"
        }
    },
    {
        "id": "5",
        "name": "mam010112.mp3",
        "audio": {
            "title": "Mariss Jansons",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam010112.mp3"
        }
    },
    {
        "id": "6",
        "name": "mam010310.mp3",
        "audio": {
            "title": "Antonin Scalia",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam010310.mp3"
        }
    },
    {
        "id": "7",
        "name": "mam010707.mp3",
        "audio": {
            "title": "Reynold Levy",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam010707.mp3"
        }
    },
    {
        "id": "8",
        "name": "mam020108.mp3",
        "audio": {
            "title": "Emanuel Ax",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam020108.mp3"
        }
    },
    {
        "id": "9",
        "name": "mam020109.mp3",
        "audio": {
            "title": "David Posner",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam020109.mp3"
        }
    },
    {
        "id": "10",
        "name": "mam020111.mp3",
        "audio": {
            "title": "Richard Haass",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam020111.mp3"
        }
    },
    {
        "id": "11",
        "name": "mam020112.mp3",
        "audio": {
            "title": "Lionel Barber",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam020112.mp3"
        }
    },
    {
        "id": "12",
        "name": "mam020407.mp3",
        "audio": {
            "title": "Zubin Mehta",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam020407.mp3"
        }
    },
    {
        "id": "13",
        "name": "mam030108.mp3",
        "audio": {
            "title": "Barbara Cook",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam030108.mp3"
        }
    },
    {
        "id": "14",
        "name": "mam030109.mp3",
        "audio": {
            "title": "John Guare",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam030109.mp3"
        }
    },
    {
        "id": "15",
        "name": "mam030110.mp3",
        "audio": {
            "title": "Paavo Jarvi",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam030110.mp3"
        }
    },
    {
        "id": "16",
        "name": "mam030111.mp3",
        "audio": {
            "title": "Valery Gergiev",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam030111.mp3"
        }
    },
    {
        "id": "17",
        "name": "mam030112.mp3",
        "audio": {
            "title": "Bill Keller",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam030112.mp3"
        }
    },
    {
        "id": "18",
        "name": "mam030407.mp3",
        "audio": {
            "title": "Dr. Ruth Westheimer",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam030407.mp3"
        }
    },
    {
        "id": "19",
        "name": "mam030506a.mp3",
        "audio": {
            "title": "Mad About Music - Segment A",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam030506a.mp3"
        }
    },
    {
        "id": "20",
        "name": "mam030506b.mp3",
        "audio": {
            "title": "Mad About Music - Segment B",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam030506b.mp3"
        }
    },
    {
        "id": "21",
        "name": "mam030506c.mp3",
        "audio": {
            "title": "Mad About Music - Segment C",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam030506c.mp3"
        }
    },
    {
        "id": "22",
        "name": "mam040107.mp3",
        "audio": {
            "title": "Stephen Rubin",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam040107.mp3"
        }
    },
    {
        "id": "23",
        "name": "mam040108.mp3",
        "audio": {
            "title": "James Hoge",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam040108.mp3"
        }
    },
    {
        "id": "24",
        "name": "mam040109.mp3",
        "audio": {
            "title": "Ioan Holender",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam040109.mp3"
        }
    },
    {
        "id": "25",
        "name": "mam040110.mp3",
        "audio": {
            "title": "Leopold de Rothschild",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam040110.mp3"
        }
    },
    {
        "id": "26",
        "name": "mam040111.mp3",
        "audio": {
            "title": "Robert DuPuy",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam040111.mp3"
        }
    },
    {
        "id": "27",
        "name": "mam040112.mp3",
        "audio": {
            "title": "Joel Schumacher",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam040112.mp3"
        }
    },
    {
        "id": "28",
        "name": "mam040206.mp3",
        "audio": {
            "title": "Mad about Music - Mercedes Bass",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam040206.mp3"
        }
    },
    {
        "id": "29",
        "name": "mam040206a.mp3",
        "audio": {
            "title": "Mad about Music Seg 1 04-02-2006",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam040206a.mp3"
        }
    },
    {
        "id": "30",
        "name": "mam050107.mp3",
        "audio": {
            "title": "Edmund Morris",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam050107.mp3"
        }
    },
    {
        "id": "31",
        "name": "mam050109.mp3",
        "audio": {
            "title": "Mike Nichols",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam050109.mp3"
        }
    },
    {
        "id": "32",
        "name": "mam050110.mp3",
        "audio": {
            "title": "Stephen Schwatzman",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam050110.mp3"
        }
    },
    {
        "id": "33",
        "name": "mam050111.mp3",
        "audio": {
            "title": "Seamus Mullen",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam050111.mp3"
        }
    },
    {
        "id": "34",
        "name": "mam050112.mp3",
        "audio": {
            "title": "Gianandrea Noseda",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam050112.mp3"
        }
    },
    {
        "id": "35",
        "name": "mam050706.mp3",
        "audio": {
            "title": "Mad About Music 05/06/06",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam050706.mp3"
        }
    },
    {
        "id": "36",
        "name": "mam060107.mp3",
        "audio": {
            "title": "American Music Festival Special",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam060107.mp3"
        }
    },
    {
        "id": "37",
        "name": "mam060108.mp3",
        "audio": {
            "title": "Stuart Woods",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam060108.mp3"
        }
    },
    {
        "id": "38",
        "name": "mam060109.mp3",
        "audio": {
            "title": "George Steel",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam060109.mp3"
        }
    },
    {
        "id": "39",
        "name": "mam060110.mp3",
        "audio": {
            "title": "Diane Wood",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam060110.mp3"
        }
    },
    {
        "id": "40",
        "name": "mam060111.mp3",
        "audio": {
            "title": "Daniele Gatti",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam060111.mp3"
        }
    },
    {
        "id": "41",
        "name": "mam060112.mp3",
        "audio": {
            "title": "Justices of the Supreme Court: Ruth Bader Ginsburg and Antonin Scalia",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam060112.mp3"
        }
    },
    {
        "id": "42",
        "name": "mam060406.mp3",
        "audio": {
            "title": "Mad About Music",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam060406.mp3"
        }
    },
    {
        "id": "43",
        "name": "mam070107.mp3",
        "audio": {
            "title": "Summer Edition - 5th Anniversary Revisited",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam070107.mp3"
        }
    },
    {
        "id": "44",
        "name": "mam070108.mp3",
        "audio": {
            "title": "Valery Gergiev",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam070108.mp3"
        }
    },
    {
        "id": "45",
        "name": "mam070111.mp3",
        "audio": {
            "title": "Mahler - Part 1",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam070111.mp3"
        }
    },
    {
        "id": "46",
        "name": "mam070206.mp3",
        "audio": {
            "title": "Mad about Music 07-02-2006 For Web",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam070206.mp3"
        }
    },
    {
        "id": "47",
        "name": "mam080109.mp3",
        "audio": {
            "title": "World Leaders Summer Special",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam080109.mp3"
        }
    },
    {
        "id": "48",
        "name": "mam080110.mp3",
        "audio": {
            "title": "Dr. Ruth Westheimer",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam080110.mp3"
        }
    },
    {
        "id": "49",
        "name": "mam080111.mp3",
        "audio": {
            "title": "Mahler Centenary - Part 2",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam080111.mp3"
        }
    },
    {
        "id": "50",
        "name": "mam080507.mp3",
        "audio": {
            "title": "Summer Edition Part 2",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam080507.mp3"
        }
    },
    {
        "id": "51",
        "name": "mam080606.mp3",
        "audio": {
            "title": "mam080606",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam080606.mp3"
        }
    },
    {
        "id": "52",
        "name": "mam080705.mp3",
        "audio": {
            "title": "mam080705",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam080705.mp3"
        }
    },
    {
        "id": "53",
        "name": "mam090109.mp3",
        "audio": {
            "title": "Paul Keating",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam090109.mp3"
        }
    },
    {
        "id": "54",
        "name": "mam090110.mp3",
        "audio": {
            "title": "Robert Wittman",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam090110.mp3"
        }
    },
    {
        "id": "55",
        "name": "mam090111.mp3",
        "audio": {
            "title": "David Easton",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam090111.mp3"
        }
    },
    {
        "id": "56",
        "name": "mam090207.mp3",
        "audio": {
            "title": "Norman Lebrecht",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam090207.mp3"
        }
    },
    {
        "id": "57",
        "name": "mam090306.mp3",
        "audio": {
            "title": "Gilbert Kaplan with Clive Gillinson",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam090306.mp3"
        }
    },
    {
        "id": "58",
        "name": "mam090405.mp3",
        "audio": {
            "title": "mam090405",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam090405.mp3"
        }
    },
    {
        "id": "59",
        "name": "mam100106.mp3",
        "audio": {
            "title": "Fifth Anniversary",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam100106.mp3"
        }
    },
    {
        "id": "60",
        "name": "mam100108.mp3",
        "audio": {
            "title": "Alan Gilbert",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam100108.mp3"
        }
    },
    {
        "id": "61",
        "name": "mam100110.mp3",
        "audio": {
            "title": "Michael McCaskey",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam100110.mp3"
        }
    },
    {
        "id": "62",
        "name": "mam100111.mp3",
        "audio": {
            "title": "Michael Kaiser",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam100111.mp3"
        }
    },
    {
        "id": "63",
        "name": "mam100201.mp3",
        "audio": {
            "title": "Mariss Jansons",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam100201.mp3"
        }
    },
    {
        "id": "64",
        "name": "mam100707.mp3",
        "audio": {
            "title": "Gerard Mortier",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam100707.mp3"
        }
    },
    {
        "id": "65",
        "name": "mam100707a.mp3",
        "audio": {
            "title": "mam20100707",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam100707a.mp3"
        }
    },
    {
        "id": "66",
        "name": "mam100712.mp3",
        "audio": {
            "title": "Mad About Music 10th Anniversary",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam100712.mp3"
        }
    },
    {
        "id": "67",
        "name": "mam101412.mp3",
        "audio": {
            "title": "Mad About Music 121014",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam101412.mp3"
        }
    },
    {
        "id": "68",
        "name": "mam102112.mp3",
        "audio": {
            "title": "Mad About Music 121021",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam102112.mp3"
        }
    },
    {
        "id": "69",
        "name": "mam102812.mp3",
        "audio": {
            "title": "Mad About Music 121028",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam102812.mp3"
        }
    },
    {
        "id": "70",
        "name": "mam110107.mp3",
        "audio": {
            "title": "Alex Ros",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam110107.mp3"
        }
    },
    {
        "id": "71",
        "name": "mam110108.mp3",
        "audio": {
            "title": "Nicola Bulgari",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam110108.mp3"
        }
    },
    {
        "id": "72",
        "name": "mam110109.mp3",
        "audio": {
            "title": "Inaugural WQXR Show",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam110109.mp3"
        }
    },
    {
        "id": "73",
        "name": "mam110110.mp3",
        "audio": {
            "title": "Ara Guzilimian",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam110110.mp3"
        }
    },
    {
        "id": "74",
        "name": "mam110111.mp3",
        "audio": {
            "title": "Judith Kaye",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam110111.mp3"
        }
    },
    {
        "id": "75",
        "name": "mam110412.mp3",
        "audio": {
            "title": "Mad About Music 121104",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam110412.mp3"
        }
    },
    {
        "id": "76",
        "name": "mam110506.mp3",
        "audio": {
            "title": "Leonard Slatkin",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam110506.mp3"
        }
    },
    {
        "id": "77",
        "name": "mam110605.mp3",
        "audio": {
            "title": "Mad About Music",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam110605.mp3"
        }
    },
    {
        "id": "78",
        "name": "mam111112.mp3",
        "audio": {
            "title": "Mad About Music 121111",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam111112.mp3"
        }
    },
    {
        "id": "79",
        "name": "mam111812.mp3",
        "audio": {
            "title": "Mad About Music 121118",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam111812.mp3"
        }
    },
    {
        "id": "80",
        "name": "mam112512.mp3",
        "audio": {
            "title": "Mad About Music 121125",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam112512.mp3"
        }
    },
    {
        "id": "81",
        "name": "mam120107.mp3",
        "audio": {
            "title": "Diana Damrau",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam120107.mp3"
        }
    },
    {
        "id": "82",
        "name": "mam120110.mp3",
        "audio": {
            "title": "Costa Pilavachi",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam120110.mp3"
        }
    },
    {
        "id": "83",
        "name": "mam120111.mp3",
        "audio": {
            "title": "Martin Rees",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam120111.mp3"
        }
    },
    {
        "id": "84",
        "name": "mam120212.mp3",
        "audio": {
            "title": "Mad About Music 121202",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam120212.mp3"
        }
    },
    {
        "id": "85",
        "name": "mam120306.mp3",
        "audio": {
            "title": "Mariss Jansons",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam120306.mp3"
        }
    },
    {
        "id": "86",
        "name": "mam120405.mp3",
        "audio": {
            "title": "Mad About Music",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam120405.mp3"
        }
    },
    {
        "id": "87",
        "name": "mam120609.mp3",
        "audio": {
            "title": "Hannah Pakula",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam120609.mp3"
        }
    },
    {
        "id": "88",
        "name": "mam120912.mp3",
        "audio": {
            "title": "Mad About Music 120912 segment 02",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam120912.mp3"
        }
    },
    {
        "id": "89",
        "name": "mam121612.mp3",
        "audio": {
            "title": "Mad About Music 121216",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam121612.mp3"
        }
    },
    {
        "id": "90",
        "name": "mam122312.mp3",
        "audio": {
            "title": "Mad About Music 121223",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam122312.mp3"
        }
    },
    {
        "id": "91",
        "name": "mam123012.mp3",
        "audio": {
            "title": "Mad About Music 121230",
            "streamUrl": "https://mamstreaming.s3.us-east-2.amazonaws.com/mam123012.mp3"
        }
    }
];

export const fetchAudioFiles = async () => {
    return audioFiles;
};

export const getAudioStreamUrl = async (fileId) => {
    const file = audioFiles.find(f => f.id === fileId);
    return file?.audio?.streamUrl;
};