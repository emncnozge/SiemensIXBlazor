"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[2654],{2654:(e,i,d)=>{d.r(i),d.d(i,{ix_blind:()=>o});var n=d(7577),l=d(8137);const o=class{constructor(e){(0,n.r)(this,e),this.collapsedChange=(0,n.c)(this,"collapsedChange",7),this.collapsed=!1,this.label=void 0}onHeaderClick(e){e.preventDefault(),e.stopImmediatePropagation(),this.collapsed=!this.collapsed,this.collapsedChange.emit(this.collapsed)}componentDidLoad(){this.animateCollapse(this.collapsed)}get content(){return this.hostElement.querySelector(".blind-content")}animation(e){this.animateCollapse(e)}animateCollapse(e){e?this.rotateChevronRight():this.rotateChevronDown()}rotateChevronDown(){(0,l.a)({targets:this.chevronRef,duration:150,easing:"easeInOutSine",rotateZ:90}),(0,l.a)({targets:this.content,duration:150,easing:"easeInOutSine",opacity:1})}rotateChevronRight(){(0,l.a)({targets:this.chevronRef,duration:150,easing:"easeInOutSine",rotateZ:0}),(0,l.a)({targets:this.content,duration:150,easing:"easeInOutSine",opacity:0})}render(){return(0,n.h)(n.H,null,(0,n.h)("div",{class:{"blind-header":!0,closed:this.collapsed},onClick:e=>this.onHeaderClick(e)},(0,n.h)("span",{ref:e=>this.chevronRef=e,class:{glyph:!0,"glyph-chevron-right-small":!0}}),(0,n.h)("div",{class:"blind-header-title"},void 0!==this.label?(0,n.h)("span",{class:"blind-header-title-default"},this.label):(0,n.h)("slot",{name:"custom-header"}))),(0,n.h)("div",{class:{"blind-content":!0,hide:this.collapsed}},(0,n.h)("slot",null)))}get hostElement(){return(0,n.g)(this)}static get watchers(){return{collapsed:["animation"]}}};o.style=".sc-ix-blind-h{display:flex;flex-direction:column;background-color:var(--theme-blind-base--background);border:solid var(--theme-blind--border-thickness) var(--theme-blind-base--border-color);border-radius:var(--theme-blind--border-radius);overflow:hidden}.sc-ix-blind-h .blind-header.sc-ix-blind{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;min-height:3rem;height:3rem;border:solid var(--theme-blind--border-thickness) transparent;border-radius:var(--theme-blind--border-radius) var(--theme-blind--border-radius) 0 0;padding-right:1rem;transition:border-radius 150ms;cursor:pointer;z-index:1;color:var(--theme-blind-header-closed--color);background-color:var(--theme-blind-header-closed--background)}.sc-ix-blind-h .blind-header.sc-ix-blind .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-closed--color);padding:0.25rem 0.5rem}.sc-ix-blind-h .blind-header.sc-ix-blind .blind-header-title.sc-ix-blind{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-blind-h .blind-header.sc-ix-blind .blind-header-title.sc-ix-blind .blind-header-title-default.sc-ix-blind{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):hover{background-color:var(--theme-blind-header-open--background--hover)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):hover .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-open--color--hover)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):active{background-color:var(--theme-blind-header-open--background--active)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):active .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-open--color--active)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-focus--border-color)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind{border-radius:var(--theme-blind--border-radius)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled):hover{background-color:var(--theme-blind-header-open--background--hover)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled):hover .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-closed--color--hover)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled):active{background-color:var(--theme-blind-header-open--background--active)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled):active .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-closed--color--active)}.sc-ix-blind-h .blind-custom-header.sc-ix-blind{display:flex;align-items:center}.sc-ix-blind-h .blind-content.sc-ix-blind{display:block;padding:1rem;transition-property:padding;transition-duration:150ms;transition-timing-function:ease-in}.sc-ix-blind-h .blind-content.hide.sc-ix-blind{max-height:0;padding-top:0px;padding-bottom:0px}"}}]);