// =====================================================
// FUNCIÓN PRINCIPAL: MOSTRAR CONTENIDO SEGÚN PERFIL
// =====================================================

function showMainApp(profileType) {
    const selector = document.getElementById('profile-selector');
    const mainContent = document.getElementById('main-content');
    const badge = document.getElementById('badge-perfil');

    // Animación de salida del selector
    selector.style.opacity = '0';
    selector.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        selector.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Configurar badge según perfil
        switch(profileType) {
            case 'usuario':
                badge.innerText = "✨ Experiencia para Atletas";
                badge.classList.add('fade-in');
                // Personalizar contenido para usuarios
                personalizeForUser();
                break;
            case 'profesional':
                badge.innerText = "🎯 Portal para Profesionales";
                badge.classList.add('fade-in');
                // Personalizar contenido para profesionales
                personalizeForProfessional();
                break;
            case 'empresa':
                badge.innerText = "📊 Soluciones B2B e Insights";
                badge.classList.add('fade-in');
                // Personalizar contenido para empresas
                personalizeForBusiness();
                break;
        }

        // Scroll suave al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Animar elementos de entrada
        animateOnScroll();
    }, 300);
}

// =====================================================
// PERSONALIZACIÓN DE CONTENIDO POR TIPO DE PERFIL
// =====================================================

function personalizeForUser() {
    // Destacar secciones relevantes para usuarios
    highlightSection('app');
}

function personalizeForProfessional() {
    // Destacar secciones relevantes para profesionales
    highlightSection('profesionales');
}

function personalizeForBusiness() {
    // Destacar secciones relevantes para empresas
    highlightSection('modelo');
}

function highlightSection(sectionId) {
    // Implementar lógica de destacado si es necesario
    // Por ejemplo, añadir una clase especial a la sección
}

// =====================================================
// NAVEGACIÓN SUAVE
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Ajuste para navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Inicializar animaciones al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

// =====================================================
// ANIMACIONES AL HACER SCROLL
// =====================================================

function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-box, .benefit-card, .revenue-card, .team-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Elemento visible en viewport
        if (elementTop < windowHeight - 100 && elementBottom > 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar elementos para animación
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-box, .benefit-card, .revenue-card, .team-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// =====================================================
// MENÚ MÓVIL
// =====================================================

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    
    // Animar entrada
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            mobileMenu.style.transition = 'all 0.3s ease';
            mobileMenu.style.opacity = '1';
            mobileMenu.style.transform = 'translateY(0)';
        }, 10);
    }
}

// Cerrar menú móvil al hacer clic en un enlace
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});

// =====================================================
// RESETEAR AL SELECTOR
// =====================================================

function resetToSelector() {
    const selector = document.getElementById('profile-selector');
    const mainContent = document.getElementById('main-content');
    
    // Ocultar contenido principal
    mainContent.style.opacity = '0';
    
    setTimeout(() => {
        mainContent.classList.add('hidden');
        selector.classList.remove('hidden');
        
        // Animar entrada del selector
        selector.style.opacity = '0';
        selector.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            selector.style.transition = 'all 0.4s ease';
            selector.style.opacity = '1';
            selector.style.transform = 'scale(1)';
        }, 10);
    }, 300);
}

// =====================================================
// DETECCIÓN DE SCROLL PARA NAVBAR
// =====================================================

let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// =====================================================
// LAZY LOADING DE IMÁGENES
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// =====================================================
// TOOLTIP SIMPLE
// =====================================================

function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        white-space: nowrap;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    element.addEventListener('mouseenter', (e) => {
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        tooltip.style.opacity = '1';
    });
    
    element.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
}

// =====================================================
// TRACKING DE EVENTOS (ANALYTICS)
// =====================================================

function trackEvent(category, action, label) {
    // Implementar con Google Analytics o similar
    console.log(`Event: ${category} - ${action} - ${label}`);
    
    // Ejemplo con Google Analytics:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Trackear clics en botones principales
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.profile-card').forEach(card => {
        card.addEventListener('click', function() {
            const profileType = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            trackEvent('Profile Selection', 'Click', profileType);
        });
    });
    
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('CTA', 'Click', this.textContent.trim());
        });
    });
});

// =====================================================
// DETECTAR MODO OSCURO DEL SISTEMA
// =====================================================

function checkDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Usuario prefiere modo oscuro
        // Puedes implementar un tema oscuro aquí
        console.log('Dark mode preferred');
    }
}

// Escuchar cambios en preferencia de modo
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    checkDarkMode();
});

// =====================================================
// PREVENIR SPAM EN FORMULARIOS
// =====================================================

let lastSubmitTime = 0;
const submitCooldown = 3000; // 3 segundos

function canSubmitForm() {
    const now = Date.now();
    if (now - lastSubmitTime < submitCooldown) {
        return false;
    }
    lastSubmitTime = now;
    return true;
}

// =====================================================
// EASTER EGG (OPCIONAL - DIVERTIDO)
// =====================================================

let clickCount = 0;
const logo = document.querySelector('nav img');

if (logo) {
    logo.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 5) {
            // Efecto especial al hacer 5 clicks
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 0.6s ease';
            
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
                clickCount = 0;
            }, 600);
            
            console.log('🎉 ¡Has descubierto un easter egg! Equipo Vis AI te saluda 👋');
        }
    });
}

// =====================================================
// PERFORMANCE: DEBOUNCE FUNCTION
// =====================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce al scroll para mejor performance
const debouncedScrollHandler = debounce(animateOnScroll, 100);
window.addEventListener('scroll', debouncedScrollHandler);

// =====================================================
// INICIALIZACIÓN COMPLETA
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🚀 Vis AI Web App Loaded!', 'color: #0d9488; font-size: 20px; font-weight: bold;');
    console.log('%cCreado por: Javier Prados, Carlos Pérez y Maria Ballesteros', 'color: #1e3a8a; font-size: 14px;');
    
    // Inicializar componentes
    checkDarkMode();
    
    // Añadir clase loaded al body para animaciones CSS
    document.body.classList.add('loaded');
});
