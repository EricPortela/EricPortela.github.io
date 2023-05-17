let http = new XMLHttpRequest();

http.open('get', 'Data/grades.json', true);

http.send();

http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let grades = JSON.parse(this.responseText);
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
                label: 'Grade distribution - ' + grade.course,
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