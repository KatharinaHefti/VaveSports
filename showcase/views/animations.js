import './showcase.css'
import { html } from 'lit-html'
import store from '../data-store'
import 'view-base/type-poster'

import 'view-base/unit-link'
import 'view-base/unit-button'

export function animations() {

  const state = store.getState()

  return html `
    <p>busy indicator</p>

    <svg class="busy-indicator" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	 viewBox="0 0 1243 98" style="enable-background:new 0 0 1243 98;" xml:space="preserve">
    <style type="text/css">
    	.st0{opacity:0.4;fill:#6CBAFF;}
    	.st1{opacity:0.6;fill:#6CBAFF;}
    	.st2{opacity:0.8;fill:#6CBAFF;}
    	.st3{fill:#6CBAFF;}
    </style>
    <g id="Layer_1">
    	<path class="st0" d="M156.46,97.55H12.37c-7.09,0-12.84-5.75-12.84-12.84V13.29c0-7.09,5.75-12.84,12.84-12.84h144.09
    		c7.09,0,12.84,5.75,12.84,12.84v71.42C169.3,91.8,163.55,97.55,156.46,97.55z"/>
    </g>
    <g id="Layer_2">
    	<path class="st1" d="M335.49,97.55H191.4c-7.09,0-12.84-5.75-12.84-12.84V13.29c0-7.09,5.75-12.84,12.84-12.84h144.09
    		c7.09,0,12.84,5.75,12.84,12.84v71.42C348.33,91.8,342.58,97.55,335.49,97.55z"/>
    </g>
    <g id="Layer_3">
    	<path class="st2" d="M514.52,97.55H370.42c-7.09,0-12.84-5.75-12.84-12.84V13.29c0-7.09,5.75-12.84,12.84-12.84h144.09
    		c7.09,0,12.84,5.75,12.84,12.84v71.42C527.36,91.8,521.61,97.55,514.52,97.55z"/>
    </g>
    <g id="Layer_4">
    	<path class="st3" d="M693.55,97.55H549.45c-7.09,0-12.84-5.75-12.84-12.84V13.29c0-7.09,5.75-12.84,12.84-12.84h144.09
    		c7.09,0,12.84,5.75,12.84,12.84v71.42C706.38,91.8,700.64,97.55,693.55,97.55z"/>
    </g>
    <g id="Layer_5">
    	<path class="st2" d="M872.58,97.55H728.48c-7.09,0-12.84-5.75-12.84-12.84V13.29c0-7.09,5.75-12.84,12.84-12.84h144.09
    		c7.09,0,12.84,5.75,12.84,12.84v71.42C885.41,91.8,879.67,97.55,872.58,97.55z"/>
    </g>
    <g id="Layer_6">
    	<path class="st1" d="M1051.6,97.55H907.51c-7.09,0-12.84-5.75-12.84-12.84V13.29c0-7.09,5.75-12.84,12.84-12.84h144.09
    		c7.09,0,12.84,5.75,12.84,12.84v71.42C1064.44,91.8,1058.7,97.55,1051.6,97.55z"/>
    </g>
    <g id="Layer_7">
    	<path class="st0" d="M1230.63,97.55h-144.09c-7.09,0-12.84-5.75-12.84-12.84V13.29c0-7.09,5.75-12.84,12.84-12.84h144.09
    		c7.09,0,12.84,5.75,12.84,12.84v71.42C1243.47,91.8,1237.73,97.55,1230.63,97.55z"/>
    </g>
    </svg>


  `

}