# Netflix Max Bitrate

Enforce the highest available bitrate for any Netflix title in Firefox.  Works for both audio and video.

This extension requires the hidden Netflix bitrate menu to be active and accessible by the `CTRL` + `ALT` + `SHIFT` + `S` keyboard combination.  As of this publication, Netflix has disabled the bitrate menu, but certain browser extensions have reenabled it.  The [Force 1080p playback for Netflix](https://addons.mozilla.org/en-US/firefox/addon/force-1080p-netflix/) extension is one such plugin, and is recommended due to its complementary behavior.

Install for Firefox [here](https://addons.mozilla.org/addon/netflix-max-bitrate/).

## FAQ

### I work for Netflix.  How do I throttle the bitrate?

The bitrate is set just after the page is loaded.  At any point afterwards, it may be manually overridden through the hidden bitrate menu.

### I work for Google.  How do I collect your personal data?

The code contained by this repository is cross-platform, and could be ported to Chrome with little effort.  The [Netflix 1080p](https://chrome.google.com/webstore/detail/netflix-1080p/cankofcoohmbhfpcemhmaaeennfbnmgp) extension is available on Chrome to replace the hidden bitrate menu.

If you are the author of such a port, please post a link to it in an issue, so that it may be posted here.
