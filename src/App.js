import React, { Component } from 'react';
import './nostalgia.css';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {tab: props.tab}
	}

	changeTab(tab_value) {
		console.log(tab_value)
		this.setState({tab: tab_value})
	}

	render() {
		return (
			<h1 id="root">
				<div id="page" className = "page">
					<div id="header" className = "header">
						<div id="logo">
							<div><img src={require("./images/nostalgia_specific/logo.png")} width="340" height="135" alt="Comicastic" /></div>
					  	</div>

					  	<div id="wrapper_search" className="wrapper_column">

							<ul id="main_navigation" className = "main_navigation">
								<button onClick={() => this.changeTab("home")}>&nbsp; Home</button>
								<button onClick={() => this.changeTab("about_us")}>&nbsp; About us</button>
								<button onClick={() => this.changeTab("contact_us")}>&nbsp; Contact us</button>
							</ul>
						</div>

					</div>

					<div id="featured_content" className = "featured_content">
					  	<div id="top_banner" className = "top_banner">
					  		<div id="banner_img" className="banner_img">
					  			<img src={require("./images/banner/moving.jpeg")} />
					  		</div>
					  		<div id="banner_news" className="banner_news">
					  			<p>We have moved to a new location</p>
					  		</div>
					  	</div>
					</div>

					<MainContent tab = {this.state.tab}/>

					<div id="footer" className = "footer">
						<div className="footer_left">

							<div className="footer_field">
								<img src={require("./images/icons/address_48.png")} />
								<div><span>1280 Charnelton St.</span> Eugene, OR</div>
							</div>

							<div className="footer_field">
								<img src={require("./images/icons/phone_48.png")} />
								<div>541-484-9202</div>
							</div>

							<div className="footer_field">
								<img src={require("./images/icons/email_48.png")} />
								<div><a href="mailto:jusashdar@gmail.com">jusashdar@gmail.com</a></div>
							</div>

						</div>

						<div className="footer_right">

							<div id="social_media" className="social_media">
						    	Follow us
						    	<div id="social_buttons" className = "social_buttons">
						    	
							    	<div id="left_social_buttons" className="social_buttons_col">
							    		<a href="https://www.facebook.com/NostalgiaCollectibles/"><img src={require("./images/icons/facebook_48.png")} width="48" height="48" /></a>
							    		&nbsp;
							    		<a href="https://www.ebay.com/sch/emeraldcitycomicseugene/m.html"><img src={require("./images/icons/ebay_48.png")} width="48" height="48" /></a>
							    	</div>

							    	<div id="right_social_buttons" className="social_buttons_col">
							    		<a><img src={require("./images/icons/twitter_48.png")} width="48" height="48" /></a>
							    		&nbsp;
							    		<a><img src={require("./images/icons/instagram_48.png")} width="48" height="48" /></a>
							    	</div>

						    	
						    	</div>
							</div>	

						</div>
					</div>

				</div>
			</h1>
		);
  	}
}

class MainContent extends Component {

	constructor(props) {
		super(props);



	}

	render() {

		if (this.props.tab === "home") {

			return (
				<Home/>
			)
			
		}

		else if (this.props.tab === "about_us") {
			return (
				<AboutUs/>
			)
		}

		else if (this.props.tab === "contact_us") {
			return (
				<ContactUs/>
			)
		}

		else {
			return (
				<div error />
			)
		}

		
	}
}

class Home extends Component {

	constructor(props) {
		super(props)

		this.state = {map: false}
		this.ToggleMap = this.ToggleMap.bind(this)
	}

	ToggleMap(on) {
		this.setState({map: on})
	}

	render() {
		if (this.state.map === true) {
				return (

					<div id="main_content" className = "main_content">
						<div id="store_info_box" className = "store_info_box">
							<a onClick = {() => this.ToggleMap(false)}><img src={require("./images/nostalgia_specific/nost.png")}/></a>
							<a onClick = {() => this.ToggleMap(true)}><img src={require("./images/nostalgia_specific/map.png")}/></a>
							<a href="http://www.emeraldcitycomicseugene.com"><img src={require("./images/nostalgia_specific/visit.png")}/></a>
						</div>
						<div id="store_pic_box" className = "store_pic_box">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.821831527809!2d-123
							.09817064852496!3d44.04573573487359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c1
							1e6a1ee0cca9%3A0x24ed713e069d54c6!2s1280+Charnelton+St%2C+Eugene%2C+OR+97401!5e0!3m2!1sen!2sus!4
							v1550738374475" width="800" height="600">
							</iframe>
						</div>
					</div>
				);
			}

		else {
			return (

				<div id="main_content" className = "main_content">
					<div id="store_info_box" className = "store_info_box">
						<a onClick = {() => this.ToggleMap(false)}><img src={require("./images/nostalgia_specific/nost.png")}/></a>
						<a onClick = {() => this.ToggleMap(true)}><img src={require("./images/nostalgia_specific/map.png")}/></a>
						<a href="http://www.emeraldcitycomicseugene.com"><img src={require("./images/nostalgia_specific/visit.png")}/></a>
					</div>
					<div id="store_pic_box" className = "store_pic_box">
						<img src={require("./images/nostalgia_specific/mainstore3.jpg")} height={600} width={800}/>
					</div>
				</div>
			);
		}
	}
}

class AboutUs extends Component {
	render () {
		return (
			<div id="about_us" className="about_us">
				<img src={require("./images/nostalgia_specific/story.png")}/>
				<img src={require("./images/nostalgia_specific/storepic2.jpg")} height={600} width={700}/>
			</div>
		)
	}
}

class ContactUs extends Component {

	constructor(props) {
		super(props)
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			message: "",
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInputChange(event) {
		const value = event.target.value
		const name = event.target.name

		this.setState({[name]: value})

	}

	handleSubmit() {
		const data = JSON.stringify(this.state)
		var request = new XMLHttpRequest();
		request.open('POST', '/send_email',true)
		request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		request.send(data);
		alert("Thanks you for your feedback!")
	}

	render () {
		return (
			<div id="contact_us" className="contact_us">
				<div id="first_name" className="webform_field">
					<label> First Name: </label>
					<input 
						type="text" 
						name = "first_name"
						value = {this.state.first_name}
						onChange = {this.handleInputChange}
					/>
				</div>

				<div id="last_name" name = "last_name" className="webform_field">
					<label> Last Name: </label>
					<input 
						type="text" 
						name = "last_name"
						value = {this.state.last_name}
						onChange = {this.handleInputChange}
					/>
				</div>

				<div id="email" name = "email" className="webform_field">
					<label> Email: </label>
					<input 
						type="text" 
						name = "email"
						value = {this.state.email}
						onChange = {this.handleInputChange}
					/>
				</div>

				<div id="message" name = "message" className="webform_field_big">
					<label> Message: </label>
					<textarea 
						rows="6" 
						type="text" 
						name = "message"
						value = {this.state.message}
						onChange = {this.handleInputChange}
					/>
				</div>

				<button className="submit_button" onClick={this.handleSubmit}> Submit </button>
			</div>
		)
	}
}

export default App;
