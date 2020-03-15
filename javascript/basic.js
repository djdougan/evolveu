console.log("Hello World");




const onButtonClicked = () => {
    console.log("I’m in the button click event");
    var myInput = document.getElementById("myInput");
    let value = myInput.value;
    let result = Number.parseInt(value) + 1;
    console.log(result)
    size(result);
};

const size = (number) => {
    let result;
    if (number < 10) {
        result = 'small';
    } else if (number > 10 && number < 19) {
        result = 'med';
    } else {
        result = 'large'
    }
    console.log(result);

}
document.getElementById("myButton").addEventListener("click", onButtonClicked);

