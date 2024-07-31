from flask import Flask, render_template, redirect, request, flash, g, jsonify
from flask_jwt_extended import create_access_token, JWTManager
from database import get_db_connection
import os
from werkzeug.security import generate_password_hash, check_password_hash





app = Flask(__name__)
app.secret_key = 'Myhero1234'
jwt = JWTManager(app)

@app.before_request
def before_request():
    get_db_connection()

@app.after_request
def after_request(response):
    db = g.pop('db_connection', None)
    if db is not None:
        db.close()
    return response



@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    cursor = g.db_connection.cursor()

    cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
    user = cursor.fetchone()

    if user and check_password_hash(user[3], password): 
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401
    

    
    
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    cursor = g.db_connection.cursor()
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({'message': 'Email already exists'}), 400

    hashed_password = generate_password_hash(password)

    cursor.execute("INSERT INTO users (username, email, password_hash) VALUES (%s, %s, %s)", (username, email, hashed_password))
    g.db_connection.commit()

    access_token = create_access_token(identity=email)

    return jsonify({'message': 'User created successfully', 'access_token': access_token}), 201



if __name__ == '__main__':
    app.run(debug=True)
