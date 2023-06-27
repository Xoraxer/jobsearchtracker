# Job Search Tracker Chrome Extension

## Description
The Job Search Tracker is a simple and user-friendly Chrome extension built to help users track their daily job applications. 

The extension provides users with a platform to log the number of job applications submitted each day. The goal is to encourage consistent job application submission and make the job search process more organized and manageable.

## Features

- Tracking of daily job applications.
- Storage of data for each day of job application submission.
- Encouragement to reach a daily goal of 50 job applications.
- Data persists even after the browser is closed, thanks to the use of Local Storage.

## How to use

1. Enter the current date in the provided field.
2. Press the "Application Completed" button for each completed job application.
3. Upon submitting 50 applications, press the "Finish" button to save the progress.
4. The extension will track the total number of days on which applications have been submitted and display this on the screen.

## Code Overview

The HTML code defines the interface of the extension. The JavaScript code listens to the click events on the "Application Completed" button, increments the count, and stores the data in the local storage of the browser. The count resets after reaching the goal of 50 applications.

## Local Development

1. Clone the repository to your local machine.
2. Open Chrome and go to chrome://extensions.
3. Toggle on the "Developer mode" at the top right.
4. Click on the "Load unpacked" button that just appeared.
5. Select the directory of this project on your local machine.
6. The extension should now be visible in your Chrome extensions list.

This extension is intended for educational purposes and to simplify the process of tracking job applications.

## License

This project is open source, under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Pull requests are welcome. Please open an issue first to discuss what you would like to change.

## Disclaimer

Use this tool responsibly. It is not intended to encourage spamming job applications without thorough consideration for each role.
