# -*- coding: utf-8 -*-
from flask import Flask, request, render_template
from markupsafe import escape

app = Flask(__name__)

@app.route('/')
def index(name=None):
    return render_template('index.html', name=name)

@app.route('/perfil')
def perfil(name=None):
    return render_template('perfil.html', name=name)

@app.route('/form', methods=['POST'])
def form(name=None):
    datos= {'nombre': request.form['nombre'],
    'apellido': request.form['apellido'],
    'email': request.form['email'],
    'contraseña': request.form['contraseña']}

    datos_str = str(datos)

    with open("datos.txt", "a", encoding='utf-8') as fo:
        fo.write(datos_str)

    return render_template('registrarse.html', datos=datos)

@app.route('/construction')
def construction(name=None):
    return render_template('construction.html', name=name)
