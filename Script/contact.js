document.addEventListener("DOMContentLoaded", function () {
  const phoneInputField = document.querySelector("#phone");

  // Initialize the telephone input with country data
  window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    customPlaceholder: function (
      selectedCountryPlaceholder,
      selectedCountryData
    ) {
      return `+${selectedCountryData.dialCode} ${selectedCountryPlaceholder}`;
    },
    customContainer: "intl-tel-input",
    initialCountry: "auto",
    separateDialCode: true,
    autoPlaceholder: "polite",
    customDropdown: "custom-dropdown",
    geoIpLookup: function (callback) {
      fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => callback(data.country));
    },
  });

  // Handle form submission
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const phoneInput = document.getElementById("phone");

      // Check if name, email, and phone number are filled
      if (!nameInput.value || !emailInput.value || !phoneInput.value) {
        alert("Name, Email, and Phone are required fields.");
        event.preventDefault(); // Prevent form submission
      } else {
        // Proceed with form submission or further validation if needed
        // You can add additional validation logic here before allowing the form to submit
      }
    });
});
