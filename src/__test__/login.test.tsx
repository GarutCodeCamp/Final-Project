/* eslint-disable react/react-in-jsx-scope */
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import Login from "../pages/login";
import store from "../redux/store";

global.matchMedia = global.matchMedia || function(){
    return {
        addListener: jest.fn(),
        removeListener: jest.fn()
    };
};

test('login ', () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    );
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toBeInTheDocument(); 
})
