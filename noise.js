$(document).ready( function() {


    // $('.note .c').click(function() {
    //     if ('cAudio'[0].paused == false) {
    //         'cAudio'[0].pause();
    //     } else {
    //         ('cAudio').play();
    //         alert('music playing');
    //     }
    //     console.log ('cAudio')
    // });

    $('.note').on('click', function(event) {
        let key = this.classList[1];
        // console.log(key);
        // console.log('#'+`${key}`+'Audio');
        let audio = $('#'+`${key}`+'Audio')[0];
        console.log(audio);
        audio.paused ? audio.play() : audio.currentTime = 0;
    });


    $('body').on('keypress', function(event){
        switch (event.which) {
            case 97:
            case 65:
                console.log('a pressed');
                let audio1 = $('#aAudio')[0];
                console.log(audio1);
                audio1.paused ? audio1.play() : audio1.currentTime = 0;
                break;
            case 99:
            case 67:
                let audio2 = $('#cAudio')[0];
                console.log('c pressed');
                audio2.paused ? audio2.play() : audio2.currentTime = 0;
                break;
            case 100:
            case 68:
                let audio3 = $('#dAudio')[0];
                console.log('d pressed');
                audio3.paused ? audio3.play() : audio3.currentTime = 0;
                break;
            case 101:
            case 69:
                let audio4 = $('#eAudio')[0];
                console.log('e pressed');
                audio4.paused ? audio4.play() : audio4.currentTime = 0;
                break;
            case 102:
            case 70:
                let audio5 = $('#fAudio')[0];
                console.log('f pressed');
                audio5.paused ? audio5.play() : audio5.currentTime = 0;
                break;
            case 103:
            case 71:
                let audio6 = $('#gAudio')[0];
                console.log('g pressed');
                audio6.paused ? audio6.play() : audio6.currentTime = 0;
                break;
            case 98:
            case 66:
                let audio7 = $('#bAudio')[0];
                console.log('b pressed');
                audio7.paused ? audio7.play() : audio7.currentTime = 0;
                break;
        }
    });
});
