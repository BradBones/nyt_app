<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>


// ajax request for search terms begin and end dates
$("#search-button").on("click", function() {

event.preventDefault();

var search_term = $("#searchTerm").val().trim();
console.log(search_term);
var begin_date = $("#startYear").val().trim();
console.log(begin_date);
var end_date = $("#endYear").val().trim();
console.log(end_date);


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "2a3ff18098884e3ba89b97b589d2fc9e",
  'q': search_term,
  'begin_date': begin_date,
  'end_date': end_date,
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(response) {
console.log(response);

// var resultDate = response.pub_date;
// console.log(resultDate);
var resultText = response.abstract;
console.log(resultText);

// var resultURL = $("<div>");
var resultDate = $('<div>');

// resultDate.text(resultDate);
resultURL.html(resultText);

$('#topArticles').append(resultURL);


}).fail(function(err) {
  throw err;
});

})


