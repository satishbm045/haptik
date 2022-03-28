import react, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './FriendBox.css';
import deleteIcon from '../../assets/images/deleteIcon.png';
import starIcon from '../../assets/images/starIcon.png';
import starIconFilled from '../../assets/images/starIconFilled.png';
import { toggleFavourite } from '../../redux/action/action';
import ModelBox from '../ModelBox/ModelBox';

const FriendBox = (props) => {
	const {friendData} = props;
	const dispatch = useDispatch();

	const [showModel, setShowModel] = useState(false);

	const openModel = () => {
		setShowModel(true);
	}

	const closeModel = () => {
		setShowModel(false);
	}

	return (
		<>
			<div className='friendBox'>
				<div className='name'>{friendData.name} <br /> <span className='spanText'>is your friend</span></div>
				<div className='star' onClick={()=>dispatch(toggleFavourite(friendData))}><img className='img' src={friendData.star ? starIconFilled : starIcon} />{friendData.star}</div>
				<div className='delete' onClick={openModel}><img className='img' src={deleteIcon} /></div>
			</div>
			{showModel && <ModelBox frdData={friendData} closeModel={closeModel}/> }
		</>
	)
}

export default FriendBox;