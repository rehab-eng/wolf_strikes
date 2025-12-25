/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
}
window.addEventListener('scroll', scrollHeader);

/*=============== DARK/LIGHT THEME ===============*/
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.classList.toggle('fa-sun', theme === 'light');
    themeToggle.classList.toggle('fa-moon', theme === 'dark');
};

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});

/*=============== TYPING EFFECT ===============*/
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Typed !== 'undefined') {
        if (document.getElementById('typing-headline')) {
            new Typed('#typing-headline', {
                strings: ['Wolf Strikes'],
                typeSpeed: 100,
                backSpeed: 50,
                loop: false,
                showCursor: true,
                cursorChar: '_',
            });
        }
        if (document.getElementById('typing-title')) {
            const titleElement = document.getElementById('typing-title');
            const titleText = titleElement.getAttribute('data-text') || 'Our Page';
            new Typed('#typing-title', {
                strings: [titleText],
                typeSpeed: 70,
                backSpeed: 50,
                loop: false,
                showCursor: false,
            });
        }
    }
});

/*=============== ROTATING TEXT ===============*/
const renderRotatingText = (element, text) => {
    element.innerHTML = '';

    const srOnly = document.createElement('span');
    srOnly.className = 'text-rotate-sr-only';
    srOnly.textContent = text;
    element.appendChild(srOnly);

    const words = text.split(' ');
    let charIndex = 0;
    words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'text-rotate-word';

        Array.from(word).forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'text-rotate-element';
            charSpan.style.setProperty('--char-index', charIndex);
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            charIndex += 1;
        });

        element.appendChild(wordSpan);

        if (wordIndex !== words.length - 1) {
            const spaceSpan = document.createElement('span');
            spaceSpan.className = 'text-rotate-space';
            spaceSpan.textContent = ' ';
            element.appendChild(spaceSpan);
            charIndex += 1;
        }
    });
};

const initRotatingText = () => {
    document.querySelectorAll('[data-rotate-texts]').forEach((element) => {
        const texts = (element.dataset.rotateTexts || element.textContent || '').split('|').map(t => t.trim()).filter(Boolean);
        const interval = parseInt(element.dataset.rotateInterval || '0', 10);
        let index = 0;

        if (!texts.length) return;

        const update = () => {
            renderRotatingText(element, texts[index]);
        };

        update();

        if (texts.length > 1 && interval > 0) {
            window.setInterval(() => {
                index = (index + 1) % texts.length;
                update();
            }, interval);
        }
    });
};

/*=============== GOOEY NAV ===============*/
const initGooeyNav = () => {
    const containers = document.querySelectorAll('[data-gooey-nav]');

    containers.forEach((container) => {
        const nav = container.querySelector('nav');
        const list = container.querySelector('ul');
        const items = list ? Array.from(list.querySelectorAll('li')) : [];
        const filterEl = container.querySelector('.effect.filter');
        const textEl = container.querySelector('.effect.text');

        if (!nav || !list || !items.length || !filterEl || !textEl) return;

        const animationTime = parseInt(container.dataset.animationTime || '600', 10);
        const timeVariance = parseInt(container.dataset.timeVariance || '300', 10);
        const particleCount = parseInt(container.dataset.particleCount || '15', 10);
        const particleR = parseInt(container.dataset.particleR || '100', 10);
        const distances = (container.dataset.particleDistances || '90,10').split(',').map(v => parseFloat(v.trim()));
        const particleDistances = distances.length === 2 ? distances : [90, 10];

        const noise = (n = 1) => n / 2 - Math.random() * n;

        const getXY = (distance, pointIndex, totalPoints) => {
            const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
            return [distance * Math.cos(angle), distance * Math.sin(angle)];
        };

        const createParticle = (i, t, d, r) => {
            const rotate = noise(r / 10);
            return {
                start: getXY(d[0], particleCount - i, particleCount),
                end: getXY(d[1] + noise(7), particleCount - i, particleCount),
                time: t,
                scale: 1 + noise(0.2),
                color: Math.floor(Math.random() * 4) + 1,
                rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
            };
        };

        const makeParticles = (element) => {
            const bubbleTime = animationTime * 2 + timeVariance;
            element.style.setProperty('--time', `${bubbleTime}ms`);

            for (let i = 0; i < particleCount; i += 1) {
                const t = animationTime * 2 + noise(timeVariance * 2);
                const p = createParticle(i, t, particleDistances, particleR);
                element.classList.remove('active');

                setTimeout(() => {
                    const particle = document.createElement('span');
                    const point = document.createElement('span');
                    particle.classList.add('particle');
                    particle.style.setProperty('--start-x', `${p.start[0]}px`);
                    particle.style.setProperty('--start-y', `${p.start[1]}px`);
                    particle.style.setProperty('--end-x', `${p.end[0]}px`);
                    particle.style.setProperty('--end-y', `${p.end[1]}px`);
                    particle.style.setProperty('--time', `${p.time}ms`);
                    particle.style.setProperty('--scale', `${p.scale}`);
                    particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
                    particle.style.setProperty('--rotate', `${p.rotate}deg`);

                    point.classList.add('point');
                    particle.appendChild(point);
                    element.appendChild(particle);
                    requestAnimationFrame(() => {
                        element.classList.add('active');
                    });
                    setTimeout(() => {
                        if (particle.parentNode === element) {
                            element.removeChild(particle);
                        }
                    }, t);
                }, 30);
            }
        };

        const updateEffectPosition = (element) => {
            const containerRect = container.getBoundingClientRect();
            const pos = element.getBoundingClientRect();
            const styles = {
                left: `${pos.x - containerRect.x}px`,
                top: `${pos.y - containerRect.y}px`,
                width: `${pos.width}px`,
                height: `${pos.height}px`
            };
            Object.assign(filterEl.style, styles);
            Object.assign(textEl.style, styles);
            textEl.textContent = element.innerText;
        };

        const getActiveIndexFromLocation = () => {
            const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
            const index = items.findIndex((li) => {
                const anchor = li.querySelector('a');
                if (!anchor) return false;
                const href = anchor.getAttribute('href');
                if (!href || href === '#') return false;
                const url = new URL(href, window.location.origin);
                const path = url.pathname.replace(/\/$/, '') || '/';
                return path === currentPath;
            });
            return index >= 0 ? index : 0;
        };

        let activeIndex = getActiveIndexFromLocation();

        const setActiveIndex = (index, withParticles) => {
            activeIndex = index;
            items.forEach((li, i) => {
                li.classList.toggle('active', i === index);
            });
            const activeItem = items[index];
            if (activeItem) {
                updateEffectPosition(activeItem);
                textEl.classList.remove('active');
                void textEl.offsetWidth;
                textEl.classList.add('active');
                if (withParticles) {
                    const particles = filterEl.querySelectorAll('.particle');
                    particles.forEach(p => filterEl.removeChild(p));
                    makeParticles(filterEl);
                }
            }
        };

        items.forEach((li, index) => {
            li.addEventListener('click', () => setActiveIndex(index, true));
        });

        setActiveIndex(activeIndex, false);

        if ('ResizeObserver' in window) {
            const resizeObserver = new ResizeObserver(() => {
                const current = items[activeIndex];
                if (current) updateEffectPosition(current);
            });
            resizeObserver.observe(container);
        }
    });
};

/*=============== LIGHTNING CANVAS ===============*/
const initLightning = () => {
    const canvases = document.querySelectorAll('.lightning-container');
    const parseNumber = (value, fallback) => {
        const parsed = parseFloat(value);
        return Number.isFinite(parsed) ? parsed : fallback;
    };

    canvases.forEach((canvas) => {
        const gl = canvas.getContext('webgl');
        if (!gl) {
            return;
        }

        const resizeCanvas = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const vertexShaderSource = `
            attribute vec2 aPosition;
            void main() {
                gl_Position = vec4(aPosition, 0.0, 1.0);
            }
        `;

        const fragmentShaderSource = `
            precision mediump float;
            uniform vec2 iResolution;
            uniform float iTime;
            uniform float uHue;
            uniform float uXOffset;
            uniform float uSpeed;
            uniform float uIntensity;
            uniform float uSize;

            #define OCTAVE_COUNT 10

            vec3 hsv2rgb(vec3 c) {
                vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
                return c.z * mix(vec3(1.0), rgb, c.y);
            }

            float hash11(float p) {
                p = fract(p * .1031);
                p *= p + 33.33;
                p *= p + p;
                return fract(p);
            }

            float hash12(vec2 p) {
                vec3 p3 = fract(vec3(p.xyx) * .1031);
                p3 += dot(p3, p3.yzx + 33.33);
                return fract((p3.x + p3.y) * p3.z);
            }

            mat2 rotate2d(float theta) {
                float c = cos(theta);
                float s = sin(theta);
                return mat2(c, -s, s, c);
            }

            float noise(vec2 p) {
                vec2 ip = floor(p);
                vec2 fp = fract(p);
                float a = hash12(ip);
                float b = hash12(ip + vec2(1.0, 0.0));
                float c = hash12(ip + vec2(0.0, 1.0));
                float d = hash12(ip + vec2(1.0, 1.0));

                vec2 t = smoothstep(0.0, 1.0, fp);
                return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
            }

            float fbm(vec2 p) {
                float value = 0.0;
                float amplitude = 0.5;
                for (int i = 0; i < OCTAVE_COUNT; ++i) {
                    value += amplitude * noise(p);
                    p *= rotate2d(0.45);
                    p *= 2.0;
                    amplitude *= 0.5;
                }
                return value;
            }

            void mainImage(out vec4 fragColor, in vec2 fragCoord) {
                vec2 uv = fragCoord / iResolution.xy;
                uv = 2.0 * uv - 1.0;
                uv.x *= iResolution.x / iResolution.y;
                uv.x += uXOffset;

                uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;

                float dist = abs(uv.x);
                vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
                vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
                col = pow(col, vec3(1.0));
                fragColor = vec4(col, 1.0);
            }

            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }
        `;

        const compileShader = (source, type) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            return;
        }
        gl.useProgram(program);

        const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const aPosition = gl.getAttribLocation(program, 'aPosition');
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

        const iResolutionLocation = gl.getUniformLocation(program, 'iResolution');
        const iTimeLocation = gl.getUniformLocation(program, 'iTime');
        const uHueLocation = gl.getUniformLocation(program, 'uHue');
        const uXOffsetLocation = gl.getUniformLocation(program, 'uXOffset');
        const uSpeedLocation = gl.getUniformLocation(program, 'uSpeed');
        const uIntensityLocation = gl.getUniformLocation(program, 'uIntensity');
        const uSizeLocation = gl.getUniformLocation(program, 'uSize');

        const hue = parseNumber(canvas.dataset.hue, 220);
        const xOffset = parseNumber(canvas.dataset.xOffset, 0);
        const speed = parseNumber(canvas.dataset.speed, 1);
        const intensity = parseNumber(canvas.dataset.intensity, 1);
        const size = parseNumber(canvas.dataset.size, 1);

        const startTime = performance.now();
        const render = () => {
            resizeCanvas();
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
            const currentTime = performance.now();
            gl.uniform1f(iTimeLocation, (currentTime - startTime) / 1000.0);
            gl.uniform1f(uHueLocation, hue);
            gl.uniform1f(uXOffsetLocation, xOffset);
            gl.uniform1f(uSpeedLocation, speed);
            gl.uniform1f(uIntensityLocation, intensity);
            gl.uniform1f(uSizeLocation, size);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    });
};

/*=============== PROFILE CARD TILT ===============*/
const initProfileCards = () => {
    const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
    const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
    const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

    const setVarsFromXY = (wrapper, shell, x, y) => {
        const width = shell.clientWidth || 1;
        const height = shell.clientHeight || 1;
        const percentX = clamp((100 / width) * x);
        const percentY = clamp((100 / height) * y);
        const centerX = percentX - 50;
        const centerY = percentY - 50;

        wrapper.style.setProperty('--pointer-x', `${percentX}%`);
        wrapper.style.setProperty('--pointer-y', `${percentY}%`);
        wrapper.style.setProperty('--background-x', `${adjust(percentX, 0, 100, 35, 65)}%`);
        wrapper.style.setProperty('--background-y', `${adjust(percentY, 0, 100, 35, 65)}%`);
        wrapper.style.setProperty('--pointer-from-center', `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`);
        wrapper.style.setProperty('--pointer-from-top', `${percentY / 100}`);
        wrapper.style.setProperty('--pointer-from-left', `${percentX / 100}`);
        wrapper.style.setProperty('--rotate-x', `${round(-(centerX / 5))}deg`);
        wrapper.style.setProperty('--rotate-y', `${round(centerY / 4)}deg`);
    };

    document.querySelectorAll('[data-profile-card]').forEach((wrapper) => {
        const shell = wrapper.querySelector('.pc-card-shell');
        if (!shell) return;

        const setCenter = () => {
            setVarsFromXY(wrapper, shell, shell.clientWidth / 2, shell.clientHeight / 2);
        };

        setCenter();

        shell.addEventListener('pointerenter', (event) => {
            wrapper.classList.add('active');
            const rect = shell.getBoundingClientRect();
            setVarsFromXY(wrapper, shell, event.clientX - rect.left, event.clientY - rect.top);
        });

        shell.addEventListener('pointermove', (event) => {
            const rect = shell.getBoundingClientRect();
            setVarsFromXY(wrapper, shell, event.clientX - rect.left, event.clientY - rect.top);
        });

        shell.addEventListener('pointerleave', () => {
            wrapper.classList.remove('active');
            setCenter();
        });
    });

    document.querySelectorAll('.pc-contact-btn[data-contact-url]').forEach((button) => {
        button.addEventListener('click', () => {
            const url = button.dataset.contactUrl;
            if (url) {
                window.location.href = url;
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initRotatingText();
    initGooeyNav();
    initLightning();
    initProfileCards();
});
