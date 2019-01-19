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

	renderTextBox() {
		const { placeholder, inputClass, name } = this.props
		const { value } = this.state
		return (
			<input
				type="text"
				name={name}
				className={inputClass}
				placeholder={placeholder}
				value={value}
				ref={this.input}
				onBlur={() => this.shouldBlur()}
				onFocus={() => this.shouldFocus()}
				onChange={() => this.handleChange()}
			/>
		)
	}
	
	renderTextarea() {
		const { placeholder, inputClass, name } = this.props
		const { value } = this.state
		return (
			<textarea
				name={name}
				className={inputClass}
				placeholder={placeholder}
				value={value}
				ref={this.input}
				onBlur={() => this.shouldBlur()}
				onFocus={() => this.shouldFocus()}
				onChange={() => this.handleChange()}
			/>
		)
	}

	render() {
		const { component } = this.props

		return (
			<div>
				{component == 'TextBox' ? (
					this.renderTextBox()
				) : component == 'Textarea' ? (
					this.renderTextarea()
				) : (
					this.renderTextBox()
				)}
			</div>
		)
	}
}

export default TextBoxPlaceholder
