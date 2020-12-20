(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{464:function(t,a,e){"use strict";e.r(a);var s=e(25),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"trigger-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trigger-state"}},[t._v("#")]),t._v(" Trigger: state")]),t._v(" "),e("p",[t._v("Much like the "),e("code",[t._v("State Changed Node")]),t._v(" however, provides some advanced functionality\naround common automation use cases.")]),t._v(" "),e("p",[t._v("An advanced version of "),e("code",[t._v("server:state-changed")]),t._v(" node")]),t._v(" "),e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("h3",{attrs:{id:"conditions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conditions"}},[t._v("#")]),t._v(" Conditions")]),t._v(" "),e("p",[t._v('This node has two default outputs "allowed" and "blocked". If all the\nconditions are true the default message will be sent to the "allowed" output\notherwise it will be sent to the "blocked" output.')]),t._v(" "),e("p",[e("strong",[t._v("See Also:")])]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/guide/conditionals.html"}},[t._v("Conditionals")])],1)]),t._v(" "),e("h3",{attrs:{id:"custom-outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-outputs"}},[t._v("#")]),t._v(" Custom Outputs")]),t._v(" "),e("p",[t._v("All the above conditions need to be true for any custom outputs to be sent,\nhaving zero conditions is a valid option. Each custom output can send the\ndefault message or a custom message. Also, each one can have its constraint\non whether or not to be sent.")]),t._v(" "),e("h2",{attrs:{id:"input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),e("h3",{attrs:{id:"enable-disable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-disable"}},[t._v("#")]),t._v(" Enable / Disable")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("If incoming payload or message is a string and equal to "),e("code",[t._v("enable")]),t._v(" or "),e("code",[t._v("disable")]),t._v(" then set the node accordingly.\nSaves over restarts.")]),t._v(" "),e("h3",{attrs:{id:"output-initially"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-initially"}},[t._v("#")]),t._v(" Output Initially")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("boolean")])])]),t._v(" "),e("p",[t._v("Output once on startup/deploy.")]),t._v(" "),e("h2",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("h3",{attrs:{id:"topic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#topic"}},[t._v("#")]),t._v(" topic")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("The entity_id that triggered the node")]),t._v(" "),e("h3",{attrs:{id:"payload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[t._v("#")]),t._v(" payload")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("The state as sent by home assistant")]),t._v(" "),e("h3",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" data")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("object")])])]),t._v(" "),e("p",[t._v("The original home assistant event containing "),e("code",[t._v("entity_id")]),t._v(" "),e("code",[t._v("new_state")]),t._v(" and "),e("code",[t._v("old_state")]),t._v(" properties")]),t._v(" "),e("h2",{attrs:{id:"testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),e("p",[t._v("To test automation without having to manually change state in-home assistant send an input "),e("code",[t._v("payload")]),t._v(" as an object which contains "),e("code",[t._v("entity_id")]),t._v(", "),e("code",[t._v("new_state")]),t._v(", and "),e("code",[t._v("old_state")]),t._v(" properties. This will trigger the node as if the event came from Home Assistant.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"entity_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test_entity"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"old_state"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"new_state"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://home-assistant.io/docs/configuration/state_object",target:"_blank",rel:"noopener noreferrer"}},[t._v("HA State Object"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);