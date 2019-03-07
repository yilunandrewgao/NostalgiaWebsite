from flask import Flask, render_template, request
import json
import getpass

from webfunctions import send_email_fxn

password = getpass.getpass()

app = Flask(__name__, static_folder='../build/static', template_folder='../build')


@app.route('/')
def index():
	return render_template('index.html', tab = "home")

@app.route('/send_email', methods=['POST'])
def send_email():
	data = request.data

	data = json.loads(data)

	send_email_fxn(data,password)

	return render_template('index.html', tab = "contact_us")


if __name__ == '__main__':
	app.run()
