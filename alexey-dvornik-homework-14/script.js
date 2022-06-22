const prevButton = $('#prev');
const nextButton = $('#next');

nextButton.on('click', function () {
    if ( ($('#first').next('p')).length !== 0 ) {
        $('p#first').removeAttr('id').next('p').attr('id','first');
    }
})

prevButton.on('click', function () {
    if ( ($('#first').prev('p')).length !== 0 ) {
        $('p#first').removeAttr('id').prev('p').attr('id','first');
    }
})