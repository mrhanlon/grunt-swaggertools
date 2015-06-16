# grunt-swaggertools

> Grunt plugin for Swagger API tooling

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-swaggertools --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-swaggertools');
```

## The "swaggertools" task

Grunt Swagger Tools uses [swagger-tools](https://github.com/apigee-127/swagger-tools) under the hood. The grunt task currently supports validation of JSON spec files, but will support YAML as well as additional tasks in the future.

### Overview
In your project's Gruntfile, add a section named `swaggertools` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  swaggertools: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.version
Type: `String`
Default value: `v2`

Which version of the Swagger API Specification to validate against. Currently, only `v2` is supported, but additional versions may be supported in the future.


### Usage Examples

To use this this task, specify the version to validate against in `options.version` and then the path to the API specification in `specFile`.

```js
grunt.initConfig({
  swaggertools: {
    options: {
      version: 'v2'
    },
    specFile: 'path/to/api-spec.json'
  },
});
```

## Roadmap

- Add support for v1.2 schemas
- Add support for additional tasks, such as conversion
- Add support for YAML specification files

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### v0.1.0

2015-06-16

- Initial release
- Supports validation of Swagger 2.0 JSON Specifications
