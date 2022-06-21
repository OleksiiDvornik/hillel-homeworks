const prevButton = $('#prev');
const nextButton = $('#next');

nextButton.on('click', function () {
    $('p#first').removeAttr('id').next('p').attr('id','first');
});

prevButton.on('click', function () {
    $('p#first').removeAttr('id').prev('p').attr('id','first');
});