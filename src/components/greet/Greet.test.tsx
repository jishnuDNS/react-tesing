import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/**
 * * Individual test
 */
test("Renders greetings message (Individual test)", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

/**
 * * Will use describe for grouping the tests
 */

describe("Greet", () => {
  test("Renders greetings message", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  /**
   * * .only will run the particular test and excludes everyother cases
   */
  // test.only("Render name with greetings", () => {
  //   render(<Greet name="jishnu" />);
  //   const textElement = screen.getByText("Hello jishnu");
  //   expect(textElement).toBeInTheDocument();
  // });

  /**
   * * We can do nested grouping as well ( Can use describe inside describe)
   */
  //
  describe("Nested test", () => {
    /**
     * * .skip will helps to skip the particular test
     */
    test.skip("Nested greet", () => {
      render(<Greet />);
      const textElement = screen.getByText("Hello");
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("Greet v2", () => {
  /**
   * * Instead of test keyword we can use 'it' as well
   */
  it("Checks for case un-sensitive word (/Hello/i)", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

  /**
   * * Alternative for .only property in 'it' (use 'f' infront of 'it')
   */
  //  fit("Checks letter o", () => {
  //    render(<Greet />);
  //    const textElement = screen.getByText(/o/i);
  //    expect(textElement).toBeInTheDocument();
  //  });

  /**
   * * Alternative for .skip property in 'it' (use 'x' infront of 'it')
   */
  xit("Checks letter o", () => {
    render(<Greet />);
    const textElement = screen.getByText(/o/i);
    expect(textElement).toBeInTheDocument();
  });
});
