$(document).ready(function() {
    $.get('missing.html', function(data) {
        $('#myDiv').html(data);
    }).fail(function (jqXHR) {
        var errorMessage = "<p>Sorry! There's beena an error. ";
        errorMessage += "Please try again later.</p>";
        $('#myDiv').html("<p>Sorry! " + jqXHR.statusText + " error.</p>");
    });
});
