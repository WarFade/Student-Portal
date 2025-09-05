// Wait for DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const userMenu = document.getElementById('user-menu');
    const userDropdown = document.getElementById('user-dropdown');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const loginButton = document.getElementById('login-button');
    
    // Detect current page and highlight appropriate nav items
    highlightCurrentPage();

    // Sections
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const profileSection = document.getElementById('profile-section');
    const achievementSection = document.getElementById('achievement-section');
    const portfolioSection = document.getElementById('portfolio-section');
    const adminSection = document.getElementById('admin-section');
    const reportsSection = document.getElementById('reports-section');

    // Navigation links
    const navHome = document.getElementById('nav-home');
    const navProfile = document.getElementById('nav-profile');
    const navAchievements = document.getElementById('nav-achievements');
    const navPortfolio = document.getElementById('nav-portfolio');

    // Mobile navigation links
    const mobileNavHome = document.getElementById('mobile-nav-home');
    const mobileNavProfile = document.getElementById('mobile-nav-profile');
    const mobileNavAchievements = document.getElementById('mobile-nav-achievements');
    const mobileNavPortfolio = document.getElementById('mobile-nav-portfolio');

    // Achievement form elements
    const newAchievementBtn = document.getElementById('new-achievement-btn');
    const addAchievementBtn = document.getElementById('add-achievement-btn');
    const newAchievementForm = document.getElementById('new-achievement-form');
    const cancelAchievementBtn = document.getElementById('cancel-achievement-btn');

    // Toggle user dropdown
    if (userMenu && userDropdown) {
        userMenu.addEventListener('click', () => {
            userDropdown.classList.toggle('hidden');
        });
    }

    // Toggle mobile menu
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Handle login
    if (loginButton && loginSection && dashboardSection) {
        loginButton.addEventListener('click', () => {
            loginSection.classList.add('hidden');
            dashboardSection.classList.remove('hidden');
        });
    }

    // Navigation handling
    if (navHome && dashboardSection) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            dashboardSection.classList.remove('hidden');
        });
    }

    if (navProfile && profileSection) {
        navProfile.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            profileSection.classList.remove('hidden');
        });
    }

    if (navAchievements && achievementSection) {
        navAchievements.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            achievementSection.classList.remove('hidden');
        });
    }

    if (navPortfolio && portfolioSection) {
        navPortfolio.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            portfolioSection.classList.remove('hidden');
        });
    }

    // Mobile navigation handling
    if (mobileNavHome && dashboardSection && mobileMenu) {
        mobileNavHome.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            dashboardSection.classList.remove('hidden');
            mobileMenu.classList.add('hidden'); // Hide mobile menu after selection
        });
    }

    if (mobileNavProfile && profileSection && mobileMenu) {
        mobileNavProfile.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            profileSection.classList.remove('hidden');
            mobileMenu.classList.add('hidden'); // Hide mobile menu after selection
        });
    }

    if (mobileNavAchievements && achievementSection && mobileMenu) {
        mobileNavAchievements.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            achievementSection.classList.remove('hidden');
            mobileMenu.classList.add('hidden'); // Hide mobile menu after selection
        });
    }

    if (mobileNavPortfolio && portfolioSection && mobileMenu) {
        mobileNavPortfolio.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            portfolioSection.classList.remove('hidden');
            mobileMenu.classList.add('hidden'); // Hide mobile menu after selection
        });
    }

    // View All achievements button handling
    const viewAllAchievementsBtn = document.getElementById('view-all-achievements');
    if (viewAllAchievementsBtn && achievementSection) {
        viewAllAchievementsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            achievementSection.classList.remove('hidden');
        });
    }
    
    // Helper function to hide all sections
    function hideAllSections() {
        if (loginSection) loginSection.classList.add('hidden');
        if (dashboardSection) dashboardSection.classList.add('hidden');
        if (profileSection) profileSection.classList.add('hidden');
        if (achievementSection) achievementSection.classList.add('hidden');
        if (portfolioSection) portfolioSection.classList.add('hidden');
        if (adminSection) adminSection.classList.add('hidden');
        if (reportsSection) reportsSection.classList.add('hidden');
    }

    // Achievement form handling
    if (newAchievementBtn && newAchievementForm) {
        newAchievementBtn.addEventListener('click', () => {
            newAchievementForm.classList.remove('hidden');
        });
    }

    if (addAchievementBtn && newAchievementForm && achievementSection) {
        addAchievementBtn.addEventListener('click', () => {
            hideAllSections();
            achievementSection.classList.remove('hidden');
            newAchievementForm.classList.remove('hidden');
        });
    }

    if (cancelAchievementBtn && newAchievementForm) {
        cancelAchievementBtn.addEventListener('click', () => {
            newAchievementForm.classList.add('hidden');
        });
    }

    // Review button handling for achievement validation
    const reviewButtons = document.querySelectorAll('.review-btn');
    const validationReviewPanel = document.getElementById('validation-review-panel');
    const closeReviewBtn = document.getElementById('close-review-btn');

    if (reviewButtons.length > 0 && validationReviewPanel) {
        reviewButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Show the review panel
                validationReviewPanel.classList.remove('hidden');
            });
        });
    }

    // Close review panel when close button is clicked
    if (closeReviewBtn && validationReviewPanel) {
        closeReviewBtn.addEventListener('click', () => {
            validationReviewPanel.classList.add('hidden');
        });
    }
    
    // Function to highlight the current page in navigation
    function highlightCurrentPage() {
        // Get current page filename from URL
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        // Highlight desktop navigation
        const desktopNavLinks = document.querySelectorAll('.hidden.md\\:flex a');
        desktopNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.remove('text-gray-400');
                link.classList.add('text-primary');
            } else {
                link.classList.add('text-gray-400');
                link.classList.remove('text-primary');
            }
        });
        
        // Highlight mobile navigation
        const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
        mobileNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.remove('text-gray-300');
                link.classList.add('text-primary', 'font-medium');
            } else {
                link.classList.add('text-gray-300');
                link.classList.remove('text-primary', 'font-medium');
            }
        });
    }
});