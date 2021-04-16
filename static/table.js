$(document).ready(function() {
    // create a data table from existing html table
    table = $('#table').DataTable();

    // set event handler for row click
    $('#table tbody').on('click', 'tr', function () {
	var rowthis = this; 	                            // save this for callback use later
        var row = table.row( this ).data();                 // get row using datatable api

	// make AJAX/json call to flask server
	$.getJSON($SCRIPT_ROOT + '/TaskList', 
		  {isbn: row[2]},                           // encode data to send to flask server
                  function(data) {                          // callback when flask returns
                       row[3]=data.votes;                   // extract results from json data returned
 		       table.row(rowthis).data(row).draw(); // update old row with new data, redraw row
	});
    } );
} );
