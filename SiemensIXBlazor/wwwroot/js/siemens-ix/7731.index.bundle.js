"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[7731],{2976:(e,t,r)=>{r.d(t,{a:()=>i,b:()=>o,g:()=>a});const i=e=>e?"true":"false",a=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol})(e))return"Unknown";if((t=e)&&"string"==typeof t&&t.startsWith("data:image/svg+xml"))return"Unknown";var t;const r=e.replace("-filled","").split("-").map((e=>{const t=e.trim(),r=t.replace(/\d+/g,"");return 0===r.length?t:r})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===r.length?"Unknown":r},o=(e,t=[])=>{const r={};return s.forEach((i=>{e.hasAttribute(i)&&(null===e.getAttribute(i)||t.includes(i)||(r[i]=e.getAttribute(i),e.removeAttribute(i)))})),r},s=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},7731:(e,t,r)=>{r.r(t),r.d(t,{ix_toggle:()=>o});var i=r(6969),a=r(2976);const o=class{constructor(e){(0,i.r)(this,e),this.checkedChange=(0,i.c)(this,"checkedChange",7),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.textOn="On",this.textOff="Off",this.textIndeterminate="Mixed",this.hideText=!1}onCheckedChange(e){this.indeterminate&&(this.indeterminate=!1),this.checked=e,this.checkedChange.emit(this.checked)}render(){return(0,i.h)(i.H,{key:"4ba9c673e94ffceedf28fbf04a7d136720db55f4",class:{disabled:this.disabled},onClick:()=>this.onCheckedChange(!this.checked)},(0,i.h)("input",{key:"38b9f9e4577c54c1f930e93db5958f828e5fe789",disabled:this.disabled,indeterminate:this.indeterminate,checked:this.checked,role:"switch",tabindex:0,type:"checkbox","aria-checked":(0,a.a)(this.checked),onChange:e=>this.onCheckedChange(e.target.checked)}),(0,i.h)("label",{key:"0ec0fa498dde12fc557ab02fc785ef291a803dcd",class:"switch",tabIndex:-1},(0,i.h)("span",{key:"8101166f958219372a1ea6e509233b63c0d05ede",class:"slider"})),this.hideText?null:(0,i.h)(i.F,null,this.indeterminate?(0,i.h)("span",{class:"toggle-text","aria-hidden":(0,a.a)(!0)},this.textIndeterminate):(0,i.h)("span",{class:"toggle-text","aria-hidden":(0,a.a)(!0)},this.checked?this.textOn:this.textOff)))}get hostElement(){return(0,i.g)(this)}};o.style=':host{display:inline-flex;position:relative;height:2rem;justify-content:flex-start;align-items:center;margin-right:0.25rem;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .switch{position:relative;display:inline-block;width:3rem;min-width:3rem;max-width:3rem;height:1.5rem;margin-right:0.25rem}:host .switch input{opacity:0;width:0;height:0}:host .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--theme-switch-off--background);transition:150ms;border-radius:1.5rem}:host .slider:before{position:absolute;content:"";height:18px;width:18px;left:4px;bottom:3px;background-color:var(--theme-switch-thumb-off--background);transition:150ms;border-radius:50%}:host input{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host input:focus-visible+.switch>.slider{outline:1px solid var(--theme-color-focus-bdr);outline-offset:1px}:host input:checked+.switch>.slider{background-color:var(--theme-switch-on--background)}:host input:checked+.switch>.slider::before{background-color:var(--theme-switch-thumb-on--background);transform:translateX(1.35rem)}:host input+.switch:hover>.slider{background-color:var(--theme-switch-off--background--hover)}:host input+.switch:hover>.slider:before{background-color:var(--theme-switch-thumb-off--background--hover)}:host input+.switch:active>.slider{background-color:var(--theme-switch-off--background--active)}:host input+.switch:active>.slider:before{background-color:var(--theme-switch-thumb-off--background--active)}:host input:checked+.switch:hover>.slider{background-color:var(--theme-switch-on--background--hover)}:host input:checked+.switch:hover>.slider:before{background-color:var(--theme-switch-thumb-on--background--hover)}:host input:checked+.switch:active>.slider{background-color:var(--theme-switch-on--background--active)}:host input:checked+.switch:active>.slider:before{background-color:var(--theme-switch-thumb-on--background--active)}:host input:indeterminate+.switch>.slider::before{transform:translateX(0.7rem)}:host .toggle-text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host(.disabled){pointer-events:none}:host(.disabled) input+.switch{opacity:0.5}:host(.disabled) input+.switch>.slider{background-color:var(--theme-switch-off--background--disabled)}:host(.disabled) input+.switch>.slider:before{background-color:var(--theme-switch-thumb-off--background--disabled)}:host(.disabled) input:checked+.switch>.slider{background-color:var(--theme-switch-on--background--disabled)}:host(.disabled) input:checked+.switch>.slider:before{background-color:var(--theme-switch-thumb-on--background--disabled)}:host(.disabled) .toggle-text{color:var(--theme-color-weak-text)}'}}]);