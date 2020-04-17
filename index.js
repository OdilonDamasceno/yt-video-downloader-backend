const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
require('dotenv').config();


app.get('/video', (req, res) => {
    var URL = req.query.URL;
    ytdl.getInfo(URL, (err, info) => {
        res.header('Content-Disposition', 'attachment; filename="' + info.title + '.mp4"');
        ytdl(URL, {
            quality: 'highest',
            format: 'mp4'
        }).pipe(res);
    });
});

app.get('/audio', (req, res) => {
    var URL = req.query.URL;
    ytdl.getInfo(URL, (err, info) => {
        res.header('Content-Disposition', 'attachment; filename="' + info.title + '.mp3"');
        ytdl(URL, {
            quality: 'highest',
            filter: 'audioonly',
        }).pipe(res);
    });
});

app.listen(process.env.PORT);