const usersData = [
    { fullName: "Dileep", pdfFileName: 'Dileep.pdf', Course: " Front End Web Development" , Course_Duration : " 15-01-2024 - 15-02-2024"},
    // Add more users with their details as needed
];

function searchAndDisplay() {
    const fullNameInput = document.getElementById("fullName").value.toLowerCase(); // Convert to lowercase
    const resultContainer = document.getElementById("result");
    const userInfoElement = document.getElementById("userInfo");
    const downloadButton = document.getElementById("downloadButton");

    const user = usersData.find(user => user.fullName.toLowerCase() === fullNameInput);

    if (user) {
        // Display user information
        userInfoElement.innerHTML = `Name: ${user.fullName}<br>Course: ${user.Course}
        <br>Course_Duration : ${user.Course_Duration}
        `;
        resultContainer.classList.remove("hidden");

        // Enable download button
        downloadButton.classList.remove("hidden");
    } else {
        // Hide result container and download button
        resultContainer.classList.add("hidden");
        downloadButton.classList.add("hidden");
        alert("User not found. Please check the entered name.");
    }
}

function downloadCertificate() {
    const fullNameInput = document.getElementById("fullName").value.toLowerCase(); // Convert to lowercase
    const user = usersData.find(user => user.fullName.toLowerCase() === fullNameInput);

    if (user) {
        // Create a download link for the user's PDF file
        const link = document.createElement('a');
        link.href = `PDF/${user.pdfFileName}`;
        link.download = `${user.pdfFileName}`;

        // Simulate a click on the link to trigger the download
        link.click();
    } else {
        alert("User not found. Please check the entered name.");
    }
}
