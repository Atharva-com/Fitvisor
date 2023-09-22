const express = require('express');
const router = express.Router();
const vision = require('@google-cloud/vision');
const path = require('path');
const Standard = require('../models/product/Standards')


const CREDENTIALS = JSON.parse(JSON.stringify({
    "type": "service_account",
    "project_id": "fitvisor-399515",
    "private_key_id": "0e7e051906ddd606cfff4b1fb0399dc5efa7f76f",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDWkcsXuUfMWShG\nqg36vVAeRiTS3DZxH0vXsc6m+unxjCtIhzwxEKGFYEKZe9K0NFct8UwXgSk7GX/G\nVcUrNXmb8JlbzwIFOf+ujkhw9KJWBFICpLAW5V4L3rXt0lefKFfs6yeYGXzHyVQC\nv0ylJdAyoHNTHxmfCultOzv21i4FGu0LqBR54Pvp5pidCcEOF52/4k7x+FT6w5fF\n7y0mJ3fM6HnRwYvaL4hIxz010Yb+OSFF7A+FUCERfXHhWrwcjmEpGO1qkpz2J2Ty\nPcWiJz2obrb32R5Xokl431iM+onUbWkDpgme56b0OulWTotz7QpbE+L7g9kcSI/z\ngHl4zXQ3AgMBAAECggEANCRdzDgUQI5yASoWF5alv5WgITWubTMDxTjKVT2oWDCN\n3CQw9mNqPPU1egLjIzOM8/ctXJDgqiH6MQJq1aM7GDARtIPLo+WCQrME2543TNvj\n6gyHVikK/6txXoe9D0pIg6RpjMa00gAU0E4YnBFiVMs0+0AVg9as/wRkAAnwSQDe\nI9J9HYm8ul13JfD1ecuzdWKT1qt5eyM1j77I7jwhNILPYLdygD5QhRE+XAYgP7Fo\nYrkU0fIyCOLgkRvGZ4MNgq61Sp17/2tvW0JBG300xVvHs33BocbsEC/nwPaN1liu\n+Stu1udM2/lhu60sWHXoYXHwsoMGayUYQEaIMaDKUQKBgQDwWTnrSEFFeLHzALh+\nyTjGR34kk2vEb395EMlP/atbudBs5KhJsAwQfrs04mkDnw/VLGjisBrpIfV3wr9y\n5/1Jwvv9xr2BpYI3JgtD2leu8Uicr/etxoWCcmHcDMOSSJ3BQ1jTYN/KJelMFKW9\n0a31pR16kwi0iGhWz9cUfzk5wwKBgQDkitAikh7bQDU7wSh4t35oWNIYJzM4k0rL\nrzHga8FFPytn4eXNDUm+p6bWcVzvbSbJ1MFC936Ej417tg22AgmqKXHnzns1iKhI\n64Qw3cuhk990eDV1VRT3xu7HfWF0ZayoAr8VF3M190W5VmF3B/X2FV/q5HNpiKnv\nC/SdZK7AfQKBgCtVawPouxvzbuIJNzpkvT/ClBO0ILICCFGjnSg27DZVgiaf81eV\nzhcLQmV+jMCCZTBiGWcFqVRvMvqsuifVe+1YomZW9sPxO1EGIvHQ5A4+ooDdmSJT\nsK6cQNiT1I8DWK4HnnQ9+xtPSojVECzxKRQo+O+oouEp1uYQAw9HAOJRAoGBAImD\n5R0IIzz185IS9dE9R/htiW0zGSTvq8/HiRFqhQ6vpeSKDoZFepwXsNHTwIHogbBs\nLiWnWh9VaWKI9tMPgtU6vukmWwipQ+ksnYvxyTdeDNS+CByjp0w4DTFIBj3NeAhY\nLrX4OEC+mtucWGURCzSZQ+/IqpFTxDysSvHxxRzZAoGAbC1epfpVwHPacH/VeJ5E\nAG3X2BKQOLcInog8f/ZBvjUip7IKg2udBcgFpS+XMruDhgADM3FbGFSC8prWiS5P\ndcUAC1JzaWd2yhWNFKV+qDD0P9OYLmBCECHGWtJ4lmaZ8kSvGCIoQxddLdP2Latw\nBOqWkDH0v+nY2UVq3t0OU2w=\n-----END PRIVATE KEY-----\n",
    "client_email": "fitvisor@fitvisor-399515.iam.gserviceaccount.com",
    "client_id": "102801661278852454604",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/fitvisor%40fitvisor-399515.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}
))

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

router.post('/scanproduct', async (req, res) => {

    try {

        const { cat } = req.body;

        const client = new vision.ImageAnnotatorClient(CONFIG);
        let rt = '';
        const detectText = async (file_path, cat) => {
            const imageFilePath = path.join(__dirname, file_path);

            let [result] = await client.textDetection(imageFilePath);

            rt = result.fullTextAnnotation.text;
            console.log(rt);

            if (cat === "Health Drink") {
                const keyValuePairs = [];
                const dataArray = rt.split(',').map(item => item.trim());

                console.log(dataArray);

                dataArray.forEach(element => {

                    const wordsBeforeDigits = element.match(/^(.*?)(?=\d)/);


                    const restOfText = element.replace(wordsBeforeDigits[0], '').trim();


                    if (wordsBeforeDigits[0] === 'Vitamin B') {

                    } else {

                        keyValuePairs.push({ key: wordsBeforeDigits[0], value: restOfText });
                    }


                });
                console.log(keyValuePairs)
            }
            else if (cat === "Noodles") {

                let tex = rt.split("\n")
                const keyValuePairs = [];
                let count = 0;
                let previouselement = null;
                let arr1 = []
                let arr2 = []

                tex.forEach(element => {
                    if (count < 6) {
                        arr1.push(element);
                        count++;
                    }
                    else if (count < 13) {
                        arr2.push(parseInt(element));

                        count++;
                    }
                    else if (count == 13) {
                        arr1.push(element);
                        count++;
                    }
                    else {

                    }
                    previouselement = element;

                });

                for (let index = 0; index < arr1.length; index++) {

                    keyValuePairs.push({ key: arr1[index], value: arr2[index] });
                }
                console.log(keyValuePairs)
            }
            else {

                let tex = rt.split("\n");
                const keyValuePairs = [];
                let count = 0;
            
                let arr1 = []
                let arr2 = []

                tex.forEach(element => {
                    if (count < 9) {
                        arr1.push(element);
                        count++;
                    }
                    else {
                        arr2.push(parseInt(element));

                        count++;
                    }



                });


                for (let index = 0; index < arr1.length; index++) {

                    keyValuePairs.push({ key: arr1[index], value: arr2[index] });
                }
                console.log(keyValuePairs)
            }
        };

        if (cat === 'Health Drink') {
            detectText('d1.jpeg', cat);
        }
        else if (cat === 'Noodles') {
            detectText('d2.jpeg', cat);

        }
        else {
            detectText('d3.jpeg', cat);
        }

        res.status(201).json({ success: true, message: rt });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/addstandard', async (req, res) => {
    try {
        // Create a new Standard document using the request body
        const newStandard = new Standard(req.body);

        // Save the document to the database
        const savedStandard = await newStandard.save();

        res.status(201).json(savedStandard);
    } catch (error) {
        res.status(500).json({ error: 'Error saving data to the database' });
    }
});

router.get('/getstandard', async (req, res) => {
    try {
        // Retrieve all documents from the "Standard" collection
        const standards = await Standard.find();

        res.status(200).json(standards);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data from the database' });
    }
});


module.exports = router;



