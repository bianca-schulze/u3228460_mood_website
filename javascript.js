const apiEndpoint = 'https://api.acmi.net.au/';

        function fetchData() {
            fetch(apiEndpoint)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const acmiDataDiv = document.getElementById('acmi-data');
                    acmiDataDiv.innerHTML = JSON.stringify(data, null, 2);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }

        window.addEventListener('load', fetchData);