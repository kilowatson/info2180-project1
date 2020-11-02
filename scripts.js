/* Add your JavaScript to this file */
window.onload = function () {

    let y = document.getElementsByClassName('newsletter')

    var t = document.getElementById("email").innerHTML;
    console.log(t)

    y[0].getElementsByClassName('btn')[0].onclick = function (event) {
        var x = document.getElementById("email").value;
        event.preventDefault();
        if (x == "") {
            document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address";

        }
        else {

            document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address " + x + " has been added to our mailing list!";
        }
    }
}