# About

This is an Express API demo that illustrates the following:
- How to implement a simple "fake database" in the API using an array
- How to implement full CRUD operations in the API on that array
- How to implement a traditional multi-page CRUD app on top of this API using vanilla HTML/CSS/JS


# Try It Out Now (No Setup Required)

Fork this repo on Replit to run the app with no setup:

https://replit.com/@Prgrmming4Doers/DemoExpressApiVanillaUi

(You can also modify the code and see the changes)

Otherwise, to clone/set up this project locally, proceed to "Getting Started" section


# Getting Started

### Prerequisites

**Windows**

You will need Docker installed
- [Instructions](https://learn.microsoft.com/en-us/windows/wsl/install#install-wsl-command)

You will need WSL installed
- [Instructions](https://docs.docker.com/desktop/install/windows-install)

Run this to avoid errors related to line-endings
`git config --global core.autocrlf input`

**MacOS**

You will need Docker installed
- [Instructions](https://docs.docker.com/desktop/install/mac-install)


### Installation

1. Clone this project
1. Enter the project directory
1. Run: `bin/setup`
1. Run: `bin/services up -d`
1. Run: `bin/services logs` to tail logs
1. Navigate to `http://localhost:3000/index.html` in your browser


### Development

**Commands**
- **Bring down the stack:** `bin/services down`
- **Bring up the stack:** `bin/services up -d`
- **Restart the stack:** `bin/services down; bin/services`
- **Tail logs:** `bin/services logs`
- **Restart the stack and tail logs:** `bin/services down; bin/services; bin/services logs`

**Note**: For some kinds of code changes, you may need to restart the stack for them to take effect
