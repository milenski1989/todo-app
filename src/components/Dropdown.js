import React, { memo, useRef, useState } from 'react'
import { Popover } from 'react-tiny-popover'
import './Dropdown.css'

function Dropdown() {


	const [isPopoverOpen, setIsPopoverOpen] = useState(false)
	const [selectedMemberId, setSelectedMemberId] = useState()

	const members = [
		{ id: 1, picture: 'https://ora-projects.s3.amazonaws.com/default-15.svg', name: 'Lance Foster' },
		{ id: 2, picture: 'https://ora-profile-pictures.s3.amazonaws.com/54314267e48bec2cb915e5848442939532363f96?1617164568', name: 'Suzanne Nelson' },
		{ id: 3, picture: 'https://ora-profile-pictures.s3.amazonaws.com/54314267e48bec2cb915e5848442939532363f96?1617164568', name: 'Scarlett Bennett' },
		{ id: 4, picture: 'https://ora-profile-pictures.s3.amazonaws.com/54314267e48bec2cb915e5848442939532363f96?1617164568', name: 'Edwin Wood' }
	]



	function handleAssignee(account) {
		setSelectedMemberId(account.id)
		setIsPopoverOpen(false)
	}


	const selectedMember = members.find(member => member.id === selectedMemberId)
	const selectedMemberIndex = members.findIndex(member => member.id === selectedMemberId)

	return (<Popover
		isOpen={isPopoverOpen}
		positions={['bottom']}
		containerClassName="popover"
		content={members.map((member) => {
			const isSelected = member.id === selectedMemberId
			return <div key={member.id} onClick={() => handleAssignee(member)} className={`cell${isSelected ? ' selected' : ''}`}>
				<img className="avatar" src={member.picture} alt="" />
				<div>{member.name}</div>
			</div>
		})}
	>
		<button className="popover-btn" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
			{selectedMemberId ? <div className="cell">
				<img className="avatar" src={selectedMember.picture} alt="" />
				{selectedMember.name}
			</div> : 'Select Assignee'}
		</button>
	</Popover>)

}

export default Dropdown

