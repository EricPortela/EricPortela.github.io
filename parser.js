let http = new XMLHttpRequest(); //STEP 1 - Create a new xmlhttp-request object

http.open('get', 'Data/experience.json', true); //STEP 2 - Prepare the request with the open() method

http.send(); //STEP 3 - execute the request with the send() function. We don't use any parameters with the send() function because this is a simple get request.

//STEP 4 - The XMLHttpRequest object has a property called onload. The onload property is fired when the transaction with the server is completed. We set the onload property equal to a function, so when the onload property is fired the function is executed.
http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let experiences = JSON.parse(this.responseText);
        let output = "";

        for (let experience of experiences) {
            // console.log(package);
            output += `
            <div class="event">
                <div class="timeline">
                    <div class="circle"></div>
                </div>
        
                <div id="content">
                    <div class="cell_header"> <h1>${experience.title}</h1> </div>
                    <h3>${experience.period}</h3>
                    <p>${experience.description}</p>
                </div>
            </div>
            `;
        }

        var json_to_html_tag = document.getElementById("section_2");
        json_to_html_tag.innerHTML = output;
    }
}