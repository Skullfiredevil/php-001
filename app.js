document.addEventListener('DOMContentLoaded', () => {
  const optionsSelect = document.getElementById('options');
  const outputDiv = document.getElementById('output');
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', () => {
    const selectedOption = optionsSelect.value;
    fetchBackendData(selectedOption)
      .then((data) => {
        displayData(data);
      })
      .catch((error) => {
        outputDiv.textContent = 'Error fetching data from the backend.';
        console.error(error);
      });
  });

  function fetchBackendData(option) {
    return fetch(`backend.php?option=${option}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      });
  }

  function displayData(data) {
    let html = '<ul>';
    data.forEach((item) => {
      html += `<li>${item}</li>`;
    });
    html += '</ul>';
    outputDiv.innerHTML = html;
  }
});
