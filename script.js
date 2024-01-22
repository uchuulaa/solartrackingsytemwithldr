document.addEventListener("DOMContentLoaded", function () {
    // Testimonial Slider
    const testimonials = document.querySelectorAll(".testimonial");
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }

    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    // Initial display
    showTestimonial(currentTestimonialIndex);

    // Auto-advance testimonial every 5 seconds
    setInterval(nextTestimonial, 5000);

    //See more about the project
    const seeMoreButton = document.getElementById('see-more-button');
    seeMoreButton.addEventListener('click', function() {
      window.location.href = 'https://sites.google.com/view/g75ietp/home#h.vgytbbh59zp';
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive Photo Gallery
    const galleryImages = document.querySelectorAll(".gallery-image");

    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            // You can customize this part to open a modal or a larger view of the image
            alert("Image clicked! You can open a modal or a larger view here.");
        });
    });

    // JavaScript code to generate additional team members
    var teamMembers = [
        {
            name: 'Elias Balude Gamtessa',
            position: 'Software Engineering',
            career: 'Specializing in software engineering, Elias contributes his expertise in developing the software components of our Solar Sun Tracking System.'
        },
        {
            name: 'Leul Mintesinot Tafesse',
            position: 'Software Engineering',
            career: 'Leul, another software engineering student, works alongside Elias to develop the software components and ensure smooth integration with the hardware.'
        },
        {
            name: 'Hermela Abera Zeleke',
            position: 'Electrical Engineering',
            career: 'Hermela\'s background in electrical engineering is vital for designing and implementing the electrical infrastructure of our system.'
        },
        {
            name: 'Hiluf Abay Gobeze',
            position: 'Electrical Engineering',
            career: 'Hiluf collaborates with Hermela in the electrical engineering aspects, ensuring proper wiring, power management, and overall system functionality.'
        },
        {
            name: 'Samson Adane Mengistu',
            position: 'Civil Engineering',
            career: 'Samson\'s knowledge in civil engineering plays a crucial role in the structural design and installation of the parabolic reflector.'
        },
        {
            name: 'Nesredin Hassan Nesredin',
            position: 'Mining Engineering',
            career: 'Nesredin brings his expertise in mining engineering to our team, assisting in materials selection and optimization for the project.'
        },
        {
            name: 'Kaleab Gashaw Hailgebriel',
            position: 'Electromechanical Engineering',
            career: 'Kaleab\'s background in electromechanical engineering is valuable in integrating the mechanical and electrical components of our system.'
        },
        {
            name: 'Tsion Teferi Asmamaw',
            position: 'Architecture',
            career: 'Tsion\'s architectural expertise contributes to the aesthetic and functional design of the solar sun tracking system, ensuring an efficient and visually appealing structure.'
        },
        {
            name: 'Bereket Berhanu Fikru',
            position: 'Mechanical Engineering',
            career: 'Bereket\'s mechanical engineering skills are essential in designing and implementing the mechanical components of our project, such as the tracking mechanism.'
        },
        {
            name: 'Ruth Wonde Sefiwo',
            position: 'Environmental Engineering',
            career: 'Ruth\'s knowledge in environmental engineering helps us consider the sustainability and environmental impact of our solar sun tracking system.'
        },
        {
            name: 'Yeabssra Mulu Abite',
            position: 'Chemical Engineering',
            career: 'Yeabssra\'s background in chemical engineering provides insights into material selection, efficiency optimization, and safety considerations for our project.'
        }
    ];
// Select the team members container
var teamMembersContainer = document.querySelector('.team-members');

// Select the team member template
var template = document.querySelector('#team-member-template');

// Loop through the team members array
for (var i = 0; i < teamMembers.length; i++) {
    // Clone the template
    var clone = template.content.cloneNode(true);

    // Set the ID of the cloned team member element
    var teamMember = clone.querySelector('.team-member');
    teamMember.setAttribute('id', 'member-' + (i + 1));

    // Set the image source and alt attribute
    var teamMemberImage = clone.querySelector('img');
    teamMemberImage.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png');
    teamMemberImage.setAttribute('alt', 'Team Member Image');

    // Set the name, position, and career
    var currentMember = teamMembers[i];
    clone.querySelector('h3').textContent = currentMember.name;
    clone.querySelector('p').textContent = currentMember.position;
    clone.querySelector('.career').textContent = currentMember.career;

    // Append the cloned team member element to the container
    teamMembersContainer.appendChild(clone);
}
});