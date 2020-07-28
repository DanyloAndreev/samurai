import ProfileStatus from "../../../components/Profile/ProfileStatus/ProfileStatus";
import React from "react";
import { create } from "react-test-renderer";

describe("Profile Status component", () => {
  test("profile status should be in the state", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Test status");
  });
});
