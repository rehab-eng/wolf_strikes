# Wolf Strikes Robotics Team Website - Complete Documentation

## Project Overview

Wolf Strikes is a professional Django-based website for a robotics team. The website features a modern, interactive design with purple and white color scheme, showcasing the team's projects, members, and mission.

## Technology Stack

- **Backend:** Django 5.2 (Python)
- **Database:** SQLite (production-ready, easily upgradeable to PostgreSQL)
- **Frontend:** HTML5, CSS3, JavaScript
- **Server:** Django Development Server (gunicorn for production)
- **Static Files:** Collected in `/staticfiles/` directory

## Project Structure

```
wolf_strikes/
├── manage.py                 # Django management script
├── requirements.txt          # Python dependencies
├── db.sqlite3               # SQLite database
├── staticfiles/             # Collected static files
├── static/
│   ├── css/
│   │   └── style.css       # Main stylesheet with animations
│   ├── js/
│   │   └── main.js         # JavaScript for interactivity
│   └── images/
│       └── hero-robot.png   # Hero section image
├── templates/
│   ├── base.html           # Base template with navbar and footer
│   ├── home/
│   │   ├── index.html      # Homepage with hero section
│   │   └── about.html      # About page with biography
│   ├── projects/
│   │   └── list.html       # Projects showcase
│   ├── team/
│   │   └── list.html       # Team members page
│   └── contact/
│       └── form.html       # Contact form page
├── wolfstrikes/            # Main Django project settings
│   ├── settings.py         # Django configuration
│   ├── urls.py            # URL routing
│   ├── wsgi.py            # WSGI configuration
│   └── asgi.py            # ASGI configuration
├── home/                   # Home app
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
├── projects/               # Projects app
│   ├── models.py          # Project model
│   ├── views.py           # Project views
│   ├── urls.py
│   └── admin.py
├── team/                   # Team app
│   ├── models.py          # TeamMember model
│   ├── views.py           # Team views
│   ├── urls.py
│   └── admin.py
├── contact/                # Contact app
│   ├── models.py          # ContactMessage model
│   ├── views.py           # Contact form handling
│   ├── urls.py
│   └── admin.py
└── venv/                   # Python virtual environment
```

## Database Models

### Project Model
```python
- title: CharField
- description: TextField
- image: ImageField (optional)
- status: CharField (Completed, In Progress, Planned)
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
- bio: TextField (optional)
- image: ImageField
- email: EmailField (optional)
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

## Django Admin Panel

Access the admin panel at: `/admin/`

**Default Credentials:**
- Username: admin
- Password: admin123

### Admin Features

1. **Projects Management**
   - Add/edit/delete projects
   - Upload project images
   - Set project status and year
   - Add technologies used

2. **Team Members Management**
   - Add/edit/delete team members
   - Upload member photos
   - Set roles and specialties
   - Add social media links

3. **Contact Messages**
   - View submitted contact forms
   - Filter and search messages
   - Mark as read/unread

## Website Pages

### 1. Home Page (`/`)
- Hero section with animated robot image
- Feature cards (Advanced Design, Precision Engineering, Award-Winning)
- Featured projects showcase
- Team preview (6 members)
- Call-to-action section

### 2. About Page (`/about/`)
- Team mission statement
- Core values (Innovation, Collaboration, Excellence, Continuous Learning)
- Team biography and story
- Journey timeline (2020-2024)
- Full team members list

### 3. Projects Page (`/projects/`)
- Dynamic project showcase
- Project cards with images and descriptions
- Status indicators (Completed, In Progress, Planned)
- Project filtering options
- Detailed project information

### 4. Team Page (`/team/`)
- All team members with photos
- Member roles and specialties
- Team member bios
- Contact information
- "Why Join Wolf Strikes?" section
- Recruitment call-to-action

### 5. Contact Page (`/contact/`)
- Contact form with validation
- Team contact information
- Social media links
- Location information
- Email submission handling

## Design Features

### Color Scheme
- **Primary Purple:** #7c3aed
- **Secondary Purple:** #a855f7
- **Accent Pink:** #ec4899
- **Dark Background:** #0f172a
- **Light Background:** #f8fafc

### Animations & Interactions
- Smooth page transitions
- Hover effects on cards and buttons
- Parallax scrolling
- Floating animations on hero image
- Fade-in animations for sections
- Gradient backgrounds
- Drop shadows and glows
- Mobile-responsive hamburger menu

### Typography
- **Font:** Poppins (Google Fonts)
- **Font Weights:** 300, 400, 600, 700, 800
- **Responsive Text Sizing:** Scales based on device

## Setup & Installation

### Prerequisites
- Python 3.8+
- pip (Python package manager)
- Virtual environment (recommended)

### Installation Steps

1. **Clone/Extract the project**
```bash
cd /home/ubuntu/wolf_strikes
```

2. **Create and activate virtual environment**
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run migrations**
```bash
python manage.py migrate
```

5. **Create superuser (admin account)**
```bash
python manage.py createsuperuser
```

6. **Collect static files**
```bash
python manage.py collectstatic --noinput
```

7. **Start development server**
```bash
python manage.py runserver 0.0.0.0:8000
```

8. **Access the website**
- Website: http://localhost:8000/
- Admin Panel: http://localhost:8000/admin/

## Deployment

### Production Deployment

1. **Update Django Settings**
   - Set `DEBUG = False` in `wolfstrikes/settings.py`
   - Add your domain to `ALLOWED_HOSTS`
   - Set secure settings (HTTPS, CSRF, etc.)

2. **Use Production Server**
   - Install gunicorn: `pip install gunicorn`
   - Run: `gunicorn wolfstrikes.wsgi:application --bind 0.0.0.0:8000`

3. **Database**
   - Upgrade to PostgreSQL for production
   - Update `DATABASES` in settings.py

4. **Static Files**
   - Configure nginx/Apache to serve static files
   - Run `python manage.py collectstatic` before deployment

5. **Environment Variables**
   - Use `.env` file for sensitive data
   - Install python-decouple: `pip install python-decouple`

## Adding Content

### Add a New Project

1. Go to Admin Panel: `/admin/`
2. Click "Projects" → "Add Project"
3. Fill in:
   - Title
   - Description
   - Image (optional)
   - Status (Completed/In Progress/Planned)
   - Year
   - Technologies (JSON format)
4. Click "Save"

### Add a Team Member

1. Go to Admin Panel: `/admin/`
2. Click "Team Members" → "Add Team Member"
3. Fill in:
   - Name
   - Role
   - Specialty
   - Bio (optional)
   - Image
   - Email (optional)
   - Social Links (JSON format)
4. Click "Save"

## API Endpoints

### Contact Form Submission
- **URL:** `/contact/`
- **Method:** POST
- **Fields:** name, email, subject, message

### View Projects
- **URL:** `/projects/`
- **Method:** GET

### View Team Members
- **URL:** `/team/`
- **Method:** GET

## Customization Guide

### Change Colors

Edit `/static/css/style.css`:
```css
:root {
    --primary-color: #7c3aed;      /* Change primary color */
    --secondary-color: #a855f7;    /* Change secondary color */
    --accent-color: #ec4899;       /* Change accent color */
    /* ... other colors ... */
}
```

### Change Fonts

Edit `templates/base.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

Then update CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Add New Pages

1. Create a new app: `python manage.py startapp newapp`
2. Create views in `newapp/views.py`
3. Create templates in `templates/newapp/`
4. Add URLs in `newapp/urls.py`
5. Include URLs in `wolfstrikes/urls.py`
6. Register in `wolfstrikes/settings.py` INSTALLED_APPS

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

### Port Already in Use
```bash
python manage.py runserver 0.0.0.0:8001  # Use different port
```

### Admin Panel Not Accessible
- Check if superuser exists: `python manage.py createsuperuser`
- Clear browser cache
- Check ALLOWED_HOSTS in settings.py

## Support & Maintenance

### Regular Maintenance Tasks

1. **Backup Database**
   - Regularly backup `db.sqlite3`
   - For production, use automated PostgreSQL backups

2. **Update Dependencies**
   ```bash
   pip list --outdated
   pip install --upgrade package_name
   ```

3. **Monitor Logs**
   - Check Django logs for errors
   - Monitor server performance

4. **Security Updates**
   - Keep Django updated
   - Update all dependencies regularly
   - Use HTTPS in production

## Contact & Support

For questions or issues with the website:
- Email: contact@wolfstrikes.com
- Phone: Available on contact page
- Social Media: Links in footer

---

**Last Updated:** November 17, 2025
**Version:** 1.0.0
**Status:** Production Ready
