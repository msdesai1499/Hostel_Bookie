export const initialState = null;
export const reducer = (state, action) => {

	if (action.type === "USER") {
		return [action.payload, action.type];
	}
	else if (action.type === "HOSTEL") {
		return [action.payload, action.type];
	}
	else if (action.type === "ADMIN") {
		return [action.payload, action.type];
	}
	return [false, "USER"];
}