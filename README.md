# Youtube Video Downloader

> This is a opensource project

## Getting started

You need [Node.js](https://nodejs.org/en/) to use this project

## Developing

Follow the steps below: 

``` shell 
git clone https://github.com/OdilonDamasceno/yt-video-downloader-backend.git
cd yt-video-downloader-backend
npm install
npm start
```

## Usage
* To return video information

        GET 'http://localhost:8000/info?URL=<video_url>'

* To download video

        GET 'http://localhost:8000/video?URL=<video_url>'

* To download audio from video

        GET 'http://localhost:8000/audio?URL=<video_url>'
        
## License

"The code in this project is licensed under MIT license."
