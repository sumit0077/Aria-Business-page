
    document.addEventListener('DOMContentLoaded', function () {
        // Array of dynamic text options
        var dynamicTextOptions = ['BUSINESS TEMPLATE', 'BUSINESS SOLUTIONS', 'BUSINESS SERVICES'];

        // Get the elements by their IDs
        var introTextElement = document.getElementById('introText');
        var dynamicTextElement = document.getElementById('dynamicText');

        // Initialize index to 0
        var index = 0;

        // Function to change the dynamic text
        function changeDynamicText() {
            dynamicTextElement.textContent = dynamicTextOptions[index];
            index = (index + 1) % dynamicTextOptions.length;
        }

        // Change dynamic text every 3 seconds (adjust the timing as needed)
        setInterval(changeDynamicText, 2000);
    });
