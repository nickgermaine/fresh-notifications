### Fresh Notifications

This is a package for Meteor + React, that adds configurable in-app notifications.

#### Installation

Clone this repository into your app/packages directory and, from the root directory of your app, run:

```
meteor add nickgermaine:fresh-notifications
```

#### Examples

```js
// Basic example
FreshNotify({
	title: 'Notification One',
	content: 'This is the notifications content, and will be displayed in the main area'
});

// Full width
FreshNotify({
	style: 'wide',
	title: 'Notification One',
	content: 'This is the notifications content, and will be displayed in the main area'
});

// Custom buttons, top set to 0, and icon
FreshNotify({
	style: 'wide',
	top: '0px',
	title: 'Notification One',
	icon: 'check',
	content: 'This is the notifications content, and will be displayed in the main area',
	buttons: true,
	trueText: 'Lets do it',
	falseText: 'Maybe later'
});
```

#### Full parameter list
- style: Adds additional classes to the notification
- top: sets the "top" css property (in px)
- title: The title of the notification
- content: The main content of the notification
- icon: a corresponding font awesome icon (for example, I would set this parameter to "check" if I wanted the "fa-check" icon)
- buttons: true/false (whether the notification should show buttons
- trueText: The custom text of the True button
- falseText: The custom text of the false button

#### Custom Styling
Use the following targets to implement your own custom css overrides:

```css
// Main Notification
#fresh-notification 

// Notification that has icon
#fresh-notification .fresh-iconify

// Notification that has buttons
#fresh-notification .buttons

// Title
#fresh-notification h3

// Content 
#fresh-notification p

// Button container
#fresh-notification div
```
