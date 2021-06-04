<h3>picoJSlib</h3> is a very very very pico library in JavaScript. It was created when I try understend how JQuery works in hood. It use for create greeting in three languages and two types: formal and informal.<br>
<h1><strong>Installation:</strong></h1>

1. Download repository<br>
```
git clone https://github.com/KowalikDominik/picoJSlib.git
```
2. Add Greetr.js to your index.html at the end of body:
```
<body>
.....
.....
<script src="jquery-3.5.1.min.js"></script>
</body>
```
<h1><strong>How use:</strong></h1>
<h3>Initialization:</h3>

```
var name  = 'Lisa' , surname = 'Smith', lang = 'en'; // set default arguments
var lisa = $G(name, surname, lang); // initialize lib
```

<h3>Methods:</h3>

```
lisa.greet() // set greeting informal type
lisa.greet(true) // set greeting formal type
lisa.setLang('en') // set english language

lisa.greet().toHtmlElem('#output'); // set and put to DOM element
lisa.setLang(lang).greet(lisa.getType()).toHtmlElem('#output');  set language and before set type and put to DOM element
```

<h1> Example: </h1>
live example: https://kowalikdominik.github.io/picoJSlib/

```
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

```
