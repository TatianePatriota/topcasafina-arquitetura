$('#collapse-navbar').on('show.bs.collapse', function(){
    $('.card-header').css('transform', 'translate(-50%, 10%');
});

$('#collapse-navbar').on('hide.bs.collapse', function(){
    $('.card-header').css('transform', 'translate(-50%, -50%');
});


console.log('olá')