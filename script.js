document.addEventListener('DOMContentLoaded', () => {
    // Splash Screen
    const createSplashScreen = () => {
        const splash = document.createElement('div');
        splash.classList.add('splash-screen');
        
        // Create logo SVG with enhanced drawing animation
        const logoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        logoSvg.setAttribute("width", "150");
        logoSvg.setAttribute("height", "150");
        logoSvg.setAttribute("viewBox", "0 0 40 40");
        logoSvg.setAttribute("fill", "none");
        logoSvg.classList.add('splash-logo');
        
        logoSvg.innerHTML = `
            <circle cx="20" cy="20" r="18" fill="#2E7D32" stroke="white" stroke-width="2" opacity="0.9" />
            <path d="M15 20C15 16.13 18.13 13 22 13C25.87 13 29 16.13 29 20C29 23.87 25.87 27 22 27" stroke="white" stroke-width="2.5" />
            <path d="M22 27H11" stroke="white" stroke-width="2.5" />
            <path d="M22 23L25 20L22 17" stroke="white" stroke-width="2.5" />
        `;
        
        // Create brand name with animation
        const brandName = document.createElement('div');
        brandName.classList.add('splash-name');
        brandName.textContent = 'Coach Budget';
        
        // Create tagline with animation
        const tagline = document.createElement('div');
        tagline.classList.add('splash-tagline');
        tagline.textContent = 'Prenez le contrôle de vos finances';
        
        // Create particle container for visual effects
        const particleContainer = document.createElement('div');
        particleContainer.classList.add('particle-container');
        
        // Create particles
        for (let i = 0; i < 30; i++) {
            createParticle(particleContainer);
        }
        
        splash.appendChild(particleContainer);
        splash.appendChild(logoSvg);
        splash.appendChild(brandName);
        splash.appendChild(tagline);
        document.body.appendChild(splash);
        
        // Play startup sound
        const startupSound = new Audio('https://cdn.freesound.org/previews/320/320655_5260872-lq.mp3');
        startupSound.volume = 0.4;
        startupSound.play();
        
        // Hide splash screen after animation
        setTimeout(() => {
            splash.classList.add('hidden');
            setTimeout(() => {
                splash.remove();
            }, 500);
        }, 3500);
    };
    
    // Create animated particles
    const createParticle = (container) => {
        const particle = document.createElement('div');
        particle.classList.add('splash-particle');
        
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        
        container.appendChild(particle);
        
        // Animate each particle
        gsap.to(particle, {
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            scale: Math.random() * 2 + 0.5,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            ease: "power1.out",
            onComplete: () => {
                particle.remove();
                createParticle(container);
            }
        });
    };
    
    // Run splash screen
    createSplashScreen();
    
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Cookie Banner
    setTimeout(() => {
        const cookieBanner = document.getElementById('cookie-banner');
        cookieBanner.classList.add('active');
        
        document.getElementById('accept-cookies').addEventListener('click', () => {
            cookieBanner.classList.remove('active');
            localStorage.setItem('cookiesAccepted', 'true');
        });
        
        document.getElementById('decline-cookies').addEventListener('click', () => {
            cookieBanner.classList.remove('active');
        });
    }, 2000);

    // Background Animation in Hero Section
    const backgroundAnimation = document.querySelector('.background-animation');
    
    // Create SVG Financial Graph Background
    const createGraphBackground = () => {
        const graphSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        graphSvg.setAttribute("width", "100%");
        graphSvg.setAttribute("height", "100%");
        
        // Create random financial graph lines
        for (let i = 0; i < 8; i++) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            
            let pathData = `M0,${Math.random() * 100 + 50}`;
            for (let j = 1; j < 10; j++) {
                pathData += ` L${j * 10}%,${Math.random() * 100 + 50}`;
            }
            
            path.setAttribute("d", pathData);
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "white");
            path.setAttribute("stroke-width", "2");
            path.setAttribute("opacity", "0.4");
            
            graphSvg.appendChild(path);
        }
        
        // Add some circles to represent data points
        for (let i = 0; i < 20; i++) {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", `${Math.random() * 100}%`);
            circle.setAttribute("cy", `${Math.random() * 100}%`);
            circle.setAttribute("r", Math.random() * 4 + 2);
            circle.setAttribute("fill", "white");
            circle.setAttribute("opacity", "0.4");
            
            graphSvg.appendChild(circle);
        }
        
        backgroundAnimation.appendChild(graphSvg);
        
        // Animate the graph with GSAP
        gsap.to(graphSvg.querySelectorAll("path"), {
            strokeDashoffset: 0,
            strokeDasharray: 1000,
            duration: 20,
            repeat: -1,
            yoyo: true,
            stagger: 0.5,
            ease: "power1.inOut"
        });
        
        gsap.to(graphSvg.querySelectorAll("circle"), {
            scale: 1.5,
            opacity: 0.2,
            duration: 3,
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
            ease: "sine.inOut"
        });
    };
    
    createGraphBackground();

    // Hero App Illustration
    const createAppIllustration = () => {
        const svg = d3.select("#hero-app-illustration");
        
        // Create smartphone mockup
        svg.append("rect")
            .attr("x", 150)
            .attr("y", 50)
            .attr("width", 200)
            .attr("height", 400)
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("fill", "#fff")
            .attr("stroke", "#ddd")
            .attr("stroke-width", 2);
        
        // Screen
        svg.append("rect")
            .attr("x", 160)
            .attr("y", 70)
            .attr("width", 180)
            .attr("height", 360)
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("fill", "#f5f7fa");
        
        // App header
        svg.append("rect")
            .attr("x", 160)
            .attr("y", 70)
            .attr("width", 180)
            .attr("height", 50)
            .attr("fill", "#1976D2");
        
        // App title
        svg.append("text")
            .attr("x", 250)
            .attr("y", 100)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-weight", "bold")
            .text("Coach Budget");
        
        // Budget circle
        svg.append("circle")
            .attr("cx", 250)
            .attr("cy", 180)
            .attr("r", 60)
            .attr("fill", "none")
            .attr("stroke", "#2E7D32")
            .attr("stroke-width", 8);
        
        svg.append("text")
            .attr("x", 250)
            .attr("y", 170)
            .attr("text-anchor", "middle")
            .attr("fill", "#333")
            .attr("font-size", "12px")
            .text("BUDGET MENSUEL");
        
        svg.append("text")
            .attr("x", 250)
            .attr("y", 195)
            .attr("text-anchor", "middle")
            .attr("fill", "#2E7D32")
            .attr("font-size", "22px")
            .attr("font-weight", "bold")
            .text("1250 DH");
        
        // Expense bars
        const categories = ["Loyer", "Nourriture", "Transport", "Loisirs"];
        const colors = ["#1976D2", "#2E7D32", "#FF9800", "#9C27B0"];
        
        categories.forEach((cat, i) => {
            const y = 270 + i * 35;
            
            // Category label
            svg.append("text")
                .attr("x", 175)
                .attr("y", y + 5)
                .attr("fill", "#333")
                .attr("font-size", "10px")
                .text(cat);
            
            // Background bar
            svg.append("rect")
                .attr("x", 175)
                .attr("y", y + 10)
                .attr("width", 150)
                .attr("height", 10)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("fill", "#eee");
            
            // Progress bar
            const width = Math.random() * 120 + 30;
            svg.append("rect")
                .attr("x", 175)
                .attr("y", y + 10)
                .attr("width", width)
                .attr("height", 10)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("fill", colors[i]);
            
            // Amount
            svg.append("text")
                .attr("x", 335)
                .attr("y", y + 5)
                .attr("text-anchor", "end")
                .attr("fill", "#333")
                .attr("font-size", "10px")
                .text(`${Math.floor(width * 3)} DH`);
        });
        
        // Animate elements
        gsap.from("#hero-app-illustration rect, #hero-app-illustration circle", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
    };
    
    createAppIllustration();

    // Feature Icons
    const createFeatureIcons = () => {
        // Real-time expense analysis
        const realtimeAnalysis = document.getElementById("realtime-analysis");
        const analysisSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        analysisSvg.setAttribute("width", "80");
        analysisSvg.setAttribute("height", "80");
        analysisSvg.setAttribute("viewBox", "0 0 80 80");
        
        // Wallet icon with moving coins
        analysisSvg.innerHTML = `
            <rect x="10" y="20" width="50" height="40" rx="5" fill="#1976D2" />
            <rect x="10" y="20" width="50" height="10" rx="5" fill="#0D47A1" />
            <circle class="coin" cx="25" cy="35" r="8" fill="#FFD700" />
            <circle class="coin" cx="45" cy="40" r="8" fill="#FFD700" />
            <rect x="17" y="60" width="36" height="4" rx="2" fill="#333" />
            <path d="M25 27 L55 27" stroke="#fff" stroke-width="2" />
            <path class="arrow-in" d="M65 35 L75 35 L70 30" fill="none" stroke="#2E7D32" stroke-width="2" />
            <path class="arrow-out" d="M65 45 L75 45 L70 50" fill="none" stroke="#F44336" stroke-width="2" />
        `;
        
        realtimeAnalysis.appendChild(analysisSvg);
        
        gsap.to(analysisSvg.querySelectorAll(".coin"), {
            y: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
            ease: "power1.inOut"
        });
        
        gsap.to(analysisSvg.querySelector(".arrow-in"), {
            x: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        
        gsap.to(analysisSvg.querySelector(".arrow-out"), {
            x: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 0.5
        });
        
        // Auto-savings
        const autoSavings = document.getElementById("auto-savings");
        const savingsSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        savingsSvg.setAttribute("width", "80");
        savingsSvg.setAttribute("height", "80");
        savingsSvg.setAttribute("viewBox", "0 0 80 80");
        
        // Piggy bank with falling coins
        savingsSvg.innerHTML = `
            <ellipse cx="40" cy="45" rx="30" ry="22" fill="#FF9800" />
            <circle cx="40" cy="30" r="20" fill="#FF9800" />
            <circle cx="30" cy="25" r="3" fill="#333" />
            <circle cx="50" cy="25" r="3" fill="#333" />
            <ellipse cx="40" cy="50" rx="5" ry="3" fill="#ED6C02" />
            <path d="M65 40 L70 40 L70 55" fill="none" stroke="#ED6C02" stroke-width="3" />
            <circle class="falling-coin" cx="20" cy="10" r="5" fill="#FFD700" />
            <circle class="falling-coin" cx="30" cy="5" r="4" fill="#FFD700" />
            <circle class="falling-coin" cx="40" cy="8" r="4.5" fill="#FFD700" />
            <rect x="25" y="65" width="30" height="5" rx="2" fill="#795548" />
        `;
        
        autoSavings.appendChild(savingsSvg);
        
        gsap.to(savingsSvg.querySelectorAll(".falling-coin"), {
            y: 40,
            duration: 1.5,
            repeat: -1,
            stagger: 0.3,
            ease: "bounce.out"
        });
        
        // Personalized advice
        const personalizedAdvice = document.getElementById("personalized-advice");
        const adviceSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        adviceSvg.setAttribute("width", "80");
        adviceSvg.setAttribute("height", "80");
        adviceSvg.setAttribute("viewBox", "0 0 80 80");
        
        // Chat bubbles with advice
        adviceSvg.innerHTML = `
            <circle cx="40" cy="40" r="30" fill="#2E7D32" />
            <circle cx="40" cy="30" r="10" fill="#81C784" />
            <path d="M30 45 C30 35 50 35 50 45 L50 55 C50 60 40 60 40 60 C40 60 30 60 30 55 Z" fill="#81C784" />
            <path class="advice-text" d="M34 45 L46 45" stroke="white" stroke-width="2" />
            <path class="advice-text" d="M36 50 L44 50" stroke="white" stroke-width="2" />
            <path class="sparkle" d="M20 20 L25 25 M20 25 L25 20" stroke="#FFD700" stroke-width="2" />
            <path class="sparkle" d="M60 20 L65 25 M60 25 L65 20" stroke="#FFD700" stroke-width="2" />
            <path class="sparkle" d="M20 60 L25 65 M20 65 L25 60" stroke="#FFD700" stroke-width="2" />
        `;
        
        personalizedAdvice.appendChild(adviceSvg);
        
        gsap.to(adviceSvg.querySelectorAll(".advice-text"), {
            scale: 1.1,
            opacity: 0.8,
            duration: 1,
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
            ease: "sine.inOut"
        });
        
        gsap.to(adviceSvg.querySelectorAll(".sparkle"), {
            scale: 1.2,
            opacity: 0.8,
            rotation: 45,
            transformOrigin: "center",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            stagger: 0.3,
            ease: "sine.inOut"
        });
        
        // Budget alerts
        const budgetAlerts = document.getElementById("budget-alerts");
        const alertSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        alertSvg.setAttribute("width", "80");
        alertSvg.setAttribute("height", "80");
        alertSvg.setAttribute("viewBox", "0 0 80 80");
        
        // Alert notification
        alertSvg.innerHTML = `
            <rect x="15" y="15" width="50" height="50" rx="10" fill="#F5F7FA" stroke="#DDD" stroke-width="2" />
            <rect class="alert-header" x="15" y="15" width="50" height="12" rx="10" fill="#F44336" />
            <path d="M40 35 L40 50" stroke="#F44336" stroke-width="3" />
            <circle cx="40" cy="55" r="2" fill="#F44336" />
            <path class="alert-wave" d="M10 40 Q20 30, 30 40 Q40 50, 50 40 Q60 30, 70 40" fill="none" stroke="#F44336" stroke-width="2" opacity="0.5" />
        `;
        
        budgetAlerts.appendChild(alertSvg);
        
        gsap.to(alertSvg.querySelector(".alert-header"), {
            fillOpacity: 0.7,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        gsap.to(alertSvg.querySelector(".alert-wave"), {
            y: -10,
            opacity: 0,
            duration: 1.5,
            repeat: -1,
            ease: "sine.out"
        });
    };
    
    createFeatureIcons();

    // Interactive Dashboard
    const createDashboard = () => {
        const dashboard = document.getElementById("interactive-dashboard");
        const dashboardSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        dashboardSvg.setAttribute("width", "100%");
        dashboardSvg.setAttribute("height", "400");
        dashboardSvg.setAttribute("viewBox", "0 0 400 400");
        
        // Dashboard background with enhanced styling
        dashboardSvg.innerHTML = `
            <rect x="0" y="0" width="400" height="400" rx="10" fill="#F5F7FA" />
            
            <!-- Header with gradient -->
            <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1976D2" />
                <stop offset="100%" stop-color="#2E7D32" />
            </linearGradient>
            <rect x="0" y="0" width="400" height="60" rx="10" fill="url(#headerGradient)" />
            <text x="20" y="35" fill="white" font-size="18" font-weight="bold">Mon tableau de bord</text>
            
            <!-- Interactive Balance Card -->
            <rect class="balance-card" x="20" y="80" width="360" height="80" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <text x="40" y="110" fill="#666" font-size="14">Solde actuel</text>
            <text x="40" y="140" fill="#333" font-size="24" font-weight="bold">2 458,67 DH</text>
            <path class="trend-up" d="M320 120 L340 100 L360 110" stroke="#2E7D32" stroke-width="2" fill="none" />
            
            <!-- Expense Categories with enhanced interactivity -->
            <rect class="draggable-category category-1" x="20" y="180" width="170" height="60" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <rect x="40" y="195" width="30" height="30" rx="15" fill="#1976D2" />
            <text x="80" y="210" fill="#666" font-size="14">Loyer</text>
            <text x="80" y="230" fill="#333" font-size="16" font-weight="bold">800 DH</text>
            
            <rect class="draggable-category category-2" x="210" y="180" width="170" height="60" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <rect x="230" y="195" width="30" height="30" rx="15" fill="#FF9800" />
            <text x="270" y="210" fill="#666" font-size="14">Alimentation</text>
            <text x="270" y="230" fill="#333" font-size="16" font-weight="bold">350 DH</text>
            
            <rect class="draggable-category category-3" x="20" y="260" width="170" height="60" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <rect x="40" y="275" width="30" height="30" rx="15" fill="#9C27B0" />
            <text x="80" y="290" fill="#666" font-size="14">Transport</text>
            <text x="80" y="310" fill="#333" font-size="16" font-weight="bold">120 DH</text>
            
            <rect class="draggable-category category-4" x="210" y="260" width="170" height="60" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <rect x="230" y="275" width="30" height="30" rx="15" fill="#2E7D32" />
            <text x="270" y="290" fill="#666" font-size="14">Loisirs</text>
            <text x="270" y="310" fill="#333" font-size="16" font-weight="bold">200 DH</text>
            
            <!-- Animated Action Button -->
            <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1976D2" />
                <stop offset="100%" stop-color="#2E7D32" />
            </linearGradient>
            <rect class="action-button" x="120" y="340" width="160" height="40" rx="20" fill="url(#buttonGradient)" />
            <text x="200" y="365" text-anchor="middle" fill="white" font-size="14" font-weight="bold">Ajuster mon budget</text>
        `;
        
        dashboard.appendChild(dashboardSvg);
        
        // Enhanced animations for dashboard elements
        gsap.fromTo(dashboardSvg.querySelector(".balance-card"), 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" }
        );
        
        gsap.fromTo(dashboardSvg.querySelectorAll(".draggable-category"), 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)" }
        );
        
        gsap.fromTo(dashboardSvg.querySelector(".action-button"), 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "back.out(1.5)" }
        );
        
        // Make categories draggable with enhanced effects
        const draggableCategories = dashboardSvg.querySelectorAll(".draggable-category");
        
        draggableCategories.forEach((category, index) => {
            let isDragging = false;
            let startX, startY;
            let origX = parseInt(category.getAttribute("x"));
            let origY = parseInt(category.getAttribute("y"));
            
            // Hover effects
            category.addEventListener("mouseenter", () => {
                gsap.to(category, {
                    attr: { stroke: "#1976D2", "stroke-width": 2 },
                    duration: 0.3
                });
                
                // Subtle scale effect
                gsap.to(category, {
                    scale: 1.03,
                    transformOrigin: "center",
                    duration: 0.3
                });
            });
            
            category.addEventListener("mouseleave", () => {
                if (!isDragging) {
                    gsap.to(category, {
                        attr: { stroke: "#DDD", "stroke-width": 1 },
                        scale: 1,
                        duration: 0.3
                    });
                }
            });
            
            category.addEventListener("mousedown", e => {
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                category.style.cursor = "grabbing";
                
                // Bring to front effect
                category.parentNode.appendChild(category);
                
                // Visual feedback for active dragging
                gsap.to(category, {
                    attr: { stroke: "#1976D2", "stroke-width": 2 },
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    duration: 0.2
                });
            });
            
            document.addEventListener("mousemove", e => {
                if (!isDragging) return;
                
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                
                // Move the category with constraints
                const newX = Math.max(10, Math.min(380 - parseInt(category.getAttribute("width")), origX + dx));
                const newY = Math.max(70, Math.min(340, origY + dy));
                
                category.setAttribute("x", newX);
                category.setAttribute("y", newY);
                
                // Move the elements inside the category too
                const categoryNum = category.classList[1].split('-')[1]; // Get category number
                const childIcons = dashboardSvg.querySelectorAll(`rect[x="${origX + 20}"]`);
                const childTexts = dashboardSvg.querySelectorAll(`text[x="${origX + 60}"], text[x="${origX + 60}"]`);
                
                childIcons.forEach(el => {
                    if (el.parentNode.querySelector(`.${category.classList[1]}`) === category) {
                        el.setAttribute("x", newX + 20);
                        el.setAttribute("y", parseInt(category.getAttribute("y")) + 15);
                    }
                });
                
                childTexts.forEach(el => {
                    if (el.parentNode.querySelector(`.${category.classList[1]}`) === category) {
                        el.setAttribute("x", newX + 60);
                        const baseY = parseInt(category.getAttribute("y"));
                        // Adjust based on whether it's the category name or amount text
                        const yOffset = el.innerHTML.includes("DH") ? 30 : 10;
                        el.setAttribute("y", baseY + yOffset);
                    }
                });
            });
            
            document.addEventListener("mouseup", () => {
                if (!isDragging) return;
                
                isDragging = false;
                category.style.cursor = "grab";
                
                // Enhanced snap-back animation with bounce effect
                gsap.to(category, {
                    attr: { 
                        x: origX,
                        y: origY,
                        stroke: "#DDD", 
                        "stroke-width": 1 
                    },
                    scale: 1,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.5)"
                });
                
                // Reset child elements too with staggered animation
                const categoryNum = category.classList[1].split('-')[1];
                const childIcons = dashboardSvg.querySelectorAll(`rect[x="${parseInt(category.getAttribute("x")) + 20}"]`);
                const childTexts = dashboardSvg.querySelectorAll(`text[x="${parseInt(category.getAttribute("x")) + 60}"]`);
                
                childIcons.forEach(el => {
                    if (el.parentNode.querySelector(`.${category.classList[1]}`) === category) {
                        gsap.to(el, {
                            attr: { 
                                x: origX + 20,
                                y: origY + 15
                            },
                            duration: 0.8,
                            ease: "elastic.out(1, 0.5)"
                        });
                    }
                });
                
                childTexts.forEach(el => {
                    if (el.parentNode.querySelector(`.${category.classList[1]}`) === category) {
                        const baseY = origY;
                        const yOffset = el.innerHTML.includes("DH") ? 30 : 10;
                        gsap.to(el, {
                            attr: { 
                                x: origX + 60,
                                y: baseY + yOffset
                            },
                            duration: 0.8,
                            ease: "elastic.out(1, 0.5)"
                        });
                    }
                });
            });
        });
        
        // Enhanced trend line animation with sparkle effect
        gsap.to(dashboardSvg.querySelector(".trend-up"), {
            y: -5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Add interactive button effect
        const actionButton = dashboardSvg.querySelector(".action-button");
        
        actionButton.addEventListener("mouseenter", () => {
            gsap.to(actionButton, {
                attr: { fill: "url(#buttonGradient)", filter: "brightness(1.1)" },
                scale: 1.05,
                transformOrigin: "center",
                duration: 0.3
            });
        });
        
        actionButton.addEventListener("mouseleave", () => {
            gsap.to(actionButton, {
                attr: { fill: "url(#buttonGradient)", filter: "brightness(1)" },
                scale: 1,
                duration: 0.3
            });
        });
        
        actionButton.addEventListener("click", () => {
            // Add click feedback animation
            gsap.timeline()
                .to(actionButton, {
                    scale: 0.95,
                    duration: 0.1
                })
                .to(actionButton, {
                    scale: 1.05,
                    duration: 0.2
                })
                .to(actionButton, {
                    scale: 1,
                    duration: 0.2
                });
            
            // Simulate budget adjustment with animation
            gsap.to(dashboardSvg.querySelectorAll(".draggable-category"), {
                attr: { y: "-=5" },
                duration: 0.3,
                stagger: 0.1,
                yoyo: true,
                repeat: 1
            });
        });
    };
    
    createDashboard();

    // Virtual Coach
    const createVirtualCoach = () => {
        const coach = document.getElementById("virtual-coach");
        const coachSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        coachSvg.setAttribute("width", "180");
        coachSvg.setAttribute("height", "180");
        coachSvg.setAttribute("viewBox", "0 0 100 100");
        coachSvg.setAttribute("class", "coach-svg");
        
        coachSvg.innerHTML = `
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                    <feFlood flood-color="#4fc3f7" flood-opacity="0.7" result="glowColor"/>
                    <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
                    <feComposite in="SourceGraphic" in2="softGlow" operator="over"/>
                </filter>
                <radialGradient id="avatarGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stop-color="#64b5f6" />
                    <stop offset="100%" stop-color="#1976D2" />
                </radialGradient>
                <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.8)" />
                    <stop offset="100%" stop-color="rgba(255,255,255,0)" />
                </linearGradient>
            </defs>
            <circle class="coach-bg-pulse" cx="50" cy="50" r="48" fill="transparent" stroke="#64b5f6" stroke-width="2" opacity="0.5" />
            <circle cx="50" cy="50" r="45" fill="url(#avatarGradient)" filter="url(#glow)" />
            <circle cx="50" cy="35" r="20" fill="#BBDEFB" />
            <path d="M30 70 C30 50 70 50 70 70" fill="#BBDEFB" />
            <circle class="eye" cx="43" cy="32" r="4" fill="#1976D2" />
            <circle class="eye" cx="57" cy="32" r="4" fill="#1976D2" />
            <path class="mouth" d="M40 40 Q50 48 60 40" fill="none" stroke="#1976D2" stroke-width="2.5" />
            <path class="bubble" d="M75 25 Q85 25 85 35 L85 45 Q85 55 75 55 L65 55 L60 65 L60 55 L55 55 Q45 55 45 45 L45 35 Q45 25 55 25 Z" fill="white" opacity="0" />
            <text class="advice-text" x="65" y="40" text-anchor="middle" fill="#1976D2" font-size="8" opacity="0">Bonjour! Cliquez pour discuter</text>
            <ellipse cx="50" cy="50" rx="35" ry="45" fill="url(#highlightGradient)" opacity="0.2" />
            <rect x="0" y="0" width="100" height="100" fill="transparent" style="cursor: pointer" class="coach-clickable" />
        `;
        
        coach.appendChild(coachSvg);
        
        // Create chat interface with improved design
        const chatInterface = document.createElement('div');
        chatInterface.classList.add('coach-chat-interface');
        chatInterface.innerHTML = `
            <div class="chat-header">
                <div class="chat-title">
                    <div class="chat-avatar">
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="url(#avatarGradient)" />
                            <circle cx="50" cy="35" r="20" fill="#BBDEFB" />
                            <path d="M30 70 C30 50 70 50 70 70" fill="#BBDEFB" />
                        </svg>
                    </div>
                    <div>
                        <h4>Coach Financier</h4>
                        <div class="status-indicator">
                            <span class="status-dot"></span>
                            <span class="status-text">En ligne</span>
                        </div>
                    </div>
                </div>
                <div class="chat-actions">
                    <button class="minimize-chat"><i class="fas fa-minus"></i></button>
                    <button class="close-chat"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="chat-messages">
                <div class="message coach-message">
                    <p>👋 Bonjour ! Je suis votre coach financier personnel. Comment puis-je vous aider aujourd'hui ?</p>
                </div>
                <div class="message coach-message">
                    <p>Je peux vous conseiller sur votre budget, vos économies, ou vos objectifs financiers. N'hésitez pas à me poser des questions précises !</p>
                </div>
            </div>
            <div class="chat-suggestions">
                <button class="suggestion-btn">Comment économiser ?</button>
                <button class="suggestion-btn">Gérer mes dettes</button>
                <button class="suggestion-btn">Faire un budget</button>
            </div>
            <div class="chat-input">
                <input type="text" placeholder="Posez votre question..." id="chat-input-field">
                <button id="send-message"><i class="fas fa-paper-plane"></i></button>
            </div>
        `;
        coach.parentNode.appendChild(chatInterface);
        
        // Add pulse animation to the coach with enhanced effects
        gsap.to(coachSvg.querySelector(".coach-bg-pulse"), {
            scale: 1.2,
            opacity: 0,
            duration: 2,
            repeat: -1,
            transformOrigin: "center center",
            ease: "sine.inOut"
        });

        // Enhanced mouth animation
        gsap.to(coachSvg.querySelector(".mouth"), {
            attr: { d: "M40 43 Q50 38 60 43" },
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // More dynamic eye blinking
        gsap.to(coachSvg.querySelectorAll(".eye"), {
            scaleY: 0.1,
            transformOrigin: "center",
            duration: 0.1,
            repeat: -1,
            repeatDelay: 3,
            yoyo: true,
            stagger: 0.05
        });
        
        // Occasional eye movement to make the coach appear more lifelike
        setInterval(() => {
            gsap.to(coachSvg.querySelectorAll(".eye"), {
                x: gsap.utils.random(-2, 2),
                duration: 0.2,
                onComplete: () => {
                    setTimeout(() => {
                        gsap.to(coachSvg.querySelectorAll(".eye"), {
                            x: 0,
                            duration: 0.2
                        });
                    }, gsap.utils.random(500, 1000));
                }
            });
        }, 5000);
        
        // Show/hide chat interface on click with enhanced animations
        const coachClickable = coachSvg.querySelector('.coach-clickable');
        coachClickable.addEventListener('click', () => {
            chatInterface.classList.add('active');
            gsap.fromTo(chatInterface, 
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
            );
            gsap.to(coachSvg.querySelector(".mouth"), {
                attr: { d: "M40 40 Q50 48 60 40" },
                duration: 0.3
            });
            
            // Play sound effect when chat opens
            const chatSound = new Audio('https://cdn.freesound.org/previews/521/521646_7724198-lq.mp3');
            chatSound.volume = 0.3;
            chatSound.play();
        });
        
        // Handle minimizing chat
        document.querySelector('.minimize-chat').addEventListener('click', (e) => {
            e.stopPropagation();
            chatInterface.classList.add('minimized');
        });
        
        document.querySelector('.close-chat').addEventListener('click', (e) => {
            e.stopPropagation();
            chatInterface.classList.remove('active');
            setTimeout(() => {
                chatInterface.classList.remove('minimized');
            }, 300);
        });
        
        // Handle clicking on minimized chat to restore
        chatInterface.addEventListener('click', () => {
            if (chatInterface.classList.contains('minimized')) {
                chatInterface.classList.remove('minimized');
            }
        });
        
        // Chat functionality with enhanced responses
        const chatInputField = document.getElementById('chat-input-field');
        const sendMessageBtn = document.getElementById('send-message');
        const chatMessages = document.querySelector('.chat-messages');
        
        // Handle suggestion buttons
        const suggestionBtns = document.querySelectorAll('.suggestion-btn');
        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.textContent;
                chatInputField.value = question;
                sendMessage();
            });
        });
        
        const sendMessage = () => {
            const userMessage = chatInputField.value.trim();
            if (userMessage === '') return;
            
            // Add user message to chat
            const userMessageEl = document.createElement('div');
            userMessageEl.classList.add('message', 'user-message');
            userMessageEl.innerHTML = `<p>${userMessage}</p>`;
            chatMessages.appendChild(userMessageEl);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            chatInputField.value = '';
            
            // Animate coach to show "thinking" state
            gsap.to(coachSvg.querySelector(".mouth"), {
                attr: { d: "M45 45 Q50 45 55 45" },
                duration: 0.3
            });
            
            // Simulate coach typing with enhanced visual feedback
            setTimeout(() => {
                const typingIndicator = document.createElement('div');
                typingIndicator.classList.add('typing-indicator');
                typingIndicator.innerHTML = '<span></span><span></span><span></span>';
                chatMessages.appendChild(typingIndicator);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Generate enhanced response based on user message with more precision
                setTimeout(() => {
                    chatMessages.removeChild(typingIndicator);
                    const botMessageEl = document.createElement('div');
                    botMessageEl.classList.add('message', 'coach-message');
                    botMessageEl.innerHTML = `<p>${generateDetailedResponse(userMessage)}</p>`;
                    chatMessages.appendChild(botMessageEl);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                    
                    // Update suggestion buttons based on conversation context
                    updateSuggestions(userMessage);
                    
                    // Animate coach mouth to show "speaking"
                    gsap.to(coachSvg.querySelector(".mouth"), {
                        attr: { d: "M40 43 Q50 38 60 43" },
                        duration: 0.3,
                        yoyo: true,
                        repeat: 5,
                        onComplete: () => {
                            gsap.to(coachSvg.querySelector(".mouth"), {
                                attr: { d: "M40 40 Q50 48 60 40" },
                                duration: 0.5
                            });
                        }
                    });
                }, Math.random() * 1000 + 1000); // Randomize response time for more natural feel
            }, 500);
        };
        
        const generateDetailedResponse = (userMessage) => {
            const message = userMessage.toLowerCase();
            
            // More detailed and precise responses based on specific financial topics
            if (message.includes('budget') || message.includes('dépense')) {
                return "Pour mieux gérer votre budget, je recommande la méthode 50/30/20 : 50% pour les besoins essentiels, 30% pour les souhaits, et 20% pour l'épargne. Notre outil d'analyse de dépenses vous permet de catégoriser automatiquement vos transactions et de recevoir des alertes personnalisées quand vous approchez de vos limites. Souhaitez-vous que je vous aide à établir un plan budgétaire personnalisé ?";
            } else if (message.includes('épargne') || message.includes('économiser') || message.includes('économie')) {
                return "Pour optimiser votre épargne, notre système de micro-épargne automatique peut arrondir chaque achat au dirham supérieur et transférer la différence vers un compte d'épargne. Pour un objectif spécifique, je recommande de mettre en place un virement automatique de 5-10% de vos revenus dès réception de votre salaire. Notre calculateur d'épargne peut vous montrer exactement combien vous aurez économisé après 1, 5 ou 10 ans avec différents taux d'intérêt.";
            } else if (message.includes('dette') || message.includes('crédit') || message.includes('prêt')) {
                return "Pour réduire efficacement vos dettes, deux stratégies principales existent : la méthode 'avalanche' (remboursement des dettes au taux d'intérêt le plus élevé en premier) ou la méthode 'boule de neige' (remboursement des dettes au montant le plus faible en premier). D'après les études financières, la méthode avalanche est mathématiquement plus avantageuse, mais la méthode boule de neige offre des victoires psychologiques rapides. Notre calculateur de remboursement peut vous montrer comment économiser jusqu'à 35% d'intérêts avec un plan optimisé.";
            } else if (message.includes('investir') || message.includes('investissement') || message.includes('placer')) {
                return "Pour commencer à investir, suivez ces étapes : 1) Constituez d'abord un fonds d'urgence couvrant 3-6 mois de dépenses, 2) Définissez vos objectifs d'investissement (retraite, achat immobilier, etc.), 3) Évaluez votre tolérance au risque avec notre questionnaire, 4) Diversifiez vos investissements entre actions, obligations et autres actifs selon votre profil. Pour les débutants, les ETF (fonds indiciux) offrent une diversification à faible coût. Je peux vous proposer des simulations personnalisées basées sur votre situation.";
            } else if (message.includes('retraite') || message.includes('pension')) {
                return "Pour préparer votre retraite efficacement, commencez tôt pour bénéficier des intérêts composés. Notre calculateur de retraite montre qu'investir 200 DH/mois pendant 30 ans avec un rendement moyen de 5% peut générer environ 165 000 DH. Je recommande de diversifier entre plans d'épargne retraite, assurance-vie et autres véhicules d'investissement. Je peux créer un plan personnalisé basé sur votre âge actuel, votre revenu et l'âge auquel vous souhaitez prendre votre retraite.";
            } else if (message.includes('immobilier') || message.includes('maison') || message.includes('appartement') || message.includes('achat')) {
                return "Pour préparer un achat immobilier, constituez un apport d'au moins 10-20% du prix d'achat, vérifiez votre capacité d'emprunt (généralement 33% max de vos revenus), et comparez les taux sur notre simulateur. Notre calculateur de prêt immobilier peut vous aider à estimer vos mensualités et le coût total. N'oubliez pas d'inclure les frais annexes (notaire, garanties, etc.) qui représentent environ 7-10% supplémentaires. Souhaitez-vous une simulation personnalisée ?";
            } else if (message.includes('impôt') || message.includes('taxe') || message.includes('fiscalité')) {
                return "Pour optimiser votre fiscalité, plusieurs dispositifs existent selon votre situation : PEA pour les investissements en actions (exonération d'impôt après 5 ans), assurance-vie (fiscalité avantageuse après 8 ans), investissements immobiliers défiscalisants (Pinel, LMNP), ou encore plans d'épargne retraite avec déduction des versements de votre revenu imposable. Notre module fiscal peut analyser votre situation et identifier des opportunités d'économies potentielles de 10-15% sur vos impôts.";
            } else if (message.includes('enfant') || message.includes('étude') || message.includes('école') || message.includes('université')) {
                return "Pour financer les études de vos enfants, je recommande de commencer tôt avec un plan d'épargne dédié. Avec notre calculateur d'éducation, vous pouvez voir qu'en épargnant 100 DH/mois dès la naissance avec un rendement moyen de 4%, vous disposerez d'environ 35 000 DH pour ses 18 ans. Les livrets défiscalisés comme le Livret A ou le Plan d'Épargne Éducation sont d'excellentes options. Pour les études supérieures, envisagez aussi les bourses et prêts étudiants avantageux.";
            } else if (message.includes('assurance') || message.includes('protéger') || message.includes('protection')) {
                return "Pour une protection financière optimale, trois types d'assurances sont essentiels : l'assurance habitation, l'assurance santé complémentaire, et l'assurance prévoyance (qui protège vos revenus en cas d'invalidité ou de décès). Notre outil d'analyse de risques peut évaluer vos besoins spécifiques. Pour une famille avec enfants, je recommande généralement une assurance décès d'au moins 5 à 10 fois votre revenu annuel pour assurer leur sécurité financière en cas d'imprévu.";
            } else if (message.includes('revenu') || message.includes('salaire') || message.includes('augmentation') || message.includes('négocier')) {
                return "Pour augmenter vos revenus, plusieurs stratégies sont efficaces : 1) Négociez votre salaire actuel (notre guide de négociation montre que demander 5-10% d'augmentation est raisonnable), 2) Développez des compétences en demande sur le marché, 3) Explorez des sources de revenus complémentaires (freelance, investissements). Notre outil d'analyse de carrière peut identifier vos opportunités d'évolution professionnelle et le potentiel d'augmentation de revenus associé.";
            } else if (message.includes('bonjour') || message.includes('salut') || message.includes('hello') || message.includes('coucou')) {
                return "Bonjour ! Je suis ravi de pouvoir vous aider avec vos finances. Que souhaitez-vous accomplir aujourd'hui ? Je peux vous conseiller sur l'optimisation de votre budget, des stratégies d'épargne, la gestion de dettes, ou la planification d'investissements adaptés à votre profil.";
            } else if (message.includes('merci') || message.includes('super') || message.includes('génial')) {
                return "Avec plaisir ! Je suis là pour vous aider à atteindre vos objectifs financiers. N'hésitez pas à revenir vers moi pour d'autres questions. Puis-je vous aider avec un autre aspect de vos finances personnelles ?";
            } else if (message.includes('au revoir') || message.includes('bye') || message.includes('à plus')) {
                return "Au revoir ! N'oubliez pas que je suis disponible 24/7 pour répondre à vos questions financières. Je vous souhaite une excellente journée et des finances prospères !";
            } else {
                return "Je comprends votre préoccupation concernant \"" + userMessage + "\". Pour vous donner des conseils vraiment pertinents, pourriez-vous me préciser un peu plus votre situation financière actuelle ? Par exemple, votre objectif principal, votre horizon temporel, ou les défis spécifiques que vous rencontrez ?";
            }
        };
        
        // Update suggestion buttons based on conversation context
        const updateSuggestions = (lastUserMessage) => {
            const message = lastUserMessage.toLowerCase();
            const suggestionContainer = document.querySelector('.chat-suggestions');
            
            let suggestions = [];
            
            if (message.includes('budget') || message.includes('dépense')) {
                suggestions = ["Comment réduire mes dépenses ?", "Outil de suivi automatique", "Créer un budget familial"];
            } else if (message.includes('épargne') || message.includes('économiser')) {
                suggestions = ["Meilleur compte épargne ?", "Épargne automatique", "Objectif d'épargne"];
            } else if (message.includes('dette') || message.includes('crédit')) {
                suggestions = ["Plan de remboursement", "Renégocier mes prêts", "Consolider mes dettes"];
            } else if (message.includes('investir') || message.includes('placement')) {
                suggestions = ["Investir avec petit budget", "Diversification", "Risques et rendements"];
            } else if (message.includes('retraite')) {
                suggestions = ["Combien épargner ?", "Options de placement", "Simuler ma retraite"];
            } else if (message.includes('immobilier') || message.includes('maison')) {
                suggestions = ["Capacité d'emprunt", "Meilleur moment pour acheter", "Prêt immobilier"];
            } else {
                suggestions = ["Comment économiser ?", "Gérer mes dettes", "Faire un budget"];
            }
            
            // Update the suggestion buttons
            suggestionContainer.innerHTML = '';
            suggestions.forEach(suggestion => {
                const btn = document.createElement('button');
                btn.classList.add('suggestion-btn');
                btn.textContent = suggestion;
                btn.addEventListener('click', () => {
                    chatInputField.value = suggestion;
                    sendMessage();
                });
                suggestionContainer.appendChild(btn);
            });
        };
        
        sendMessageBtn.addEventListener('click', sendMessage);
        chatInputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Show advice bubble periodically only when chat is not active
        const showAdvice = () => {
            if (!chatInterface.classList.contains('active')) {
                const adviceTexts = [
                    "Économisez 10% chaque mois !",
                    "Besoin de conseils financiers ?",
                    "Cliquez pour optimiser votre budget",
                    "Je peux vous aider avec vos finances"
                ];
                
                const randomAdvice = adviceTexts[Math.floor(Math.random() * adviceTexts.length)];
                coachSvg.querySelector(".advice-text").textContent = randomAdvice;
                
                gsap.to(coachSvg.querySelector(".bubble"), {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
                
                gsap.to(coachSvg.querySelector(".advice-text"), {
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3,
                    ease: "power2.out"
                });
                
                setTimeout(() => {
                    gsap.to([coachSvg.querySelector(".bubble"), coachSvg.querySelector(".advice-text")], {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.in"
                    });
                }, 4000);
            }
        };
        
        setTimeout(showAdvice, 2000);
        setInterval(showAdvice, 10000);
    };
    
    createVirtualCoach();

    // Enhanced Emergency Alert Example
    const createEmergencyAlert = () => {
        const alertExample = document.getElementById("emergency-alert");
        const alertSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        alertSvg.setAttribute("width", "100%");
        alertSvg.setAttribute("height", "100");
        alertSvg.setAttribute("viewBox", "0 0 300 100");
        
        alertSvg.innerHTML = `
            <defs>
                <filter id="glow-alert" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feFlood flood-color="#FF6F00" flood-opacity="0.7" result="glowColor"/>
                    <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
                    <feComposite in="SourceGraphic" in2="softGlow" operator="over"/>
                </filter>
                <linearGradient id="alertGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#FFB300" />
                    <stop offset="100%" stop-color="#FF6F00" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="300" height="100" rx="10" fill="rgba(255, 255, 255, 0.2)" />
            <rect class="alert-bg-pulse" x="5" y="5" width="290" height="90" rx="8" stroke="url(#alertGradient)" stroke-width="2" fill="none" />
            <circle class="alert-icon" cx="40" cy="50" r="20" fill="#FFECB3" filter="url(#glow-alert)" />
            <path d="M40 35 L40 55" stroke="#FF6F00" stroke-width="3" stroke-linecap="round" />
            <circle cx="40" cy="62" r="2" fill="#FF6F00" />
            
            <text x="75" y="40" fill="white" font-size="14" font-weight="bold" text-shadow="0 2px 4px rgba(0,0,0,0.3)">Alerte Dépassement de Budget</text>
            <text x="75" y="65" fill="white" font-size="12">Catégorie "Restaurants" : 25% au-dessus du budget</text>
            
            <rect class="alert-button" x="190" y="75" width="100" height="20" rx="10" fill="#FFECB3" />
            <text x="240" y="89" text-anchor="middle" fill="#FF6F00" font-size="11" font-weight="bold">Voir Solutions</text>
            
            <g class="alert-particles">
                ${Array.from({length: 8}).map((_, i) => {
                    const x = 40 + Math.cos(i * Math.PI/4) * 25;
                    const y = 50 + Math.sin(i * Math.PI/4) * 25;
                    return `<circle class="particle particle-${i}" cx="${x}" cy="${y}" r="2" fill="#FFECB3" opacity="0.6" />`;
                }).join('')}
            </g>
        `;
        
        alertExample.appendChild(alertSvg);
        
        // Enhanced pulse effect for alert icon with particles
        gsap.to(alertSvg.querySelector(".alert-icon"), {
            scale: 1.15,
            transformOrigin: "center",
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Blinking border animation
        gsap.to(alertSvg.querySelector(".alert-bg-pulse"), {
            opacity: 0.5,
            duration: 0.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Particle animations
        alertSvg.querySelectorAll(".particle").forEach((particle, index) => {
            gsap.to(particle, {
                x: Math.random() * 20 - 10,
                y: Math.random() * 20 - 10,
                opacity: 0,
                scale: 2,
                duration: 1.5 + Math.random(),
                repeat: -1,
                delay: index * 0.2,
                ease: "power1.out"
            });
        });
        
        // Make button interactive with enhanced effects
        const alertButton = alertSvg.querySelector(".alert-button");
        alertButton.style.cursor = "pointer";
        
        alertButton.addEventListener("mouseover", () => {
            gsap.to(alertButton, {
                attr: { fill: "#FFF176" },
                scale: 1.05,
                transformOrigin: "center",
                duration: 0.3
            });
        });
        
        alertButton.addEventListener("mouseout", () => {
            gsap.to(alertButton, {
                attr: { fill: "#FFECB3" },
                scale: 1,
                duration: 0.3
            });
        });
        
        alertButton.addEventListener("click", () => {
            // Add emergency sound on click
            const emergencySound = new Audio('https://cdn.freesound.org/previews/431/431189_8942937-lq.mp3');
            emergencySound.volume = 0.3;
            emergencySound.play();
            
            // Visual feedback for click
            gsap.timeline()
                .to(alertButton, {
                    scale: 0.95,
                    duration: 0.1
                })
                .to(alertButton, {
                    scale: 1.05,
                    duration: 0.2
                })
                .to(alertButton, {
                    scale: 1,
                    duration: 0.2
                });
            
            // Flash effect for the entire alert
            const flashOverlay = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            flashOverlay.setAttribute("x", "0");
            flashOverlay.setAttribute("y", "0");
            flashOverlay.setAttribute("width", "300");
            flashOverlay.setAttribute("height", "100");
            flashOverlay.setAttribute("fill", "white");
            flashOverlay.setAttribute("rx", "10");
            flashOverlay.setAttribute("opacity", "0");
            
            alertSvg.insertBefore(flashOverlay, alertSvg.firstChild);
            
            gsap.to(flashOverlay, {
                opacity: 0.7,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(flashOverlay, {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            flashOverlay.remove();
                        }
                    });
                }
            });
        });
        
        // Add animation to the emergency alert section
        const emergencySection = document.querySelector('.emergency-mode');
        
        // Create floating warning signs in the background
        const createWarningSigns = () => {
            const warningContainer = document.createElement('div');
            warningContainer.classList.add('warning-signs-container');
            warningContainer.style.position = 'absolute';
            warningContainer.style.top = '0';
            warningContainer.style.left = '0';
            warningContainer.style.width = '100%';
            warningContainer.style.height = '100%';
            warningContainer.style.overflow = 'hidden';
            warningContainer.style.pointerEvents = 'none';
            warningContainer.style.zIndex = '0';
            
            for (let i = 0; i < 10; i++) {
                const warningSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                warningSign.setAttribute("width", "30");
                warningSign.setAttribute("height", "30");
                warningSign.setAttribute("viewBox", "0 0 30 30");
                warningSign.style.position = 'absolute';
                warningSign.style.top = `${Math.random() * 100}%`;
                warningSign.style.left = `${Math.random() * 100}%`;
                warningSign.style.opacity = '0.1';
                
                warningSign.innerHTML = `
                    <polygon points="15,2 28,28 2,28" fill="#FFD54F" />
                    <text x="15" y="22" text-anchor="middle" fill="#F44336" font-weight="bold" font-size="16">!</text>
                `;
                
                warningContainer.appendChild(warningSign);
                
                // Animate the warning signs
                gsap.to(warningSign, {
                    y: Math.random() * 100 - 50,
                    x: Math.random() * 100 - 50,
                    rotation: Math.random() * 360,
                    opacity: Math.random() * 0.2 + 0.05,
                    scale: Math.random() * 0.5 + 0.8,
                    duration: Math.random() * 20 + 10,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
            
            emergencySection.appendChild(warningContainer);
        };
        
        createWarningSigns();
    };
    
    createEmergencyAlert();

    // Financial Forecast Tool
    const createForecastTool = () => {
        const forecastTool = document.getElementById("forecast-tool");
        const forecastSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        forecastSvg.setAttribute("width", "100%");
        forecastSvg.setAttribute("height", "150");
        forecastSvg.setAttribute("viewBox", "0 0 300 150");
        
        forecastSvg.innerHTML = `
            <rect x="0" y="0" width="300" height="150" rx="5" fill="#F5F7FA" />
            
            <!-- Axes -->
            <path d="M30 20 L30 120 L280 120" stroke="#CCC" stroke-width="1" />
            
            <!-- Labels -->
            <text x="20" y="30" text-anchor="end" fill="#666" font-size="10">3k DH</text>
            <text x="20" y="60" text-anchor="end" fill="#666" font-size="10">2k DH</text>
            <text x="20" y="90" text-anchor="end" fill="#666" font-size="10">1k DH</text>
            <text x="20" y="120" text-anchor="end" fill="#666" font-size="10">0 DH</text>
            
            <text x="30" y="135" text-anchor="middle" fill="#666" font-size="10">Jan</text>
            <text x="80" y="135" text-anchor="middle" fill="#666" font-size="10">Fév</text>
            <text x="130" y="135" text-anchor="middle" fill="#666" font-size="10">Mar</text>
            <text x="180" y="135" text-anchor="middle" fill="#666" font-size="10">Avr</text>
            <text x="230" y="135" text-anchor="middle" fill="#666" font-size="10">Mai</text>
            <text x="280" y="135" text-anchor="middle" fill="#666" font-size="10">Jui</text>
            
            <!-- Savings Line -->
            <path class="savings-line" d="M30 100 L80 90 L130 80 L180 70 L230 55 L280 30" fill="none" stroke="#2E7D32" stroke-width="2" />
            <circle class="point" cx="30" cy="100" r="4" fill="#2E7D32" />
            <circle class="point" cx="80" cy="90" r="4" fill="#2E7D32" />
            <circle class="point" cx="130" cy="80" r="4" fill="#2E7D32" />
            <circle class="point" cx="180" cy="70" r="4" fill="#2E7D32" />
            <circle class="point" cx="230" cy="55" r="4" fill="#2E7D32" />
            <circle class="point" cx="280" cy="30" r="4" fill="#2E7D32" />
            
            <!-- Drag handle for simulation -->
            <circle class="drag-handle" cx="280" cy="30" r="8" fill="#FF9800" stroke="white" stroke-width="2" cursor="pointer" />
            
            <!-- Projection Line -->
            <path class="projection" d="M280 30 L320 15" stroke="#FF9800" stroke-width="2" stroke-dasharray="5,3" opacity="0.7" />
            
            <text x="150" y="15" text-anchor="middle" fill="#666" font-size="12" font-weight="bold">Prévision d'épargne</text>
        `;
        
        forecastTool.appendChild(forecastSvg);
        
        // Make the handle draggable to simulate different scenarios
        const dragHandle = forecastSvg.querySelector(".drag-handle");
        const projectionLine = forecastSvg.querySelector(".projection");
        
        let isDragging = false;
        let startY;
        let origY = 30;
        
        dragHandle.addEventListener("mousedown", e => {
            isDragging = true;
            startY = e.clientY;
            dragHandle.setAttribute("r", "10");
            dragHandle.style.opacity = "0.8";
        });
        
        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            
            const dy = e.clientY - startY;
            const newY = Math.max(20, Math.min(120, origY + dy));
            
            dragHandle.setAttribute("cy", newY);
            
            // Update projection line
            projectionLine.setAttribute("d", `M280 ${newY} L320 ${newY - 15}`);
        });
        
        document.addEventListener("mouseup", () => {
            if (!isDragging) return;
            
            isDragging = false;
            dragHandle.setAttribute("r", "8");
            dragHandle.style.opacity = "1";
            
            // Save new position
            origY = parseInt(dragHandle.getAttribute("cy"));
        });
        
        // Animate the savings line initially
        gsap.from(forecastSvg.querySelector(".savings-line"), {
            attr: { d: "M30 120 L80 120 L130 120 L180 120 L230 120 L280 120" },
            duration: 2,
            ease: "power2.out"
        });
        
        gsap.from(forecastSvg.querySelectorAll(".point"), {
            attr: { cy: 120 },
            duration: 2,
            stagger: 0.2,
            ease: "power2.out"
        });
    };
    
    createForecastTool();

    // Testimonials Slider
    const createTestimonials = () => {
        const testimonialContainer = document.getElementById("testimonial-container");
        const prevButton = document.getElementById("prev-testimonial");
        const nextButton = document.getElementById("next-testimonial");
        
        const testimonials = [
            {
                name: "Sophie Martin",
                text: "Coach Budget m'a permis d'économiser plus de 200 DH par mois sans changer radicalement mon mode de vie. Les conseils personnalisés sont vraiment pertinents !",
                avatar: "#1976D2",
                rating: 5
            },
            {
                name: "Thomas Dubois",
                text: "J'ai réussi à rembourser ma dette en 6 mois grâce aux stratégies proposées par l'application. Le mode 'Urgence Financière' est vraiment efficace.",
                avatar: "#2E7D32",
                rating: 5
            },
            {
                name: "Amina Sidibe",
                text: "La fonction de micro-épargne est géniale ! Je mets de l'argent de côté sans même y penser. En 3 mois, j'ai économisé pour mes vacances.",
                avatar: "#9C27B0",
                rating: 4
            },
            {
                name: "Mohamed Aber",
                text: "MA sit ma ta l3ba! Cette application a transformé ma façon de gérer mon budget. Vraiment impressionné par les fonctionnalités.",
                avatar: "#FF9800",
                rating: 5
            },
            {
                name: "Chwiba",
                text: "Tl3 tl3 asahbi! Je recommande Coach Budget à tous mes amis. Les conseils financiers sont excellents et l'interface est intuitive.",
                avatar: "#E91E63",
                rating: 5
            }
        ];
        
        let currentIndex = 0;
        
        const showTestimonial = (index) => {
            testimonialContainer.innerHTML = '';
            
            const testimonial = testimonials[index];
            const testimonialElement = document.createElement("div");
            testimonialElement.className = "testimonial";
            
            testimonialElement.innerHTML = `
                <div class="testimonial-header">
                    <div class="testimonial-avatar" style="background-color: ${testimonial.avatar}">
                        ${testimonial.name.charAt(0)}
                    </div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <div class="rating">
                            ${Array(5).fill(0).map((_, i) => 
                                `<i class="fas fa-star${i < testimonial.rating ? '' : '-o'} star-icon"></i>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-decoration">
                    <svg viewBox="0 0 100 100" width="80" height="80" class="testimonial-quotes">
                        <text x="10" y="80" font-size="120" opacity="0.07">"</text>
                    </svg>
                </div>
            `;
            
            testimonialContainer.appendChild(testimonialElement);
            
            // Enhanced animations with staggered elements
            const timeline = gsap.timeline();
            
            timeline.fromTo(testimonialElement, 
                { opacity: 0, x: 50, scale: 0.9 }, 
                { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" }
            );
            
            timeline.fromTo(testimonialElement.querySelector('.testimonial-avatar'),
                { opacity: 0, scale: 0, rotation: -30 },
                { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: "back.out(2)" },
                "-=0.3"
            );
            
            timeline.fromTo(testimonialElement.querySelector('.testimonial-info'),
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4 },
                "-=0.2"
            );
            
            // Staggered animation for stars
            timeline.fromTo(testimonialElement.querySelectorAll('.star-icon'),
                { opacity: 0, scale: 0, y: 10 },
                { opacity: 1, scale: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "back.out(3)" },
                "-=0.2"
            );
            
            timeline.fromTo(testimonialElement.querySelector('.testimonial-text'),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.4"
            );
            
            // Subtle continuous animations
            gsap.to(testimonialElement.querySelector('.testimonial-quotes'), {
                rotation: 5,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                transformOrigin: "center center"
            });
        };
        
        showTestimonial(currentIndex);
        
        prevButton.addEventListener("click", () => {
            // Add click effect
            gsap.timeline()
                .to(prevButton, { scale: 0.9, duration: 0.1 })
                .to(prevButton, { scale: 1, duration: 0.2 });
                
            gsap.to(testimonialContainer, {
                opacity: 0, 
                x: 50, 
                duration: 0.3,
                onComplete: () => {
                    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                    showTestimonial(currentIndex);
                    gsap.fromTo(testimonialContainer, 
                        {opacity: 0, x: -50}, 
                        {opacity: 1, x: 0, duration: 0.3}
                    );
                }
            });
        });
        
        nextButton.addEventListener("click", () => {
            // Add click effect
            gsap.timeline()
                .to(nextButton, { scale: 0.9, duration: 0.1 })
                .to(nextButton, { scale: 1, duration: 0.2 });
                
            gsap.to(testimonialContainer, {
                opacity: 0, 
                x: -50, 
                duration: 0.3,
                onComplete: () => {
                    currentIndex = (currentIndex + 1) % testimonials.length;
                    showTestimonial(currentIndex);
                    gsap.fromTo(testimonialContainer, 
                        {opacity: 0, x: 50}, 
                        {opacity: 1, x: 0, duration: 0.3}
                    );
                }
            });
        });
        
        // Auto rotate testimonials with enhanced transitions
        const autoRotateTestimonials = () => {
            gsap.to(testimonialContainer, {
                opacity: 0, 
                x: -50, 
                duration: 0.5,
                delay: 7.5,
                onComplete: () => {
                    currentIndex = (currentIndex + 1) % testimonials.length;
                    showTestimonial(currentIndex);
                    gsap.fromTo(testimonialContainer, 
                        {opacity: 0, x: 50}, 
                        {opacity: 1, x: 0, duration: 0.5}
                    );
                }
            });
        };
        
        setInterval(autoRotateTestimonials, 8000);
    };
    
    createTestimonials();

    // Load background images for blog posts
    const loadBlogImages = () => {
        const blogImages = [
            { 
                element: document.querySelector('.blog-card:nth-child(1) .blog-image'),
                url: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=600&h=400'
            },
            { 
                element: document.querySelector('.blog-card:nth-child(2) .blog-image'),
                url: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80&w=600&h=400'
            },
            { 
                element: document.querySelector('.blog-card:nth-child(3) .blog-image'),
                url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600&h=400'
            }
        ];
        
        blogImages.forEach(image => {
            if (image.element) {
                image.element.style.backgroundImage = `url(${image.url})`;
            }
        });
    };
    
    loadBlogImages();

    // Add button ripple effect
    const buttons = document.querySelectorAll('.cta-button, .pricing-button, #accept-cookies, #decline-cookies');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function(e) {
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add parallax effect to the hero section
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
            heroSection.querySelector('.background-animation').style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });

    // Add animations to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .pricing-card, .blog-card, .coaching-info > div');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // Add CSS for the animations
    const addAnimationStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .animate-in {
                animation: fadeInUp 0.6s ease forwards;
            }
            
            .ripple-effect {
                position: absolute;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .feature-card, .pricing-card, .blog-card, .coaching-info > div {
                opacity: 0;
            }
        `;
        document.head.appendChild(style);
    };
    
    addAnimationStyles();
    animateOnScroll();

    // Registration Form Modal
    const createRegistrationModal = () => {
        const modal = document.createElement('div');
        modal.classList.add('registration-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Commencez votre essai gratuit</h3>
                <form id="registration-form">
                    <div class="form-group">
                        <label for="fullname">Nom complet</label>
                        <input type="text" id="fullname" name="fullname" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Téléphone</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    <div class="form-check">
                        <input type="checkbox" id="terms" name="terms" required>
                        <label for="terms">J'accepte les <a href="#">conditions d'utilisation</a></label>
                    </div>
                    <button type="submit" class="submit-button">Créer mon compte</button>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal when clicking on X or outside the modal
        const closeModal = document.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
        
        // Form submission
        const registrationForm = document.getElementById('registration-form');
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Hide the modal
            modal.classList.remove('active');
            
            // Create welcome message
            const welcomeMessage = document.createElement('div');
            welcomeMessage.classList.add('welcome-message');
            welcomeMessage.innerHTML = `
                <div class="welcome-content">
                    <h3>Bienvenue chez Coach Budget!</h3>
                    <p>Merci de vous être inscrit, ${document.getElementById('fullname').value}!</p>
                    <p>Nous sommes ravis de vous accompagner dans votre parcours financier.</p>
                    <button class="close-welcome">Commencer</button>
                </div>
            `;
            
            document.body.appendChild(welcomeMessage);
            
            // Play welcome sound
            const welcomeSound = new Audio('https://cdn.freesound.org/previews/221/221683_1015240-lq.mp3');
            welcomeSound.volume = 0.3;
            welcomeSound.play();
            
            // Show the welcome message with animation
            setTimeout(() => {
                welcomeMessage.classList.add('active');
            }, 100);
            
            // Close welcome message
            const closeWelcome = welcomeMessage.querySelector('.close-welcome');
            closeWelcome.addEventListener('click', () => {
                welcomeMessage.classList.remove('active');
                setTimeout(() => {
                    welcomeMessage.remove();
                }, 500);
            });
        });
    };
    
    createRegistrationModal();
    
    // Attach click event to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.registration-modal').classList.add('active');
        });
    });

    // Dark Mode Toggle
    const createDarkModeToggle = () => {
        const toggle = document.createElement('div');
        toggle.classList.add('dark-mode-toggle');
        toggle.innerHTML = `
            <svg class="dark-mode-icon sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF9800" width="16px" height="16px">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
            </svg>
            <svg class="dark-mode-icon moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#BBDEFB" width="16px" height="16px">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/>
            </svg>
        `;
        
        document.body.appendChild(toggle);
        
        // Check for user's preference
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
        }
        
        // Toggle dark mode
        toggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark-mode');
            const isDarkModeNow = document.documentElement.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkModeNow);
            
            // Add transition effect with sound
            const darkModeSound = new Audio('https://cdn.freesound.org/previews/536/536782_6142149-lq.mp3');
            darkModeSound.volume = 0.2;
            darkModeSound.play();
            
            // Update SVG colors for dark mode
            updateSvgColors(isDarkModeNow);
            
            // Animation for toggle
            gsap.fromTo(toggle, 
                { rotation: 0 },
                { rotation: 360, duration: 0.5, ease: "back.out(1.7)" }
            );
        });
    };
    
    // Update SVG colors for dark mode
    const updateSvgColors = (isDarkMode) => {
        // Update dashboard colors
        const dashboardSvg = document.querySelector("#interactive-dashboard svg");
        if (dashboardSvg) {
            const rects = dashboardSvg.querySelectorAll('rect[fill="#F5F7FA"]');
            rects.forEach(rect => {
                rect.setAttribute('fill', isDarkMode ? '#1A1A1A' : '#F5F7FA');
            });
            
            const texts = dashboardSvg.querySelectorAll('text[fill="#666"]');
            texts.forEach(text => {
                text.setAttribute('fill', isDarkMode ? '#B0B0B0' : '#666');
            });
            
            const darkTexts = dashboardSvg.querySelectorAll('text[fill="#333"]');
            darkTexts.forEach(text => {
                text.setAttribute('fill', isDarkMode ? '#E0E0E0' : '#333');
            });
        }
        
        // Update forecast tool colors
        const forecastSvg = document.querySelector("#forecast-tool svg");
        if (forecastSvg) {
            const background = forecastSvg.querySelector('rect[fill="#F5F7FA"]');
            if (background) {
                background.setAttribute('fill', isDarkMode ? '#1A1A1A' : '#F5F7FA');
            }
            
            const lines = forecastSvg.querySelectorAll('path[stroke="#CCC"]');
            lines.forEach(line => {
                line.setAttribute('stroke', isDarkMode ? '#444' : '#CCC');
            });
            
            const labels = forecastSvg.querySelectorAll('text[fill="#666"]');
            labels.forEach(label => {
                label.setAttribute('fill', isDarkMode ? '#B0B0B0' : '#666');
            });
        }
        
        // Update coach SVG colors
        const coachSvg = document.querySelector(".coach-svg");
        if (coachSvg) {
            const gradients = coachSvg.querySelectorAll('stop');
            if (isDarkMode) {
                gradients.forEach(stop => {
                    if (stop.getAttribute('stop-color') === '#64b5f6') {
                        stop.setAttribute('stop-color', '#2196F3');
                    } else if (stop.getAttribute('stop-color') === '#1976D2') {
                        stop.setAttribute('stop-color', '#0D47A1');
                    }
                });
            } else {
                gradients.forEach(stop => {
                    if (stop.getAttribute('stop-color') === '#2196F3') {
                        stop.setAttribute('stop-color', '#64b5f6');
                    } else if (stop.getAttribute('stop-color') === '#0D47A1') {
                        stop.setAttribute('stop-color', '#1976D2');
                    }
                });
            }
        }
    };
    
    createDarkModeToggle();
});