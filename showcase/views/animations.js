import './showcase.css'
import { html } from 'lit-html'
import store from '../data-store'
import 'view-base/type-poster'

import 'view-base/unit-link'
import 'view-base/unit-button'

export function animations() {

  const state = store.getState()

  return html `

  <article class=animations>
    <h1>Animations</h1>
    <h2>Icons Plan</h2>

    <svg id="icon-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 697"><defs>
      <style>.cls-1{fill:#696969;}.cls-2{fill:#fff;}.cls-3{fill:#d9d9dd;}.cls-4{fill:#12c108;}.cls-5{fill:#6cbcff;}</style></defs>
      <title>icons-server</title>
      <rect id="D-rack" class="cls-1" x="67.88" y="573.17" width="363.16" height="123.83" rx="24.56"/>
      <rect id="D-rect" class="cls-2" x="94.83" y="597.67" width="310.42" height="74.82"/>
      <rect id="D-rect-2" data-name="D-rect" class="cls-3" x="154.11" y="611.03" width="236.85" height="48.42"/>
      <g>
        <circle id="C-btn-kelly" class="cls-4" cx="116.07" cy="651.86" r="7.59"/>
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
      </g>
      <g>
        <circle id="D-btn-sky" class="cls-5" cx="116.07" cy="618.62" r="7.59"/>
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite"/>
      </g>
      <rect id="C-rack" class="cls-1" x="68.07" y="449.32" width="363.16" height="123.83" rx="24.56"/>
      <rect id="C-rect" class="cls-2" x="94.83" y="473.99" width="310.42" height="74.82"/>
      <rect id="C-rect-2" data-name="C-rect" class="cls-3" x="154.11" y="487.35" width="236.85" height="48.42"/>
      <g>
        <circle id="C-btn-sky" class="cls-5" cx="116.07" cy="528.18" r="7.59"/>
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
      </g>
      <g>
        <circle id="C-btn-kelly-2" data-name="C-btn-kelly" class="cls-4" cx="116.07" cy="494.94" r="7.59"/>
      </g>
      <rect id="B-rack" class="cls-1" x="67.88" y="325.47" width="363.16" height="123.83" rx="24.56"/>
      <rect id="B-rect" class="cls-2" x="94.83" y="349.97" width="310.42" height="74.82"/>
      <rect id="B-rect-2" data-name="B-rect" class="cls-3" x="154.11" y="363.33" width="236.85" height="48.42"/>
      <g>
        <circle id="B-btn-kelly" class="cls-4" cx="116.07" cy="404.16" r="7.59"/>
        <animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite"/>
      </g>
      <g>
        <circle id="B-btn-sky" class="cls-5" cx="116.07" cy="370.91" r="7.59"/>
      </g>
      <rect id="A-rack" class="cls-1" x="67.88" y="201.62" width="363.16" height="123.83" rx="24.56"/>
      <rect id="A-rect" class="cls-2" x="94.83" y="226.13" width="310.42" height="74.82"/>
      <rect id="A-rect-2" data-name="A-rect" class="cls-3" x="154.11" y="239.49" width="236.85" height="48.42"/>
      <g>
        <circle id="A-btn-kelly" class="cls-4" cx="116.07" cy="280.32" r="7.59"/>
        <animate attributeName="opacity" values="0;1;0" dur="8s" repeatCount="indefinite"/>
      </g>
      <g>
        <circle id="A-btn-sky" class="cls-5" cx="116.07" cy="247.08" r="7.59"/>
        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
      </g>
    </svg>


    <h2>Busy indicator horizontal</h2>
  <section class=negative>
      <style>

        svg {
          width: 350px;
          margin: 3em;
        }

        @keyframes fadeA {
          0% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }

          50% {
            opacity: 0;
          }

          55% {
            fill: rgba(108, 188, 255, 0);
          }


          100% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }
        }

        #Abar {
          animation: fadeA 5s infinite;
          animation-fill-mode: alternate-reverse;
        }

        @keyframes fadeB {
          0% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }

          50% {
            opacity: 0;
          }

          55% {
            fill: rgba(108, 188, 255, 0);
          }

          100% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }
        }

        #Bbar {
          animation: fadeB 5s infinite;
          animation-fill-mode: alternate-reverse;
          animation-delay: 0.5s;
        }

        @keyframes fadeC {
          0% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }

          50% {
            opacity: 0;
          }

          55% {
            fill: rgba(108, 188, 255, 0);
          }

          100% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }
        }

        #Cbar {
          animation: fadeC 5s infinite;
          animation-fill-mode: alternate-reverse;
          animation-delay: 1s;
        }

        @keyframes fadeD {
          0% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }

          50% {
            opacity: 0;
          }

          55% {
            fill: rgba(108, 188, 255, 0);
          }

          100% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }
        }

        #Dbar {
          animation: fadeD 5s infinite;
          animation-delay: 1.5s;
          animation-fill-mode: alternate-reverse;
        }

        @keyframes fadeE {
          0% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }

          50% {
            opacity: 0;
          }

          55% {
            fill: rgba(108, 188, 255, 0);
          }

          100% {
            opacity: 1;
            fill: rgba(108, 188, 255, 0.2);
          }
        }

        #Ebar {
          animation: fadeE 5s infinite;
          animation-delay: 2s;
          animation-fill-mode: alternate-reverse;
        }
      </style>



    <section class=row>
      <section class=positive>
      <svg version="1.1" id="busy-indicator xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 347.99 51.89" style="enable-background:new 0 0 347.99 51.89;" xml:space="preserve">
        <style type="text/css">
          .st0 {
            fill: none;
            stroke: #7BB8E4;
            stroke-miterlimit: 10;
          }
        </style>
        <path id="Abar" class="st0" d="M52.16,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C67.16,34.6,60.44,41.32,52.16,41.32z" />
        <path id="Bbar" class="st0" d="M119.73,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C134.73,34.6,128.02,41.32,119.73,41.32z" />
        <path id="Cbar" class="st0" d="M187.3,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C202.3,34.6,195.59,41.32,187.3,41.32z" />
        <path id="Dbar" class="st0" d="M254.88,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C269.88,34.6,263.16,41.32,254.88,41.32z" />
        <path id="Ebar" class="st0" d="M322.45,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C337.45,34.6,330.73,41.32,322.45,41.32z" />
      </svg>
        </unit-input>
      </section>
      <section class=negative>
      <svg version="1.1" id="busy-indicator xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 347.99 51.89" style="enable-background:new 0 0 347.99 51.89;" xml:space="preserve">
        <style type="text/css">
          .st0 {
            fill: none;
            stroke: #7BB8E4;
            stroke-miterlimit: 10;
          }
        </style>
        <path id="Abar" class="st0" d="M52.16,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C67.16,34.6,60.44,41.32,52.16,41.32z" />
        <path id="Bbar" class="st0" d="M119.73,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C134.73,34.6,128.02,41.32,119.73,41.32z" />
        <path id="Cbar" class="st0" d="M187.3,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C202.3,34.6,195.59,41.32,187.3,41.32z" />
        <path id="Dbar" class="st0" d="M254.88,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C269.88,34.6,263.16,41.32,254.88,41.32z" />
        <path id="Ebar" class="st0" d="M322.45,41.32h-26c-8.28,0-15-6.72-15-15v0c0-8.28,6.72-15,15-15h26c8.28,0,15,6.72,15,15v0
      	C337.45,34.6,330.73,41.32,322.45,41.32z" />
      </svg>
      </section>
    </section>

    <h2>Busy indicator vertical</h2>

    <h2>Poster background</h2>
    <section class=row>
      <section class=negative>

      <?xml version="1.0" encoding="utf-8"?>
      <!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 494.76 212" style="enable-background:new 0 0 494.76 212;" xml:space="preserve">
        <style type="text/css">
          .st2 {
            opacity: 0.3;
            fill: #FFFFFF;
          }

          .st3 {
            opacity: 0.4;
            fill: #FFFFFF;
          }

          .st4 {
            opacity: 0.5;
            fill: #FFFFFF;
          }

          .st5 {
            opacity: 0.6;
            fill: #FFFFFF;
          }

          .st6 {
            opacity: 0.7;
            fill: #FFFFFF;
          }


          .st8 {
            fill: none;
            stroke: url(#B-line_1_);
            stroke-width: 2;
            stroke-miterlimit: 10;
          }


          .st11 {
            fill: none;
            stroke: #FFFFFF;
            stroke-width: 9;
            stroke-miterlimit: 10;
          }


          .st18 {
            opacity: 0.5;
            fill: none;
            stroke: #FFFFFF;
            stroke-width: 9;
            stroke-miterlimit: 10;
          }

          /* circle animation */

          #C {
            animation-fill-mode: forwards;
          }

          /* Path finder animation */

          #A-line {
            stroke-dasharray: 450;
            stroke-dashoffset: 450;
            animation: draw 7s linear forwards;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }

          #B-line {
            stroke-dasharray: 450;
            stroke-dashoffset: 450;
            animation: draw 7s linear 1s forwards;
          }

          @keyframes drawB {
            to {
              stroke-dashoffset: 0;
            }
          }

          #C-line {
            stroke-dasharray: 450;
            stroke-dashoffset: 450;
            animation: draw 7s linear 2s forwards;
          }

          @keyframes drawC {
            to {
              stroke-dashoffset: 0;
            }
          }
        </style>
        <title>pathfinder</title>
        <g id="illu">

          /* dots */
          <g id="dot">
            <path id="dot-2" class="st0" opacity="0.1" fill="#FFFFFF" enable-background="new" d="M37.48,101.61c2.42,0.01,4.38,1.97,4.37,4.39c-0.01,2.42-1.97,4.38-4.39,4.37
            c-2.41-0.01-4.36-1.96-4.37-4.37c-0.01-2.42,1.95-4.38,4.37-4.39C37.47,101.61,37.47,101.61,37.48,101.61z" />
            <path id="dot-3" class="st1" opacity="0.2" fill="#FFFFFF" enable-background="new" d="M107.48,101.61c2.42,0.01,4.38,1.97,4.37,4.39c-0.01,2.42-1.97,4.38-4.39,4.37
            c-2.42-0.01-4.38-1.97-4.37-4.39c0,0,0-0.01,0-0.01C103.1,103.55,105.06,101.6,107.48,101.61z" />
            <path id="dot-4" class="st2" d="M177.48,101.61c2.42,0.01,4.38,1.97,4.37,4.39c-0.01,2.42-1.97,4.38-4.39,4.37
            c-2.42-0.01-4.38-1.97-4.37-4.39c0,0,0-0.01,0-0.01C173.1,103.55,175.06,101.6,177.48,101.61z" />
            <path id="dot-5" class="st3" d="M247.48,101.61c2.42,0.01,4.38,1.97,4.37,4.39c-0.01,2.42-1.97,4.38-4.39,4.37
            c-2.42-0.01-4.38-1.97-4.37-4.39c0,0,0-0.01,0-0.01C243.1,103.55,245.06,101.6,247.48,101.61z" />
            <path id="dot-6" class="st4" d="M317.48,101.61c2.42,0.01,4.38,1.97,4.37,4.39c-0.01,2.42-1.97,4.38-4.39,4.37
            c-2.42-0.01-4.38-1.97-4.37-4.39c0,0,0-0.01,0-0.01C313.1,103.55,315.06,101.6,317.48,101.61z" />
            <path id="dot-7" class="st3" d="M247.48,171.61c2.42,0.01,4.38,1.97,4.37,4.39c-0.01,2.42-1.97,4.38-4.39,4.37
            c-2.42-0.01-4.38-1.97-4.37-4.39c0,0,0-0.01,0-0.01C243.1,173.55,245.06,171.6,247.48,171.61z" />
            <path id="dot-8" class="st4" d="M317.48,171.61c2.42,0.01,4.38,1.97,4.37,4.39c-0.01,2.42-1.97,4.38-4.39,4.37
            s-4.38-1.97-4.37-4.39c0,0,0-0.01,0-0.01C313.1,173.55,315.06,171.6,317.48,171.61z" />
            <path id="dot-9" class="st3" d="M247.48,31.61c2.42,0.01,4.38,1.97,4.37,4.39s-1.97,4.38-4.39,4.37
            c-2.41-0.01-4.36-1.96-4.37-4.37c-0.01-2.42,1.95-4.38,4.37-4.39C247.47,31.61,247.47,31.61,247.48,31.61z" />
            <path id="dot-10" class="st4" d="M317.48,31.61c2.42,0.01,4.38,1.97,4.37,4.39c-0.01,2.42-1.97,4.38-4.39,4.37
            c-2.41-0.01-4.36-1.96-4.37-4.37c-0.01-2.42,1.95-4.38,4.37-4.39C317.47,31.61,317.47,31.61,317.48,31.61z" />
            <path id="dot-11" class="st5" d="M387.48,31.61c2.42,0.01,4.38,1.97,4.37,4.39c-0.01,2.42-1.97,4.38-4.39,4.37
            c-2.41-0.01-4.36-1.96-4.37-4.37c-0.01-2.42,1.95-4.38,4.37-4.39C387.47,31.61,387.47,31.61,387.48,31.61z" />
            <path id="dot-12" class="st5" d="M387.04,180.39c-2.42-0.01-4.38-1.97-4.37-4.39c0.01-2.42,1.97-4.38,4.39-4.37
            s4.38,1.97,4.37,4.39c0,0,0,0.01,0,0.01C391.42,178.45,389.46,180.4,387.04,180.39z" />
            <path id="dot-13" class="st6" d="M457.04,180.39c-2.42-0.01-4.38-1.97-4.37-4.39c0.01-2.42,1.97-4.38,4.39-4.37
            s4.38,1.97,4.37,4.39c0,0,0,0.01,0,0.01C461.42,178.45,459.46,180.4,457.04,180.39z" />
            <path id="dot-14" class="st2" d="M177.04,180.39c-2.42-0.01-4.38-1.97-4.37-4.39c0.01-2.42,1.97-4.38,4.39-4.37
            c2.42,0.01,4.38,1.97,4.37,4.39c0,0,0,0.01,0,0.01C181.42,178.45,179.46,180.4,177.04,180.39z" />
          </g>

          /* lines */
          <g id="line">
            <g>
              <linearGradient id="C-line_1_" gradientUnits="userSpaceOnUse" x1="181.84" y1="72.995" x2="457.4601" y2="72.995" gradientTransform="matrix(1 0 0 -1 0 214)">
                <stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.3" />
                <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0.7" />
              </linearGradient>
              <polyline id="C-line" class="st7" fill="none" stroke="url(#C-line_1_)" stroke-width="2" stroke-miterlimit="10" points="181.84,106 317.26,106 387.46,176 457.46,176.01" />
            </g>

            <linearGradient id="B-line_1_" gradientUnits="userSpaceOnUse" x1="106.7508" y1="72.8475" x2="317.26" y2="72.8475" gradientTransform="matrix(1 0 0 -1 0 214)">
              <stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2" />
              <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0.7" />
            </linearGradient>
            <polyline id="B-line" class="st8" points="107.46,106 177.05,176.01 317.26,176.01 		" />

            <g>
              <linearGradient id="A-line_1_" gradientUnits="userSpaceOnUse" x1="37.05" y1="143.03" x2="383.0902" y2="143.03" gradientTransform="matrix(1 0 0 -1 0 214)">
                <stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1" />
                <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0.7" />
              </linearGradient>
              <polyline id="A-line" class="st9" fill="none" stroke="url(#A-line_1_)" stroke-width="2" stroke-miterlimit="10" points="37.05,105.97 177.45,105.97 247.26,36 383.09,35.97 		" />
            </g>
          </g>

          /* circles A */
          <g id="A">

            <g id="_1C-cir" class="st10">
              <path class="st11" opacity="0.4" d="M247.26,12.23c13.13,0,23.77,10.64,23.77,23.77s-10.64,23.77-23.77,23.77S223.49,49.13,223.49,36
              C223.5,22.88,234.14,12.24,247.26,12.23" />
              <animate attributeName="opacity" values="0;0.4;0" dur="7s" begin="3s" repeatCount="indefinite" />
            </g>
            <g>
              <path id="_1D-cir" opacity="0.5" class="st18" d="M317.26,12.23c13.13,0,23.77,10.64,23.77,23.77c0,13.13-10.64,23.77-23.77,23.77
              S293.49,49.13,293.49,36C293.5,22.88,304.14,12.24,317.26,12.23" />
              <animate attributeName="opacity" values="0;0.5;0" dur="7s" begin="4s" repeatCount="indefinite" />
            </g>
            <g id="_1E-cir" class="st14">
              <path class="st11" opacity="0.6" d="M387.26,12.23c13.13,0,23.77,10.64,23.77,23.77c0,13.13-10.64,23.77-23.77,23.77S363.49,49.13,363.49,36
              C363.5,22.88,374.14,12.24,387.26,12.23" />
              <animate attributeName="opacity" values="0;0.6;0" dur="7s" begin="5s" repeatCount="indefinite" />
            </g>

          </g>

          /* circles B */
          <g id="B">

            <g id="_2A-cir" class="st17">
              <path class="st11" fill="#FFFFF" opacity="0.1" animation-fill-mode="alternate" d="M37.26,82.23c13.13,0,23.77,10.64,23.77,23.77s-10.64,23.77-23.77,23.77S13.49,119.13,13.49,106
              c0,0,0,0,0,0C13.5,92.88,24.14,82.24,37.26,82.23" />
              <animate attributeName="opacity" values="0;0.1;0" dur="7s" begin="0" repeatCount="indefinite" />
            </g>

            <g id="_2B-cir" class="st16">
              <path class="st11" fill="#FFFFF" opacity="0.2" d="M107.26,82.23c13.13,0,23.77,10.64,23.77,23.77s-10.64,23.77-23.77,23.77S83.49,119.13,83.49,106
              c0,0,0,0,0,0C83.5,92.88,94.14,82.24,107.26,82.23" />
              <animate attributeName="opacity" values="0;0.2;0" dur="7s" begin="1s" repeatCount="indefinite" />
            </g>

            <g id="_2C-cir" class="st12">
              <path class="st11" fill="#FFFFF" opacity="0.3" d="M177.26,82.23c13.13,0,23.77,10.64,23.77,23.77s-10.64,23.77-23.77,23.77s-23.77-10.64-23.77-23.77v0
              C153.5,92.88,164.14,82.24,177.26,82.23" />
              <animate attributeName="opacity" values="0;0.3;0" dur="7s" begin="2s" repeatCount="indefinite" />
            </g>

            <g id="_2D-cir" class="st10">
              <path class="st11" fill="#FFFFF" opacity="0.4" d="M247.26,82.23c13.13,0,23.77,10.64,23.77,23.77s-10.64,23.77-23.77,23.77s-23.77-10.64-23.77-23.77v0
              C223.5,92.88,234.14,82.24,247.26,82.23" />
              <animate attributeName="opacity" values="0;0.4;0" dur="7s" begin="3s" repeatCount="indefinite" />
            </g>

            <g id="_2E-cir" class="st13">
              <path class="st11" fill="#FFFFF" opacity="0.5" d="M317.26,82.23c13.13,0,23.77,10.64,23.77,23.77c0,13.13-10.64,23.77-23.77,23.77s-23.77-10.64-23.77-23.77
              C293.5,92.88,304.14,82.24,317.26,82.23" />
              <animate attributeName="opacity" values="0;0.5;0" dur="7s" begin="4s" repeatCount="indefinite" />
            </g>
          </g>


          /* circles C */
          <g id="C">

            <g id="3C-cir" class="st12">
              <path class="st11" opacity="0.3" d="M177.26,152.23c13.13,0,23.77,10.64,23.77,23.77s-10.64,23.77-23.77,23.77s-23.77-10.64-23.77-23.77
              C153.5,162.88,164.14,152.24,177.26,152.23" />
              <animate attributeName="opacity" values="0;0.2;0" dur="7s" begin="2s" repeatCount="indefinite" />
            </g>

            <g id="3D-cir" class="st10">
              <path class="st11" opacity="0.4" d="M247.26,152.23c13.13,0,23.77,10.64,23.77,23.77s-10.64,23.77-23.77,23.77s-23.77-10.64-23.77-23.77
              C223.5,162.88,234.14,152.24,247.26,152.23" />
              <animate attributeName="opacity" values="0;0.3;0" dur="7s" begin="3s" repeatCount="indefinite" />
            </g>

            <g id="3E-cir" class="st13">
              <path class="st11" opacity="0.5" d="M317.26,152.23c13.13,0,23.77,10.64,23.77,23.77c0,13.13-10.64,23.77-23.77,23.77
              c-13.13,0-23.77-10.64-23.77-23.77C293.5,162.88,304.14,152.24,317.26,152.23" />
              <animate attributeName="opacity" values="0;0.4;0" dur="7s" begin="4s" repeatCount="indefinite" />
            </g>

            <g id="3F-cir" class="st14">
              <path class="st11" opacity="0.6" d="M387.26,152.23c13.13,0,23.77,10.64,23.77,23.77c0,13.13-10.64,23.77-23.77,23.77
              c-13.13,0-23.77-10.64-23.77-23.77C363.5,162.88,374.14,152.24,387.26,152.23" />
              <animate attributeName="opacity" values="0;0.7;0" dur="7s" begin="5s" repeatCount="indefinite" />
            </g>

            <g id="3G-cir" class="st15">
              <path class="st11" opacity="0.7" d="M457.26,152.23c13.13,0,23.77,10.64,23.77,23.77c0,13.13-10.64,23.77-23.77,23.77
              c-13.13,0-23.77-10.64-23.77-23.77C433.5,162.88,444.14,152.24,457.26,152.23" />
              <animate attributeName="opacity" values="0;0.7;0" dur="7s" begin="6s" repeatCount="indefinite" />
            </g>
          </g>

        </g>
      </svg>
      </section>
    </section>




  </article>
  `

}