import { createSlice } from "@reduxjs/toolkit";

interface Form {
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
	email: string;
	contact: string;
}

interface FormInitialState {
	form: Form[] | null;
}

const initialState: FormInitialState = {
	form: null,
};

export const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		getForm: (state, action) => {
			state.form = action.payload.form;
		},
	},
});

export const { getForm } = formSlice.actions;
export default formSlice.reducer;
