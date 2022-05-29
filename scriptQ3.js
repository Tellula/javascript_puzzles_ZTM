// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.



// ----------------------------------------------------------------------------------------------------


let hexToRGB = (string) => {
    
    let hexRgbFormat = string.match(/.{1,2}/g);
  
    let red = parseInt(hexRgbFormat[0], 16);
    let green = parseInt(hexRgbFormat[1], 16);
    let blue = parseInt(hexRgbFormat[2], 16);
  
  console.log("The rgb color is : rgb(" + red + ',' + green + ',' + blue + ')');
}

// ----------------------------------------------------------------------------------------------------

let colorToHex = (color) =>{
    let rgbHexFormat = color.toString(16);
    return rgbHexFormat.length == 1 ? "0" + rgbHexFormat : rgbHexFormat;
     
}

let ConvertRGBtoHex = (red, green, blue) => {
    return console.log('The hex color is : #' + colorToHex(red) + colorToHex(green) + colorToHex(blue))
      
}



let convert = (...args) => {
    return (args.length === 1 ) ?  hexToRGB(args[0]) : ConvertRGBtoHex(...args)
    } 

convert(21,2,190);
convert('1502BE');


