# Wolf Strikes Website - Setup & Deployment Guide

## Quick Start

### 1. Navigate to Project Directory
```bash
cd /home/ubuntu/wolf_strikes
```

### 2. Activate Virtual Environment
```bash
source venv/bin/activate
```

### 3. Start Development Server
```bash
python manage.py runserver 0.0.0.0:8000
```

### 4. Access Website
- **Website:** http://localhost:8000/
- **Admin Panel:** http://localhost:8000/admin/
- **Username:** admin
- **Password:** admin123

## File Locations

| Component | Location |
|-----------|----------|
| Django Settings | `/wolfstrikes/settings.py` |
| URL Routes | `/wolfstrikes/urls.py` |
| CSS Styles | `/static/css/style.css` |
| JavaScript | `/static/js/main.js` |
| Hero Image | `/static/images/hero-robot.png` |
| HTML Templates | `/templates/` |
| Database | `/db.sqlite3` |
| Admin Interface | `/admin/` |

## Managing Content

### Add Projects
1. Go to `/admin/`
2. Click "Projects" → "Add Project"
3. Fill in all fields and save

### Add Team Members
1. Go to `/admin/`
2. Click "Team Members" → "Add Team Member"
3. Upload photo and fill in details

### View Contact Messages
1. Go to `/admin/`
2. Click "Contact Messages"
3. View all submitted forms

## Customization

### Change Team Name
Edit `/templates/base.html` and update "Wolf Strikes" text

### Change Colors
Edit `/static/css/style.css` and modify CSS variables

### Change Hero Image
Replace `/static/images/hero-robot.png` with new image

### Update Team Biography
Edit `/templates/home/about.html` in the "Our Story" section

## Production Deployment

### Using Gunicorn
```bash
pip install gunicorn
gunicorn wolfstrikes.wsgi:application --bind 0.0.0.0:8000
```

### Using Docker
Create `Dockerfile` and `docker-compose.yml` for containerization

### Database Migration to PostgreSQL
1. Install PostgreSQL
2. Create database and user
3. Update `DATABASES` in `settings.py`
4. Run migrations

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Static files not loading | Run `python manage.py collectstatic --noinput` |
| Database errors | Run `python manage.py migrate` |
| Port 8000 in use | Use `python manage.py runserver 0.0.0.0:8001` |
| Admin not accessible | Create superuser: `python manage.py createsuperuser` |

## Important Files

- `manage.py` - Django management script
- `requirements.txt` - Python dependencies
- `db.sqlite3` - Database file
- `wolfstrikes/settings.py` - Configuration
- `static/css/style.css` - Main stylesheet
- `templates/base.html` - Base template

---

**Version:** 1.0.0
**Last Updated:** November 17, 2025
