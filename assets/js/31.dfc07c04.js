(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{445:function(e,t,o){"use strict";o.r(t);var a=o(25),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"development"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),o("p",[e._v("An environment with Home Assistant/Node Red can be easily spun up using docker and docker-compose along with built in VSCode debug enabled.")]),e._v(" "),o("ol",[o("li",[e._v("Clone this repository: "),o("code",[e._v("git clone https://github.com/zachowj/node-red-contrib-home-assistant-websocket.git")])]),e._v(" "),o("li",[e._v("Install node dependencies as usual: "),o("code",[e._v("cd node-red-contrib-home-assistant-websocket && npm")])]),e._v(" "),o("li",[e._v("Start the docker dev environment: "),o("code",[e._v("npm run dev")]),e._v("\na. "),o("em",[e._v("Note: First run will take a bit to download the images ( home-assistants image is over 1gb (yikes!) after that launch is much quicker)")]),e._v("\nb. "),o("em",[e._v("Note: Also first run load of HomeAssistant web interface seems very slow, but after first time it's also much faster")])]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("npm run dev")]),e._v(" command will leave you with a terminal spitting out logs, "),o("code",[e._v("ctrl+c")]),e._v(" out of this and it kills all the servers by design, just run "),o("code",[e._v("npm run dev")]),e._v(" again to pick back up. The following services and ports are launched in the "),o("code",[e._v("dev")]),e._v(" script")])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("service")]),e._v(" "),o("th",[e._v("port mappings")]),e._v(" "),o("th",[e._v("info")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("home-assistant")]),e._v(" "),o("td",[o("code",[e._v("8123:8123")]),e._v(", "),o("code",[e._v("8300:8300")])]),e._v(" "),o("td",[e._v("exposed for local access via browser")])]),e._v(" "),o("tr",[o("td",[e._v("node-red")]),e._v(" "),o("td",[o("code",[e._v("1880:1880")]),e._v(", "),o("code",[e._v("9123:9229")])]),e._v(" "),o("td",[e._v("exposed for local access via browser, "),o("code",[e._v("9123")]),e._v(" is used for debugging. Includes default flow example connected to "),o("code",[e._v("home-assistant")])])])])]),e._v(" "),o("h2",{attrs:{id:"docker-tips"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-tips"}},[e._v("#")]),e._v(" Docker Tips")]),e._v(" "),o("ol",[o("li",[e._v("If you run into environment issues running "),o("code",[e._v("npm run dev:clean")]),e._v(" should remove all docker data and get you back to a clean state")]),e._v(" "),o("li",[e._v("All data will be discarded when the docker container is removed. You can map volumes locally to persist data. Create and copy as directed below then modify "),o("code",[e._v("docker-compose.yaml")]),e._v(" to map the container directories to the created host dirs below. "),o("em",[e._v("See: "),o("code",[e._v("./_docker/docker-compose.mapped.yaml")]),e._v(" for an example or just use that file to launch manually")])])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("$ "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p _docker-volumes/home-assistant/config\n$ "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p _docker-volumes/node-red/data\n$ "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" _docker/home-assistant/root-fs/config/* _docker-volumes/home-assistant/config/\n$ "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" _docker/node-red/root-fs/data/*  _docker-volumes/node-red/data\n")])])]),o("h2",{attrs:{id:"node-debugger-via-vscode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-debugger-via-vscode"}},[e._v("#")]),e._v(" Node Debugger via VSCode")]),e._v(" "),o("p",[e._v("Optional but it's pretty nice if you have VSCode installed.")]),e._v(" "),o("ul",[o("li",[e._v("Open the project directory in VSCode")]),e._v(" "),o("li",[e._v("Go to the debug tab ( or "),o("code",[e._v("cmd/ctrl+shift+d")]),e._v(")")]),e._v(" "),o("li",[e._v('In the debug tab you should see an target for "Attach: Docker", run that guy and you can place debug breakpoints and changes will be reloaded within docker automatically')]),e._v(" "),o("li",[e._v("Open "),o("a",{attrs:{href:"http://localhost:8123",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8123"),o("OutboundLink")],1),e._v(" for HomeAssistant (password is "),o("code",[e._v("password")]),e._v(" by default).")]),e._v(" "),o("li",[e._v("For node-red either open up via the HomeAssistant web link or left hand menu or just open a browser tab to "),o("a",{attrs:{href:"http://localhost:1880",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:1880"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);