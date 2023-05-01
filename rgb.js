// DESCRIPTION:
// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.
// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:
// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

// my solution
function brightest(colors){
 let colorIndex = 0,
     maxValue = 0
 for(let i = 0; i < colors.length; i++){
   let color = colors[i],
       r = parseInt(color.slice(1, 3), 16),
       g = parseInt(color.slice(3, 5), 16),
       b = parseInt(color.slice(5, 7), 16), 
       value = Math.max(r, g, b)
   if(value > maxValue) {
     maxValue = value
     colorIndex = i
   }
 }
  return colors[colorIndex]
}

// const brightest = colors => 
//   colors.reduce(([a, b], curr, index) => 
//                 (index = Math.max(...curr.match(/[^#]{2}/g)
//                                             .map(element => parseInt(element, 16)))) > b
//                 ? [curr, index] : [a, b]
//                 , [0, -1])[0]