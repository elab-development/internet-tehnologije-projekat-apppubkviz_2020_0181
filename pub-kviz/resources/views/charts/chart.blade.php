<!DOCTYPE html>
<html>

<head>
    <title>Google Chart</title>
    <!-- Uključivanje Google Charts biblioteke -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</head>

<body>
    <!-- Div za prikaz dijagrama -->
    <div id="chart_div" style="width: 100%; height: 500px;"></div>

    <!-- JavaScript kod za generisanje dijagrama -->
    <script type="text/javascript">
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Tim', 'Broj poena'],
            @foreach($teams as $team)
            ['{{ $team->team->nazivTima }}', {{ $team->brojPoena }}],
             @endforeach
            ]);

            var options = {
                title: 'Broj prijava po timu',
                legend: { position: 'none' }
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
    </script>
</body>

</html>

