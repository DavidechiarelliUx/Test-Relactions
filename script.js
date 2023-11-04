$(document).ready(function() {
    // Your slick slider initialization
    $('.slider').slick({
        // slick options
    });

    // Check if foundation function exists
    if (typeof $.fn.foundation === 'function') {
        // Initialize Foundation
        $(document).foundation();
    } else {
        console.error("Foundation is not loaded properly.");
    }
});
