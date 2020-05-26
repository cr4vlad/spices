# Spices
 
## Frontend

### Local launch
  
1. Install dependencies:
    $ npm install
2. Run locally:
    $ npm start

## Backend

1. Install Python 3.6 (3.7 also fine)
2. Create virtual environment in project directory (where `manage.py` or `package.json`)

    $ python -m venv env

3. Open virtual environment. From now on always run commands in virtual env.

    $ env\Scripts\activate

4. Install requirements

    $ pip install -r requirements.txt

5. Set development database. Works only in cmd.

    $ SET DEBUG_DATABASE=sqlite

6. Migrate database

    $ python manage.py migrate

7. Create user

    $ python manage.py createsuperuser

8. Run server

    $ python manage.py runserver

9. Create some products for testing.
    1. Login in `http://localhost:8000/admin/`
    2. Enter Products in ziteno section
    3. Create some Product instances

10. Go to landing to check if it works


# Deploy

## Frontend

    $ npm run build
    
## Backend

## Collect static files

    $ python manage.py collectstatic (in virtual env)

## GCP

    $ gcloud app deploy

## Describe instance (get connection name for sql proxy)

    $ gcloud sql instances describe spices-instance

## Start SQL Proxy

    $ cloud_sql_proxy -instances="spices-278410:europe-west3:spices-instance"=tcp:3306

## Migrate to Cloud SQL
With working SQL Proxy

    $ SET DEBUG_DATABASE=cloud_sql_proxy
    $ python manage.py migrate (in virtual env)