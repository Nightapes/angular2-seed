# Introduction

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![Build Status](https://travis-ci.org/mgechev/angular-seed.svg?branch=master)](https://travis-ci.org/mgechev/angular-seed)
[![Build Status](https://ci.appveyor.com/api/projects/status/jg5vg36w0klpa00e/branch/master?svg=true)](https://ci.appveyor.com/project/mgechev/angular2-seed)
[![Join the chat at https://gitter.im/mgechev/angular2-seed](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mgechev/angular2-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/mgechev/angular-seed.svg)](https://david-dm.org/mgechev/angular-seed)
[![devDependency Status](https://david-dm.org/mgechev/angular-seed/dev-status.svg)](https://david-dm.org/mgechev/angular-seed#info=devDependencies)

Provides fast, reliable and extensible starter for the development of Angular projects.

`angular-seed` provides the following features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Supports multiple Angular applications with shared codebase in a single instance of the seed.
- Official Angular i18n support.
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- **Ahead-of-Time** compilation support.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the [best practices](https://angular.io/styleguide).
- Manager of your type definitions using @types.
- Has autoprefixer and css-lint support.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality we **strongly recommend node >=v6.5.0 and npm >=3.10.3**.

**Here is how to [speed-up the build on Windows](https://github.com/mgechev/angular-seed/wiki/Speed-up-the-build-on-Windows)**.

In order to start the seed use:


```bash
$ git clone --depth 1 https://github.com/mgechev/angular-seed.git
$ cd angular-seed

# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

# watches your files and uses livereload by default
$ npm start
# api document for the app
# npm run build.docs

# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving

# dev build
$ npm run build.dev
# prod build
$ npm run build.prod

# dev build of multiple applications (by default the value of --app is "app")
$ npm start -- --app baz
$ npm start -- --app foo
$ npm start -- --app bar
```
_Does not rely on any global dependencies._

# How to start with AoT

**Note** that AoT requires **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

In order to start the seed with AoT use:

```bash
# prod build with AoT compilation
$ npm run build.prod.exp
```

# Table of Contents

- [Introduction](#introduction)
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [Environment Configuration](#environment-configuration)
- [Tools documentation](#tools-documentation)
- [How to extend?](#how-to-extend)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Advanced Seed Option](#advanced-seed-option)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [Contributors](#contributors)
  - [Wiki Contributors](#wiki-contributors)
- [Change Log](#change-log)
- [License](#license)

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
$ npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The environment can be specified by using:

```bash
$ npm start -- --config-env ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.

# Tools documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

# How to extend?

Visit the [Wiki page](https://github.com/mgechev/angular-seed/wiki) of the project.

# How to update?
```
git remote add upstream https://github.com/mgechev/angular2-seed
git pull upstream master
```

# Running tests

```bash
$ npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
$ npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
$ ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
$ npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor
# Make sure you do have Java in your PATH (required for webdriver)

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
$ npm run webdriver-start
$ npm run serve.e2e
$ npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
$ npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Contributing

Please see the [CONTRIBUTING](https://github.com/mgechev/angular-seed/blob/master/.github/CONTRIBUTING.md) file for guidelines.

# Advanced Seed Option

An [advanced option to this seed exists here](https://github.com/NathanWalker/angular-seed-advanced) which mirrors the latest changes here but adds core support for:

- [ngrx/store](https://github.com/ngrx/store) RxJS powered state management, inspired by **Redux**
- [ngrx/effects](https://github.com/ngrx/effects) Side effect model for @ngrx/store
- [ng2-translate](https://github.com/ocombe/ng2-translate) for i18n
  - Usage is optional but on by default
  - Up to you and your team how you want to utilize it. It can be easily removed if not needed.
- [angulartics2](https://github.com/angulartics/angulartics2) Vendor-agnostic analytics for Angular applications.
  - Out of box support for [Segment](https://segment.com/)
    - When using the seed, be sure to change your `write_key` [here](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/index.html#L24)
  - Can be changed to any vendor, [learn more here](https://github.com/angulartics/angulartics2#supported-providers)
- [lodash](https://lodash.com/) Helps reduce blocks of code down to single lines and enhances readability
- [NativeScript](https://www.nativescript.org/) cross platform mobile (w/ native UI) apps. [Setup instructions here](#nativescript-app).
- [Electron](http://electron.atom.io/) cross platform desktop apps (Mac, Windows and Linux). [Setup instructions here](#electron-app).

You may use it to learn how to extend this seed for your own use cases or use the advanced seed if your project needs those features.

# Examples

Forks of this project demonstrate how to extend and integrate with other libraries:

 - https://github.com/mgechev/switching-to-angular2 - code samples for the book ["Switching to Angular 2"](https://www.packtpub.com/web-development/switching-angular-2).
 - https://github.com/DeviantJS/angular2-seed-postcss - Extending PostCSS with precss / cssnext for Sass-like features.
 - https://github.com/DeviantJS/angular2-seed-material2 - integration with [Angular2-Material](https://github.com/angular/material2).
 - https://github.com/AngularShowcase/angular2-sample-app - sample Angular application.
 - https://github.com/AngularShowcase/ng2-bootstrap-sbadmin - ng2-bootstrap-sbadmin.
 - https://github.com/AngularShowcase/angular2-seed-ng2-highcharts - Simple application including a [Highcharts](http://www.highcharts.com) graph.
 - https://github.com/tarlepp/angular-sailsjs-boilerplate-frontend-angular2 - Example application for [Sails.js](http://sailsjs.org/) integration.
 - https://github.com/ludohenin/ng2-wp-blog - Angular application using Wordpress [JSON-API](http://v2.wp-api.org) backend..
 - https://github.com/AngularShowcase/angular2-seed-example-mashup - Angular application demonstrating the use of [Redux](http://redux.js.org/), [D3](https://github.com/mbostock/d3), [socket io](https://github.com/socketio), [Google Charts](https://developers.google.com/chart/), and [RxJs](https://github.com/Reactive-Extensions/RxJS).
 - https://github.com/tiagomapmarques/angular2-seed-phaser/tree/releases - integration with [Phaser](http://phaser.io/).
 - https://github.com/vyakymenko/angular2-seed-express - integration with [Express](https://expressjs.com/) full-stack development.
 - https://github.com/UIUXEngineering/angular2-jspm-typescript-seed - integration with [JSPM](http://jspm.io/).

# Directory Structure

```
.
├── LICENSE
├── README.md
├── gulpfile.ts                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.conf.js         <- e2e tests configuration
├── src                        <- source code of the application
│   └── client
│       ├── app
│       │   ├── +about
│       │   │   ├── about.component.css
│       │   │   ├── about.component.e2e-spec.ts
│       │   │   ├── about.component.html
│       │   │   ├── about.component.spec.ts
│       │   │   ├── about.component.ts
│       │   │   ├── about.module.ts
│       │   │   ├── about.routes.ts
│       │   │   └── index.ts
│       │   ├── +home
│       │   │   ├── home.component.css
│       │   │   ├── home.component.e2e-spec.ts
│       │   │   ├── home.component.html
│       │   │   ├── home.component.spec.ts
│       │   │   ├── home.component.ts
│       │   │   ├── home.module.ts
│       │   │   ├── home.routes.ts
│       │   │   └── index.ts
│       │   ├── app.component.e2e-spec.ts
│       │   ├── app.component.html
│       │   ├── app.component.spec.ts
│       │   ├── app.component.ts
│       │   ├── app.module.ts
│       │   ├── app.routes.ts
│       │   ├── hot_loader_main.ts
│       │   ├── main.ts
│       │   └── shared
│       │       ├── config
│       │       │   └── env.config.ts
│       │       ├── index.ts
│       │       ├── shared.module.ts
│       │       ├── name-list
│       │       │   ├── index.ts
│       │       │   ├── name-list.service.spec.ts
│       │       │   └── name-list.service.ts
│       │       ├── navbar
│       │       │   ├── index.ts
│       │       │   ├── navbar.component.css
│       │       │   ├── navbar.component.html
│       │       │   └── navbar.component.ts
│       │       └── toolbar
│       │           ├── index.ts
│       │           ├── toolbar.component.css
│       │           ├── toolbar.component.html
│       │           └── toolbar.component.ts
│       ├── assets
│       │   ├── data.json
│       │   └── svg
│       │       └── more.svg
│       ├── css
│       │   └── main.css
│       ├── index.html
│       ├── testing
│       │   └── router
│       │       ├── mock-location-strategy.ts
│       │       └── router-testing-providers.ts
│       └── tsconfig.json
├── test-main.js               <- testing configuration
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── seed.config.interfaces.ts
│   │   └── seed.config.ts     <- generic configuration of the seed project
│   │   └── seed.tslint.json   <- generic tslint configuration of the seed project
│   ├── config.ts              <- exported configuration (merge both seed.config and project.config, project.config overrides seed.config)
│   ├── debug.ts
│   ├── env                    <- environment configuration
│   │   ├── base.ts
│   │   ├── dev.ts
│   │   └── prod.ts
│   ├── manual_typings
│   │   ├── project            <- manual ambient typings for the project
│   │   │   └── sample.package.d.ts
│   │   └── seed               <- seed manual ambient typings
│   │       ├── autoprefixer.d.ts
│   │       ├── colorguard.d.ts
│   │       ├── connect-livereload.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── doiuse.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── istream.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── postcss-reporter.d.ts
│   │       ├── slash.d.ts
│   │       ├── stylelint.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       ├── tildify.d.ts
│   │       ├── tiny-lr.d.ts
│   │       └── walk.d.ts
│   ├── tasks                  <- gulp tasks
│   │   ├── project            <- project specific gulp tasks
│   │   │   └── sample.task.ts
│   │   └── seed               <- seed generic gulp tasks. They can be overriden by the project specific gulp tasks
│   │       ├── build.assets.dev.ts
│   │       ├── build.assets.prod.ts
│   │       ├── build.bundles.app.ts
│   │       ├── build.bundles.ts
│   │       ├── build.docs.ts
│   │       ├── build.html_css.ts
│   │       ├── build.index.dev.ts
│   │       ├── build.index.prod.ts
│   │       ├── build.js.dev.ts
│   │       ├── build.js.e2e.ts
│   │       ├── build.js.prod.ts
│   │       ├── build.js.test.ts
│   │       ├── build.js.tools.ts
│   │       ├── check.versions.ts
│   │       ├── clean.all.ts
│   │       ├── clean.coverage.ts
│   │       ├── clean.dev.ts
│   │       ├── clean.prod.ts
│   │       ├── clean.tools.ts
│   │       ├── copy.js.prod.ts
│   │       ├── css-lint.ts
│   │       ├── e2e.ts
│   │       ├── generate.manifest.ts
│   │       ├── karma.start.ts
│   │       ├── serve.coverage.ts
│   │       ├── serve.docs.ts
│   │       ├── server.prod.ts
│   │       ├── server.start.ts
│   │       ├── tslint.ts
│   │       ├── watch.dev.ts
│   │       ├── watch.e2e.ts
│   │       ├── watch.test.ts
│   │       └── webdriver.ts
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed               <- seed specific gulp utils
│   │   │   ├── clean.ts
│   │   │   ├── code_change_tools.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration of the typescript project (ts-node, which runs the tasks defined in gulpfile.ts)
├── tslint.json                <- tslint configuration
└── appveyor.yml
```

# Contributors

[<img alt="mgechev" src="https://avatars.githubusercontent.com/u/455023?v=3&s=117" width="117">](https://github.com/mgechev) |[<img alt="ludohenin" src="https://avatars.githubusercontent.com/u/1011516?v=3&s=117" width="117">](https://github.com/ludohenin) |[<img alt="d3viant0ne" src="https://avatars.githubusercontent.com/u/8420490?v=3&s=117" width="117">](https://github.com/d3viant0ne) |[<img alt="Shyam-Chen" src="https://avatars.githubusercontent.com/u/13535256?v=3&s=117" width="117">](https://github.com/Shyam-Chen) |[<img alt="NathanWalker" src="https://avatars.githubusercontent.com/u/457187?v=3&s=117" width="117">](https://github.com/NathanWalker) |[<img alt="tarlepp" src="https://avatars.githubusercontent.com/u/595561?v=3&s=117" width="117">](https://github.com/tarlepp) |
:---: |:---: |:---: |:---: |:---: |:---: |
[mgechev](https://github.com/mgechev) |[ludohenin](https://github.com/ludohenin) |[d3viant0ne](https://github.com/d3viant0ne) |[Shyam-Chen](https://github.com/Shyam-Chen) |[NathanWalker](https://github.com/NathanWalker) |[tarlepp](https://github.com/tarlepp) |

[<img alt="Nightapes" src="https://avatars.githubusercontent.com/u/15911153?v=3&s=117" width="117">](https://github.com/Nightapes) |[<img alt="TheDonDope" src="https://avatars.githubusercontent.com/u/1188033?v=3&s=117" width="117">](https://github.com/TheDonDope) |[<img alt="nareshbhatia" src="https://avatars.githubusercontent.com/u/1220198?v=3&s=117" width="117">](https://github.com/nareshbhatia) |[<img alt="kiuka" src="https://avatars.githubusercontent.com/u/11283191?v=3&s=117" width="117">](https://github.com/kiuka) |[<img alt="hank-ehly" src="https://avatars.githubusercontent.com/u/11639738?v=3&s=117" width="117">](https://github.com/hank-ehly) |[<img alt="daniru" src="https://avatars.githubusercontent.com/u/2070853?v=3&s=117" width="117">](https://github.com/daniru) |
:---: |:---: |:---: |:---: |:---: |:---: |
[Nightapes](https://github.com/Nightapes) |[TheDonDope](https://github.com/TheDonDope) |[nareshbhatia](https://github.com/nareshbhatia) |[kiuka](https://github.com/kiuka) |[hank-ehly](https://github.com/hank-ehly) |[daniru](https://github.com/daniru) |

[<img alt="njs50" src="https://avatars.githubusercontent.com/u/55112?v=3&s=117" width="117">](https://github.com/njs50) |[<img alt="vyakymenko" src="https://avatars.githubusercontent.com/u/7300673?v=3&s=117" width="117">](https://github.com/vyakymenko) |[<img alt="jesperronn" src="https://avatars.githubusercontent.com/u/6267?v=3&s=117" width="117">](https://github.com/jesperronn) |[<img alt="robstoll" src="https://avatars.githubusercontent.com/u/5557885?v=3&s=117" width="117">](https://github.com/robstoll) |[<img alt="sasikumardr" src="https://avatars.githubusercontent.com/u/1760104?v=3&s=117" width="117">](https://github.com/sasikumardr) |[<img alt="aboeglin" src="https://avatars.githubusercontent.com/u/8297302?v=3&s=117" width="117">](https://github.com/aboeglin) |
:---: |:---: |:---: |:---: |:---: |:---: |
[njs50](https://github.com/njs50) |[vyakymenko](https://github.com/vyakymenko) |[jesperronn](https://github.com/jesperronn) |[robstoll](https://github.com/robstoll) |[sasikumardr](https://github.com/sasikumardr) |[aboeglin](https://github.com/aboeglin) |

[<img alt="markwhitfeld" src="https://avatars.githubusercontent.com/u/1948265?v=3&s=117" width="117">](https://github.com/markwhitfeld) |[<img alt="gkalpak" src="https://avatars.githubusercontent.com/u/8604205?v=3&s=117" width="117">](https://github.com/gkalpak) |[<img alt="ryzy" src="https://avatars.githubusercontent.com/u/994940?v=3&s=117" width="117">](https://github.com/ryzy) |[<img alt="eppsilon" src="https://avatars.githubusercontent.com/u/5643?v=3&s=117" width="117">](https://github.com/eppsilon) |[<img alt="sfabriece" src="https://avatars.githubusercontent.com/u/3108592?v=3&s=117" width="117">](https://github.com/sfabriece) |[<img alt="jerryorta-dev" src="https://avatars.githubusercontent.com/u/341155?v=3&s=117" width="117">](https://github.com/jerryorta-dev) |
:---: |:---: |:---: |:---: |:---: |:---: |
[markwhitfeld](https://github.com/markwhitfeld) |[gkalpak](https://github.com/gkalpak) |[ryzy](https://github.com/ryzy) |[eppsilon](https://github.com/eppsilon) |[sfabriece](https://github.com/sfabriece) |[jerryorta-dev](https://github.com/jerryorta-dev) |

[<img alt="pgrzeszczak" src="https://avatars.githubusercontent.com/u/3300099?v=3&s=117" width="117">](https://github.com/pgrzeszczak) |[<img alt="e-oz" src="https://avatars.githubusercontent.com/u/526352?v=3&s=117" width="117">](https://github.com/e-oz) |[<img alt="natarajanmca11" src="https://avatars.githubusercontent.com/u/9244766?v=3&s=117" width="117">](https://github.com/natarajanmca11) |[<img alt="domfarolino" src="https://avatars.githubusercontent.com/u/9669289?v=3&s=117" width="117">](https://github.com/domfarolino) |[<img alt="JayKan" src="https://avatars.githubusercontent.com/u/1400300?v=3&s=117" width="117">](https://github.com/JayKan) |[<img alt="larsthorup" src="https://avatars.githubusercontent.com/u/1202959?v=3&s=117" width="117">](https://github.com/larsthorup) |
:---: |:---: |:---: |:---: |:---: |:---: |
[pgrzeszczak](https://github.com/pgrzeszczak) |[e-oz](https://github.com/e-oz) |[natarajanmca11](https://github.com/natarajanmca11) |[domfarolino](https://github.com/domfarolino) |[JayKan](https://github.com/JayKan) |[larsthorup](https://github.com/larsthorup) |

[<img alt="JakePartusch" src="https://avatars.githubusercontent.com/u/6424140?v=3&s=117" width="117">](https://github.com/JakePartusch) |[<img alt="LuxDie" src="https://avatars.githubusercontent.com/u/12536671?v=3&s=117" width="117">](https://github.com/LuxDie) |[<img alt="amedinavalencia" src="https://avatars.githubusercontent.com/u/21317797?v=3&s=117" width="117">](https://github.com/amedinavalencia) |[<img alt="tsm91" src="https://avatars.githubusercontent.com/u/4459551?v=3&s=117" width="117">](https://github.com/tsm91) |[<img alt="jvitor83" src="https://avatars.githubusercontent.com/u/3493339?v=3&s=117" width="117">](https://github.com/jvitor83) |[<img alt="juristr" src="https://avatars.githubusercontent.com/u/542458?v=3&s=117" width="117">](https://github.com/juristr) |
:---: |:---: |:---: |:---: |:---: |:---: |
[JakePartusch](https://github.com/JakePartusch) |[LuxDie](https://github.com/LuxDie) |[amedinavalencia](https://github.com/amedinavalencia) |[tsm91](https://github.com/tsm91) |[jvitor83](https://github.com/jvitor83) |[juristr](https://github.com/juristr) |

[<img alt="JohnCashmore" src="https://avatars.githubusercontent.com/u/2050794?v=3&s=117" width="117">](https://github.com/JohnCashmore) |[<img alt="ouq77" src="https://avatars.githubusercontent.com/u/1796191?v=3&s=117" width="117">](https://github.com/ouq77) |[<img alt="devanp92" src="https://avatars.githubusercontent.com/u/4533277?v=3&s=117" width="117">](https://github.com/devanp92) |[<img alt="hAWKdv" src="https://avatars.githubusercontent.com/u/4449497?v=3&s=117" width="117">](https://github.com/hAWKdv) |[<img alt="JunaidZA" src="https://avatars.githubusercontent.com/u/16782593?v=3&s=117" width="117">](https://github.com/JunaidZA) |[<img alt="c-ice" src="https://avatars.githubusercontent.com/u/347238?v=3&s=117" width="117">](https://github.com/c-ice) |
:---: |:---: |:---: |:---: |:---: |:---: |
[JohnCashmore](https://github.com/JohnCashmore) |[ouq77](https://github.com/ouq77) |[devanp92](https://github.com/devanp92) |[hAWKdv](https://github.com/hAWKdv) |[JunaidZA](https://github.com/JunaidZA) |[c-ice](https://github.com/c-ice) |

[<img alt="markharding" src="https://avatars.githubusercontent.com/u/851436?v=3&s=117" width="117">](https://github.com/markharding) |[<img alt="ojacquemart" src="https://avatars.githubusercontent.com/u/1189345?v=3&s=117" width="117">](https://github.com/ojacquemart) |[<img alt="tiagomapmarques" src="https://avatars.githubusercontent.com/u/704002?v=3&s=117" width="117">](https://github.com/tiagomapmarques) |[<img alt="TuiKiken" src="https://avatars.githubusercontent.com/u/959821?v=3&s=117" width="117">](https://github.com/TuiKiken) |[<img alt="evanplaice" src="https://avatars.githubusercontent.com/u/303159?v=3&s=117" width="117">](https://github.com/evanplaice) |[<img alt="gotenxds" src="https://avatars.githubusercontent.com/u/3519520?v=3&s=117" width="117">](https://github.com/gotenxds) |
:---: |:---: |:---: |:---: |:---: |:---: |
[markharding](https://github.com/markharding) |[ojacquemart](https://github.com/ojacquemart) |[tiagomapmarques](https://github.com/tiagomapmarques) |[TuiKiken](https://github.com/TuiKiken) |[evanplaice](https://github.com/evanplaice) |[gotenxds](https://github.com/gotenxds) |

[<img alt="turbohappy" src="https://avatars.githubusercontent.com/u/437299?v=3&s=117" width="117">](https://github.com/turbohappy) |[<img alt="karlhaas" src="https://avatars.githubusercontent.com/u/7677394?v=3&s=117" width="117">](https://github.com/karlhaas) |[<img alt="troyanskiy" src="https://avatars.githubusercontent.com/u/1538862?v=3&s=117" width="117">](https://github.com/troyanskiy) |[<img alt="Bigous" src="https://avatars.githubusercontent.com/u/6886560?v=3&s=117" width="117">](https://github.com/Bigous) |[<img alt="ip512" src="https://avatars.githubusercontent.com/u/1699735?v=3&s=117" width="117">](https://github.com/ip512) |[<img alt="Green-Cat" src="https://avatars.githubusercontent.com/u/3328823?v=3&s=117" width="117">](https://github.com/Green-Cat) |
:---: |:---: |:---: |:---: |:---: |:---: |
[turbohappy](https://github.com/turbohappy) |[karlhaas](https://github.com/karlhaas) |[troyanskiy](https://github.com/troyanskiy) |[Bigous](https://github.com/Bigous) |[ip512](https://github.com/ip512) |[Green-Cat](https://github.com/Green-Cat) |

[<img alt="Yonet" src="https://avatars.githubusercontent.com/u/3523671?v=3&s=117" width="117">](https://github.com/Yonet) |[<img alt="edud69" src="https://avatars.githubusercontent.com/u/1514745?v=3&s=117" width="117">](https://github.com/edud69) |[<img alt="daixtrose" src="https://avatars.githubusercontent.com/u/5588692?v=3&s=117" width="117">](https://github.com/daixtrose) |[<img alt="amaltsev" src="https://avatars.githubusercontent.com/u/2480962?v=3&s=117" width="117">](https://github.com/amaltsev) |[<img alt="yassirh" src="https://avatars.githubusercontent.com/u/4649139?v=3&s=117" width="117">](https://github.com/yassirh) |[<img alt="bbarry" src="https://avatars.githubusercontent.com/u/84951?v=3&s=117" width="117">](https://github.com/bbarry) |
:---: |:---: |:---: |:---: |:---: |:---: |
[Yonet](https://github.com/Yonet) |[edud69](https://github.com/edud69) |[daixtrose](https://github.com/daixtrose) |[amaltsev](https://github.com/amaltsev) |[yassirh](https://github.com/yassirh) |[bbarry](https://github.com/bbarry) |

[<img alt="nulldev07" src="https://avatars.githubusercontent.com/u/2115712?v=3&s=117" width="117">](https://github.com/nulldev07) |[<img alt="taguan" src="https://avatars.githubusercontent.com/u/1026937?v=3&s=117" width="117">](https://github.com/taguan) |[<img alt="bbarry" src="https://avatars.githubusercontent.com/u/84951?v=3&s=117" width="117">](https://github.com/bbarry) |[<img alt="sonicparke" src="https://avatars.githubusercontent.com/u/1139721?v=3&s=117" width="117">](https://github.com/sonicparke) |[<img alt="brendanbenson" src="https://avatars.githubusercontent.com/u/866866?v=3&s=117" width="117">](https://github.com/brendanbenson) |[<img alt="brian428" src="https://avatars.githubusercontent.com/u/140338?v=3&s=117" width="117">](https://github.com/brian428) |
:---: |:---: |:---: |:---: |:---: |:---: |
[nulldev07](https://github.com/nulldev07) |[taguan](https://github.com/taguan) |[bbarry](https://github.com/bbarry) |[sonicparke](https://github.com/sonicparke) |[brendanbenson](https://github.com/brendanbenson) |[brian428](https://github.com/brian428) |

[<img alt="briantopping" src="https://avatars.githubusercontent.com/u/158115?v=3&s=117" width="117">](https://github.com/briantopping) |[<img alt="ckapilla" src="https://avatars.githubusercontent.com/u/451875?v=3&s=117" width="117">](https://github.com/ckapilla) |[<img alt="cadriel" src="https://avatars.githubusercontent.com/u/205520?v=3&s=117" width="117">](https://github.com/cadriel) |[<img alt="dszymczuk" src="https://avatars.githubusercontent.com/u/539352?v=3&s=117" width="117">](https://github.com/dszymczuk) |[<img alt="dmurat" src="https://avatars.githubusercontent.com/u/470930?v=3&s=117" width="117">](https://github.com/dmurat) |[<img alt="peah90" src="https://avatars.githubusercontent.com/u/4435255?v=3&s=117" width="117">](https://github.com/peah90) |
:---: |:---: |:---: |:---: |:---: |:---: |
[briantopping](https://github.com/briantopping) |[ckapilla](https://github.com/ckapilla) |[cadriel](https://github.com/cadriel) |[dszymczuk](https://github.com/dszymczuk) |[dmurat](https://github.com/dmurat) |[peah90](https://github.com/peah90) |

[<img alt="dstockhammer" src="https://avatars.githubusercontent.com/u/1156637?v=3&s=117" width="117">](https://github.com/dstockhammer) |[<img alt="dwido" src="https://avatars.githubusercontent.com/u/154235?v=3&s=117" width="117">](https://github.com/dwido) |[<img alt="totev" src="https://avatars.githubusercontent.com/u/4454638?v=3&s=117" width="117">](https://github.com/totev) |[<img alt="nosachamos" src="https://avatars.githubusercontent.com/u/1261686?v=3&s=117" width="117">](https://github.com/nosachamos) |[<img alt="koodikindral" src="https://avatars.githubusercontent.com/u/6285484?v=3&s=117" width="117">](https://github.com/koodikindral) |[<img alt="hpinsley" src="https://avatars.githubusercontent.com/u/750098?v=3&s=117" width="117">](https://github.com/hpinsley) |
:---: |:---: |:---: |:---: |:---: |:---: |
[dstockhammer](https://github.com/dstockhammer) |[dwido](https://github.com/dwido) |[totev](https://github.com/totev) |[nosachamos](https://github.com/nosachamos) |[koodikindral](https://github.com/koodikindral) |[hpinsley](https://github.com/hpinsley) |

[<img alt="NN77" src="https://avatars.githubusercontent.com/u/3319904?v=3&s=117" width="117">](https://github.com/NN77) |[<img alt="isidroamv" src="https://avatars.githubusercontent.com/u/4197621?v=3&s=117" width="117">](https://github.com/isidroamv) |[<img alt="jeffbcross" src="https://avatars.githubusercontent.com/u/463703?v=3&s=117" width="117">](https://github.com/jeffbcross) |[<img alt="Drane" src="https://avatars.githubusercontent.com/u/389499?v=3&s=117" width="117">](https://github.com/Drane) |[<img alt="johnjelinek" src="https://avatars.githubusercontent.com/u/873610?v=3&s=117" width="117">](https://github.com/johnjelinek) |[<img alt="JunusErgin" src="https://avatars.githubusercontent.com/u/7281463?v=3&s=117" width="117">](https://github.com/JunusErgin) |
:---: |:---: |:---: |:---: |:---: |:---: |
[NN77](https://github.com/NN77) |[isidroamv](https://github.com/isidroamv) |[jeffbcross](https://github.com/jeffbcross) |[Drane](https://github.com/Drane) |[johnjelinek](https://github.com/johnjelinek) |[JunusErgin](https://github.com/JunusErgin) |

[<img alt="justindujardin" src="https://avatars.githubusercontent.com/u/101493?v=3&s=117" width="117">](https://github.com/justindujardin) |[<img alt="lihaibh" src="https://avatars.githubusercontent.com/u/4681233?v=3&s=117" width="117">](https://github.com/lihaibh) |[<img alt="Brooooooklyn" src="https://avatars.githubusercontent.com/u/3468483?v=3&s=117" width="117">](https://github.com/Brooooooklyn) |[<img alt="tandu" src="https://avatars.githubusercontent.com/u/273313?v=3&s=117" width="117">](https://github.com/tandu) |[<img alt="inkidotcom" src="https://avatars.githubusercontent.com/u/100466?v=3&s=117" width="117">](https://github.com/inkidotcom) |[<img alt="daixtrose" src="https://avatars.githubusercontent.com/u/5588692?v=3&s=117" width="117">](https://github.com/daixtrose) |
:---: |:---: |:---: |:---: |:---: |:---: |
[justindujardin](https://github.com/justindujardin) |[lihaibh](https://github.com/lihaibh) |[Brooooooklyn](https://github.com/Brooooooklyn) |[tandu](https://github.com/tandu) |[inkidotcom](https://github.com/inkidotcom) |[daixtrose](https://github.com/daixtrose) |

[<img alt="oferze" src="https://avatars.githubusercontent.com/u/5157769?v=3&s=117" width="117">](https://github.com/oferze) |[<img alt="ocombe" src="https://avatars.githubusercontent.com/u/265378?v=3&s=117" width="117">](https://github.com/ocombe) |[<img alt="gdi2290" src="https://avatars.githubusercontent.com/u/1016365?v=3&s=117" width="117">](https://github.com/gdi2290) |[<img alt="typekpb" src="https://avatars.githubusercontent.com/u/499820?v=3&s=117" width="117">](https://github.com/typekpb) |[<img alt="philipooo" src="https://avatars.githubusercontent.com/u/1702399?v=3&s=117" width="117">](https://github.com/philipooo) |[<img alt="redian" src="https://avatars.githubusercontent.com/u/816941?v=3&s=117" width="117">](https://github.com/redian) |
:---: |:---: |:---: |:---: |:---: |:---: |
[oferze](https://github.com/oferze) |[ocombe](https://github.com/ocombe) |[gdi2290](https://github.com/gdi2290) |[typekpb](https://github.com/typekpb) |[philipooo](https://github.com/philipooo) |[redian](https://github.com/redian) |

[<img alt="alexweber" src="https://avatars.githubusercontent.com/u/14409?v=3&s=117" width="117">](https://github.com/alexweber) |[<img alt="robbatt" src="https://avatars.githubusercontent.com/u/1379424?v=3&s=117" width="117">](https://github.com/robbatt) |[<img alt="robertpenner" src="https://avatars.githubusercontent.com/u/79827?v=3&s=117" width="117">](https://github.com/robertpenner) |[<img alt="Sjiep" src="https://avatars.githubusercontent.com/u/5003111?v=3&s=117" width="117">](https://github.com/Sjiep) |[<img alt="sclausen" src="https://avatars.githubusercontent.com/u/916076?v=3&s=117" width="117">](https://github.com/sclausen) |[<img alt="heavymery" src="https://avatars.githubusercontent.com/u/3417123?v=3&s=117" width="117">](https://github.com/heavymery) |
:---: |:---: |:---: |:---: |:---: |:---: |
[alexweber](https://github.com/alexweber) |[robbatt](https://github.com/robbatt) |[robertpenner](https://github.com/robertpenner) |[Sjiep](https://github.com/Sjiep) |[sclausen](https://github.com/sclausen) |[heavymery](https://github.com/heavymery) |

[<img alt="tapas4java" src="https://avatars.githubusercontent.com/u/2254963?v=3&s=117" width="117">](https://github.com/tapas4java) |[<img alt="valera-rozuvan" src="https://avatars.githubusercontent.com/u/2273090?v=3&s=117" width="117">](https://github.com/valera-rozuvan) |[<img alt="vincentpalita" src="https://avatars.githubusercontent.com/u/2738822?v=3&s=117" width="117">](https://github.com/vincentpalita) |[<img alt="Yalrafih" src="https://avatars.githubusercontent.com/u/7460011?v=3&s=117" width="117">](https://github.com/Yalrafih) |[<img alt="billsworld" src="https://avatars.githubusercontent.com/u/16911647?v=3&s=117" width="117">](https://github.com/billsworld) |[<img alt="blackheart01" src="https://avatars.githubusercontent.com/u/1414277?v=3&s=117" width="117">](https://github.com/blackheart01) |
:---: |:---: |:---: |:---: |:---: |:---: |
[tapas4java](https://github.com/tapas4java) |[valera-rozuvan](https://github.com/valera-rozuvan) |[vincentpalita](https://github.com/vincentpalita) |[Yalrafih](https://github.com/Yalrafih) |[billsworld](https://github.com/billsworld) |[blackheart01](https://github.com/blackheart01) |

[<img alt="butterfieldcons" src="https://avatars.githubusercontent.com/u/12204784?v=3&s=117" width="117">](https://github.com/butterfieldcons) |[<img alt="danielcrisp" src="https://avatars.githubusercontent.com/u/1104814?v=3&s=117" width="117">](https://github.com/danielcrisp) |[<img alt="jgolla" src="https://avatars.githubusercontent.com/u/1542447?v=3&s=117" width="117">](https://github.com/jgolla) |[<img alt="omerfarukyilmaz" src="https://avatars.githubusercontent.com/u/5538485?v=3&s=117" width="117">](https://github.com/omerfarukyilmaz) |[<img alt="pbazurin-softheme" src="https://avatars.githubusercontent.com/u/4518922?v=3&s=117" width="117">](https://github.com/pbazurin-softheme) |[<img alt="rossedfort" src="https://avatars.githubusercontent.com/u/11775628?v=3&s=117" width="117">](https://github.com/rossedfort) |
:---: |:---: |:---: |:---: |:---: |:---: |
[butterfieldcons](https://github.com/butterfieldcons) |[danielcrisp](https://github.com/danielcrisp) |[jgolla](https://github.com/jgolla) |[omerfarukyilmaz](https://github.com/omerfarukyilmaz) |[pbazurin-softheme](https://github.com/pbazurin-softheme) |[rossedfort](https://github.com/rossedfort) |

[<img alt="savcha" src="https://avatars.githubusercontent.com/u/879542?v=3&s=117" width="117">](https://github.com/savcha) |[<img alt="ultrasonicsoft" src="https://avatars.githubusercontent.com/u/4145169?v=3&s=117" width="117">](https://github.com/ultrasonicsoft) |[<img alt="taguan" src="https://avatars.githubusercontent.com/u/1026937?v=3&s=117" width="117">](https://github.com/taguan) |
:---: |:---: |:---: |
[savcha](https://github.com/savcha) |[ultrasonicsoft](https://github.com/ultrasonicsoft) |[taguan](https://github.com/taguan) |

## Wiki Contributors

Here are all the awesome guys who are helping to make the project's wiki even better!

```
40  Minko Gechev
22  Clayton K. N. Passos
15  Shyam-Chen
14  Vincent van Proosdij
 8  matthew harwood
 8  Christian Dobert
 8  Robert van Kints
 6  Ludovic HENIN
 5  Attila Egyed
 4  davidgfolch
 4  Chris Kapilla
 3  Stefan Schüller
 3  Patrick Hillert
 3  Ezequiel Cicala
 3  Brian Kotek
 2  Nathan Walker
 2  Dinsitro
 2  Drake Wilson
 2  Simon Hampton
 2  Yannick Koehler
 2  Giovanni Candido da Silva
 2  hhubik
 2  Joshua Wiens
 2  Cy Klassen
 1  zcsongor
 1  Ameer Nuri
 1  Ankit Kamboj
 1  BouncingBit
 1  Dang Tung
 1  Eddie Sun
 1  Enrico Secondulfo
 1  Eugene Serkin
 1  Ishara Samantha
 1  Myrmex
 1  Pol Stafford
 1  Raphael Schmitt
 1  Robert Stoll
 1  Sebastian Fuss
 1  Sebastien de Salvador
 1  The Ult
 1  Yonet
 1  graham
 1  kiuka
 1  silicakes
 1  Adam Johannesmeyer
```

# Change Log

You can follow the [Angular change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
