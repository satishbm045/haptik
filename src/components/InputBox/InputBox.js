import react, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './InputBox.css';
import { addFrd, searchFrd, getFriendsData } from '../../redux/action/action';

const InputBox = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	let friendsList = useSelector((state) => state && state.friendsListDataReducer ? state.friendsListDataReducer : []);

	const onchangeEvent = (e) => {
		let enteredValue = e.target.value;
		setValue(enteredValue)
		if(enteredValue.length > 2){
			dispatch(searchFrd(enteredValue));
		}else if(enteredValue.length == 0){
			dispatch(getFriendsData());
		}
	}

	const addFrdClick = (e) => {
		if(e.key === 'Enter'){
			if(value.length < 3){
				alert("Please enter valid Name !!!");
			}else{
				let frdObj = {
					name: value,
					star: false,
					id: Math.floor(1000 + Math.random() * 9000)
				}
				dispatch(addFrd(frdObj));
				setValue('');
			}
		}

	}
	return(
		<div className='inputBox'>
			<input className='input' value={value} placeholder={"Search / Enter the Name"} onChange={(e)=>onchangeEvent(e)} onKeyDown={addFrdClick}/>
			{friendsList.length == 0 && value.length > 0 && <span className='toastMsg'>Please click enter to add friend</span>}
		</div>
	)
}

export default InputBox;