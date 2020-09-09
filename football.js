//The first solution 
 
function footballPoints(wins, draws, losses){
    return wins*3 + draws 
}
console.log("The first Solution-Total points are:", footballPoints(1,2,2))


//The second solution 
footballPoints2 = (w,d,l) => (3*w)+d
console.log( "The seconds solution- Total points are:" ,footballPoints2(1,2,2))



//The third solution 

var x = function footballPoints3(wins, draws, losses){
  return wins*3 + draws + losses*0

}
var points = x(1,1,1)
console.log("The third Solution -Total points are:", points)

