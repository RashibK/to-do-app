# To-Do List App

A simple To-Do List application built with **React** for the frontend and **Django** for the backend. This app demonstrates fundamental CRUD (Create, Read, Update, Delete) functionalities.

## Installation and Setup

### Backend Setup

1. Clone the repository and navigate to the backend directory.

2. Create a virtual environment:
 ```
 python -m venv venv
 source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```
3. Install dependencies:
```
pip install -r requirements.txt
```
4. Run migrations and start the server:
```
python manage.py migrate
python manage.py runserver
```
### Frontend Setup

1. Navigate to the frontend directory.

2. Install dependencies:
```
npm install
```
3. Start the React development server:
```
npm start
```

## API Endpoints

### To-Do Endpoints

1. Get All To-Dos: ```GET /api/```

2. Create To-Do: ```POST /api/```

3. Update To-Do: ```PUT /api/<todo-id>/```

4. Delete To-Do: ```DELETE /api/<todo-id>/```

## Screenshots

#### Add To-Do:
![Screenshot from 2025-01-03 18-50-02](https://github.com/user-attachments/assets/e3816e70-6d74-45ea-8d84-6b3273c3c15c)
#### List All To-Dos:
![Screenshot from 2025-01-03 18-56-20](https://github.com/user-attachments/assets/7dfd298e-04ae-4705-ae69-d0798ddeae63)
#### Update a To-Do:
![Screenshot from 2025-01-03 20-47-24](https://github.com/user-attachments/assets/aa5c4782-5fb9-4644-b089-f688176cc950)
## Contribution

Feel free to fork this repository and contribute by submitting a pull request. Suggestions and improvements are always welcome!


