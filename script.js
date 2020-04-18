$("#prev").click(function(e){
    $("#slideShow").carousel('prev');
});



$("#next").click(function(e){
    $("#slideShow").carousel('next');
});


$('#play').click(function() {
    let controls = $(this);
    if (controls.hasClass('pause')) {
        controls.text('▶').removeClass('pause').toggleClass('play');
        $('#slideShow').carousel('pause');
    } else {
        controls.text('⏸').removeClass('play').toggleClass('pause');
        $('#slideShow').carousel('cycle');
    }
});

