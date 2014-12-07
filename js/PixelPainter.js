$(document).ready(function(){
	function PixelPainter(width,height) {
    this.controls = $('#controls');
    this.artboard = $('#artboard');
    for (var i=0; i<height; i++) {
      var row = $('<div class="row clearfix">')
      
      for (var j=0; j<width; j++) {
        var col = $('<div class="col">')
        row.append(col);  
      };
      row.appendTo('#artboard');

    }

    for (var i=0; i<height; i++) {
      var row = $('<div class="row clearfix">')
      
      for (var j=0; j<width; j++) {
        var col = $('<div class="col">')
        row.append(col);  
      };
      row.appendTo('#artboard');


    
	} // ends PixelPainter class
  var pixelpainter = new PixelPainter(11,11);



});