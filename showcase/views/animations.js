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


  </article>
  `

}