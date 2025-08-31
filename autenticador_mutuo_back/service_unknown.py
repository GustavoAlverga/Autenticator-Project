import hashlib
class service:
    def __init__(self, name, private_key, known_keys):
        self.name = name
        self.private_key = private_key
        self.known_keys = {}

    def add_known_key(self, key):
        if key not in self.known_keys:
            self.known_keys.append(key)
    
    def generate_hash(self, message):
        return hashlib.sha256((message + self.private_key).encode()).hexdigest()

    def validate_hash(self, message, hashed_message):
        for key in self.known_keys.values():
            test_hash = hashlib.sha256((message + key).encode()).hexdigest()
            if test_hash == hashed_message:
                return True
        return False

            
