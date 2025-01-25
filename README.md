# Akan Name Calculator

A web-based tool that calculates your Akan name based on your birthdate and gender. Akan names are culturally significant in Ghana, as they are derived from the day of the week a person is born and their gender.

## Project Overview

This project is a simple yet effective implementation of an Akan name generator using JavaScript. It takes a user's birthdate and gender as inputs, calculates the corresponding Akan name based on traditional Ghanaian naming conventions, and displays the result.

## Features

- Users can input their birthdate and gender.
- The tool calculates the Akan name based on the day of the week a user was born.
- Provides meaningful Akan names tied to the user's gender and day of birth.
- Interactive, clean user interface with an embedded video background.

## Installation

1. Clone the repository

```bash
git clone https://george-dev-web.github.io/jsassgn/
```

1. Navigate to the project folder

```bash
cd akan-name-calculator
```

3. Open `index.html` in a browser

After cloning the repository, simply open the `index.html` file in your browser to run the project locally. There’s no server-side setup required as it’s a client-side JavaScript application.

## How It Works

### Input Fields

1. Birthdate: Users input their date of birth using the date picker.
2. Gender: Users select their gender from a dropdown menu (`Male` or `Female`).

### Calculation Logic

The Akan names are based on the following:

- Days of the Week: Each day of the week is associated with a unique Akan name.
  - Sunday: Akosua (Female), Kwasi (Male)
  - Monday: Adwoa (Female), Kwadwo (Male)
  - Tuesday: Abena (Female), Kwabena (Male)
  - Wednesday: Akua (Female), Kwaku (Male)
  - Thursday: Yaa (Female), Kofi (Male)
  - Friday: Afia (Female), Kwame (Male)
  - Saturday: Ama (Female), Kwasi (Male)

The JavaScript code uses the `Date()` function to determine the day of the week based on the user’s birthdate and gender. The day of the week is mapped to an Akan name from the list above.

### Code Structure

1. `index.html`: Contains the HTML structure of the page, including the form for user input (birthdate and gender) and a div to display the result. The background video is also included here.
2. `styles.css`: This file includes the styles for the project, including the layout, form design, and the background video configuration.
3. `script.js`: Contains the JavaScript code that performs the calculations based on the user’s input and dynamically displays the Akan name.

### Example Use Case

When a user enters their birthdate (for example, 1990-04-03) and selects their gender (e.g., Female), the script will:

- Determine that they were born on a Wednesday.
- Display "Akua" (Female Akan name for Wednesday) in the result section.

## Technologies Used

- **HTML**: Used for structuring the content on the web page.
- **CSS**: Used for styling the form and overall layout.
- **JavaScript**: The main programming language used for calculating the Akan name and manipulating the DOM (Document Object Model).
- **Video Background**: A background video is added to enhance the visual appeal of the webpage.

## Credits

- **Akan Name Reference**: Based on traditional Akan name conventions.
- **Video**: Background video provided from a personal collection or public domain source.

## Contributing

Feel free to fork this repository and submit a pull request if you have suggestions or improvements.

To contribute:

1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch (`git checkout -b feature/your-feature`).
4. Make your changes.
5. Commit your changes (`git commit -am 'Add new feature'`).
6. Push to your branch (`git push origin feature/your-feature`).
7. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Thanks to the contributors of Akan name conventions and Ghanaian cultural history.
