function start() {
    if (window.navigator.userAgent.includes("Firefox")) {console.warn("Sorry! Only partial support for Firefox! Use 'info()' for more information.")}
    //Delete
    setInterval(function () {
        document.getElementById("loadingText").remove()
    }, 5000);
    //Delete
};

