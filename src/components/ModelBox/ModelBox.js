import { useDispatch } from 'react-redux';
import './ModelBox.css';
import { deleteFrd } from '../../redux/action/action';

const ModelBox = props => {
	const {frdData, closeModel} = props;
	const dispatch = useDispatch();

	const deleteFrdClick = () => {
		dispatch(deleteFrd(frdData));
		closeModel();
	}

	return(
		<div className='modelBox'>
			<div className='popUp'>
				<div className='data'>
					Are you sure want to delete {frdData.name} ?
				</div>
				<div className='buttonBox' onClick={deleteFrdClick}>Yes</div>
				<div className='buttonBox' onClick={closeModel}>No</div>
			</div>
		</div>
	)
}

export default ModelBox;