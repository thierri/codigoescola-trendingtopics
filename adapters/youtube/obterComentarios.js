
import  googleApis  from "googleapis";

const obterComentarios = (partindoDe = Date.now()) => {
    
    if (!process.env.googleAuthToken) {
        throw Error('Variável de ambiente googleAuthToken indisponível');
    }

    if (!process.env.channelId) {
        throw Error('Variável de ambiente channelId indisponível');
    }


    const youtubeService = googleApis.google.youtube({
        version: 'v3',
        auth: process.env.googleAuthToken
    });


    youtubeService.commentThreads.list({
        "part": [
            "snippet,replies"
        ],
        "allThreadsRelatedToChannelId": process.env.channelId
    }).then(
        function (response) {
            console.log("Response", JSON.stringify(response.data.items));
        },
        function (err) { console.error("Execute error", err); }
    );
}
export default obterComentarios;