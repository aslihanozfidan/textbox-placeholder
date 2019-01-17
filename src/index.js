import React from 'react'
import './style.css'

class TextBoxPlaceholder extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}

		this.input = React.createRef()
	}

	handleChange(e) {
		this.setState({
			value: this.input.current.value
		})
	}

	shouldBlur() {
		if (this.state.value == '') {
			this.setState({
				value: this.props.placeholder
			})
		}
	}

	shouldFocus() {
		if (this.state.value == this.props.placeholder) {
			this.setState({
				value: ''
			})
		}
	}

	render() {
		const { placeholder, inputClass } = this.props
		const { value } = this.state

		return (
			<div>
				<input
					type="text"
					id="text-box"
					name="text-box"
					className={inputClass}
					placeholder={placeholder}
					value={value}
					ref={this.input}
					onBlur={() => this.shouldBlur()}
					onFocus={() => this.shouldFocus()}
					onChange={() => this.handleChange()}
				/>
			</div>
		)
	}
}

export default TextBoxPlaceholder
