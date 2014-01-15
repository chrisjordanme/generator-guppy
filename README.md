# generator-guppy [![Build Status](https://secure.travis-ci.org/chrisjordanme/generator-guppy.png?branch=master)](https://travis-ci.org/chrisjordanme/generator-guppy)

A generator for [Yeoman](http://yeoman.io).


## Getting Started with the Guppy Generator

This is a test generator for me to learn how to write Yeoman generators while learning a little about gulpjs, a new streaming build system I keep hearing about. This is a
a big time work in progress and there are many things that are not functioning correctly.

**** As this is still in progress, I have not published to npm. Please continue reading for directions on use in its current state. ****

1) Clone the generator to your preferred location. CD into the generators root folder. Then...

```
$ npm link
```

2) Back out of that directory and create a new folder for your project.

```
$ mkdir myApp && cd $_
```
3) Run the generator
```
$ yo guppy
```

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-guppy from npm, run:

```
$ npm install -g generator-guppy
```

Finally, initiate the generator:

```
$ yo guppy
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
