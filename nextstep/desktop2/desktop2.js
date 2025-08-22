const form = document.getElementById('studentForm');
const select = form?.querySelector('select');

// Sign out functionality
function signout() {
    if (confirm("Are you sure you want to sign out?")) {
        // Note: sessionStorage and localStorage are not available in Claude artifacts
        // In a real environment, these would work:
        // sessionStorage.clear();
        // localStorage.clear();
        
        // Navigate to index.html in desktop1 folder (relative path)
    window.location.href = "../index.html";
    }
}

// Add sign out event listener
const signoutBtn = document.querySelector('.signout');
if (signoutBtn) {
    signoutBtn.addEventListener('click', signout);
}

// Form submission handler
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the form from submitting in the traditional way

        if (!select || select.value === "") {
            alert("Please select your qualification!");
            return; // Stops the function if validation fails
        }

        // Collect the data from all form fields with error checking
        const nameField = form.querySelector('input[type="text"]');
        const emailField = form.querySelector('input[type="email"]');
        const ageField = form.querySelector('input[type="number"]');
        const experienceField = form.querySelector('textarea');

        if (!nameField || !emailField || !ageField || !experienceField) {
            alert("Some form fields are missing!");
            return;
        }

        const formData = {
            name: nameField.value.trim(),
            email: emailField.value.trim(),
            age: parseInt(ageField.value),
            qualification: select.value,
            experience: experienceField.value.trim()
        };

        // Validate required fields
        if (!formData.name || !formData.email || !formData.age) {
            alert("Please fill in all required fields!");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Age validation
        if (formData.age < 16 || formData.age > 100) {
            alert("Please enter a valid age between 16 and 100!");
            return;
        }

        // Log the collected data to the console (for debugging)
        console.log('Student Form Data:', formData);

        // Store data for the next page (in a real environment)
        // sessionStorage.setItem('studentData', JSON.stringify(formData));

        // Navigate to the next page after successful validation and data collection
        // Use relative path instead of absolute local path
    window.location.href = "../desktop3/desktop_3_interests.html";
    });
} else {
    console.error('Student form not found!');
}