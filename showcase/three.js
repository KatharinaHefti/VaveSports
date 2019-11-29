( function ( global, factory ) {
    typeof exports === 'object' & amp; & amp;
    typeof module !== 'undefined' ? factory( exports ) :
      typeof define === 'function' & amp; & amp;
    define.amd ? define( [ 'exports' ], factory ) :
      ( global = global || self, factory( global.THREE = {} ) );
  }( this, function ( exports ) {
      'use strict';

      // Polyfills

      if ( Number.EPSILON === undefined ) {

        Number.EPSILON = Math.pow( 2, -52 );

      }

      if ( Number.isInteger === undefined ) {

        // Missing in IE
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

        Number.isInteger = function ( value ) {

          return typeof value === 'number' & amp; & amp;
          isFinite( value ) & amp; & amp;
          Math.floor( value ) === value;

        };

      }

      //

      if ( Math.sign === undefined ) {

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

        Math.sign = function ( x ) {

          return ( x & lt; 0 ) ? -1 : ( x & gt; 0 ) ? 1 : +x;

        };

      }

      if ( 'name' in Function.prototype === false ) {

        // Missing in IE
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

        Object.defineProperty( Function.prototype, 'name', {

          get: function () {

            return this.toString().match( /^\s*function\s*([^\(\s]*)/ )[ 1 ];

          }

        } );

      }

      if ( Object.assign === undefined ) {

        // Missing in IE
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

        Object.assign = function ( target ) {

          if ( target === undefined || target === null ) {

            throw new TypeError( 'Cannot convert undefined or null to object' );

          }

          var output = Object( target );

          for ( var index = 1; index & lt; arguments.length; index++ ) {

            var source = arguments[ index ];

            if ( source !== undefined & amp; & amp; source !== null ) {

              for ( var nextKey in source ) {

                if ( Object.prototype.hasOwnProperty.call( source, nextKey ) ) {

                  output[ nextKey ] = source[ nextKey ];

                }

              }

            }

          }

          return output;

        };

      }

      var REVISION = '109';
      var MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
      var TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
      var CullFaceNone = 0;
      var CullFaceBack = 1;
      var CullFaceFront = 2;
      var CullFaceFrontBack = 3;
      var FrontFaceDirectionCW = 0;
      var FrontFaceDirectionCCW = 1;
      var BasicShadowMap = 0;
      var PCFShadowMap = 1;
      var PCFSoftShadowMap = 2;
      var VSMShadowMap = 3;
      var FrontSide = 0;
      var BackSide = 1;
      var DoubleSide = 2;
      var FlatShading = 1;
      var SmoothShading = 2;
      var NoColors = 0;
      var FaceColors = 1;
      var VertexColors = 2;
      var NoBlending = 0;
      var NormalBlending = 1;
      var AdditiveBlending = 2;
      var SubtractiveBlending = 3;
      var MultiplyBlending = 4;
      var CustomBlending = 5;
      var AddEquation = 100;
      var SubtractEquation = 101;
      var ReverseSubtractEquation = 102;
      var MinEquation = 103;
      var MaxEquation = 104;
      var ZeroFactor = 200;
      var OneFactor = 201;
      var SrcColorFactor = 202;
      var OneMinusSrcColorFactor = 203;
      var SrcAlphaFactor = 204;
      var OneMinusSrcAlphaFactor = 205;
      var DstAlphaFactor = 206;
      var OneMinusDstAlphaFactor = 207;
      var DstColorFactor = 208;
      var OneMinusDstColorFactor = 209;
      var SrcAlphaSaturateFactor = 210;
      var NeverDepth = 0;
      var AlwaysDepth = 1;
      var LessDepth = 2;
      var LessEqualDepth = 3;
      var EqualDepth = 4;
      var GreaterEqualDepth = 5;
      var GreaterDepth = 6;
      var NotEqualDepth = 7;
      var MultiplyOperation = 0;
      var MixOperation = 1;
      var AddOperation = 2;
      var NoToneMapping = 0;
      var LinearToneMapping = 1;
      var ReinhardToneMapping = 2;
      var Uncharted2ToneMapping = 3;
      var CineonToneMapping = 4;
      var ACESFilmicToneMapping = 5;

      var UVMapping = 300;
      var CubeReflectionMapping = 301;
      var CubeRefractionMapping = 302;
      var EquirectangularReflectionMapping = 303;
      var EquirectangularRefractionMapping = 304;
      var SphericalReflectionMapping = 305;
      var CubeUVReflectionMapping = 306;
      var CubeUVRefractionMapping = 307;
      var RepeatWrapping = 1000;
      var ClampToEdgeWrapping = 1001;
      var MirroredRepeatWrapping = 1002;
      var NearestFilter = 1003;
      var NearestMipmapNearestFilter = 1004;
      var NearestMipMapNearestFilter = 1004;
      var NearestMipmapLinearFilter = 1005;
      var NearestMipMapLinearFilter = 1005;
      var LinearFilter = 1006;
      var LinearMipmapNearestFilter = 1007;
      var LinearMipMapNearestFilter = 1007;
      var LinearMipmapLinearFilter = 1008;
      var LinearMipMapLinearFilter = 1008;
      var UnsignedByteType = 1009;
      var ByteType = 1010;
      var ShortType = 1011;
      var UnsignedShortType = 1012;
      var IntType = 1013;
      var UnsignedIntType = 1014;
      var FloatType = 1015;
      var HalfFloatType = 1016;
      var UnsignedShort4444Type = 1017;
      var UnsignedShort5551Type = 1018;
      var UnsignedShort565Type = 1019;
      var UnsignedInt248Type = 1020;
      var AlphaFormat = 1021;
      var RGBFormat = 1022;
      var RGBAFormat = 1023;
      var LuminanceFormat = 1024;
      var LuminanceAlphaFormat = 1025;
      var RGBEFormat = RGBAFormat;
      var DepthFormat = 1026;
      var DepthStencilFormat = 1027;
      var RedFormat = 1028;
      var RGB_S3TC_DXT1_Format = 33776;
      var RGBA_S3TC_DXT1_Format = 33777;
      var RGBA_S3TC_DXT3_Format = 33778;
      var RGBA_S3TC_DXT5_Format = 33779;
      var RGB_PVRTC_4BPPV1_Format = 35840;
      var RGB_PVRTC_2BPPV1_Format = 35841;
      var RGBA_PVRTC_4BPPV1_Format = 35842;
      var RGBA_PVRTC_2BPPV1_Format = 35843;
      var RGB_ETC1_Format = 36196;
      var RGBA_ASTC_4x4_Format = 37808;
      var RGBA_ASTC_5x4_Format = 37809;
      var RGBA_ASTC_5x5_Format = 37810;
      var RGBA_ASTC_6x5_Format = 37811;
      var RGBA_ASTC_6x6_Format = 37812;
      var RGBA_ASTC_8x5_Format = 37813;
      var RGBA_ASTC_8x6_Format = 37814;
      var RGBA_ASTC_8x8_Format = 37815;
      var RGBA_ASTC_10x5_Format = 37816;
      var RGBA_ASTC_10x6_Format = 37817;
      var RGBA_ASTC_10x8_Format = 37818;
      var RGBA_ASTC_10x10_Format = 37819;
      var RGBA_ASTC_12x10_Format = 37820;
      var RGBA_ASTC_12x12_Format = 37821;
      var LoopOnce = 2200;
      var LoopRepeat = 2201;
      var LoopPingPong = 2202;
      var InterpolateDiscrete = 2300;
      var InterpolateLinear = 2301;
      var InterpolateSmooth = 2302;
      var ZeroCurvatureEnding = 2400;
      var ZeroSlopeEnding = 2401;
      var WrapAroundEnding = 2402;
      var TrianglesDrawMode = 0;
      var TriangleStripDrawMode = 1;
      var TriangleFanDrawMode = 2;
      var LinearEncoding = 3000;
      var sRGBEncoding = 3001;
      var GammaEncoding = 3007;
      var RGBEEncoding = 3002;
      var LogLuvEncoding = 3003;
      var RGBM7Encoding = 3004;
      var RGBM16Encoding = 3005;
      var RGBDEncoding = 3006;
      var BasicDepthPacking = 3200;
      var RGBADepthPacking = 3201;
      var TangentSpaceNormalMap = 0;
      var ObjectSpaceNormalMap = 1;

      var ZeroStencilOp = 0;
      var KeepStencilOp = 7680;
      var ReplaceStencilOp = 7681;
      var IncrementStencilOp = 7682;
      var DecrementStencilOp = 7683;
      var IncrementWrapStencilOp = 34055;
      var DecrementWrapStencilOp = 34056;
      var InvertStencilOp = 5386;

      var NeverStencilFunc = 512;
      var LessStencilFunc = 513;
      var EqualStencilFunc = 514;
      var LessEqualStencilFunc = 515;
      var GreaterStencilFunc = 516;
      var NotEqualStencilFunc = 517;
      var GreaterEqualStencilFunc = 518;
      var AlwaysStencilFunc = 519;

      /**
       * https://github.com/mrdoob/eventdispatcher.js/
       */

      function EventDispatcher() {}

      Object.assign( EventDispatcher.prototype, {

        addEventListener: function ( type, listener ) {

          if ( this._listeners === undefined ) { this._listeners = {}; }

          var listeners = this._listeners;

          if ( listeners[ type ] === undefined ) {

            listeners[ type ] = [];

          }

          if ( listeners[ type ].indexOf( listener ) === -1 ) {

            listeners[ type ].push( listener );

          }

        },

        hasEventListener: function ( type, listener ) {

          if ( this._listeners === undefined ) { return false; }

          var listeners = this._listeners;

          return listeners[ type ] !== undefined & amp; & amp;
          listeners[ type ].indexOf( listener ) !== -1;

        },

        removeEventListener: function ( type, listener ) {

          if ( this._listeners === undefined ) { return; }

          var listeners = this._listeners;
          var listenerArray = listeners[ type ];

          if ( listenerArray !== undefined ) {

            var index = listenerArray.indexOf( listener );

            if ( index !== -1 ) {

              listenerArray.splice( index, 1 );

            }

          }

        },

        dispatchEvent: function ( event ) {

          if ( this._listeners === undefined ) { return; }

          var listeners = this._listeners;
          var listenerArray = listeners[ event.type ];

          if ( listenerArray !== undefined ) {

            event.target = this;

            var array = listenerArray.slice( 0 );

            for ( var i = 0, l = array.length; i & lt; l; i++ ) {

              array[ i ].call( this, event );

            }

          }

        }

      } );

      /**
       * @author alteredq / http://alteredqualia.com/
       * @author mrdoob / http://mrdoob.com/
       */

      var _lut = [];

      for ( var i = 0; i & lt; 256; i++ ) {

        _lut[ i ] = ( i & lt; 16 ? '0' : '' ) + ( i ).toString( 16 );

      }

      var _Math = {

        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,

        generateUUID: function () {

          // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

          var d0 = Math.random() * 0xffffffff | 0;
          var d1 = Math.random() * 0xffffffff | 0;
          var d2 = Math.random() * 0xffffffff | 0;
          var d3 = Math.random() * 0xffffffff | 0;
          var uuid = _lut[ d0 & amp; 0xff ] + _lut[ d0 & gt; & gt; 8 & amp; 0xff ] + _lut[ d0 & gt; & gt; 16 & amp; 0xff ] + _lut[ d0 & gt; & gt; 24 & amp; 0xff ] + '-' +
            _lut[ d1 & amp; 0xff ] + _lut[ d1 & gt; & gt; 8 & amp; 0xff ] + '-' + _lut[ d1 & gt; & gt; 16 & amp; 0x0f | 0x40 ] + _lut[ d1 & gt; & gt; 24 & amp; 0xff ] + '-' +
            _lut[ d2 & amp; 0x3f | 0x80 ] + _lut[ d2 & gt; & gt; 8 & amp; 0xff ] + '-' + _lut[ d2 & gt; & gt; 16 & amp; 0xff ] + _lut[ d2 & gt; & gt; 24 & amp; 0xff ] +
            _lut[ d3 & amp; 0xff ] + _lut[ d3 & gt; & gt; 8 & amp; 0xff ] + _lut[ d3 & gt; & gt; 16 & amp; 0xff ] + _lut[ d3 & gt; & gt; 24 & amp; 0xff ];

          // .toUpperCase() here flattens concatenated strings to save heap memory space.
          return uuid.toUpperCase();

        },

        clamp: function ( value, min, max ) {

          return Math.max( min, Math.min( max, value ) );

        },

        // compute euclidian modulo of m % n
        // https://en.wikipedia.org/wiki/Modulo_operation

        euclideanModulo: function ( n, m ) {

          return ( ( n % m ) + m ) % m;

        },

        // Linear mapping from range &lt;a1, a2&gt; to range &lt;b1, b2&gt;

        mapLinear: function ( x, a1, a2, b1, b2 ) {

          return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

        },

        // https://en.wikipedia.org/wiki/Linear_interpolation

        lerp: function ( x, y, t ) {

          return ( 1 - t ) * x + t * y;

        },

        // http://en.wikipedia.org/wiki/Smoothstep

        smoothstep: function ( x, min, max ) {

          if ( x & lt; = min ) { return 0; }
          if ( x & gt; = max ) { return 1; }

          x = ( x - min ) / ( max - min );

          return x * x * ( 3 - 2 * x );

        },

        smootherstep: function ( x, min, max ) {

          if ( x & lt; = min ) { return 0; }
          if ( x & gt; = max ) { return 1; }

          x = ( x - min ) / ( max - min );

          return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

        },

        // Random integer from &lt;low, high&gt; interval

        randInt: function ( low, high ) {

          return low + Math.floor( Math.random() * ( high - low + 1 ) );

        },

        // Random float from &lt;low, high&gt; interval

        randFloat: function ( low, high ) {

          return low + Math.random() * ( high - low );

        },

        // Random float from &lt;-range/2, range/2&gt; interval

        randFloatSpread: function ( range ) {

          return range * ( 0.5 - Math.random() );

        },

        degToRad: function ( degrees ) {

          return degrees * _Math.DEG2RAD;

        },

        radToDeg: function ( radians ) {

          return radians * _Math.RAD2DEG;

        },

        isPowerOfTwo: function ( value ) {

          return ( value & amp;
            ( value - 1 ) ) === 0 & amp; & amp;
          value !== 0;

        },

        ceilPowerOfTwo: function ( value ) {

          return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

        },

        floorPowerOfTwo: function ( value ) {

          return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

        }

      };

      /**
       * @author mrdoob / http://mrdoob.com/
       * @author philogb / http://blog.thejit.org/
       * @author egraether / http://egraether.com/
       * @author zz85 / http://www.lab4games.net/zz85/blog
       */

      function Vector2( x, y ) {

        this.x = x || 0;
        this.y = y || 0;

      }

      Object.defineProperties( Vector2.prototype, {

        "width": {

          get: function () {

            return this.x;

          },

          set: function ( value ) {

            this.x = value;

          }

        },

        "height": {

          get: function () {

            return this.y;

          },

          set: function ( value ) {

            this.y = value;

          }

        }

      } );

      Object.assign( Vector2.prototype, {

        isVector2: true,

        set: function ( x, y ) {

          this.x = x;
          this.y = y;

          return this;

        },

        setScalar: function ( scalar ) {

          this.x = scalar;
          this.y = scalar;

          return this;

        },

        setX: function ( x ) {

          this.x = x;

          return this;

        },

        setY: function ( y ) {

          this.y = y;

          return this;

        },

        setComponent: function ( index, value ) {

          switch ( index ) {

            case 0:
              this.x = value;
              break;
            case 1:
              this.y = value;
              break;
            default:
              throw new Error( 'index is out of range: ' + index );

          }

          return this;

        },

        getComponent: function ( index ) {

          switch ( index ) {

            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error( 'index is out of range: ' + index );

          }

        },

        clone: function () {

          return new this.constructor( this.x, this.y );

        },

        copy: function ( v ) {

          this.x = v.x;
          this.y = v.y;

          return this;

        },

        add: function ( v, w ) {

          if ( w !== undefined ) {

            console.warn( 'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
            return this.addVectors( v, w );

          }

          this.x += v.x;
          this.y += v.y;

          return this;

        },

        addScalar: function ( s ) {

          this.x += s;
          this.y += s;

          return this;

        },

        addVectors: function ( a, b ) {

          this.x = a.x + b.x;
          this.y = a.y + b.y;

          return this;

        },

        addScaledVector: function ( v, s ) {

          this.x += v.x * s;
          this.y += v.y * s;

          return this;

        },

        sub: function ( v, w ) {

          if ( w !== undefined ) {

            console.warn( 'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
            return this.subVectors( v, w );

          }

          this.x -= v.x;
          this.y -= v.y;

          return this;

        },

        subScalar: function ( s ) {

          this.x -= s;
          this.y -= s;

          return this;

        },

        subVectors: function ( a, b ) {

          this.x = a.x - b.x;
          this.y = a.y - b.y;

          return this;

        },

        multiply: function ( v ) {

          this.x *= v.x;
          this.y *= v.y;

          return this;

        },

        multiplyScalar: function ( scalar ) {

          this.x *= scalar;
          this.y *= scalar;

          return this;

        },

        divide: function ( v ) {

          this.x /= v.x;
          this.y /= v.y;

          return this;

        },

        divideScalar: function ( scalar ) {

          return this.multiplyScalar( 1 / scalar );

        },

        applyMatrix3: function ( m ) {

          var x = this.x,
            y = this.y;
          var e = m.elements;

          this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
          this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

          return this;

        },

        min: function ( v ) {

          this.x = Math.min( this.x, v.x );
          this.y = Math.min( this.y, v.y );

          return this;

        },

        max: function ( v ) {

          this.x = Math.max( this.x, v.x );
          this.y = Math.max( this.y, v.y );

          return this;

        },

        clamp: function ( min, max ) {

          // assumes min &lt; max, componentwise

          this.x = Math.max( min.x, Math.min( max.x, this.x ) );
          this.y = Math.max( min.y, Math.min( max.y, this.y ) );

          return this;

        },

        clampScalar: function ( minVal, maxVal ) {

          this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
          this.y = Math.max( minVal, Math.min( maxVal, this.y ) );

          return this;

        },

        clampLength: function ( min, max ) {

          var length = this.length();

          return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

        },

        floor: function () {

          this.x = Math.floor( this.x );
          this.y = Math.floor( this.y );

          return this;

        },

        ceil: function () {

          this.x = Math.ceil( this.x );
          this.y = Math.ceil( this.y );

          return this;

        },

        round: function () {

          this.x = Math.round( this.x );
          this.y = Math.round( this.y );

          return this;

        },

        roundToZero: function () {

          this.x = ( this.x & lt; 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
          this.y = ( this.y & lt; 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );

          return this;

        },

        negate: function () {

          this.x = -this.x;
          this.y = -this.y;

          return this;

        },

        dot: function ( v ) {

          return this.x * v.x + this.y * v.y;

        },

        cross: function ( v ) {

          return this.x * v.y - this.y * v.x;

        },

        lengthSq: function () {

          return this.x * this.x + this.y * this.y;

        },

        length: function () {

          return Math.sqrt( this.x * this.x + this.y * this.y );

        },

        manhattanLength: function () {

          return Math.abs( this.x ) + Math.abs( this.y );

        },

        normalize: function () {

          return this.divideScalar( this.length() || 1 );

        },

        angle: function () {

          // computes the angle in radians with respect to the positive x-axis

          var angle = Math.atan2( this.y, this.x );

          if ( angle & lt; 0 ) { angle += 2 * Math.PI; }

          return angle;

        },

        distanceTo: function ( v ) {

          return Math.sqrt( this.distanceToSquared( v ) );

        },

        distanceToSquared: function ( v ) {

          var dx = this.x - v.x,
            dy = this.y - v.y;
          return dx * dx + dy * dy;

        },

        manhattanDistanceTo: function ( v ) {

          return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

        },

        setLength: function ( length ) {

          return this.normalize().multiplyScalar( length );

        },

        lerp: function ( v, alpha ) {

          this.x += ( v.x - this.x ) * alpha;
          this.y += ( v.y - this.y ) * alpha;

          return this;

        },

        lerpVectors: function ( v1, v2, alpha ) {

          return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

        },

        equals: function ( v ) {

          return ( ( v.x === this.x ) & amp; & amp;
            ( v.y === this.y ) );

        },

        fromArray: function ( array, offset ) {

          if ( offset === undefined ) { offset = 0; }

          this.x = array[ offset ];
          this.y = array[ offset + 1 ];

          return this;

        },

        toArray: function ( array, offset ) {

          if ( array === undefined ) { array = []; }
          if ( offset === undefined ) { offset = 0; }

          array[ offset ] = this.x;
          array[ offset + 1 ] = this.y;

          return array;

        },

        fromBufferAttribute: function ( attribute, index, offset ) {

          if ( offset !== undefined ) {

            console.warn( 'THREE.Vector2: offset has been removed from .fromBufferAttribute().' );

          }

          this.x = attribute.getX( index );
          this.y = attribute.getY( index );

          return this;

        },

        rotateAround: function ( center, angle ) {

          var c = Math.cos( angle ),
            s = Math.sin( angle );

          var x = this.x - center.x;
          var y = this.y - center.y;

          this.x = x * c - y * s + center.x;
          this.y = x * s + y * c + center.y;

          return this;

        }

      } );

      /**
       * @author mikael emtinger / http://gomo.se/
       * @author alteredq / http://alteredqualia.com/
       * @author WestLangley / http://github.com/WestLangley
       * @author bhouston / http://clara.io
       */

      function Quaternion( x, y, z, w ) {

        this._x = x || 0;
        this._y = y || 0;
        this._z = z || 0;
        this._w = ( w !== undefined ) ? w : 1;

      }

      Object.assign( Quaternion, {

        slerp: function ( qa, qb, qm, t ) {

          return qm.copy( qa ).slerp( qb, t );

        },

        slerpFlat: function ( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

          // fuzz-free, array-based Quaternion SLERP operation

          var x0 = src0[ srcOffset0 + 0 ],
            y0 = src0[ srcOffset0 + 1 ],
            z0 = src0[ srcOffset0 + 2 ],
            w0 = src0[ srcOffset0 + 3 ],

            x1 = src1[ srcOffset1 + 0 ],
            y1 = src1[ srcOffset1 + 1 ],
            z1 = src1[ srcOffset1 + 2 ],
            w1 = src1[ srcOffset1 + 3 ];

          if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

            var s = 1 - t,

              cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,

              dir = ( cos & gt; = 0 ? 1 : -1 ),
              sqrSin = 1 - cos * cos;

            // Skip the Slerp for tiny steps to avoid numeric problems:
            if ( sqrSin & gt; Number.EPSILON ) {

              var sin = Math.sqrt( sqrSin ),
                len = Math.atan2( sin, cos * dir );

              s = Math.sin( s * len ) / sin;
              t = Math.sin( t * len ) / sin;

            }

            var tDir = t * dir;

            x0 = x0 * s + x1 * tDir;
            y0 = y0 * s + y1 * tDir;
            z0 = z0 * s + z1 * tDir;
            w0 = w0 * s + w1 * tDir;

            // Normalize in case we just did a lerp:
            if ( s === 1 - t ) {

              var f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

              x0 *= f;
              y0 *= f;
              z0 *= f;
              w0 *= f;

            }

          }

          dst[ dstOffset ] = x0;
          dst[ dstOffset + 1 ] = y0;
          dst[ dstOffset + 2 ] = z0;
          dst[ dstOffset + 3 ] = w0;

        }

      } );

      Object.defineProperties( Quaternion.prototype, {

        x: {

          get: function () {

            return this._x;

          },

          set: function ( value ) {

            this._x = value;
            this._onChangeCallback();

          }

        },

        y: {

          get: function () {

            return this._y;

          },

          set: function ( value ) {

            this._y = value;
            this._onChangeCallback();

          }

        },

        z: {

          get: function () {

            return this._z;

          },

          set: function ( value ) {

            this._z = value;
            this._onChangeCallback();

          }

        },

        w: {

          get: function () {

            return this._w;

          },

          set: function ( value ) {

            this._w = value;
            this._onChangeCallback();

          }

        }

      } );

      Object.assign( Quaternion.prototype, {

        isQuaternion: true,

        set: function ( x, y, z, w ) {

          this._x = x;
          this._y = y;
          this._z = z;
          this._w = w;

          this._onChangeCallback();

          return this;

        },

        clone: function () {

          return new this.constructor( this._x, this._y, this._z, this._w );

        },

        copy: function ( quaternion ) {

          this._x = quaternion.x;
          this._y = quaternion.y;
          this._z = quaternion.z;
          this._w = quaternion.w;

          this._onChangeCallback();

          return this;

        },

        setFromEuler: function ( euler, update ) {

          if ( !( euler & amp; & amp; euler.isEuler ) ) {

            throw new Error( 'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.' );

          }

          var x = euler._x,
            y = euler._y,
            z = euler._z,
            order = euler.order;

          // http://www.mathworks.com/matlabcentral/fileexchange/
          // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
          //	content/SpinCalc.m

          var cos = Math.cos;
          var sin = Math.sin;

          var c1 = cos( x / 2 );
          var c2 = cos( y / 2 );
          var c3 = cos( z / 2 );

          var s1 = sin( x / 2 );
          var s2 = sin( y / 2 );
          var s3 = sin( z / 2 );

          if ( order === 'XYZ' ) {

            this._x = s1 * c2 * c3 + c1 * s2 * s3;
            this._y = c1 * s2 * c3 - s1 * c2 * s3;
            this._z = c1 * c2 * s3 + s1 * s2 * c3;
            this._w = c1 * c2 * c3 - s1 * s2 * s3;

          } else if ( order === 'YXZ' ) {

            this._x = s1 * c2 * c3 + c1 * s2 * s3;
            this._y = c1 * s2 * c3 - s1 * c2 * s3;
            this._z = c1 * c2 * s3 - s1 * s2 * c3;
            this._w = c1 * c2 * c3 + s1 * s2 * s3;

          } else if ( order === 'ZXY' ) {

            this._x = s1 * c2 * c3 - c1 * s2 * s3;
            this._y = c1 * s2 * c3 + s1 * c2 * s3;
            this._z = c1 * c2 * s3 + s1 * s2 * c3;
            this._w = c1 * c2 * c3 - s1 * s2 * s3;

          } else if ( order === 'ZYX' ) {

            this._x = s1 * c2 * c3 - c1 * s2 * s3;
            this._y = c1 * s2 * c3 + s1 * c2 * s3;
            this._z = c1 * c2 * s3 - s1 * s2 * c3;
            this._w = c1 * c2 * c3 + s1 * s2 * s3;

          } else if ( order === 'YZX' ) {

            this._x = s1 * c2 * c3 + c1 * s2 * s3;
            this._y = c1 * s2 * c3 + s1 * c2 * s3;
            this._z = c1 * c2 * s3 - s1 * s2 * c3;
            this._w = c1 * c2 * c3 - s1 * s2 * s3;

          } else if ( order === 'XZY' ) {

            this._x = s1 * c2 * c3 - c1 * s2 * s3;
            this._y = c1 * s2 * c3 - s1 * c2 * s3;
            this._z = c1 * c2 * s3 + s1 * s2 * c3;
            this._w = c1 * c2 * c3 + s1 * s2 * s3;

          }

          if ( update !== false ) { this._onChangeCallback(); }

          return this;

        },

        setFromAxisAngle: function ( axis, angle ) {

          // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

          // assumes axis is normalized

          var halfAngle = angle / 2,
            s = Math.sin( halfAngle );

          this._x = axis.x * s;
          this._y = axis.y * s;
          this._z = axis.z * s;
          this._w = Math.cos( halfAngle );

          this._onChangeCallback();

          return this;

        },

        setFromRotationMatrix: function ( m ) {

          // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

          // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

          var te = m.elements,

            m11 = te[ 0 ],
            m12 = te[ 4 ],
            m13 = te[ 8 ],
            m21 = te[ 1 ],
            m22 = te[ 5 ],
            m23 = te[ 9 ],
            m31 = te[ 2 ],
            m32 = te[ 6 ],
            m33 = te[ 10 ],

            trace = m11 + m22 + m33,
            s;

          if ( trace & gt; 0 ) {

            s = 0.5 / Math.sqrt( trace + 1.0 );

            this._w = 0.25 / s;
            this._x = ( m32 - m23 ) * s;
            this._y = ( m13 - m31 ) * s;
            this._z = ( m21 - m12 ) * s;

          } else if ( m11 & gt; m22 & amp; & amp; m11 & gt; m33 ) {

            s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

            this._w = ( m32 - m23 ) / s;
            this._x = 0.25 * s;
            this._y = ( m12 + m21 ) / s;
            this._z = ( m13 + m31 ) / s;

          } else if ( m22 & gt; m33 ) {

            s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

            this._w = ( m13 - m31 ) / s;
            this._x = ( m12 + m21 ) / s;
            this._y = 0.25 * s;
            this._z = ( m23 + m32 ) / s;

          } else {

            s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

            this._w = ( m21 - m12 ) / s;
            this._x = ( m13 + m31 ) / s;
            this._y = ( m23 + m32 ) / s;
            this._z = 0.25 * s;

          }

          this._onChangeCallback();

          return this;

        },

        setFromUnitVectors: function ( vFrom, vTo ) {

          // assumes direction vectors vFrom and vTo are normalized

          var EPS = 0.000001;

          var r = vFrom.dot( vTo ) + 1;

          if ( r & lt; EPS ) {

            r = 0;

            if ( Math.abs( vFrom.x ) & gt; Math.abs( vFrom.z ) ) {

              this._x = -vFrom.y;
              this._y = vFrom.x;
              this._z = 0;
              this._w = r;

            } else {

              this._x = 0;
              this._y = -vFrom.z;
              this._z = vFrom.y;
              this._w = r;

            }

          } else {

            // crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

            this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
            this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
            this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
            this._w = r;

          }

          return this.normalize();

        },

        angleTo: function ( q ) {

          return 2 * Math.acos( Math.abs( _Math.clamp( this.dot( q ), -1, 1 ) ) );

        },

        rotateTowards: function ( q, step ) {

          var angle = this.angleTo( q );

          if ( angle === 0 ) { return this; }

          var t = Math.min( 1, step / angle );

          this.slerp( q, t );

          return this;

        },

        inverse: function () {

          // quaternion is assumed to have unit length

          return this.conjugate();

        },

        conjugate: function () {

          this._x *= -1;
          this._y *= -1;
          this._z *= -1;

          this._onChangeCallback();

          return this;

        },

        dot: function ( v ) {

          return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

        },

        lengthSq: function () {

          return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

        },

        length: function () {

          return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

        },

        normalize: function () {

          var l = this.length();

          if ( l === 0 ) {

            this._x = 0;
            this._y = 0;
            this._z = 0;
            this._w = 1;

          } else {

            l = 1 / l;

            this._x = this._x * l;
            this._y = this._y * l;
            this._z = this._z * l;
            this._w = this._w * l;

          }

          this._onChangeCallback();

          return this;

        },

        multiply: function ( q, p ) {

          if ( p !== undefined ) {

            console.warn( 'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.' );
            return this.multiplyQuaternions( q, p );

          }

          return this.multiplyQuaternions( this, q );

        },

        premultiply: function ( q ) {

          return this.multiplyQuaternions( q, this );

        },

        multiplyQuaternions: function ( a, b ) {

          // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

          var qax = a._x,
            qay = a._y,
            qaz = a._z,
            qaw = a._w;
          var qbx = b._x,
            qby = b._y,
            qbz = b._z,
            qbw = b._w;

          this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
          this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
          this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
          this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

          this._onChangeCallback();

          return this;

        },

        slerp: function ( qb, t ) {

          if ( t === 0 ) { return this; }
          if ( t === 1 ) { return this.copy( qb ); }

          var x = this._x,
            y = this._y,
            z = this._z,
            w = this._w;

          // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

          var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

          if ( cosHalfTheta & lt; 0 ) {

            this._w = -qb._w;
            this._x = -qb._x;
            this._y = -qb._y;
            this._z = -qb._z;

            cosHalfTheta = -cosHalfTheta;

          } else {

            this.copy( qb );

          }

          if ( cosHalfTheta & gt; = 1.0 ) {

            this._w = w;
            this._x = x;
            this._y = y;
            this._z = z;

            return this;

          }

          var sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

          if ( sqrSinHalfTheta & lt; = Number.EPSILON ) {

            var s = 1 - t;
            this._w = s * w + t * this._w;
            this._x = s * x + t * this._x;
            this._y = s * y + t * this._y;
            this._z = s * z + t * this._z;

            this.normalize();
            this._onChangeCallback();

            return this;

          }

          var sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
          var halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
          var ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
            ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

          this._w = ( w * ratioA + this._w * ratioB );
          this._x = ( x * ratioA + this._x * ratioB );
          this._y = ( y * ratioA + this._y * ratioB );
          this._z = ( z * ratioA + this._z * ratioB );

          this._onChangeCallback();

          return this;

        },

        equals: function ( quaternion ) {

          return ( quaternion._x === this._x ) & amp; & amp;
          ( quaternion._y === this._y ) & amp; & amp;
          ( quaternion._z === this._z ) & amp; & amp;
          ( quaternion._w === this._w );

        },

        fromArray: function ( array, offset ) {

          if ( offset === undefined ) { offset = 0; }

          this._x = array[ offset ];
          this._y = array[ offset + 1 ];
          this._z = array[ offset + 2 ];
          this._w = array[ offset + 3 ];

          this._onChangeCallback();

          return this;

        },

        toArray: function ( array, offset ) {

          if ( array === undefined ) { array = []; }
          if ( offset === undefined ) { offset = 0; }

          array[ offset ] = this._x;
          array[ offset + 1 ] = this._y;
          array[ offset + 2 ] = this._z;
          array[ offset + 3 ] = this._w;

          return array;

        },

        _onChange: function ( callback ) {

          this._onChangeCallback = callback;

          return this;

        },

        _onChangeCallback: function () {}

      } );

      /**
       * @author mrdoob / http://mrdoob.com/
       * @author kile / http://kile.stravaganza.org/
       * @author philogb / http://blog.thejit.org/
       * @author mikael emtinger / http://gomo.se/
       * @author egraether / http://egraether.com/
       * @author WestLangley / http://github.com/WestLangley
       */

      var _vector = new Vector3();
      var _quaternion = new Quaternion();

      function Vector3( x, y, z ) {

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;

      }

      Object.assign( Vector3.prototype, {

        isVector3: true,

        set: function ( x, y, z ) {

          this.x = x;
          this.y = y;
          this.z = z;

          return this;

        },

        setScalar: function ( scalar ) {

          this.x = scalar;
          this.y = scalar;
          this.z = scalar;

          return this;

        },

        setX: function ( x ) {

          this.x = x;

          return this;

        },

        setY: function ( y ) {

          this.y = y;

          return this;

        },

        setZ: function ( z ) {

          this.z = z;

          return this;

        },

        setComponent: function ( index, value ) {

          switch ( index ) {

            case 0:
              this.x = value;
              break;
            case 1:
              this.y = value;
              break;
            case 2:
              this.z = value;
              break;
            default:
              throw new Error( 'index is out of range: ' + index );

          }

          return this;

        },

        getComponent: function ( index ) {

          switch ( index ) {

            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error( 'index is out of range: ' + index );

          }

        },

        clone: function () {

          return new this.constructor( this.x, this.y, this.z );

        },

        copy: function ( v ) {

          this.x = v.x;
          this.y = v.y;
          this.z = v.z;

          return this;

        },

        add: function ( v, w ) {

          if ( w !== undefined ) {

            console.warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
            return this.addVectors( v, w );

          }

          this.x += v.x;
          this.y += v.y;
          this.z += v.z;

          return this;

        },

        addScalar: function ( s ) {

          this.x += s;
          this.y += s;
          this.z += s;

          return this;

        },

        addVectors: function ( a, b ) {

          this.x = a.x + b.x;
          this.y = a.y + b.y;
          this.z = a.z + b.z;

          return this;

        },

        addScaledVector: function ( v, s ) {

          this.x += v.x * s;
          this.y += v.y * s;
          this.z += v.z * s;

          return this;

        },

        sub: function ( v, w ) {

          if ( w !== undefined ) {

            console.warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
            return this.subVectors( v, w );

          }

          this.x -= v.x;
          this.y -= v.y;
          this.z -= v.z;

          return this;

        },

        subScalar: function ( s ) {

          this.x -= s;
          this.y -= s;
          this.z -= s;

          return this;

        },

        subVectors: function ( a, b ) {

          this.x = a.x - b.x;
          this.y = a.y - b.y;
          this.z = a.z - b.z;

          return this;

        },

        multiply: function ( v, w ) {

          if ( w !== undefined ) {

            console.warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
            return this.multiplyVectors( v, w );

          }

          this.x *= v.x;
          this.y *= v.y;
          this.z *= v.z;

          return this;

        },

        multiplyScalar: function ( scalar ) {

          this.x *= scalar;
          this.y *= scalar;
          this.z *= scalar;

          return this;

        },

        multiplyVectors: function ( a, b ) {

          this.x = a.x * b.x;
          this.y = a.y * b.y;
          this.z = a.z * b.z;

          return this;

        },

        applyEuler: function ( euler ) {

          if ( !( euler & amp; & amp; euler.isEuler ) ) {

            console.error( 'THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.' );

          }

          return this.applyQuaternion( _quaternion.setFromEuler( euler ) );

        },

        applyAxisAngle: function ( axis, angle ) {

          return this.applyQuaternion( _quaternion.setFromAxisAngle( axis, angle ) );

        },

        applyMatrix3: function ( m ) {

          var x = this.x,
            y = this.y,
            z = this.z;
          var e = m.elements;

          this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
          this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
          this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

          return this;

        },

        applyMatrix4: function ( m ) {

          var x = this.x,
            y = this.y,
            z = this.z;
          var e = m.elements;

          var w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

          this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
          this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
          this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

          return this;

        },

        applyQuaternion: function ( q ) {

          var x = this.x,
            y = this.y,
            z = this.z;
          var qx = q.x,
            qy = q.y,
            qz = q.z,
            qw = q.w;

          // calculate quat * vector

          var ix = qw * x + qy * z - qz * y;
          var iy = qw * y + qz * x - qx * z;
          var iz = qw * z + qx * y - qy * x;
          var iw = -qx * x - qy * y - qz * z;

          // calculate result * inverse quat

          this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
          this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
          this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

          return this;

        },

        project: function ( camera ) {

          return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

        },

        unproject: function ( camera ) {

          return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

        },

        transformDirection: function ( m ) {

          // input: THREE.Matrix4 affine matrix
          // vector interpreted as a direction

          var x = this.x,
            y = this.y,
            z = this.z;
          var e = m.elements;

          this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
          this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
          this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

          return this.normalize();

        },

        divide: function ( v ) {

          this.x /= v.x;
          this.y /= v.y;
          this.z /= v.z;

          return this;

        },

        divideScalar: function ( scalar ) {

          return this.multiplyScalar( 1 / scalar );

        },

        min: function ( v ) {

          this.x = Math.min( this.x, v.x );
          this.y = Math.min( this.y, v.y );
          this.z = Math.min( this.z, v.z );

          return this;

        },

        max: function ( v ) {

          this.x = Math.max( this.x, v.x );
          this.y = Math.max( this.y, v.y );
          this.z = Math.max( this.z, v.z );

          return this;

        },

        clamp: function ( min, max ) {

          // assumes min &lt; max, componentwise

          this.x = Math.max( min.x, Math.min( max.x, this.x ) );
          this.y = Math.max( min.y, Math.min( max.y, this.y ) );
          this.z = Math.max( min.z, Math.min( max.z, this.z ) );

          return this;

        },

        clampScalar: function ( minVal, maxVal ) {

          this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
          this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
          this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

          return this;

        },

        clampLength: function ( min, max ) {

          var length = this.length();

          return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

        },

        floor: function () {

          this.x = Math.floor( this.x );
          this.y = Math.floor( this.y );
          this.z = Math.floor( this.z );

          return this;

        },

        ceil: function () {

          this.x = Math.ceil( this.x );
          this.y = Math.ceil( this.y );
          this.z = Math.ceil( this.z );

          return this;

        },

        round: function () {

          this.x = Math.round( this.x );
          this.y = Math.round( this.y );
          this.z = Math.round( this.z );

          return this;

        },

        roundToZero: function () {

          this.x = ( this.x & lt; 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
          this.y = ( this.y & lt; 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
          this.z = ( this.z & lt; 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );

          return this;

        },

        negate: function () {

          this.x = -this.x;
          this.y = -this.y;
          this.z = -this.z;

          return this;

        },

        dot: function ( v ) {

          return this.x * v.x + this.y * v.y + this.z * v.z;

        },

        // TODO lengthSquared?

        lengthSq: function () {

          return this.x * this.x + this.y * this.y + this.z * this.z;

        },

        length: function () {

          return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

        },

        manhattanLength: function () {

          return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

        },

        normalize: function () {

          return this.divideScalar( this.length() || 1 );

        },

        setLength: function ( length ) {

          return this.normalize().multiplyScalar( length );

        },

        lerp: function ( v, alpha ) {

          this.x += ( v.x - this.x ) * alpha;
          this.y += ( v.y - this.y ) * alpha;
          this.z += ( v.z - this.z ) * alpha;

          return this;

        },

        lerpVectors: function ( v1, v2, alpha ) {

          return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

        },

        cross: function ( v, w ) {

          if ( w !== undefined ) {

            console.warn( 'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' );
            return this.crossVectors( v, w );

          }

          return this.crossVectors( this, v );

        },

        crossVectors: function ( a, b ) {

          var ax = a.x,
            ay = a.y,
            az = a.z;
          var bx = b.x,
            by = b.y,
            bz = b.z;

          this.x = ay * bz - az * by;
          this.y = az * bx - ax * bz;
          this.z = ax * by - ay * bx;

          return this;

        },

        projectOnVector: function ( v ) {

          // v cannot be the zero v

          var scalar = v.dot( this ) / v.lengthSq();

          return this.copy( v ).multiplyScalar( scalar );

        },

        projectOnPlane: function ( planeNormal ) {

          _vector.copy( this ).projectOnVector( planeNormal );

          return this.sub( _vector );

        },

        reflect: function ( normal ) {

          // reflect incident vector off plane orthogonal to normal
          // normal is assumed to have unit length

          return this.sub( _vector.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

        },

        angleTo: function ( v ) {

          var denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

          if ( denominator === 0 ) { console.error( 'THREE.Vector3: angleTo() can\'t handle zero length vectors.' ); }

          var theta = this.dot( v ) / denominator;

          // clamp, to handle numerical problems

          return Math.acos( _Math.clamp( theta, -1, 1 ) );

        },

        distanceTo: function ( v ) {

          return Math.sqrt( this.distanceToSquared( v ) );

        },

        distanceToSquared: function ( v ) {

          var dx = this.x - v.x,
            dy = this.y - v.y,
            dz = this.z - v.z;

          return dx * dx + dy * dy + dz * dz;

        },

        manhattanDistanceTo: function ( v ) {

          return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

        },

        setFromSpherical: function ( s ) {

          return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

        },

        setFromSphericalCoords: function ( radius, phi, theta ) {

          var sinPhiRadius = Math.sin( phi ) * radius;

          this.x = sinPhiRadius * Math.sin( theta );
          this.y = Math.cos( phi ) * radius;
          this.z = sinPhiRadius * Math.cos( theta );

          return this;

        },

        setFromCylindrical: function ( c ) {

          return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

        },

        setFromCylindricalCoords: function ( radius, theta, y ) {

          this.x = radius * Math.sin( theta );
          this.y = y;
          this.z = radius * Math.cos( theta );

          return this;

        },

        setFromMatrixPosition: function ( m ) {

          var e = m.elements;

          this.x = e[ 12 ];
          this.y = e[ 13 ];
          this.z = e[ 14 ];

          return this;

        },

        setFromMatrixScale: function ( m ) {

          var sx = this.setFromMatrixColumn( m, 0 ).length();
          var sy = this.setFromMatrixColumn( m, 1 ).length();
          var sz = this.setFromMatrixColumn( m, 2 ).length();

          this.x = sx;
          this.y = sy;
          this.z = sz;

          return this;

        },

        setFromMatrixColumn: function ( m, index ) {

          return this.fromArray( m.elements, index * 4 );

        },

        equals: function ( v ) {

          return ( ( v.x === this.x ) & amp; & amp;
            ( v.y === this.y ) & amp; & amp;
            ( v.z === this.z ) );

        },

        fromArray: function ( array, offset ) {

          if ( offset === undefined ) { offset = 0; }

          this.x = array[ offset ];
          this.y = array[ offset + 1 ];
          this.z = array[ offset + 2 ];

          return this;

        },

        toArray: function ( array, offset ) {

          if ( array === undefined ) { array = []; }
          if ( offset === undefined ) { offset = 0; }

          array[ offset ] = this.x;
          array[ offset + 1 ] = this.y;
          array[ offset + 2 ] = this.z;

          return array;

        },

        fromBufferAttribute: function ( attribute, index, offset ) {

          if ( offset !== undefined ) {

            console.warn( 'THREE.Vector3: offset has been removed from .fromBufferAttribute().' );

          }

          this.x = attribute.getX( index );
          this.y = attribute.getY( index );
          this.z = attribute.getZ( index );

          return this;

        }

      } );

      /**
       * @author alteredq / http://alteredqualia.com/
       * @author WestLangley / http://github.com/WestLangley
       * @author bhouston / http://clara.io
       * @author tschw
       */

      var _vector$1 = new Vector3();

      function Matrix3() {

        this.elements = [

          1, 0, 0,
          0, 1, 0,
          0, 0, 1

        ];

        if ( arguments.length & gt; 0 ) {

          console.error( 'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.' );

        }

      }

      Object.assign( Matrix3.prototype, {

        isMatrix3: true,

        set: function ( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

          var te = this.elements;

          te[ 0 ] = n11;
          te[ 1 ] = n21;
          te[ 2 ] = n31;
          te[ 3 ] = n12;
          te[ 4 ] = n22;
          te[ 5 ] = n32;
          te[ 6 ] = n13;
          te[ 7 ] = n23;
          te[ 8 ] = n33;

          return this;

        },

        identity: function () {

          this.set(

            1, 0, 0,
            0, 1, 0,
            0, 0, 1

          );

          return this;

        },

        clone: function () {

          return new this.constructor().fromArray( this.elements );

        },

        copy: function ( m ) {

          var te = this.elements;
          var me = m.elements;

          te[ 0 ] = me[ 0 ];
          te[ 1 ] = me[ 1 ];
          te[ 2 ] = me[ 2 ];
          te[ 3 ] = me[ 3 ];
          te[ 4 ] = me[ 4 ];
          te[ 5 ] = me[ 5 ];
          te[ 6 ] = me[ 6 ];
          te[ 7 ] = me[ 7 ];
          te[ 8 ] = me[ 8 ];

          return this;

        },

        setFromMatrix4: function ( m ) {

          var me = m.elements;

          this.set(

            me[ 0 ], me[ 4 ], me[ 8 ],
            me[ 1 ], me[ 5 ], me[ 9 ],
            me[ 2 ], me[ 6 ], me[ 10 ]

          );

          return this;

        },

        applyToBufferAttribute: function ( attribute ) {

          for ( var i = 0, l = attribute.count; i & lt; l; i++ ) {

            _vector$1.x = attribute.getX( i );
            _vector$1.y = attribute.getY( i );
            _vector$1.z = attribute.getZ( i );

            _vector$1.applyMatrix3( this );

            attribute.setXYZ( i, _vector$1.x, _vector$1.y, _vector$1.z );

          }

          return attribute;

        },

        multiply: function ( m ) {

          return this.multiplyMatrices( this, m );

        },

        premultiply: function ( m ) {

          return this.multiplyMatrices( m, this );

        },

        multiplyMatrices: function ( a, b ) {

          var ae = a.elements;
          var be = b.elements;
          var te = this.elements;

          var a11 = ae[ 0 ],
            a12 = ae[ 3 ],
            a13 = ae[ 6 ];
          var a21 = ae[ 1 ],
            a22 = ae[ 4 ],
            a23 = ae[ 7 ];
          var a31 = ae[ 2 ],
            a32 = ae[ 5 ],
            a33 = ae[ 8 ];

          var b11 = be[ 0 ],
            b12 = be[ 3 ],
            b13 = be[ 6 ];
          var b21 = be[ 1 ],
            b22 = be[ 4 ],
            b23 = be[ 7 ];
          var b31 = be[ 2 ],
            b32 = be[ 5 ],
            b33 = be[ 8 ];

          te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
          te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
          te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

          te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
          te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
          te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

          te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
          te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
          te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

          return this;

        },

        multiplyScalar: function ( s ) {

          var te = this.elements;

          te[ 0 ] *= s;
          te[ 3 ] *= s;
          te[ 6 ] *= s;
          te[ 1 ] *= s;
          te[ 4 ] *= s;
          te[ 7 ] *= s;
          te[ 2 ] *= s;
          te[ 5 ] *= s;
          te[ 8 ] *= s;

          return this;

        },

        determinant: function () {

          var te = this.elements;

          var a = te[ 0 ],
            b = te[ 1 ],
            c = te[ 2 ],
            d = te[ 3 ],
            e = te[ 4 ],
            f = te[ 5 ],
            g = te[ 6 ],
            h = te[ 7 ],
            i = te[ 8 ];

          return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

        },

        getInverse: function ( matrix, throwOnDegenerate ) {

          if ( matrix & amp; & amp; matrix.isMatrix4 ) {

            console.error( "THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument." );

          }

          var me = matrix.elements,
            te = this.elements,

            n11 = me[ 0 ],
            n21 = me[ 1 ],
            n31 = me[ 2 ],
            n12 = me[ 3 ],
            n22 = me[ 4 ],
            n32 = me[ 5 ],
            n13 = me[ 6 ],
            n23 = me[ 7 ],
            n33 = me[ 8 ],

            t11 = n33 * n22 - n32 * n23,
            t12 = n32 * n13 - n33 * n12,
            t13 = n23 * n12 - n22 * n13,

            det = n11 * t11 + n21 * t12 + n31 * t13;

          if ( det === 0 ) {

            var msg = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";

            if ( throwOnDegenerate === true ) {

              throw new Error( msg );

            } else {

              console.warn( msg );

            }

            return this.identity();

          }

          var detInv = 1 / det;

          te[ 0 ] = t11 * detInv;
          te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
          te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

          te[ 3 ] = t12 * detInv;
          te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
          te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

          te[ 6 ] = t13 * detInv;
          te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
          te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

          return this;

        },

        transpose: function () {

          var tmp, m = this.elements;

          tmp = m[ 1 ];
          m[ 1 ] = m[ 3 ];
          m[ 3 ] = tmp;
          tmp = m[ 2 ];
          m[ 2 ] = m[ 6 ];
          m[ 6 ] = tmp;
          tmp = m[ 5 ];
          m[ 5 ] = m[ 7 ];
          m[ 7 ] = tmp;

          return this;

        },

        getNormalMatrix: function ( matrix4 ) {

          return this.setFromMatrix4( matrix4 ).getInverse( this ).transpose();

        },

        transposeIntoArray: function ( r ) {

          var m = this.elements;

          r[ 0 ] = m[ 0 ];
          r[ 1 ] = m[ 3 ];
          r[ 2 ] = m[ 6 ];
          r[ 3 ] = m[ 1 ];
          r[ 4 ] = m[ 4 ];
          r[ 5 ] = m[ 7 ];
          r[ 6 ] = m[ 2 ];
          r[ 7 ] = m[ 5 ];
          r[ 8 ] = m[ 8 ];

          return this;

        },

        setUvTransform: function ( tx, ty, sx, sy, rotation, cx, cy ) {

          var c = Math.cos( rotation );
          var s = Math.sin( rotation );

          this.set(
            sx * c, sx * s, -sx * ( c * cx + s * cy ) + cx + tx,
            -sy * s, sy * c, -sy * ( -s * cx + c * cy ) + cy + ty,
            0, 0, 1
          );

        },

        scale: function ( sx, sy ) {

          var te = this.elements;

          te[ 0 ] *= sx;
          te[ 3 ] *= sx;
          te[ 6 ] *= sx;
          te[ 1 ] *= sy;
          te[ 4 ] *= sy;
          te[ 7 ] *= sy;

          return this;

        },

        rotate: function ( theta ) {

          var c = Math.cos( theta );
          var s = Math.sin( theta );

          var te = this.elements;

          var a11 = te[ 0 ],
            a12 = te[ 3 ],
            a13 = te[ 6 ];
          var a21 = te[ 1 ],
            a22 = te[ 4 ],
            a23 = te[ 7 ];

          te[ 0 ] = c * a11 + s * a21;
          te[ 3 ] = c * a12 + s * a22;
          te[ 6 ] = c * a13 + s * a23;

          te[ 1 ] = -s * a11 + c * a21;
          te[ 4 ] = -s * a12 + c * a22;
          te[ 7 ] = -s * a13 + c * a23;

          return this;

        },

        translate: function ( tx, ty ) {

          var te = this.elements;

          te[ 0 ] += tx * te[ 2 ];
          te[ 3 ] += tx * te[ 5 ];
          te[ 6 ] += tx * te[ 8 ];
          te[ 1 ] += ty * te[ 2 ];
          te[ 4 ] += ty * te[ 5 ];
          te[ 7 ] += ty * te[ 8 ];

          return this;

        },

        equals: function ( matrix ) {

          var te = this.elements;
          var me = matrix.elements;

          for ( var i = 0; i & lt; 9; i++ ) {

            if ( te[ i ] !== me[ i ] ) { return false; }

          }

          return true;

        },

        fromArray: function ( array, offset ) {

          if ( offset === undefined ) { offset = 0; }

          for ( var i = 0; i & lt; 9; i++ ) {

            this.elements[ i ] = array[ i + offset ];

          }

          return this;

        },

        toArray: function ( array, offset ) {

          if ( array === undefined ) { array = []; }
          if ( offset === undefined ) { offset = 0; }

          var te = this.elements;

          array[ offset ] = te[ 0 ];
          array[ offset + 1 ] = te[ 1 ];
          array[ offset + 2 ] = te[ 2 ];

          array[ offset + 3 ] = te[ 3 ];
          array[ offset + 4 ] = te[ 4 ];
          array[ offset + 5 ] = te[ 5 ];

          array[ offset + 6 ] = te[ 6 ];
          array[ offset + 7 ] = te[ 7 ];
          array[ offset + 8 ] = te[ 8 ];

          return array;

        }

      } );

      /**
       * @author mrdoob / http://mrdoob.com/
       * @author alteredq / http://alteredqualia.com/
       * @author szimek / https://github.com/szimek/
       */

      var _canvas;

      var ImageUtils = {

        getDataURL: function ( image ) {

          var canvas;

          if ( typeof HTMLCanvasElement == 'undefined' ) {

            return image.src;

          } else if ( image instanceof HTMLCanvasElement ) {

            canvas = image;

          } else {

            if ( _canvas === undefined ) { _canvas = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' ); }

            _canvas.width = image.width;
            _canvas.height = image.height;

            var context = _canvas.getContext( '2d' );

            if ( image instanceof ImageData ) {

              context.putImageData( image, 0, 0 );

            } else {

              context.drawImage( image, 0, 0, image.width, image.height );

            }

            canvas = _canvas;

          }

          if ( canvas.width & gt; 2048 || canvas.height & gt; 2048 ) {

            return canvas.toDataURL( 'image/jpeg', 0.6 );

          } else {

            return canvas.toDataURL( 'image/png' );

          }

        }

      };

      /**
       * @author mrdoob / http://mrdoob.com/
       * @author alteredq / http://alteredqualia.com/
       * @author szimek / https://github.com/szimek/
       */

      var textureId = 0;

      function Texture( image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding ) {

        Object.defineProperty( this, 'id', { value: textureId++ } );

        this.uuid = _Math.generateUUID();

        this.name = '';

        this.image = image !== undefined ? image : Texture.DEFAULT_IMAGE;
        this.mipmaps = [];

        this.mapping = mapping !== undefined ? mapping : Texture.DEFAULT_MAPPING;

        this.wrapS = wrapS !== undefined ? wrapS : ClampToEdgeWrapping;
        this.wrapT = wrapT !== undefined ? wrapT : ClampToEdgeWrapping;

        this.magFilter = magFilter !== undefined ? magFilter : LinearFilter;
        this.minFilter = minFilter !== undefined ? minFilter : LinearMipmapLinearFilter;

        this.anisotropy = anisotropy !== undefined ? anisotropy : 1;

        this.format = format !== undefined ? format : RGBAFormat;
        this.type = type !== undefined ? type : UnsignedByteType;

        this.offset = new Vector2( 0, 0 );
        this.repeat = new Vector2( 1, 1 );
        this.center = new Vector2( 0, 0 );
        this.rotation = 0;

        this.matrixAutoUpdate = true;
        this.matrix = new Matrix3();

        this.generateMipmaps = true;
        this.premultiplyAlpha = false;
        this.flipY = true;
        this.unpackAlignment = 4; // valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

        // Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
        //
        // Also changing the encoding after already used by a Material will not automatically make the Material
        // update. You need to explicitly call Material.needsUpdate to trigger it to recompile.
        this.encoding = encoding !== undefined ? encoding : LinearEncoding;

        this.version = 0;
        this.onUpdate = null;

      }

      Texture.DEFAULT_IMAGE = undefined;
      Texture.DEFAULT_MAPPING = UVMapping;

      Texture.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

        constructor: Texture,

        isTexture: true,

        updateMatrix: function () {

          this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

        },

        clone: function () {

          return new this.constructor().copy( this );

        },

        copy: function ( source ) {

          this.name = source.name;

          this.image = source.image;
          this.mipmaps = source.mipmaps.slice( 0 );

          this.mapping = source.mapping;

          this.wrapS = source.wrapS;
          this.wrapT = source.wrapT;

          this.magFilter = source.magFilter;
          this.minFilter = source.minFilter;

          this.anisotropy = source.anisotropy;

          this.format = source.format;
          this.type = source.type;

          this.offset.copy( source.offset );
          this.repeat.copy( source.repeat );
          this.center.copy( source.center );
          this.rotation = source.rotation;

          this.matrixAutoUpdate = source.matrixAutoUpdate;
          this.matrix.copy( source.matrix );

          this.generateMipmaps = source.generateMipmaps;
          this.premultiplyAlpha = source.premultiplyAlpha;
          this.flipY = source.flipY;
          this.unpackAlignment = source.unpackAlignment;
          this.encoding = source.encoding;

          return this;

        },

        toJSON: function ( meta ) {

          var isRootObject = ( meta === undefined || typeof meta === 'string' );

          if ( !isRootObject & amp; & amp; meta.textures[ this.uuid ] !== undefined ) {

            return meta.textures[ this.uuid ];

          }

          var output = {

            metadata: {
              version: 4.5,
              type: 'Texture',
              generator: 'Texture.toJSON'
            },

            uuid: this.uuid,
            name: this.name,

            mapping: this.mapping,

            repeat: [ this.repeat.x, this.repeat.y ],
            offset: [ this.offset.x, this.offset.y ],
            center: [ this.center.x, this.center.y ],
            rotation: this.rotation,

            wrap: [ this.wrapS, this.wrapT ],

            format: this.format,
            type: this.type,
            encoding: this.encoding,

            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,

            flipY: this.flipY,

            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment

          };

          if ( this.image !== undefined ) {

            // TODO: Move to THREE.Image

            var image = this.image;

            if ( image.uuid === undefined ) {

              image.uuid = _Math.generateUUID(); // UGH

            }

            if ( !isRootObject & amp; & amp; meta.images[ image.uuid ] === undefined ) {

              var url;

              if ( Array.isArray( image ) ) {

                // process array of images e.g. CubeTexture

                url = [];

                for ( var i = 0, l = image.length; i & lt; l; i++ ) {

                  url.push( ImageUtils.getDataURL( image[ i ] ) );

                }

              } else {

                // process single image

                url = ImageUtils.getDataURL( image );

              }

              meta.images[ image.uuid ] = {
                uuid: image.uuid,
                url: url
              };

            }

            output.image = image.uuid;

          }

          if ( !isRootObject ) {

            meta.textures[ this.uuid ] = output;

          }

          return output;

        },

        dispose: function () {

          this.dispatchEvent( { type: 'dispose' } );

        },

        transformUv: function ( uv ) {

          if ( this.mapping !== UVMapping ) { return uv; }

          uv.applyMatrix3( this.matrix );

          if ( uv.x & lt; 0 || uv.x & gt; 1 ) {

            switch ( this.wrapS ) {

              case RepeatWrapping:

                uv.x = uv.x - Math.floor( uv.x );
                break;

              case ClampToEdgeWrapping:

                uv.x = uv.x & lt;
                0 ? 0 : 1;
                break;

              case MirroredRepeatWrapping:

                if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

                  uv.x = Math.ceil( uv.x ) - uv.x;

                } else {

                  uv.x = uv.x - Math.floor( uv.x );

                }
                break;

            }

          }

          if ( uv.y & lt; 0 || uv.y & gt; 1 ) {

            switch ( this.wrapT ) {

              case RepeatWrapping:

                uv.y = uv.y - Math.floor( uv.y );
                break;

              case ClampToEdgeWrapping:

                uv.y = uv.y & lt;
                0 ? 0 : 1;
                break;

              case MirroredRepeatWrapping:

                if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

                  uv.y = Math.ceil( uv.y ) - uv.y;

                } else {

                  uv.y = uv.y - Math.floor( uv.y );

                }
                break;

            }

          }

          if ( this.flipY ) {

            uv.y = 1 - uv.y;

          }

          return uv;

        }

      } );

      Object.defineProperty( Texture.prototype, "needsUpdate", {

        set: function ( value ) {

          if ( value === true ) { this.version++; }

        }

      } );

      /**
       * @author supereggbert / http://www.paulbrunt.co.uk/
       * @author philogb / http://blog.thejit.org/
       * @author mikael emtinger / http://gomo.se/
       * @author egraether / http://egraether.com/
       * @author WestLangley / http://github.com/WestLangley
       */

      function Vector4( x, y, z, w ) {

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = ( w !== undefined ) ? w : 1;

      }

      Object.defineProperties( Vector4.prototype, {

        "width": {

          get: function () {

            return this.z;

          },

          set: function ( value ) {

            this.z = value;

          }

        },

        "height": {

          get: function () {

            return this.w;

          },

          set: function ( value ) {

            this.w = value;

          }

        }

      } );

      Object.assign( Vector4.prototype, {

            isVector4: true,

            set: function ( x, y, z, w ) {

              this.x = x;
              this.y = y;
              this.z = z;
              this.w = w;

              return this;

            },

            setScalar: function ( scalar ) {

              this.x = scalar;
              this.y = scalar;
              this.z = scalar;
              this.w = scalar;

              return this;

            },

            setX: function ( x ) {

              this.x = x;

              return this;

            },

            setY: function ( y ) {

              this.y = y;

              return this;

            },

            setZ: function ( z ) {

              this.z = z;

              return this;

            },

            setW: function ( w ) {

              this.w = w;

              return this;

            },

            setComponent: function ( index, value ) {

              switch ( index ) {

                case 0:
                  this.x = value;
                  break;
                case 1:
                  this.y = value;
                  break;
                case 2:
                  this.z = value;
                  break;
                case 3:
                  this.w = value;
                  break;
                default:
                  throw new Error( 'index is out of range: ' + index );

              }

              return this;

            },

            getComponent: function ( index ) {

              switch ( index ) {

                case 0:
                  return this.x;
                case 1:
                  return this.y;
                case 2:
                  return this.z;
                case 3:
                  return this.w;
                default:
                  throw new Error( 'index is out of range: ' + index );

              }

            },

            clone: function () {

              return new this.constructor( this.x, this.y, this.z, this.w );

            },

            copy: function ( v ) {

              this.x = v.x;
              this.y = v.y;
              this.z = v.z;
              this.w = ( v.w !== undefined ) ? v.w : 1;

              return this;

            },

            add: function ( v, w ) {

              if ( w !== undefined ) {

                console.warn( 'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
                return this.addVectors( v, w );

              }

              this.x += v.x;
              this.y += v.y;
              this.z += v.z;
              this.w += v.w;

              return this;

            },

            addScalar: function ( s ) {

              this.x += s;
              this.y += s;
              this.z += s;
              this.w += s;

              return this;

            },

            addVectors: function ( a, b ) {

              this.x = a.x + b.x;
              this.y = a.y + b.y;
              this.z = a.z + b.z;
              this.w = a.w + b.w;

              return this;

            },

            addScaledVector: function ( v, s ) {

              this.x += v.x * s;
              this.y += v.y * s;
              this.z += v.z * s;
              this.w += v.w * s;

              return this;

            },

            sub: function ( v, w ) {

              if ( w !== undefined ) {

                console.warn( 'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
                return this.subVectors( v, w );

              }

              this.x -= v.x;
              this.y -= v.y;
              this.z -= v.z;
              this.w -= v.w;

              return this;

            },

            subScalar: function ( s ) {

              this.x -= s;
              this.y -= s;
              this.z -= s;
              this.w -= s;

              return this;

            },

            subVectors: function ( a, b ) {

              this.x = a.x - b.x;
              this.y = a.y - b.y;
              this.z = a.z - b.z;
              this.w = a.w - b.w;

              return this;

            },

            multiplyScalar: function ( scalar ) {

              this.x *= scalar;
              this.y *= scalar;
              this.z *= scalar;
              this.w *= scalar;

              return this;

            },

            applyMatrix4: function ( m ) {

              var x = this.x,
                y = this.y,
                z = this.z,
                w = this.w;
              var e = m.elements;

              this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
              this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
              this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
              this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

              return this;

            },

            divideScalar: function ( scalar ) {

              return this.multiplyScalar( 1 / scalar );

            },

            setAxisAngleFromQuaternion: function ( q ) {

              // http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

              // q is assumed to be normalized

              this.w = 2 * Math.acos( q.w );

              var s = Math.sqrt( 1 - q.w * q.w );

              if ( s & lt; 0.0001 ) {

                this.x = 1;
                this.y = 0;
                this.z = 0;

              } else {

                this.x = q.x / s;
                this.y = q.y / s;
                this.z = q.z / s;

              }

              return this;

            },

            setAxisAngleFromRotationMatrix: function ( m ) {

              // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

              // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

              var angle, x, y, z, // variables for result
                epsilon = 0.01, // margin to allow for rounding errors
                epsilon2 = 0.1, // margin to distinguish between 0 and 180 degrees

                te = m.elements,

                m11 = te[ 0 ],
                m12 = te[ 4 ],
                m13 = te[ 8 ],
                m21 = te[ 1 ],
                m22 = te[ 5 ],
                m23 = te[ 9 ],
                m31 = te[ 2 ],
                m32 = te[ 6 ],
                m33 = te[ 10 ];

              if ( ( Math.abs( m12 - m21 ) & lt; epsilon ) & amp; & amp;
                ( Math.abs( m13 - m31 ) & lt; epsilon ) & amp; & amp;
                ( Math.abs( m23 - m32 ) & lt; epsilon ) ) {

                // singularity found
                // first check for identity matrix which must have +1 for all terms
                // in leading diagonal and zero in other terms

                if ( ( Math.abs( m12 + m21 ) & lt; epsilon2 ) & amp; & amp;
                  ( Math.abs( m13 + m31 ) & lt; epsilon2 ) & amp; & amp;
                  ( Math.abs( m23 + m32 ) & lt; epsilon2 ) & amp; & amp;
                  ( Math.abs( m11 + m22 + m33 - 3 ) & lt; epsilon2 ) ) {

                  // this singularity is identity matrix so angle = 0

                  this.set( 1, 0, 0, 0 );

                  return this; // zero angle, arbitrary axis

                }

                // otherwise this singularity is angle = 180

                angle = Math.PI;

                var xx = ( m11 + 1 ) / 2;
                var yy = ( m22 + 1 ) / 2;
                var zz = ( m33 + 1 ) / 2;
                var xy = ( m12 + m21 ) / 4;
                var xz = ( m13 + m31 ) / 4;
                var yz = ( m23 + m32 ) / 4;

                if ( ( xx & gt; yy ) & amp; & amp;
                  ( xx & gt; zz ) ) {

                  // m11 is the largest diagonal term

                  if ( xx & lt; epsilon ) {

                    x = 0;
                    y = 0.707106781;
                    z = 0.707106781;

                  } else {

                    x = Math.sqrt( xx );
                    y = xy / x;
                    z = xz / x;

                  }

                } else if ( yy & gt; zz ) {

                  // m22 is the largest diagonal term

                  if ( yy & lt; epsilon ) {

                    x = 0.707106781;
                    y = 0;
                    z = 0.707106781;

                  } else {

                    y = Math.sqrt( yy );
                    x = xy / y;
                    z = yz / y;

                  }

                } else {

                  // m33 is the largest diagonal term so base result on this

                  if ( zz & lt; epsilon ) {

                    x = 0.707106781;
                    y = 0.707106781;
                    z = 0;

                  } else {

                    z = Math.sqrt( zz );
                    x = xz / z;
                    y = yz / z;

                  }

                }

                this.set( x, y, z, angle );

                return this; // return 180 deg rotation

              }

              // as we have reached here there are no singularities so we can handle normally

              var s = Math.sqrt( ( m32 - m23 ) * ( m32 - m23 ) +
                ( m13 - m31 ) * ( m13 - m31 ) +
                ( m21 - m12 ) * ( m21 - m12 ) ); // used to normalize

              if ( Math.abs( s ) & lt; 0.001 ) { s = 1; }

              // prevent divide by zero, should not happen if matrix is orthogonal and should be
              // caught by singularity test above, but I've left it in just in case

              this.x = ( m32 - m23 ) / s;
              this.y = ( m13 - m31 ) / s;
              this.z = ( m21 - m12 ) / s;
              this.w = Math.acos( ( m11 + m22 + m33 - 1 ) / 2 );

              return this;

            },

            min: function ( v ) {

              this.x = Math.min( this.x, v.x );
              this.y = Math.min( this.y, v.y );
              this.z = Math.min( this.z, v.z );
              this.w = Math.min( this.w, v.w );

              return this;

            },

            max: function ( v ) {

                this.x = Math.max( this.x, v.x );
                this.y = Math.max( this.