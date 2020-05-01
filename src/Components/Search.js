import React, { Fragment } from 'react'
import styled from 'styled-components'

import Container from './Container'

const Search = ({ search, searchBy, handleSetSearchBy, handleSubmit, setSearch }) => {
	return (
		<Container>
			<form onSubmit={handleSubmit}>
				{searchBy === 'city' ? (
					<Fragment>
						<Label>City</Label>
						<Input
							value={search}
							type="text"
							placeholder="Toronto"
							onChange={(event) => setSearch(event.target.value)}
						/>
					</Fragment>
				) : (
					<Fragment>
						<Label>Country</Label>
						<Input
							value={search}
							type="text"
							placeholder="Canada"
							onChange={(event) => setSearch(event.target.value)}
						/>
					</Fragment>
				)}

				{/* <Buttons>
          <span>Search By: </span>
          <Button
            isActive={searchBy === 'city'}
            onClick={() => handleSetSearchBy('city')}
          >
            City
          </Button>
          <Button
            isActive={searchBy === 'country'}
            onClick={() => handleSetSearchBy('country')}
          >
            Country
          </Button>
        </Buttons> */}

				<Button
					isActive
					style={{ backgroundColor: '#2ed573', width: '100%', marginTop: 20 }}
					onClick={handleSubmit}
					disabled={search.length < 2}
				>
					Search
				</Button>
			</form>
		</Container>
	)
}

const Label = styled.label`
	font-size: 16px;
	margin-bottom: 10px;
	display: block;
	font-weight: 300;
`

const Input = styled.input`
	width: 100%;
	padding-left: 5px;
	padding-top: 10px;
	padding-bottom: 10px;
	font-size: 14px;
`

const Buttons = styled.div`
	margin-top: 10px;
	float: right;
`

const Button = styled.button`
	outline: none;
	background-color: ${({ isActive }) => (isActive ? '#1e90ff' : '#ced6e0')};
	color: ${({ isActive }) => (isActive ? '#ffffff' : '#81878d')};
	padding: 10px;
	border: none;
	border-radius: 3px;
	/* margin-left: 10px; */
	width: 100px;
	cursor: pointer;
	transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

	&::-moz-focus-inner {
		border: none;
	}

	&:hover {
		transform: scale(1.04);
	}
`

export default Search
