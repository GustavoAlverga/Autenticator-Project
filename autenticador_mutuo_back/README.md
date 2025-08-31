Run project backend

python3 -m venv venv 
source venv/bin/activate 
pip install -r requirements.txt 
uvicorn facade:app --reload

Use http://127.0.0.1:8000/docs for view swagger documentation
