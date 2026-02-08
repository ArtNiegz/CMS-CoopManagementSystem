// ============================================
// SIDEBAR TOGGLE
// ============================================

const userBtn = document.getElementById('userBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle dropdown on click
userBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    dropdownMenu.style.display = 'none';
});

// Optional: Close dropdown when mouse leaves the menu area
dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
});

// ============================================
// MODAL FUNCTIONS
// ============================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking overlay
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});

// ============================================
// ALERT/CONFIRM FUNCTIONS (Prototype)
// ============================================
function showAlert(message, type = 'info') {
    alert(message);
}

function confirmAction(message) {
    return confirm(message);
}

// ============================================
// TABLE ROW ACTIONS (Prototype)
// ============================================
function viewRecord(id) {
    showAlert('Viewing record #' + id);
}

function editRecord(id) {
    showAlert('Editing record #' + id);
}

function deleteRecord(id) {
    if (confirmAction('Are you sure you want to delete record #' + id + '?')) {
        showAlert('Record #' + id + ' deleted (prototype)');
    }
}

// ============================================
// ACTIVE NAV LINK
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
});