from service_unknown import service
import random
import hashlib

class Core:
    def __init__(self):
        self.services = []
        self.intruders = []

    def get_all_services_and_keys(self):
        return {service.name: service.known_keys for service in self.services}
    
    def generate_service(self, name):
        newKey = name + str(random.randint(1, 100000))
        private_key = hashlib.sha256(newKey.encode()).hexdigest()
        known_keys=[]

        new_service = service(name, private_key, known_keys)
        self.add_known_keys_for_servers(self.services, new_service, len(self.services) - 1)
        self.add_my_private_key_in_servers(new_service, self.services)

        self.services.append(new_service)
        mensage = f"Service {name} created successfully."
        return mensage
    
    def add_my_private_key_in_servers(self, new_service, services):
        for service in services:
           service.known_keys[new_service.name] = new_service.private_key

    def generate_intruder(self, name, known_keys):
        newKey = name + str(random.randint(1, 100000))
        private_key = hashlib.sha256(newKey.encode()).hexdigest()

        new_service = service(name, private_key, known_keys)
        self.intruders.append(new_service)
        
        return new_service

    def auto_generate_service(self, number_of_services):

        for i in range(number_of_services):
            name= f"Service {i}"
            private_key= hashlib.sha256(f"private_key_{i}".encode()).hexdigest()
            known_keys=[]

            new_service = service(name, private_key, known_keys)
            self.services.append(new_service)

            self.build_known_keys_for_server(self.services)
        return self.services

    def auto_generate_intruders(self, number_of_intruders):

        for i in range(number_of_intruders):
            name= f"Intruder {i}"
            private_key= hashlib.sha256(str(random.randint(1,100000)).encode()).hexdigest()
            known_keys=[]

            new_service = service(name, private_key, known_keys)
            self.intruders.append(new_service)

        return self.intruders

    def build_known_keys_for_server(self, services):
        for service in services:
            counter = len(services)
            self.add_known_keys_for_servers(services, service, counter)
        

    def add_known_keys_for_servers(self, services, service, counter):
        while  counter > 0:
            service.known_keys[services[counter - 1].name] = services[counter - 1].private_key
            counter -= 1

        try:
            # Remove a chave do próprio serviço
            del service.known_keys[service.name]
        except KeyError:
            pass

    def validator_of_service(self, service1, service2, message):
        hash1 = service1.generate_hash(message)
        hash2 = service2.generate_hash(message)
        resolt = service1.validate_hash(message, hash2) and service2.validate_hash(message, hash1)
        return resolt

    



        