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