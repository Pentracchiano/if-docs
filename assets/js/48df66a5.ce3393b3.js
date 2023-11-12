"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[314],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(f,r(r({ref:t},m),{},{components:n})):a.createElement(f,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(4137));const o={},r="Boavizta",l={unversionedId:"models/boavizta",id:"models/boavizta",title:"Boavizta",description:"Please note Boavizta is a community model, not part of the IF standard library. This means the IF core team are not closely monitoring these models to keep them up to date. You should do your own research before implementing them!",source:"@site/docs/05-models/boavizta.md",sourceDirName:"05-models",slug:"/models/boavizta",permalink:"/models/boavizta",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/ief/docs/05-models/boavizta.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model Documentation",permalink:"/models/"},next:{title:"Cloud Carbon Footprint",permalink:"/models/ccf"}},p={},s=[{value:"Implementation",id:"implementation",level:2},{value:"Model name",id:"model-name",level:2},{value:"Parameters",id:"parameters",level:2},{value:"model config",id:"model-config",level:3},{value:"observations",id:"observations",level:3},{value:"Returns",id:"returns",level:2},{value:"Usage",id:"usage",level:2},{value:"Example impl",id:"example-impl",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"boavizta"},"Boavizta"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please note")," Boavizta is a community model, not part of the IF standard library. This means the IF core team are not closely monitoring these models to keep them up to date. You should do your own research before implementing them!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://boavizta.org/"},"Boavizta")," is an environmental impact calculator that exposes an API we use in IEF to retrieve energy and embodied carbon estimates."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"Boavizta exposes a ",(0,i.kt)("a",{parentName:"p",href:"https://doc.api.boavizta.org/"},"REST API"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"boavizta")," model is included in an IEF pipeline, IEF sends API requests to Boavizta. The request payload is generated from input data provided to IEF in an ",(0,i.kt)("inlineCode",{parentName:"p"},"impl")," file."),(0,i.kt)("h2",{id:"model-name"},"Model name"),(0,i.kt)("p",null,"IEF recognizes the Boavizta model as ",(0,i.kt)("inlineCode",{parentName:"p"},"boavizta-cpu"),"."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"model-config"},"model config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allocation"),": manufacturing impacts can be reported with two allocation strategies: ",(0,i.kt)("inlineCode",{parentName:"li"},"TOTAL")," is the total impact without adjusting for usage. ",(0,i.kt)("inlineCode",{parentName:"li"},"LINEAR")," distrbutes the impact linearly over the lifespan of a device. See ",(0,i.kt)("a",{parentName:"li",href:"https://doc.api.boavizta.org/Explanations/manufacture_methodology/#hover-a-specific-duration-allocation-linear"},"Boavizta docs")," for more info."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"physical-processor"),": the name of the physical processor being used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core-units"),": Number of physical cores on a CPU"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verbose"),": determines how much information the API response contains (optional)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expected-lifespan"),": the lifespan of the component, in seconds"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"location"),': geographic location used to lookup grid carbon intensity, e.g. "USA" (optional - falls back to Boavizta default)')),(0,i.kt)("h3",{id:"observations"},"observations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cpu-util"),": percentage CPU utilization for a given observation")),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embodied-carbon"),": carbon emitted in manufacturing the device, in gCO2eq"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"e-cpu"),": energy used by CPU in kWh")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To run the ",(0,i.kt)("inlineCode",{parentName:"p"},"boavista-cpu")," model an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"BoaviztaCpuImpactModel")," must be created and its ",(0,i.kt)("inlineCode",{parentName:"p"},"configure()")," method called. Then, the model's ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," method can be called, passing ",(0,i.kt)("inlineCode",{parentName:"p"},"duration"),",",(0,i.kt)("inlineCode",{parentName:"p"},"cpu-util"),",",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," arguments."),(0,i.kt)("p",null,"This is how you could run the model in Typescript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {BoaviztaCpuImpactModel, KeyValuePair} from '../src';\n\nasync function runBoavizta() {\n  const params: KeyValuePair = {};\n  params.allocation = 'TOTAL';\n  params.verbose = true;\n\n  const newModel = await new BoaviztaCpuImpactModel().configure('test', {\n        'physical-processor': 'Intel Xeon Gold 6138f',\n        'core-units': 24,\n        'expected-lifespan': 4 * 365 * 24 * 60 * 60,\n      })\n  const usage = await newModel.calculate([\n    {\n      timestamp: '2021-01-01T00:00:00Z',\n      duration: 1,\n      cpu-util: 34,\n    },\n    {\n      timestamp: '2021-01-01T00:00:15Z',\n      duration: 1,\n      cpu-util: 12,\n    },\n    {\n      timestamp: '2021-01-01T00:00:30Z',\n      duration: 1,\n      cpu-util: 1,\n    },\n    {\n      timestamp: '2021-01-01T00:00:45Z',\n      duration: 1,\n      cpu-util: 78,\n    },\n  ]);\n\n  console.log(usage);\n}\n\nrunBoavizta();\n")),(0,i.kt)("h2",{id:"example-impl"},"Example impl"),(0,i.kt)("p",null,"In IEF models are expected to be invoked from an ",(0,i.kt)("inlineCode",{parentName:"p"},"impl")," file. This is a yaml containing the model configuration and inputs. The following ",(0,i.kt)("inlineCode",{parentName:"p"},"impl")," initializes and runs the ",(0,i.kt)("inlineCode",{parentName:"p"},"boavizta-cpu")," model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: boavizta-demo\ndescription: calls boavizta api\ntags:\ninitialize:\n  models:\n    - name: boavizta-cpu\n      kind: plugin\n      model: BoaviztaOutputModel\n      path: boavizta-cpu\n      config:\n        allocation: LINEAR\n        verbose: true\ngraph:\n  children:\n    child:\n      pipeline: \n        - boavizta-cpu\n      config:\n        boavizta-cpu:\n          core-units: 24\n          physical-processor: Intel\xae Core\u2122 i7-1185G7\n      inputs:\n        - timestamp: 2023-07-06T00:00 # [KEYWORD] [NO-SUBFIELDS] time when measurement occurred\n          duration: 3600 # Secs\n          cpu-util: 18.392\n        - timestamp: 2023-08-06T00:00 # [KEYWORD] [NO-SUBFIELDS] time when measurement occurred\n          duration: 3600 # Secs\n          cpu-util: 16\n          \n")),(0,i.kt)("p",null,"You can run this by passing it to ",(0,i.kt)("inlineCode",{parentName:"p"},"impact-engine"),". Run impact using the following command run from the project root:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-node scripts/impact.ts --impl ./examples/impls/boavizta.yml --ompl ./examples/ompls/boavizta.yml\n")))}u.isMDXComponent=!0}}]);