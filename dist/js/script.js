
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        const navlink = document.querySelectorAll('nav ul li a');

        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
        navlink.forEach(e => {
            e.addEventListener('click', () => {
                nav.classList.remove("open")
            })
        });







        document.addEventListener("DOMContentLoaded", () => {
            const slider = document.querySelector(".slider");
            const slides = document.querySelectorAll(".slide");
            let currentIndex = 0;

            function showSlide(index) {
                slider.style.transform = `translateX(-${index * 50}%)`;
            }

            async function startSliderLoop() {
                while (true) {
                    showSlide(currentIndex);
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    currentIndex = (currentIndex + 1) % slides.length;
                }
            }

            startSliderLoop();
        });
        document.addEventListener("DOMContentLoaded", () => {
            const image = document.querySelector(".birthday-image");
            const messageBox = document.querySelector(".birthday-message");
            const thankYou = document.querySelector(".thank-you");
            const submitBtn = document.getElementById("submitBirthday");

            // بعد 5 ثواني نخفي الصورة ونظهر الفورم
            setTimeout(() => {
                image.classList.add("hidden");
                messageBox.classList.remove("hidden");
            }, 5000);

            // عند إرسال الرسالة
            submitBtn.addEventListener("click", () => {
                messageBox.classList.add("hidden");
                thankYou.classList.remove("hidden");
            });
        });
