/**
 * CODENAME DASHBOARD - JavaScript
 * Interactive functionality and charts
 * Version: 2.0 - Optimized
 * 
 * Features:
 * - Chart.js integrations
 * - Smooth animations with Intersection Observer
 * - Responsive sidebar handling
 * - Keyboard navigation support
 * - Design overlay comparison tool
 */

'use strict';

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
    animationDuration: 500,
    debounceDelay: 250,
    throttleLimit: 100,
    chartColors: {
        primary: '#E91E63',
        secondary: '#1A1A1A',
        gray: '#E5E5E5',
        behance: '#1769FF',
        google: '#4285F4',
        dribbble: '#EA4C89',
        instagram: '#E1306C'
    },
    breakpoints: {
        mobile: 640,
        tablet: 768,
        desktop: 1024,
        wide: 1280
    }
};

// ============================================
// DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initializeCharts();
    initializeInteractions();
    initializeAnimations();
    initCompareOverlay();
    initMobileMenu();
    initAccessibility();
    
    // Log initialization
    console.log('🚀 Codename Dashboard initialized successfully!');
});

// ============================================
// CHART CONFIGURATIONS
// ============================================

/**
 * Initialize all Chart.js charts
 */
function initializeCharts() {
    initDealsChart();
    initPlatformChart();
    initSalesPieChart();
    initSalesDynamicChart();
}

/**
 * Deals Chart - Bubble/Scatter visualization
 */
function initDealsChart() {
    const ctx = document.getElementById('dealsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [
                {
                    label: 'Behance',
                    data: [
                        { x: 20, y: 60, r: 25 },
                        { x: 40, y: 40, r: 15 }
                    ],
                    backgroundColor: 'rgba(23, 105, 255, 0.3)',
                    borderColor: '#1769FF',
                    borderWidth: 2
                },
                {
                    label: 'Google',
                    data: [
                        { x: 60, y: 50, r: 20 },
                        { x: 80, y: 30, r: 12 }
                    ],
                    backgroundColor: 'rgba(66, 133, 244, 0.3)',
                    borderColor: '#4285F4',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#1A1A1A',
                    titleFont: {
                        family: 'Inter',
                        size: 12
                    },
                    bodyFont: {
                        family: 'Inter',
                        size: 11
                    },
                    padding: 12,
                    cornerRadius: 8
                }
            },
            scales: {
                x: {
                    display: false,
                    min: 0,
                    max: 100
                },
                y: {
                    display: false,
                    min: 0,
                    max: 100
                }
            }
        }
    });
}

/**
 * Platform Value Chart - Bar chart with monthly data
 */
function initPlatformChart() {
    const ctx = document.getElementById('platformChart');
    if (!ctx) return;

    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 180);
    gradient.addColorStop(0, 'rgba(233, 30, 99, 0.4)');
    gradient.addColorStop(1, 'rgba(233, 30, 99, 0.05)');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            datasets: [{
                label: 'Revenue',
                data: [6901, 7200, 11035, 9288, 11500, 15500],
                backgroundColor: [
                    '#E5E5E5',
                    '#E5E5E5',
                    '#1A1A1A',
                    '#E91E63',
                    '#E5E5E5',
                    '#E5E5E5'
                ],
                borderRadius: 6,
                borderSkipped: false,
                barThickness: 40
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#1A1A1A',
                    titleFont: {
                        family: 'Inter',
                        size: 12
                    },
                    bodyFont: {
                        family: 'Inter',
                        size: 11
                    },
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.raw.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 11
                        },
                        color: '#9CA3AF'
                    }
                },
                y: {
                    display: true,
                    position: 'right',
                    grid: {
                        color: '#F0F0F0',
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 11
                        },
                        color: '#9CA3AF',
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                }
            }
        }
    });
}

/**
 * Sales Pie Chart - Doughnut chart for platform distribution
 */
function initSalesPieChart() {
    const ctx = document.getElementById('salesPieChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Dribbble', 'Instagram', 'Google', 'Behance', 'Other'],
            datasets: [{
                data: [43, 28, 14, 8, 7],
                backgroundColor: [
                    '#EA4C89',
                    '#E1306C',
                    '#4285F4',
                    '#1769FF',
                    '#E5E5E5'
                ],
                borderWidth: 0,
                spacing: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#1A1A1A',
                    titleFont: {
                        family: 'Inter',
                        size: 12
                    },
                    bodyFont: {
                        family: 'Inter',
                        size: 11
                    },
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });
}

/**
 * Sales Dynamic Chart - Line chart with area fill
 */
function initSalesDynamicChart() {
    const ctx = document.getElementById('salesDynamicChart');
    if (!ctx) return;

    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, 'rgba(233, 30, 99, 0.2)');
    gradient.addColorStop(1, 'rgba(233, 30, 99, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11'],
            datasets: [{
                label: 'Sales',
                data: [30, 25, 35, 28, 40, 55, 45, 60, 50, 65, 70],
                fill: true,
                backgroundColor: gradient,
                borderColor: '#E91E63',
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: '#E91E63',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#1A1A1A',
                    titleFont: {
                        family: 'Inter',
                        size: 12
                    },
                    bodyFont: {
                        family: 'Inter',
                        size: 11
                    },
                    padding: 12,
                    cornerRadius: 8,
                    intersect: false,
                    mode: 'index'
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false,
                    min: 0,
                    max: 100
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// ============================================
// INTERACTIONS
// ============================================

/**
 * Initialize all interactive elements
 */
function initializeInteractions() {
    initSidebar();
    initTooltips();
    initDropdowns();
    initTabs();
    initUserRows();
}

/**
 * Sidebar toggle and submenu functionality
 */
function initSidebar() {
    // Submenu toggles
    const submenuItems = document.querySelectorAll('.nav-item.has-submenu');
    
    submenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = item.parentElement;
            const submenu = item.nextElementSibling;
            
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('open');
                const caret = item.querySelector('.caret');
                if (caret) {
                    caret.style.transform = submenu.classList.contains('open') 
                        ? 'rotate(180deg)' 
                        : 'rotate(0deg)';
                }
            }
        });
    });

    // Mobile sidebar toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
}

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    
    // Create mobile menu toggle button
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '<i class="ph ph-list"></i>';
    mobileToggle.setAttribute('aria-label', 'Toggle menu');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.appendChild(mobileToggle);
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    // Toggle sidebar
    const toggleSidebar = () => {
        const isOpen = sidebar.classList.toggle('open');
        overlay.classList.toggle('visible', isOpen);
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
        mobileToggle.innerHTML = isOpen 
            ? '<i class="ph ph-x"></i>' 
            : '<i class="ph ph-list"></i>';
        body.style.overflow = isOpen ? 'hidden' : '';
    };
    
    mobileToggle.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    });
    
    // Handle resize
    const handleResize = debounce(() => {
        if (window.innerWidth > CONFIG.breakpoints.desktop) {
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
            body.style.overflow = '';
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.innerHTML = '<i class="ph ph-list"></i>';
        }
    }, CONFIG.debounceDelay);
    
    window.addEventListener('resize', handleResize);
}

/**
 * Initialize accessibility features
 */
function initAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
    
    // Track keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

/**
 * Tooltip functionality
 */
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'dynamic-tooltip';
            tooltip.textContent = element.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = element.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.dynamic-tooltip');
            if (tooltip) tooltip.remove();
        });
    });
}

/**
 * Dropdown functionality
 */
function initDropdowns() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn, .timeframe-btn, .category-btn');
    
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
                menu.classList.remove('open');
            });
            
            // Toggle current dropdown
            const menu = btn.nextElementSibling;
            if (menu && menu.classList.contains('dropdown-menu')) {
                menu.classList.toggle('open');
            }
        });
    });
    
    // Close dropdowns on outside click
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
            menu.classList.remove('open');
        });
    });
}

/**
 * Tab functionality
 */
function initTabs() {
    const tabContainers = document.querySelectorAll('.chart-tabs');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab-btn');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Add ripple effect
                createRipple(tab);
            });
        });
    });
}

/**
 * User row expand/collapse
 */
function initUserRows() {
    const userRows = document.querySelectorAll('.user-stat-row');
    
    userRows.forEach(row => {
        const action = row.querySelector('.row-action');
        
        if (action) {
            action.addEventListener('click', () => {
                row.classList.toggle('expanded');
                const icon = action.querySelector('i');
                
                if (row.classList.contains('expanded')) {
                    icon.className = 'ph ph-caret-up';
                } else {
                    icon.className = 'ph ph-caret-down';
                }
            });
        }
    });
}

// ============================================
// ANIMATIONS
// ============================================

/**
 * Initialize animations
 */
function initializeAnimations() {
    initCounterAnimations();
    initScrollAnimations();
    initHoverEffects();
}

/**
 * Counter animations for stats
 */
function initCounterAnimations() {
    const counters = document.querySelectorAll('.revenue-value .amount');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/,/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

/**
 * Scroll-based animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

/**
 * Hover effects
 */
function initHoverEffects() {
    // Card hover effect
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Avatar hover effect
    const avatars = document.querySelectorAll('.avatar');
    
    avatars.forEach(avatar => {
        avatar.addEventListener('mouseenter', () => {
            const name = avatar.dataset.name;
            if (name) {
                showTooltip(avatar, name);
            }
        });
        
        avatar.addEventListener('mouseleave', () => {
            hideTooltip();
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create ripple effect on element
 */
function createRipple(element) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    element.appendChild(ripple);
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    
    requestAnimationFrame(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(4)';
        ripple.style.opacity = '0';
    });
    
    setTimeout(() => ripple.remove(), 600);
}

/**
 * Show tooltip
 */
function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'avatar-tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.bottom + 8 + 'px';
    tooltip.style.opacity = '1';
}

/**
 * Hide tooltip
 */
function hideTooltip() {
    const tooltip = document.querySelector('.avatar-tooltip');
    if (tooltip) {
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.remove(), 200);
    }
}

/**
 * Format currency
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

/**
 * Format percentage
 */
function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }).format(value / 100);
}

/**
 * Debounce function - delays execution until after wait milliseconds
 * @param {Function} func - Function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait = CONFIG.debounceDelay) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function - limits execution to once per limit milliseconds
 * @param {Function} func - Function to throttle
 * @param {number} limit - Minimum time between calls
 * @returns {Function} Throttled function
 */
function throttle(func, limit = CONFIG.throttleLimit) {
    let inThrottle;
    let lastArgs;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
                if (lastArgs) {
                    func.apply(this, lastArgs);
                    lastArgs = null;
                }
            }, limit);
        } else {
            lastArgs = args;
        }
    };
}

// ============================================
// RESPONSIVE HANDLING
// ============================================

/**
 * Handle window resize - reinitialize charts and update layout
 */
const handleResize = debounce(() => {
    // Reinitialize charts on resize
    if (typeof Chart !== 'undefined') {
        Chart.instances.forEach(chart => {
            if (chart) {
                chart.resize();
            }
        });
    }
    
    // Update any position-dependent elements
    updateOverlayBounds();
}, CONFIG.debounceDelay);

function updateOverlayBounds() {
    const overlay = document.getElementById('designOverlay');
    const appShell = document.getElementById('appShell');
    
    if (overlay && appShell && overlay.src) {
        const rect = appShell.getBoundingClientRect();
        overlay.style.left = rect.left + 'px';
        overlay.style.top = rect.top + 'px';
        overlay.style.width = rect.width + 'px';
        overlay.style.height = rect.height + 'px';
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('orientationchange', handleResize);

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC key to close modals/dropdowns/sidebar
    if (e.key === 'Escape') {
        // Close dropdowns
        document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
            menu.classList.remove('open');
        });
        
        // Close sidebar on mobile
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('visible');
            document.body.style.overflow = '';
        }
        
        // Close compare panel
        const comparePanel = document.getElementById('comparePanel');
        const compareToggle = document.getElementById('compareToggle');
        if (comparePanel && comparePanel.classList.contains('open')) {
            comparePanel.classList.remove('open');
            if (compareToggle) compareToggle.setAttribute('aria-expanded', 'false');
        }
    }
    
    // Slash key to focus search
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        const searchInput = document.querySelector('.top-search input');
        if (searchInput) searchInput.focus();
    }
});

// ============================================
// ADDITIONAL STYLES (injected)
// ============================================

const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    /* Ripple effect */
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        pointer-events: none;
        transition: transform 0.6s ease, opacity 0.6s ease;
    }
    
    /* Avatar tooltip */
    .avatar-tooltip {
        position: fixed;
        background: #1A1A1A;
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
        white-space: nowrap;
    }
    
    .avatar-tooltip::before {
        content: '';
        position: absolute;
        top: -6px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #1A1A1A;
    }
    
    /* Dynamic tooltip */
    .dynamic-tooltip {
        position: fixed;
        background: #1A1A1A;
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
        z-index: 1000;
        pointer-events: none;
        animation: fadeIn 0.2s ease;
    }
    
    /* Keyboard navigation styles */
    .keyboard-nav *:focus {
        outline: 2px solid #E91E63;
        outline-offset: 2px;
    }
    
    /* Submenu open state */
    .submenu {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .submenu.open {
        max-height: 500px;
    }
    
    /* Expanded row state */
    .user-stat-row.expanded {
        background: #FCE4EC;
    }
    
    /* Loading skeleton */
    .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: skeleton 1.5s infinite;
    }
    
    @keyframes skeleton {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
`;
document.head.appendChild(additionalStyles);

// ============================================
// INITIALIZATION COMPLETE
// ============================================

console.log('🚀 Codename Dashboard initialized successfully!');

// ============================================
// DESIGN OVERLAY COMPARE TOOL
// ============================================

function initCompareOverlay(){
    const toggle = document.getElementById('compareToggle');
    const panel = document.getElementById('comparePanel');
    const closeBtn = document.getElementById('compareClose');
    const input = document.getElementById('overlayInput');
    const opacity = document.getElementById('overlayOpacity');
    const overlay = document.getElementById('designOverlay');
    const fit = document.getElementById('overlayFit');
    const fill = document.getElementById('overlayFill');
    const center = document.getElementById('overlayCenter');

    if(!toggle || !panel || !overlay) return;

    const appShell = document.getElementById('appShell');
    if(appShell){
        // Position overlay over the app container area
        const updateOverlayBounds = () => {
            const rect = appShell.getBoundingClientRect();
            overlay.style.left = rect.left + 'px';
            overlay.style.top = rect.top + 'px';
            overlay.style.width = rect.width + 'px';
            overlay.style.height = rect.height + 'px';
        };
        const onScrollOrResize = throttle(updateOverlayBounds, 100);
        window.addEventListener('resize', onScrollOrResize);
        window.addEventListener('scroll', onScrollOrResize);
        updateOverlayBounds();
    }

    toggle.addEventListener('click', ()=>{
        const open = !panel.classList.contains('open');
        panel.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
        if(open) overlay.style.display = overlay.src ? 'block' : 'none';
    });

    closeBtn && closeBtn.addEventListener('click', ()=>{
        panel.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });

    // Load image from file
    input && input.addEventListener('change', (e)=>{
        const file = e.target.files && e.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
            overlay.src = ev.target.result;
            overlay.style.display = 'block';
        };
        reader.readAsDataURL(file);
    });

    // Opacity control
    opacity && opacity.addEventListener('input', ()=>{
        overlay.style.opacity = (Number(opacity.value)/100).toString();
    });

    fit && fit.addEventListener('click', ()=>{
        overlay.style.objectFit = 'contain';
    });
    fill && fill.addEventListener('click', ()=>{
        overlay.style.objectFit = 'cover';
    });
    center && center.addEventListener('click', ()=>{
        overlay.style.objectFit = 'none';
        overlay.style.objectPosition = 'center';
    });
}
