// First XMLHttpRequest
let xhr1 = new XMLHttpRequest();
xhr1.open('get', 'Data/experience.json', true);
xhr1.send();

xhr1.onload = function() {
  if (xhr1.readyState === 4 && xhr1.status === 200) {
    // Process the response for the first request
    let experiences = JSON.parse(xhr1.responseText);
    let output = "";

    for (let experience of experiences) {
        // console.log(package);
        output += `
        <div class="event">
            <div class="timeline">
                <div class="circle"></div>
            </div>
    
            <div id="content">
                <div class="cell_header"> 
                    <div id=half_1>
                        <h1>${experience.title}</h1>
                        <h3>${experience.company}</h3>
                    </div>

                    <div id=half_2>
                        <a href="${experience.website}" target="_blank">
                            <img src="${experience.logo_path}">
                        </a>
                    </div>
                </div>

                <h3>${experience.period}</h3>
                <p>${experience.description}</p>
            </div>
        </div>
        `;
    }

    var json_to_html_tag = document.getElementById("section_2");
    json_to_html_tag.innerHTML = output;
    
  }
};

// Second XMLHttpRequest
let xhr2 = new XMLHttpRequest();
xhr2.open('get', 'Data/grades.json', true);
xhr2.send();

xhr2.onload = function() {
  if (xhr2.readyState === 4 && xhr2.status === 200) {
    // Process the response for the second request
    let grades = JSON.parse(xhr2.responseText);
        let output = "";

        var count = 1;
        var chartName = "";

        for (let grade of grades) {
            chartName = "myChart" + count; // Assign a unique chart name

            output += `
                <div class="grade_cell">
                    <p id="subtitle_1">ECTS Credits ${grade.credits}</p>
                    <p id="title">${grade.course_code} - ${grade.course}</p>
                    <p id="subtitle_2">Final Grade: ${grade.grade}</p>
                    <canvas id="${chartName}"></canvas>
                </div>
            `;

            count++;
        }

        var json_to_html_tag = document.getElementById("my_grades");
        json_to_html_tag.innerHTML = output;

        createCharts(grades); // Call the function to create the charts and pass the grades array
  }
};


function createCharts(grades) {
    var count = 1;

    for (let grade of grades) {
        chartName = "myChart" + count; // Assign a unique chart name

        const ctx = document.getElementById(chartName);

        const data = {
            labels: [
                'Grade 5',
                'Grade 4',
                'Grade 3'
            ],
            datasets: [{
                label: 'Grade distribution (students/grade)', //+ grade.course_code,
                data: grade.grade_distribution,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: '#fff',
                pointBorderColor: 'rgb(255, 99, 132)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        };

        const config = {
            type: 'radar',
            data: data,
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                }
            }
        };

        new Chart(ctx, config); // Create the chart

        count++;
    }
}