"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[6006],{6006:(t,e,i)=>{i.r(e),i.d(e,{ix_tooltip:()=>r});var o=i(7577),s=i(3702);const r=class{constructor(t){(0,o.r)(this,t),this.onMouseEnterBind=this.showTooltip.bind(this),this.onMouseLeaveBind=this.hideTooltip.bind(this),this.tooltipCloseTimeInMS=50,this.for=void 0,this.titleContent=void 0,this.interactive=!1,this.visible=!1}get arrowElement(){return this.hostElement.shadowRoot.querySelector(".arrow")}destroyAutoUpdate(){this.disposeAutoUpdate&&this.disposeAutoUpdate()}showTooltip(t){clearTimeout(this.hideTooltipTimeout),this.visible=!0,this.computeTooltipPosition(t.target)}hideTooltip(){this.hideTooltipTimeout=setTimeout((()=>{this.visible=!1}),this.tooltipCloseTimeInMS),this.destroyAutoUpdate()}async computeTooltipPosition(t){this.disposeAutoUpdate=(0,s.a)(t,this.hostElement,(async()=>{const e=await(0,s.c)(t,this.hostElement,{strategy:"absolute",placement:"top",middleware:[(0,s.s)(),(0,s.o)(8),(0,s.b)({element:this.arrowElement}),(0,s.d)({alignment:"start",allowedPlacements:["top","bottom","right","left"]})]});if(e.middlewareData.arrow){const{x:t,y:i}=e.middlewareData.arrow;Object.assign(this.arrowElement.style,{left:null!=t?`${t}px`:"",top:null!=i?`${i}px`:""})}const{x:i,y:o}=e;Object.assign(this.hostElement.style,{left:null!==i?`${i}px`:"",top:null!==o?`${o}px`:""})}),{ancestorResize:!0,ancestorScroll:!0,elementResize:!0})}queryAnchorElements(){return Array.from(document.querySelectorAll(this.for))}registerTriggerListener(){this.queryAnchorElements().forEach((t=>{t.addEventListener("mouseenter",this.onMouseEnterBind),t.addEventListener("mouseleave",this.onMouseLeaveBind)}))}registerTooltipListener(){this.hostElement.addEventListener("mouseenter",(()=>{this.interactive&&clearTimeout(this.hideTooltipTimeout)})),this.hostElement.addEventListener("mouseleave",(()=>{this.hideTooltip()}))}componentDidLoad(){this.interactive&&(this.tooltipCloseTimeInMS=150),this.observer=new MutationObserver((()=>{this.registerTriggerListener()})),this.observer.observe(document.body,{attributes:!0,attributeFilter:["data-ix-tooltip"],childList:!0,subtree:!0}),this.registerTriggerListener(),this.registerTooltipListener()}disconnectedCallback(){this.observer.disconnect(),this.destroyAutoUpdate()}render(){return(0,o.h)(o.H,{class:{visible:this.visible}},(0,o.h)("div",{class:"tooltip-title"},(0,o.h)("slot",{name:"title-icon"}),(0,o.h)("ix-typography",{variant:"default-title"},this.titleContent,(0,o.h)("slot",{name:"title-content"}))),(0,o.h)("div",{class:{"tooltip-content":!0}},(0,o.h)("slot",null)),(0,o.h)("div",{class:"arrow"}))}get hostElement(){return(0,o.g)(this)}};r.style=':host{display:inline-block;position:absolute;left:0px;top:0px;max-width:18.25rem;opacity:0;visibility:collapse;overflow-wrap:break-word;border-radius:0.25rem;background-color:var(--theme-tootlip--background);padding:0.375rem 0.75rem 0.375rem 0.875rem;box-shadow:var(--theme-shadow-4)}:host .tooltip-title{display:flex;align-items:center}:host .tooltip-title ::slotted(ix-icon){margin-right:0.35rem}:host(.visible){opacity:1;visibility:visible}:host .arrow,:host .arrow::before{position:absolute;width:8px;height:8px;background:inherit}:host .arrow{visibility:hidden}:host .arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}'}}]);