$("#rock").on('click', function () {
    var result = compare('rock', computerChoice());
    $('#decision').html(result);

});
$('#paper').on('click', function () {
    var result = compare('paper', computerChoice());
    $('#decision').html(result);

});

$('#scissors').on('click', function () {
    var result = compare('scissors', computerChoice());
    $('#decision').html(result);

});