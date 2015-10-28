
// Main set function
function set ( context ) {

  var doc = context.document;
  var alert = COSAlertWindow.new();
  alert.addButtonWithTitle('OK');
  alert.addButtonWithTitle('Cancel');

  alert.setMessageText('Create Rectangle');
  alert.setInformativeText('Set the width and height of your rectangle');

  alert.addTextLabelWithValue('Width:');
  alert.addTextFieldWithValue('400');

  alert.addTextLabelWithValue('Height:');
  alert.addTextFieldWithValue('200');

  if ( alert.runModal() == "1000" ) {

    var width = parseInt(valAtIndex(alert, 1), 10);
    var height = parseInt(valAtIndex(alert, 3), 10);

    var sw = COSAlertWindow.new();
    sw.setMessageText(width);

    var rectangle = [[doc currentPage] addLayerOfType:"rectangle"]
    var frame = [rectangle frame]
    [frame setWidth:width]
    [frame setHeight:height]

    var color = [[[[rectangle style] fills] addNewStylePart] color]
    [color setRed:0.5]
    [color setGreen:0.5]
    [color setBlue:0.5]

  }

}

function valAtIndex (view, index) {
  return view.viewAtIndex(index).stringValue()
}
