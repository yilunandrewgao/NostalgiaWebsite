import smtplib, ssl

def send_email_fxn(data, password):

	from_addr = 'devinstry@gmail.com'
	to_addr = 'devinstry@gmail.com'

	msg = \
	'''
		From: {from_addr}
		To: {to_addr}
		Subject: Message from {first_name} {last_name}

		{email}:{message}

	'''

	msg = msg.format(from_addr= from_addr, to_addr = to_addr, 
		first_name=data['first_name'], last_name = data['last_name'], email = data['email'], message = data['message'])

	print (msg)

	try:

		port = 465
		smtp_server = "smtp.gmail.com"
		

		context = ssl.create_default_context()
		with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
		    server.login(from_addr, password)
		    server.sendmail(from_addr, to_addr, msg)

	except:
		raise Exception

	return