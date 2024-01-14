document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");
  const sidebar = document.getElementById("sidebar");

  // Open sidebar on menu button click
  menuButton.addEventListener("click", function () {
    sidebar.style.transform = "translateX(0)";
  });

  // Close sidebar on close button click
  closeButton.addEventListener("click", function () {
    sidebar.style.transform = "translateX(100%)";
  });
});

// Function For Airplane Toggle
document.addEventListener("DOMContentLoaded", function () {
  const airmenuButton = document.getElementById("airplaneButton");
  const aircloseButton = document.getElementById("aircloseButton");
  const airsidebar = document.getElementById("airsidebar");

  // Open sidebar on menu button click
  airmenuButton.addEventListener("click", function () {
    airsidebar.style.transform = "translateX(0)";
  });

  // Close sidebar on close button click
  aircloseButton.addEventListener("click", function () {
    airsidebar.style.transform = "translateX(100%)";
  });
});
