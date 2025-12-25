# Wolf Strikes - Complete Code Documentation

## Project Overview
This is a complete Django-based website for Wolf Strikes robotics team with all HTML, CSS, and Python code.

## File Structure
```
wolf_strikes/
├── templates/
│   ├── base.html (Main template)
│   ├── home/
│   │   ├── index.html (Homepage)
│   │   └── about.html (About page)
│   ├── projects/
│   │   └── list.html (Projects page)
│   ├── team/
│   │   └── list.html (Team page)
│   └── contact/
│       └── form.html (Contact page)
├── static/
│   ├── css/style.css (Main stylesheet)
│   ├── js/main.js (JavaScript)
│   └── images/hero-robot.png (Hero image)
├── wolfstrikes/ (Django settings)
├── home/ (Home app)
├── projects/ (Projects app)
├── team/ (Team app)
└── contact/ (Contact app)
```

## Key Features

### 1. Hero Section with Image
- Two-column layout with text on left, image on right
- Animated floating effect on robot image
- Responsive design for mobile

### 2. Team Biography
- Full story of Amal Elwaer and Wolf Strikes
- Beautiful gradient background
- Animated text reveal

### 3. Dynamic Navbar
- Fixed position with blur effect
- Scroll-triggered shadow enhancement
- Mobile hamburger menu
- Active link highlighting

### 4. Team Member Cards
- Enhanced hover effects
- Image zoom on hover
- Role and specialty display
- Contact information

### 5. Project Showcase
- Status indicators (Completed, In Progress, Planned)
- Project filtering
- Year and technologies display

### 6. Contact Form
- Form validation
- Contact information display
- Social media links
- Email submission

## Color Scheme

```css
--primary-color: #7c3aed;        /* Purple */
--secondary-color: #a855f7;      /* Light Purple */
--accent-color: #ec4899;         /* Pink */
--dark-bg: #0f172a;              /* Dark Navy */
--light-bg: #f8fafc;             /* Light Gray */
--text-dark: #1e293b;            /* Dark Text */
--text-light: #64748b;           /* Light Text */
```

## Animations

### Keyframe Animations
- `slideDown` - Navbar slide down on load
- `fadeInUp` - Content fade in and slide up
- `slideInDown` - Title slide down
- `slideInUp` - Content slide up
- `fadeInRight` - Image fade in from right
- `floatImage` - Hero image floating effect
- `float` - Floating gradient circles
- `pulse` - Pulsing animation
- `spin` - Spinning animation

## Django Models

### Project Model
```python
- title: CharField
- description: TextField
- image: ImageField
- status: CharField (completed, in_progress, planned)
- year: IntegerField
- technologies: JSONField
- created_at: DateTimeField
- updated_at: DateTimeField
```

### TeamMember Model
```python
- name: CharField
- role: CharField
- specialty: CharField
- bio: TextField
- image: ImageField
- email: EmailField
- social_links: JSONField
- created_at: DateTimeField
- updated_at: DateTimeField
```

### ContactMessage Model
```python
- name: CharField
- email: EmailField
- subject: CharField
- message: TextField
- created_at: DateTimeField
```

## Views

### Home Views
- `home()` - Homepage with featured projects and team
- `about()` - About page with biography

### Projects Views
- `projects_list()` - All projects with filtering

### Team Views
- `team_list()` - All team members

### Contact Views
- `contact_form()` - Contact page
- `submit_contact()` - Contact form submission

## URLs

```
/ - Homepage
/about/ - About page
/projects/ - Projects page
/team/ - Team page
/contact/ - Contact page
/admin/ - Admin panel
```

## JavaScript Features

### Mobile Menu Toggle
```javascript
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
```

### Navbar Scroll Effect
```javascript
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    }
});
```

### Intersection Observer for Animations
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
```

### Contact Form Submission
```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const response = await fetch('/api/contact/', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData))
    });
});
```

## Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Optimizations
- Stack layout to single column
- Hamburger menu for navigation
- Larger touch targets
- Optimized font sizes
- Full-width sections

## Performance Optimizations

1. **CSS Optimization**
   - Minimal selectors
   - Efficient animations using transform and opacity
   - CSS variables for theming

2. **JavaScript Optimization**
   - Event delegation
   - Debounced scroll events
   - Lazy loading for images

3. **Static Files**
   - Collected in `/staticfiles/`
   - Cached by browser
   - Minified CSS and JS

## Admin Panel Features

### Projects Management
- Add/edit/delete projects
- Upload project images
- Set status and year
- Add technologies

### Team Management
- Add/edit/delete team members
- Upload member photos
- Set roles and specialties
- Add social media links

### Contact Management
- View submitted messages
- Filter and search
- Mark as read/unread

## Customization Guide

### Change Colors
Edit `/static/css/style.css` CSS variables

### Change Fonts
Edit `templates/base.html` Google Fonts link

### Change Hero Image
Replace `/static/images/hero-robot.png`

### Update Biography
Edit `/templates/home/about.html`

### Add New Pages
1. Create new app: `python manage.py startapp newapp`
2. Create views in `newapp/views.py`
3. Create templates in `templates/newapp/`
4. Add URLs in `newapp/urls.py`
5. Include in main `urls.py`

## Deployment

### Production Settings
```python
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com']
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
```

### Using Gunicorn
```bash
pip install gunicorn
gunicorn wolfstrikes.wsgi:application --bind 0.0.0.0:8000
```

### Using PostgreSQL
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'wolfstrikes',
        'USER': 'postgres',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## Troubleshooting

### Static Files Not Loading
```bash
python manage.py collectstatic --noinput
```

### Database Errors
```bash
python manage.py migrate
python manage.py makemigrations
```

### Admin Not Accessible
```bash
python manage.py createsuperuser
```

## Security Considerations

1. **CSRF Protection** - Enabled by default
2. **SQL Injection** - Protected by Django ORM
3. **XSS Protection** - Template auto-escaping
4. **Password Hashing** - Django's password hashers
5. **HTTPS** - Enable in production

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Responsive text sizing

## SEO Optimization

- Meta tags in templates
- Semantic HTML
- Mobile-friendly design
- Fast loading times
- Structured data ready

---

**Version:** 1.0.0
**Last Updated:** November 17, 2025
**Status:** Production Ready
