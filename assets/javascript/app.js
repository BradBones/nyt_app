<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



// ajax request for search terms begin and end dates

$("#search-button").on("click", function() {

event.preventDefault();

var search_term = $("#searchTerm").val();
console.log(search_term);
var begin_date = $("#startYear").val();
console.log(begin_date);
var end_date = $("#endYear").val();
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

var resultDate = response.pub_date;
console.log(resultDate);
var resultText = response.abstract;
console.log(resultText);

var resultURL = $("<div>");
var resultDate = $('<p>');

resultDate.text(resultDate);
resultURL.text(resultText);

$('#topArticles').append(resultURL).append(resultDate);


}).fail(function(err) {
  throw err;
});

})


