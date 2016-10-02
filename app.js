window.onload = toss;
function toss () {
document.getElementById('click').onclick = function(){
if (Math.random()>0.5) {
window.document.coin.src = "images/head-2.jpg";
}
else {
window.document.coin.src = "images/tail-2.jpg";
}
return false;
};








};










