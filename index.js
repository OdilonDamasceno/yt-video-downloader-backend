const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
require('dotenv').config();


app.get('/video', (req, res) => {
    var URL = req.query.URL;
    ytdl.getInfo(URL, (err, info) => {
        res.header('Content-Disposition', 'attachment; filename='+info.title+'.mp4',);
        ytdl(URL, {
            quality: 'highest',
            filter: 'video',
            format: '.mp4'
        }).pipe(res);
    });
});

app.get('/audio', (req, res) => {
    var URL = req.query.URL;
    ytdl.getInfo(URL, (err, info) => {
        res.header('Content-Disposition', 'attachment; filename="' + info.title + '.mp3"');
        ytdl(URL, {
            quality: 'highest',
            filter: "audio",
        }).pipe(res);
    });
});

app.get('/info', (req, res) => {
    var URL = req.query.URL;
    ytdl.getInfo(URL, (err, info) => {
        res.send({
            'title': info.player_response.videoDetails.title,
            'tumbnails': info.player_response.videoDetails.thumbnail.thumbnails,
            'author': info.player_response.videoDetails.author,
            'author_avatar': info.author.avatar
        });
    });
});

app.listen(process.env.PORT);