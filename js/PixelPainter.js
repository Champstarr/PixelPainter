$(document).ready(function(){
	function PixelPainter(width,height) {
    var colorPalette = [
      ["red", "blue", "green"],
      ["purple", "orange", "yellow"]
    ];
    this.controls = $('#controls');
    this.artboard = $('#artboard');
    for (var i=0; i<height; i++) { //for grid
      var row = $('<div class="row clearfix">')
      
      for (var j=0; j<width; j++) {
        var col = $('<div class="col">')
        row.append(col);  
      };
      row.appendTo('#artboard');

    }
    //This is for the color palatte222
    for (var i=0; i<2; i++) {
      var row2 = $('<div>', {
        class: "row2 clearfix"
      });
      
      for (var j=0; j<3; j++) {
        var col2 = $('<div>',{
          class: "col2 clearfix",
          css:{
            "background-color": colorPalette[i][j]
          }
        });

        row2.append(col2);  
      };
      row2.appendTo('#controls');
    }
   var cf = $('<div class="clearfix">');
   cf.insertAfter('#artboard');

    
	} // ends PixelPainter class
  var pixelpainter = new PixelPainter(11,11);



});