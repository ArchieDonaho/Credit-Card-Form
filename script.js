const expirationSelect = document.querySelector('[data-expiration-year]');

// generate options for the next 10 years
const currentYear = new Date().getFullYear();
for (let i = currentYear; i < currentYear + 10; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  expirationSelect.append(option);
}
