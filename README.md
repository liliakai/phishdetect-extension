# PhishDetect Extension

This is a browser extension for Mozilla Firefox and Google Chrome. It is a client for PhishDetect and it is currently capable of the following functionality:

- It regularly fetches a list of bad indicators from the configured PhishDetect Node.
- It blocks any visits to websites whose domains match a known indicator (inspired by the [Blockade](https://github.com/blockadeio) project).
- It integrates in various supported webmails. Everytime an email is opened it checks for known bad senders as well as known bad links inside the body.
- It modifies the links contained in the body in order to display a dialog prompt that offers the user the possibility of scanning the links with PhishDetect.
- It creates a button in the webmails' web interface to allow to share the full source email with the Node operators.
- It creates context menus and a toolbar button that allow to either send a link or directly the HTML content of the opened page to a PhishDetect backend in order to be scanned for phishing.

Currently supported webmails:

- Gmail
- Roundcube

## How to use

For details on how to install, configure and use the PhishDetect Extension you can consult the [Help](https://phishdetect.io/help/) pages.


## Build

First install node.js and npm:

    $ sudo apt-get install nodejs npm

Then we can run the build command, which will pull dependencies and compile a
single JavaScript file:

    $ make build

Finally, we can create the package that we can use for distribution:

    $ make package


## Known Issues

- Using the service in localhost through the Mozilla Firefox browser on Linux has issues and it will likely not work. Other browsers seem to work fine.


## License

PhishDetect Extension is released under GNU General Public License 3.0 and is copyrighted to Claudio Guarnieri.

The hook icon was created by Alex Fuller from Noun Project.
