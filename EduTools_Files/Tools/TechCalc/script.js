let outputscreen=document.getElementById("output-screen");

        function display(num){
            outputscreen.value += num;
        }
        function calculate(){
            try{
                if(outputscreen.value==""){
                    throw "error"
                    
                }
                outputscreen.value = eval(outputscreen.value)
            }
            catch(error){
                showAlert("Please enter valid input")
            }
        }
        function cl(){
            outputscreen.value = "";
        }
        function del(){
            outputscreen.value = outputscreen.value.slice(0,-1);
        }


/////////////////////////geometric calculator//////////////

function showAlert(msg){
    document.getElementsByClassName("alertMsg")[0].innerHTML = msg;
    document.getElementsByClassName("alert")[0].style.display = "block";
}
function closeAlert(){
    document.getElementsByClassName("alert")[0].style.display = "none";
}

        function calculateCircle() {
            const radius = parseFloat(document.getElementById('circleRadius').value);
            if (isNaN(radius) || radius <= 0) {
                showAlert("Please enter a valid radius");
                return;
            }
            const area = Math.PI * radius * radius;
            const perimeter = 2 * Math.PI * radius;
            document.getElementById('circleArea').innerText = area.toFixed(2);
            document.getElementById('circlePerimeter').innerText = perimeter.toFixed(2);
        }
        
        function calculateRectangle() {
            const length = parseFloat(document.getElementById('rectangleLength').value);
            const width = parseFloat(document.getElementById('rectangleWidth').value);
            if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
                showAlert("Please enter valid length and width");
                return;
            }
            const area = length * width;
            const perimeter = 2 * (length + width);
            document.getElementById('rectangleArea').innerText = area.toFixed(2);
            document.getElementById('rectanglePerimeter').innerText = perimeter.toFixed(2);
        }
        
        function calculateSquare() {
            const side = parseFloat(document.getElementById('squareSide').value);
            if (isNaN(side) || side <= 0) {
                showAlert("Please enter a valid side length");
                return;
            }
            const area = side * side;
            const perimeter = 4 * side;
            document.getElementById('squareArea').innerText = area.toFixed(2);
            document.getElementById('squarePerimeter').innerText = perimeter.toFixed(2);
        }
        
        function calculateTriangle() {
            const base = parseFloat(document.getElementById('triangleBase').value);
            const height = parseFloat(document.getElementById('triangleHeight').value);
            if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
                showAlert("Please enter valid base and height");
                return;
            }
            const area = 0.5 * base * height;
            document.getElementById('triangleArea').innerText = area.toFixed(2);
            document.getElementById('triangleSide').style.display ="block";
        }
        