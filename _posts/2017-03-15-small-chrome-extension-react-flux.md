---
layout: post
section-type: post
title: A small Chrome extension using React and Flux
category: javascript
---

If you have tried to develop a Chrome extension, you must know that the struggle is real. The [Webstore Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard
) looks like a cemetery and we all know what happens when Google does not implement their new *cool design* in their products (R.I.P. [Picasa Web](http://googlephotos.blogspot.com.br/2016/02/moving-on-from-picasa.html)). Besides that, you always need to reload your extensions and also the active tab where your scripts are injected. All this work just to make a single change! Hopefully, there are several tools that can prevent you for doing such boring tasks and I'll be showing them in this article.

By trying to not freak out, I spent some days searching for projects that integrate React and any predictable state container library on Google and Github. Guess what? I found almost nothing related to that. So, time was running out and I needed to integrate the current layout of [Guru extension](https://chrome.google.com/webstore/detail/guru/ekahpenefeneekjoanbhkodldleballn), which had changed a lot since v2. I couldn't complete that task in time, so I decided to keep going with static HTML files and postpone the React/Flux/Redux/Whatever integration to v4.

But now, we have something.

### The idea

**Refluxme** is a basic example of a Chrome extension that puts together a [React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) using [Flux TodoMVC](https://github.com/facebook/flux/tree/master/examples/flux-todomvc) logic flow.

The core idea is to use only background scripts to handle logic the extensions logic and dispatch actions to the React UI. On the other hand, content scripts also send user actions to background scripts and receive a response. By doing this, we'll have a two-way communication method between content and background scripts.

### Using shared IIFE for content and background scripts

In this scenario, we'll have two modules named **dispatcher** and  **messages**. Dispatcher module only creates a new instance of Flux Dispatcher while **messages** module handle all messages coming from content and background scripts.

For example, if the sender is a content script, then we simply call the method *dispatch* of Flux Dispatcher. If the sender is a background script, we print the message that was sent, but we could do anything else.

{% highlight js %}
const context = (typeof chrome.extension.getBackgroundPage !== 'function') ? 'content' : 'background'

  chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (request) {
      if (context === 'content') {
        chrome.storage.local.set({ [request.key]: request.payload }, () => {
          Dispatcher.dispatch(request);
        });
      } else {
        console.log('Message received from content script', request);
      }
    });
  });

  return {
    send: function (request) {
      if (context === 'content') {
        const port = chrome.runtime.connect();
        port.postMessage(request);
      }

      if (context === 'background') {
        chrome.tabs.query({ active: true }, function (tabs) {
          const port = chrome.tabs.connect(tabs[0].id);
          port.postMessage(request);
        });
      }
    }
  };
{% endhighlight %}

### Folder structure

The folder structure goes like this:

{% highlight bash %}
├── assets
│   └── base.css
├── background
│   └── index.js
├── content
│   ├── components
│   │   └── Sidebar.js
│   ├── containers
│   │   └── AppContainer.js
│   ├── data
│   │   ├── SidebarActions.js
│   │   └── SidebarStore.js
│   ├── index.js
│   └── views
│       └── AppView.js
├── icons
│   ├── icon-128.png
│   ├── icon-16.png
│   ├── icon-19.png
│   ├── icon-38.png
│   ├── icon-48.png
│   └── logo.svg
├── manifest.json
└── shared
    ├── dispatcher.js
    └── messages.js
{% endhighlight %}

Here I decided to divide classes according to their usage. Basically, this division is the same as the Flux structure. We'll have a content folder to holder only UI classes, actions, views and containers.

## Dispatching actions

Whenever an action is dispatched, we're going to store it using chrome.storage.local.set method. This allows us to persist data about UI state actions. For example, we want to know if the injected sidebar is open or closed. Each time we send a new action from background to content scripts, we set this action in chrome.storage.local. By doing this, we can avoid relying only in the current variable value.

## Final words

You can find the source code in the Refluxme repository [here](https://github.com/herodrigues/refluxme).
