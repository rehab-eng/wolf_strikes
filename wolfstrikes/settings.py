# wolfstrikes/settings.py

import os
from pathlib import Path
from django.utils.translation import gettext_lazy as _

# تحديد مسار المشروع الأساسي
BASE_DIR = Path(__file__).resolve().parent.parent

# ==============================================================================
# CORE SETTINGS
# ==============================================================================
SECRET_KEY = 'django-insecure-q+)0#qqw4dghc-dniyn^hawi+97u4wfpp-a(%81wlhk3j5*p)c'

# تنبيه: يفضل جعلها False عند الانتهاء تماماً ونشر الموقع، لكن اتركها True الآن لاكتشاف الأخطاء
DEBUG = True

# السماح لجميع الاستضافات (بما فيها PythonAnywhere)
ALLOWED_HOSTS = ['*']

ROOT_URLCONF = 'wolfstrikes.urls'
WSGI_APPLICATION = 'wolfstrikes.wsgi.application'
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# ==============================================================================
# INSTALLED APPS
# ==============================================================================
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles', 
    
    # Third-party apps
    'rest_framework',
    'corsheaders',
    
    # Your apps
    'home',
    'about',
    'projects',
    'team',
    'contact',
]

# ==============================================================================
# MIDDLEWARE
# ==============================================================================
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware', # يجب أن يكون في الأعلى لمعالجة الروابط
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# ==============================================================================
# TEMPLATES
# ==============================================================================
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'], # المجلد العام للقوالب
        'APP_DIRS': True, 
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.i18n',
            ],
        },
    },
]

# ==============================================================================
# DATABASES
# ==============================================================================
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# ==============================================================================
# PASSWORD VALIDATION
# ==============================================================================
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# ==============================================================================
# INTERNATIONALIZATION (LANGUAGE SUPPORT)
# ==============================================================================
LANGUAGE_CODE = 'en'
LANGUAGES = [('en', _('English')), ('ar', _('Arabic'))]
LOCALE_PATHS = [BASE_DIR / 'locale']
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# ==============================================================================
# STATIC & MEDIA FILES
# ==============================================================================

# الرابط الذي يظهر في المتصفح
STATIC_URL = '/static/'

# المجلد الذي سيتم تجميع الملفات فيه عند رفع الموقع (وهو ما يحتاجه PythonAnywhere)
STATIC_ROOT = BASE_DIR / 'static'

# المجلدات الإضافية للملفات الثابتة (إذا كان لديك ملفات خارج التطبيقات)
# ملاحظة: لا تضع هنا نفس مسار STATIC_ROOT لتجنب الأخطاء
STATICFILES_DIRS = [
    # BASE_DIR / 'assets',  <-- فعل هذا السطر فقط إذا أنشأت مجلداً اسمه assets للملفات العامة
]

# إعدادات الصور والملفات المرفوعة
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# ==============================================================================
# CORS SETTINGS
# ==============================================================================
# السماح بجميع المصادر للتجربة (يمكنك تقييدها لاحقاً)
CORS_ALLOW_ALL_ORIGINS = True 

CORS_ALLOWED_ORIGINS = [
    'http://localhost:8000',
    'http://127.0.0.1:8000',
    # أضف رابط موقعك على بايثون اني وير هنا لاحقاً لزيادة الأمان
]