# Quick Info

## Todo

I've scattered a bunch of TODOs in the code. Given more time, I would:
- Update CSS, with a focus on more responsive design. 
- Add functionality around recipe calls
- Add additional API integrations

### Note

I spent about 4 hours on this project. While I had a ton of fun learning RedwoodJS, I tried to reasonably timebox myself to reflect the intent of the challenge. Also, I made no majore config changes, so the normal commands will run this locally.

```terminal
yarn redwood dev
```

## Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`. 
