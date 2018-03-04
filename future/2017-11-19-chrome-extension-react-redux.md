---
layout: post
section-type: post
title: A small Chrome extension using React and Redux
category: javascript
---

If you have tried to develop a Chrome extension, you must know that the struggle is real. The [Webstore Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard
) looks like a cemetery and we all know what happens when Google does not implement their new *cool design* in their products (R.I.P. [Picasa Web](http://googlephotos.blogspot.com.br/2016/02/moving-on-from-picasa.html)). Besides that, you always need to reload your extensions and also the active tab where your scripts are injected. All this work just to make a single change! Hopefully, there are several tools that can prevent you for doing such boring tasks and I'll be showing them in this article.

### The idea

This small project is a basic example of a Chrome extension that puts together a [React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) using [Redux](https://redux.js.org/) as predictable state container.

The core idea is to use only background scripts to handle all the extension logic and dispatch actions to the React UI. On the other hand, content scripts also send user actions to background scripts and receive a response. By doing this, we'll have a two-way communication method between content and background scripts.

### Folder structure

The source folder structure goes like this:

{% highlight bash %}
.
├── background
│   └── index.js
├── content
│   ├── AppContainer.js
│   ├── App.css
│   ├── App.js
│   ├── crash.png
│   ├── ErrorBoundary.js
│   ├── index.js
│   ├── logo.svg
│   └── store
│       ├── actions.js
│       ├── index.js
│       └── reducers.js
├── icons
│   ├── icon-19.png
│   ├── icon-38.png
│   └── icon-48.png
└── manifest.json
{% endhighlight %}

Here I decided to divide classes according to their usage. Basically, we'll have a content folder to holder only UI classes, actions, views and containers and a background folder that contains React/Redux modules.

## Final words

You can find the source code in the Refluxme repository [here](https://github.com/herodrigues/chrome-react-minimal).
