
// set default value of variable to initlialize library
var name  = 'Lisa' , surname = 'Smith', lang = 'en';

// Handle name input and set name var.
$('#name').keyup(function () {
  name = $(this).val();
  refresh();
});

// Handle surname input and set surname var.
$('#surname').keyup(function () {
  surname = $(this).val();
  refresh();
});

function refresh() {
  // initialize library by arguments from variable
  var lisa = $G(name, surname, lang);

  // Set option in select to value from lang variable
  $('#langSel option').filter(function() {
    return $(this).text() == lisa.getLang();
  }).prop('selected', true);

  // Set input to checked when formal is defined
  if (lisa.getType() === true) {
    $('#formal').prop('checked', true);
  }

  // Create greeting and put to DOM element #output
  lisa.greet().toHtmlElem('#output');

  // Change language and put to DOM in same line when selector was changed
  $('#langSel').change(function () {
    lang = $('#langSel option:selected')[0].text;
    lisa.setLang(lang).greet(lisa.getType()).toHtmlElem('#output');//
  });

  // Set type of greeting and put to DOM when input was turn to checked
  $('#formal').change(function () {
    lisa.greet($(this)[0].checked).toHtmlElem('#output');
  });
  
}
// Exexute function to start runing code.
refresh();
