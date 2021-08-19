import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import ProfilePage from "../pages/profile";
import store from "../redux/store";

global.matchMedia = global.matchMedia || function(){
    return{
        addListener: jest.fn(),
        removeListener: jest.fn()
    };
};

test("profile test", () => {
    render(
        <Provider store={store}>
            <ProfilePage />
        </Provider>
    )
    const name = screen.getByTestId("user-name");
    const country = screen.getByTestId("user-country");
    const email = screen.getByTestId("user-email");
    const followers = screen.getByTestId("user-followers");

    expect(name).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(email).toBeInTheDocument()
    expect(followers).toBeInTheDocument();

})