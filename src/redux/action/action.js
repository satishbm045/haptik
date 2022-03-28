let friendsData = [{
	name: "dummy1",
	star: false,
	id: 0
},
{
	name: "dummy2",
	star: false,
	id: 1
},
{
	name: "dummy3",
	star: true,
	id: 2
},
{
	name: "dummy4",
	star: false,
	id: 3
},
{
	name: "dummy5",
	star: false,
	id: 4
}]

export const getFriendsData = (friendsList = friendsData) => {
    return {
        type: "GET_DATA",
        data: friendsList
    }
}

export const toggleFavourite = (selectedFrd) => {
	return {
		type: "FAV_FRD",
		data: selectedFrd
	}
}

export const deleteFrd = (selectedFrd) => {
	return {
		type: "DEL_FRD",
		data: selectedFrd
	}
}

export const sortFriendsData = (selectedSort) => {
	return {
		type: "SORT_FRD",
		data: selectedSort
	}
}

export const addFrd = (frdData) => {
	return {
		type: "ADD_FRD",
		data: frdData
	}
}

export const searchFrd = (key) => {
	return {
		type: "SEARCH_FRD",
		data: key
	}
}