from core import  Core
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

core = Core()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Single_autentication(BaseModel):
    mensage: str
    
@app.post("/run_single_authentication")
def single_authentication(data: Single_autentication):
    print("Running single authentication with message:", data.mensage)
    bag_of_services = core.services + core.intruders
    random.shuffle(bag_of_services)
    s1, s2 = random.sample(bag_of_services, 2)

    if s1 != s2 and s1 is not None and s2 is not None:
        valid = core.validator_of_service(s1, s2, data.mensage)
        return {
            "service1": s1.name,
            "service2": s2.name,
            "service1_type": "Intruder" if s1 in core.intruders else "Service",
            "service2_type": "Intruder" if s2 in core.intruders else "Service",
            "result": valid,
            "message": "Service authenticated successfully"
        }
    else:
        return {"error": "Invalid services selected."}

class AuthRequest(BaseModel):
    number_of_services: int
    number_of_intruders: int
    message: str
    validations: int

@app.post("/run_auto_authentication")
def authenticate(data: AuthRequest):
    # Gera serviços e intrusos
    services = core.auto_generate_service(data.number_of_services)
    intruders = core.auto_generate_intruders(data.number_of_intruders)

    # Junta tudo e embaralha
    bag_of_services = services + intruders
    random.shuffle(bag_of_services)

    # Executa validações
    results = []
    for _ in range(data.validations):
        s1, s2 = random.sample(bag_of_services, 2)
        valid = core.validator_of_service(s1, s2, data.message)
        results.append({
            "service1": s1.name,
            "service2": s2.name,
            "service1_type": "Intruder" if s1 in core.intruders else "Service",
            "service2_type": "Intruder" if s2 in core.intruders else "Service",
            "result": valid
        })

    return {"results": results}


class CreateAService(BaseModel):
    name: str

@app.post("/create_service")
def create_service(data: CreateAService):
    mensage = core.generate_service(data.name)
    return {"message": mensage}

@app.get("/get_all_services_and_keys")
def get_all_services_keys():
    return core.get_all_services_and_keys()

@app.put("/clear_all")
def clear_all():
    core.services.clear()
    core.intruders.clear()
    return {"message": "All services and intruders cleared."}