// JQuery - Classes CSS
$('#add').click(function(e) {
    e.preventDefault();
    $('h1').addClass('maCouleur');
});

$('#remove').click(function(e) {
    e.preventDefault();
    $('h1').removeClass('maCouleur');
});

$('#toggle').click(function(e) {
    e.preventDefault();
    $('h1').toggleClass('maCouleur');
});

// JQuery - Désactiver un bouton
$('form input').keyup(function() {
    if ($(this).val().length > 5) {
        $('button').attr('disabled', 'disabled');
    } else {
        $('button').removeAttr('disabled');
    }
});

// JQuery - Retenir l'utilisateur
$(window).one('mouseleave', function() {
    alert('Bravo, vous êtes notre 10.000ème client ! Vous avez gagné le cocotier !');
});