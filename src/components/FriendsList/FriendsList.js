import react, { useEffect, useState } from 'react';
import FriendBox from '../FriendBox/FriendBox';
import { useSelector } from 'react-redux';
import '../FriendBox/FriendBox.css';
import './FriendsList.css'
import sortArrow from '../../assets/images/sortArrow.png';
import upArrow from '../../assets/images/upSort.png';
import downArrow from '../../assets/images/downSort.png';

const FriendsList = props => {
	let friendsList = useSelector((state) => state && state.friendsListDataReducer ? state.friendsListDataReducer : []);
	const [page, setPage] = useState(1);
	const [eachPageData, setEachPageData] = useState(4);
	const [sortType, setSortType] = useState(null);

	useEffect(()=>{
		setSortType(null);
	},[friendsList])

	const getNextPaginationClick = () => {
		if((friendsList.length / 4) > page){
			return true;
		}
	}

	const getSortImg = () => {
		if(sortType != null){
			return sortType == 'desc' ? downArrow : upArrow;
		}else{
			return sortArrow;
		}
	}

	const goToNext = () => {
		setPage(prePage => prePage + 1);
	}

	const goToPrev =() => {
		setPage(prePage => prePage - 1);
	}

	const sortClick = () => {
		if(sortType != null){
			if(sortType == 'asc'){
				setSortType('desc');
				friendsList.sort((a, b) => b.star - a.star)
			}else{
				setSortType('asc');
				friendsList.sort((a, b) => a.star - b.star)
			}
		}else{
			setSortType('asc');
			friendsList.sort((a, b) => a.star - b.star)
		}
	}

	return (
		<div className='friendsList'>
			<div className='friendBox headingRow'>
				<div className='name'>Name</div>
				<div className='star' onClick={sortClick} >Favorite <img className='sortImag' src={getSortImg()} /></div>
				<div className='delete'>Delete</div>
			</div>
			{friendsList.length > 0 && friendsList.map((ele,index) => {
				if(index < (eachPageData*page) && index >= ((eachPageData*page)-eachPageData)){
					return (
						<FriendBox friendData={ele} key={index} />
					)
				}
			})}
			{
				friendsList.length == 0 && <div>No Friends Found</div>
			}
			{
				page > 1 && <div className='paginationButton left' onClick={goToPrev}>{`< Back`}</div>
			}
			{
				getNextPaginationClick() && <div className='paginationButton right' onClick={goToNext}>{`Next >`}</div>
			}
		</div>
	)
}

export default FriendsList;