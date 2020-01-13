  var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player1,player2,player3,player4,player5,player6,player7,player8;
        function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('t1', {
        height: '100',
        width: '100',
        videoId: 'uhxZvM4CFBo',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
            player2 = new YT.Player('t2', {
        height: '100',
        width: '100',
        videoId: 'Jnu4LP1Z1mg',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
            player3 = new YT.Player('t3', {
        height: '100',
        width: '100',
        videoId: '1vHTdz04OBo',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
            player4 = new YT.Player('t4', {
        height: '100',
        width: '100',
        videoId: 'fGwv3G2nIrQ',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
            player5 = new YT.Player('t5', {
        height: '100',
        width: '100',
        videoId: 'nubDFeiUAsI',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
            player6 = new YT.Player('t6', {
        height: '100',
        width: '100',
        videoId: 'Ez4mXaeSKuk',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
            player7 = new YT.Player('t7', {
        height: '100',
        width: '100',
        videoId: 'MQEFmHsseaU',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
            player8 = new YT.Player('t8', {
        height: '100',
        width: '100',
        videoId: 'Div0iP65aZo',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
        }
        function onPlayerReady(event) {
        // event.target.playVideo();
        }
        // 5. The API calls this function when the player's state changes.
        // The function indicates that when playing a video (state=1),
        // the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 6000);
        done = true;
        }
        }
        function stopVideo() {
        player.stopVideo();
        }