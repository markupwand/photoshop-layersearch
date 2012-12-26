function refreshLayers(){
	var document = app.activeDocument;
	var child_layer, current_level_layers, document_art_layers, layer, layer_sets, _i, _j, _len, _len1, _ref;
	var document_art_layers = [];
		
	current_level_layers = document.layers;
	
	while (current_level_layers.length !== 0) {
	  layer_sets = [];
	  for (_i = 0, _len = current_level_layers.length; _i < _len; _i++) {
	    layer = current_level_layers[_i];
	    if (layer.typename === "ArtLayer") {
	      d = new Date();
	      content = layer.name + "haha";
	      document_art_layers.push(content);
	    } else if (layer.typename === "LayerSet") {
	      _ref = layer.layers;
	      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
	        child_layer = _ref[_j];
	        layer_sets.push(child_layer);
	      }
	    }
	  }
	  current_level_layers = layer_sets;
	}
	
	layer_list_string = document_art_layers.join("|")
	var xml = "<object>";
	xml += convertToXML(layer_list_string,"layerlist");
	xml += "</object>";
	return xml;
}

function convertToXML(property, identifier){
   var type = typeof property;
   var xml = '<property id = "' + identifier + '" >';
   
   switch(type){
      case "number":
         xml += "<number>";
         xml += property.toString();
         xml += "</number>";
         break;
      case "boolean":
         xml += "<" + property.toString() + "/>";
         break;
      case "string":
         xml += "<string>";
         xml += property.toString();
         xml += "</string>";
         break;
      case "object":
         // Object case is currently not supported
         alert("Object case is currently not supported");
         //xml += "<object>";
         //for(var i in property)
         //   xml += convertToXML(property[i], 
         //xml += "</object>";
         break;
      case "undefined":
         xml += "<string>undefined</string>";
         break;
      default:
         alert("Type " + type + " is unknown.");
         return "";
   }
   xml += '</property>';
   return xml;
}