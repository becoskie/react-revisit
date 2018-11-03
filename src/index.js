import React from 'react'
import { render } from 'react-dom'
import { RestaurantCount } from './components/RestaurantCount'

window.React = React

render(
	<RestaurantCount />,
	document.getElementById('react-container')
)