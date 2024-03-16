import { Scene } from '@soulmachines/smwebsdk';

const videoEl = document.getElementById('sm-video');

const scene = new Scene({
    videoElement: videoEl,
    apiKey: 'Your API key', // Replace with your actual API key
});

scene.connect()
    .then((sessionId) => {
        console.log('Success! Session ID: ', sessionId);
        scene.startVideo()
            .then((videoState) => console.log('Video started with state: ', videoState))
            .catch((error) => console.error('Could not start video: ', error));
    })
    .catch((error) => console.error('Connection failed: ', error));
