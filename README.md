# `Jest and React testing library for beginners`

This repository provides examples and starter code for beginners to learn and practice using Jest and React Testing Library for testing React applications.

Let's quickly walk through the repository and wishing you a [happy hacking]()!

### `Table of Contents`

1. Installation
2. Usage
3. Code contents
4. Contributing
5. License

## Installation

1.  Clone the repository using the following command:

         git clone https://github.com/jishnuDNS/react-tesing.git

2.  Change into the project directory:

        cd react-testing

3.  Install the dependencies:

        npm install

## Usage

To get started, follow the steps below:

1.  Open the project in your preferred code editor.
2.  Explore the source code and test files provided in the repository. Familiarize yourself with the structure and organization of the files.
3.  Modify the existing components or create new components to practice writing tests.
4.  Run the tests using the following command:

            npm test

    This command will execute the test suite using Jest and display the test results in the terminal.

## Code contents

The repository includes several examples that cover different aspects of testing React applications using Jest and React Testing Library. Here are some of the examples provided:

1.  Lets start with Filename conventions,

              .test.tsx,
              .spec.tsx,
              __tests__/anyname.tsx

    You can use any of the above conventions without any differences.The last one is a directory named '**tests**', were all the files will be treated as a test suite. Using this convention you can organize your test files into a common directory,whereas the best approach is to keep test files or suites along with the components itself.

2)  Now we can dive a little bit into the anatomy of a test,

              test("Name of your test", () => {
              render(<YourComponent />);
              const textElement = screen.getByText(/hello/i);
              expect(textElement).toBeInTheDocument();
              });


    All you need is a 'test' method which triggers a test, were it accepts 3 arguments such as name, function and timeout `test(name,fn,timeout)`.

    1. name : The test name is used to identify the test
    2. fn : A function which contains the expectations to test
    3. timeout : An optional argument for specifying how long to wait before aborting the test. The default timeout is 5 seconds.
3. Navigate to `src/components/greet/Greet.test.tsx`, you will find different test properties present in jest and RTL there.
3.  Coverage script used in package.json

        "coverage": "npm test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}'"

    1. __--coverage__ : Helps to identify script which we called is for coverage purposes.
    2. __--collectCoverageFrom__ : Will determine the script were to look into and were not to.
    
    Here, we told jest to cover the whole components directory and its child directories along with the typescript files includes in it.

        "coverage": "npm test --coverage --watchAll --collectCoverageFrom='!src/components/**/*.{types,stories,constants,tests,specs}.{ts,tsx}'"
    `!` in __--collectCoverageFrom__ will helps the script to ignore the dir.
## Contributing

Contributions to this repository are welcome. If you find any issues, have suggestions for improvements, or want to add more testing examples, please open an issue or submit a pull request.

When contributing, please follow the existing coding style and adhere to the project's code of conduct.

## License

This repository is licensed under the [MIT License]("https://www.google.com"). Feel free to use and modify the code according to the terms of the license.
