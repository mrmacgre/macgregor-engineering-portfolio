// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Load data from JSON file
    loadData();
});

// Global variables to store data
let projectsData = [];
let experienceData = [];
let skillsData = {};
let contactData = {};

// Function to load data from JSON file
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        projectsData = data.projects;
        experienceData = data.experience;
        skillsData = data.skills;
        contactData = data.contact;
        
        // Load projects and experience
        loadProjects();
        loadExperience();
        updateSkills();
        updateContact();
    } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to default data if JSON loading fails
        loadDefaultData();
    }
}

// Fallback function with default data
function loadDefaultData() {
    projectsData = [
        {
            id: 1,
            title: "Sample Project",
            description: "This is a sample project. Update the data.json file with your actual projects.",
            technologies: ["Sample Tech"],
            githubUrl: "#",
            liveUrl: null,
            icon: "fas fa-code"
        }
    ];
    
    experienceData = [
        {
            id: 1,
            title: "Sample Experience",
            company: "Sample Company",
            date: "Sample Date",
            description: "This is sample experience. Update the data.json file with your actual experience."
        }
    ];
    
    loadProjects();
    loadExperience();
}

// Function to update skills section
function updateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    let skillsHTML = '';
    Object.entries(skillsData).forEach(([category, skills]) => {
        const skillTags = skills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
        
        skillsHTML += `
            <div class="skill-category">
                <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div class="skill-tags">
                    ${skillTags}
                </div>
            </div>
        `;
    });
    
    skillsGrid.innerHTML = skillsHTML;
}

// Function to update contact section
function updateContact() {
    const contactLinks = document.querySelector('.contact-links');
    if (!contactLinks) return;
    
    let contactHTML = '';
    if (contactData.email) {
        contactHTML += `
            <a href="mailto:${contactData.email}" class="contact-link">
                <i class="fas fa-envelope"></i>
                ${contactData.email}
            </a>
        `;
    }
    if (contactData.linkedin) {
        contactHTML += `
            <a href="${contactData.linkedin}" class="contact-link" target="_blank">
                <i class="fab fa-linkedin"></i>
                LinkedIn Profile
            </a>
        `;
    }
    if (contactData.github) {
        contactHTML += `
            <a href="${contactData.github}" class="contact-link" target="_blank">
                <i class="fab fa-github"></i>
                GitHub Profile
            </a>
        `;
    }
    if (contactData.phone) {
        contactHTML += `
            <a href="tel:${contactData.phone}" class="contact-link">
                <i class="fas fa-phone"></i>
                ${contactData.phone}
            </a>
        `;
    }
    
    contactLinks.innerHTML = contactHTML;
}

// Function to load and display projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Function to create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const links = [];
    links.push(`<a href="project-detail.html?id=${project.id}" class="project-link">
        <i class="fas fa-info-circle"></i> Learn More
    </a>`);
    if (project.githubUrl) {
        links.push(`<a href="${project.githubUrl}" class="project-link" target="_blank">
            <i class="fab fa-github"></i> GitHub
        </a>`);
    }
    if (project.liveUrl) {
        links.push(`<a href="${project.liveUrl}" class="project-link" target="_blank">
            <i class="fas fa-external-link-alt"></i> Live Demo
        </a>`);
    }
    
    card.innerHTML = `
        <div class="project-image">
            <i class="${project.icon}"></i>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
            <div class="project-links">
                ${links.join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Function to load and display experience
function loadExperience() {
    const timeline = document.getElementById('timeline');
    
    experienceData.forEach((experience, index) => {
        const timelineItem = createTimelineItem(experience, index);
        timeline.appendChild(timelineItem);
    });
}

// Function to create a timeline item element
function createTimelineItem(experience, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3 class="experience-title">${experience.title}</h3>
            <p class="experience-company">${experience.company}</p>
            <p class="experience-date">${experience.date}</p>
            <p class="experience-description">${experience.description}</p>
        </div>
    `;
    
    return item;
}

// Function to add a new project (for future use)
function addProject(projectData) {
    projectsData.push(projectData);
    const projectsGrid = document.getElementById('projects-grid');
    const projectCard = createProjectCard(projectData);
    projectsGrid.appendChild(projectCard);
}

// Function to add a new experience (for future use)
function addExperience(experienceData) {
    experienceData.push(experienceData);
    const timeline = document.getElementById('timeline');
    const timelineItem = createTimelineItem(experienceData, experienceData.length - 1);
    timeline.appendChild(timelineItem);
}

// Export functions for external use (if needed)
window.PortfolioManager = {
    addProject,
    addExperience,
    projectsData,
    experienceData
};
