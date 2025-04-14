
const projects = [
    {
        title: "Lootz - Maze Adventure Game",
        description: `
            <h3>Game Development</h3>
            <p>Designed a game called Lootz where the user embarks on an adventure in a randomly generated maze to collect all pillars and reach the exit.</p>
            <h3>Skills Used</h3>
            <ul>
                <li>Java</li>
                <li>SQL</li>
                <li>JavaFX</li>
            </ul>
            <h3>Team</h3>
            <p>Programmer of 3:</p>
            <ul>
                <li>Used JavaFX to design all characters, code character special abilities, and implement most of the GUI used in the game.</li>
            </ul>
        `,
    },
    { title: "Project 2", description: "A description of project 2." },
    { title: "Project 3", description: "A description of project 3." },
];

// Function to show a specific page and hide others
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show the selected page
    document.getElementById(pageId).classList.add("active");
}

// Load projects dynamically
function loadProjects() {
    const projectsList = document.getElementById("projects-list");
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsList.appendChild(projectElement);
    });
}

// Handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    event.target.reset();
}

// Set up event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Load projects when the page loads
    loadProjects();

    // Set up navigation
    document.getElementById("about-link").addEventListener("click", (e) => {
        e.preventDefault();
        showPage("about");
    });

    document.getElementById("projects-link").addEventListener("click", (e) => {
        e.preventDefault();
        showPage("projects");
    });

    document.getElementById("contact-link").addEventListener("click", (e) => {
        e.preventDefault();
        showPage("contact");
    });

    // Handle form submission
    document.getElementById("contact-form").addEventListener("submit", handleFormSubmission);

    // Show the default page (About Me)
    showPage("about");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});