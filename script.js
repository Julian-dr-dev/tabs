document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#tabs ul li a');
    const tabContent = document.querySelectorAll('#tabs > div');

    tabs.forEach((tab) => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Remove active class from all tabs
            tabs.forEach((t) => t.classList.remove('active'));

            // Add active class to clicked tab
            event.target.classList.add('active');

            // Hide all tab content
            tabContent.forEach((content) => content.classList.add('hidden'));
            tabContent.forEach((content) => content.classList.remove('visible'));

            // Show content for the clicked tab
            const selectedTab = event.target.getAttribute('href');
            document.querySelector(selectedTab).classList.add('visible');
            document.querySelector(selectedTab).classList.remove('hidden');
        });
    });
});
