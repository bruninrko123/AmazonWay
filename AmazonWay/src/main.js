import './style.css'

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all buttons that open modals
  const modalButtons = document.querySelectorAll('[data-modal]');
  // Get all modals
  const modals = document.querySelectorAll('.modal');
  // Get all close buttons
  const closeButtons = document.querySelectorAll('.close');

  // Add click event to each button
  modalButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });
  });

  // Add click event to each close button
  closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
      }
    });
  });

  // Close modal when clicking outside of it
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
      }
    });
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.style.display === 'block') {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto'; // Restore scrolling
        }
      });
    }
  });

  // Search functionality (if needed)
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const origin = document.getElementById('origin').value;
      const destination = document.getElementById('destination').value;
      const maxPrice = document.getElementById('max-price').value;
      const minRating = document.getElementById('min-rating').value;
      
      console.log('Search criteria:', {
        origin,
        destination,
        maxPrice,
        minRating
      });
      
      // Here you can add your search logic
      alert('Search functionality can be implemented here!');
    });
  }
});


