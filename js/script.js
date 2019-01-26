/* Спойлер */
$(document).ready(function() {
    $('.spoiler').click(function() {
        id='#answer'+$(this).attr("id").substr(2);
        $(id).slideToggle('normal');
        return false;
    });
});