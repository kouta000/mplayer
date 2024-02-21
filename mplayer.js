// プレイリストを取得
var listitems = document.querySelectorAll('li');
for(var i=0; i<listitems.length; i++){
    //clickイベントを設定
    listitems[i].addEventListener('click',
        (e)=>{
            var li = e.target;
            var file = li.getAttribute('data-file');
            var audio = document.querySelector('audio');
            audio.setAttribute('src', file);
            audio.play();
            //activeな項目を変更
            var activeil = document.querySelector('.active');

            activeil.className = '';
            li.className = 'active';
        }
    );
}

//再生中と停止中でイラストを切り替える
var audio = document.querySelector('audio');
audio.addEventListener('play',
    (e)=>{
        var img = document.querySelector('img');
        img.setAttribute('src', 'pict_play.png');
    }
);
audio.addEventListener('pause',
    (e)=>{
        var img = document.querySelector('img');
        img.setAttribute('src', 'pict_stop.png');
    }
)