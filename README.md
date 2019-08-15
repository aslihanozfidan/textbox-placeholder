# textbox-placeholder

![npm (scoped)](https://img.shields.io/badge/version-1.1.1-blue.svg)
![npm (scoped)](https://img.shields.io/github/license/aslihanozfidan/textbox-placeholder.svg)

Textbox component with placeholder to value for React

![image](https://user-images.githubusercontent.com/18716752/51321043-c843ef00-1a72-11e9-8abc-233d82bbbb90.png)<br/>
![image](https://user-images.githubusercontent.com/18716752/51427923-7d5ede80-1c0e-11e9-8dd0-8bc278f03fef.png)

## Why should I use it?

Use it and placeholder be your default value for your textbox! Also now you can use it for textarea.

## Install

```
$ npm install textbox-placeholder
```

## Usage

**for Textbox**

```javascript
import TextBoxPlaceholder from 'textbox-placeholder'

<TextBoxPlaceholder
    component="TextBox"
    name="text-box"
    inputClass={className}
    value={value}
    placeholder={placeholder} />
```

**for Textarea**

```javascript
import TextareaPlaceholder from 'textbox-placeholder'

<TextareaPlaceholder
    component="Textarea"
    name="textarea"
    inputClass={className}
    value={value}
    placeholder={placeholder} />
```
