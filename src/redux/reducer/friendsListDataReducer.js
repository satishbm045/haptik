const defaultData = []

export const friendsListDataReducer = (userData = defaultData, action) => {
    switch(action.type){
        case "GET_DATA": 
			let tempDataArray = userData;
			if(localStorage.getItem("friendsList") === null){
				localStorage.setItem("friendsList", JSON.stringify(action.data));
				tempDataArray = action.data;
			}else{
				tempDataArray = JSON.parse(localStorage.getItem("friendsList")) || []
			}
			
			return tempDataArray;

		case "FAV_FRD": 
			var friendsList = JSON.parse(localStorage.getItem("friendsList")) || []
			var newfriendsList =  friendsList.map((ele) => {
				if(action.data.id == ele.id){
					ele.star = !ele.star;
				}
				return ele;
			})
			localStorage.setItem("friendsList", JSON.stringify(newfriendsList));
			return newfriendsList;

		case "ADD_FRD": 
			var friendsList = JSON.parse(localStorage.getItem("friendsList")) || []
			friendsList.push(action.data);
			localStorage.setItem("friendsList", JSON.stringify(friendsList));
			alert("New Friend Added !!!")
			return friendsList;

		case "SEARCH_FRD": 
			var friendsList = JSON.parse(localStorage.getItem("friendsList")) || []
			var newfriendsList = friendsList.filter(ele => ele.name.toLowerCase().includes(action.data.toLowerCase()));
			return newfriendsList;
			
		case "DEL_FRD": 
			var friendsList = JSON.parse(localStorage.getItem("friendsList")) || []
			var newfriendsList =  friendsList.filter((ele) => action.data.id != ele.id);
			localStorage.setItem("friendsList", JSON.stringify(newfriendsList));
			return newfriendsList;
		
        default: return userData;
    }
}