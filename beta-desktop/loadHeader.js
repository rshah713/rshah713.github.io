// loadHeader.js
async function loadHeader() {
    try {
        const response = await fetch('header.html');
        const html = await response.text();
        document.getElementById('header-container').innerHTML = html;
        
        // Reattach event listeners after loading header
        document.querySelector('.search-bar').addEventListener('click', function() {
            document.getElementById('searchDropdown').classList.add('show');
        });

        document.addEventListener('click', function(e) {
            if (!e.target.matches('.search-bar') && !e.target.matches('.search-dropdown') && !e.target.matches('.trending-item')) {
                document.getElementById('searchDropdown').classList.remove('show');
            }
        });

        document.getElementById('emailForm').addEventListener('submit', function(e) {
            e.preventDefault();
            var email = document.querySelector('.email-field input').value;
            var subject = document.querySelector('.subject-field input').value;
            var message = document.querySelector('.compose-textarea').value;
            var e = atob('NzEzcnNoYWhAZ21haWwuY29t');
            
            var encodedSubject = encodeURIComponent(subject);
            var encodedMessage = encodeURIComponent(message);
            
            window.location.href = `mailto:${e}?subject=${encodedSubject}&body=${encodedMessage}`;
        });
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadHeader);