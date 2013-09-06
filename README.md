# [NixTuts](http://nixtuts.info) [![NixTuts IRC channel](https://kiwiirc.com/buttons/irc.spotchat.org/NixTuts.png)](https://kiwiirc.com/client/irc.spotchat.org/?nick=kiwi_guest|?#NixTuts) [![Build Status](https://travis-ci.org/nixtuts/site.png?branch=master)](https://travis-ci.org/nixtuts/site)

NixTuts is a site filled with tutorials. We aim to help *nix users, spread knowledge of *nix and help the Open Source/Free Software community!

## Build System

We use Travis-Ci to build and push to our server automatically whenever someone pushes to Git.
For more info, see our [Travis Repository Info](https://travis-ci.org/nixtuts/site),
as well as our [travis YAML file](.travis.yml) and [build scripts](\_scripts).

## Contributing

Our site is a static site, generated by Jekyll, so ensure you are familiar with Jekyll.

Firstly, fork our repository on Git, and clone your copy of it:

```bash
$ git clone https://github.com/nixtuts/site.git
```

Next, pull in dependencies by running Bundler (this requires Ruby):

```bash
$ bundler install
```

Now, you can modify to your heart's content.

To build our site, we have a couple of helpful scripts. Just run:

```bash
$ ./_scripts/before_install.sh # get all git submodules
$ ./_scripts/script.sh # build with jekyll
$ ./_scripts/after_script.sh # list all files
```

Finally, make a commit with the new update, create a pull request, and we'll try to add it in.
If you want to be a contributor, send in a few more pull requests, then ask @wei2912.

## Archives

Posts that are suspected of copyright violations or are irrelevant are to be put in _archives. You may use them for reference purposes or attempt to rewrite them.

## Modernizr

We use a customized version of Modernizr. The current features are selected in the [customized builder](http://modernizr.com/download/):

* Modernizr.load (yepnope.js)

If you need any more features, consult nixtuts.supp0rt@gmail.com
