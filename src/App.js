import react, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList';
import InputBox from './components/InputBox/InputBox';
import { getFriendsData } from './redux/action/action';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getFriendsData())
  },[])

  return (
    <div className="App">
      <div className='continer'>
        <div className='heading'>
          Friends List
        </div>
        <InputBox />
        <FriendsList />
      </div>
    </div>
  );

}

export default App;