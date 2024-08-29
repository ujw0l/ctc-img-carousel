/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var images_carousel_image_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images-carousel/image-carousel */ "./node_modules/images-carousel/image-carousel.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");





/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  clientId,
  attributes,
  setAttributes
}) {
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  setAttributes({
    clntId: clientId
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let selector = `#${elRef.current.id}`;
    if (attributes.carItems.length >= 3) {
      elRef.current.style.height = attributes.carHeight + 'px';
      elRef.current.style.width = attributes.carWidth + 'px';
      elRef.current.style.marginLeft = 'auto';
      elRef.current.style.marginRight = 'auto';
      new images_carousel_image_carousel__WEBPACK_IMPORTED_MODULE_1__.imageCarousel(selector, {
        callBack: () => elRef.current.style.display = 'block'
      });
      window.dispatchEvent(new Event('resize'));
    } else {
      elRef.current.style.display = 'none';
    }
  }, [attributes.carItems, attributes.carHeight, attributes.carWidth]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `ctc-image-car-${attributes.clntId}`,
    ref: elRef,
    style: {
      display: 'none'
    }
  }, attributes.carItems.map(x => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: x.url,
    title: x.caption
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select  images for gallery ', 'ctcl-image-gallery'),
    multiple: true,
    value: attributes.carItems.map(x => x.id),
    gallery: true,
    onSelect: gal => {
      Array.from(elRef.current.querySelectorAll('div')).map(x => x.remove());
      setAttributes({
        carItems: gal
      });
    },
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: '100%',
        backgroundColor: 'rgba(255,255,,255,1)',
        color: 'rgb(61, 148, 218)',
        padding: '10px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "dashicons-before dashicons-slides"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(' Image Gallery ', 'image-carousel')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      style: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        color: 'rgb(61, 148, 218)',
        border: '1px solid rgb(61, 148, 218)'
      },
      className: "dashicons-before dashicons-slides",
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(" Select Images", "image-carousel")))
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Carousel width in pixel (px)', "image-carousel"),
    min: 148,
    max: 1000,
    onChange: val => {
      Array.from(elRef.current.querySelectorAll('div')).map(x => x.remove());
      setAttributes({
        carWidth: val
      });
    },
    value: attributes.carWidth
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Carousel Height in pixel (px)', "image-carousel"),
    min: 148,
    max: 700,
    onChange: val => {
      Array.from(elRef.current.querySelectorAll('div')).map(x => x.remove());
      setAttributes({
        carHeight: val
      });
    },
    value: attributes.carHeight
  })))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gallery', 'image-craousel'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('carousel', 'image-carousel')],
  attributes: {
    carItems: {
      type: 'Array',
      default: []
    },
    carHeight: {
      type: 'Number',
      default: 500
    },
    carWidth: {
      type: 'Number',
      default: 700
    },
    clntId: {
      type: 'String',
      default: ''
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, attributes.carItems.length >= 3 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctc-image-carousel",
    style: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      height: attributes.carHeight + 'px',
      width: attributes.carWidth + 'px'
    }
  }, attributes.carItems.map(x => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: x.url,
    title: x.caption
  }))));
}

/***/ }),

/***/ "./node_modules/images-carousel/image-carousel.js":
/*!********************************************************!*\
  !*** ./node_modules/images-carousel/image-carousel.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageCarousel: () => (/* binding */ imageCarousel)
/* harmony export */ });
/*
 * 
 * 
 * 
 * Image carousel
 *  Images  carousel library written in vanilla js
 * https://ujwolbastakoti.wordpress.com/
 * MIT license
 * 
 * 
 * 
 */

 class imageCarousel{
    constructor(sel,param1){
        Array.from(document.querySelectorAll(sel)).map((x,i)=>this.prepCarousel(x , i, param1))
    }

    /*
    * Prepare carousel 
    *
    *@param gal Image gallery object
    *@param galNum gallery number
    *@param param1 Additional settings for carousel
    *
    */
    prepCarousel(gal,galNum,param1){ 

      
        let maxWidth = gal.offsetWidth;
        let maxHeight = gal.offsetHeight;
        let carDivsObj = {};


        let imgs = Array.from(gal.querySelectorAll('img'));
        imgs.map((x,i)=>x.style.display ='none')
         
        let prevThreeDiv =  document.createElement('div');
             prevThreeDiv.style = `width:${(0.42)*maxWidth}px;height:${0.7*maxHeight}px;z-index:400;display:inline-block;position:absolute;margin-top:${0.15*maxHeight}px;margin-left:0px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 5px 10px 2px black;`;
             carDivsObj.prevThree = prevThreeDiv,
             gal.appendChild( prevThreeDiv);

        let prevTwoDiv =  document.createElement('div');
             prevTwoDiv.style = `width:${(0.49)*maxWidth}px;height:${0.8*maxHeight}px;z-index:500;display:inline-block;position:absolute;margin-top:${0.1*maxHeight}px;margin-left:${0.06*maxWidth}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 10px 15px 2px black;`;
             carDivsObj.prevTwo = prevTwoDiv,
             gal.appendChild( prevTwoDiv);

        let prevOneDiv =  document.createElement('div');
             prevOneDiv.style = `width:${(0.63)*maxWidth}px;height:${0.9*maxHeight}px;z-index:700;display:inline-block;position:absolute;margin-top:${0.05*maxHeight}px;margin-left:${0.14*maxWidth}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 15px 20px 2px black;`;
             carDivsObj.prevOne = prevOneDiv;  
             gal.appendChild( prevOneDiv);
         
        let mainDiv =  document.createElement('div');
             mainDiv.style = `width:${0.52*maxWidth}px;height:${maxHeight}px;z-index:1000;display:inline-block;position:absolute;margin-top:0px;margin-left:${0.24*maxWidth}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:contain;box-shadow:0px 20px 25px 2px black;`;
             carDivsObj.mainDiv=mainDiv;
             gal.appendChild( mainDiv);

        let nextOneDiv =  document.createElement('div');
            nextOneDiv.style = `width:${(0.63)*maxWidth}px;height:${0.9*maxHeight}px;z-index:700;display:inline-block;position:absolute;margin-top:${0.05*maxHeight}px;margin-left:${0.24*maxWidth}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 15px 20px 2px black;`;
            carDivsObj.nextOne = nextOneDiv;
            gal.appendChild( nextOneDiv);

        let nextTwoDiv =  document.createElement('div');
            nextTwoDiv.style = `width:${(0.49)*maxWidth}px;height:${0.8*maxHeight}px;z-index:500;display:inline-block;position:absolute;margin-top:${0.1*maxHeight}px;margin-left:${0.45*maxWidth}px;background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 10px 15px 2px black;`;
            carDivsObj.nextTwo=nextTwoDiv;
            gal.appendChild( nextTwoDiv);


        let nextThreeDiv =  document.createElement('div');
            nextThreeDiv.style = `width:${(0.42)*maxWidth}px;height:${0.7*maxHeight}px;z-index:400;display:inline-block;position:absolute;margin-top:${0.15*maxHeight}px;margin-left:${0.58*maxWidth};background :rgba(0, 0 , 0, 1) url("") no-repeat center; background-size:cover;box-shadow:0px 5px 10px 2px black;`;
            carDivsObj.nextThree = nextThreeDiv,
            gal.appendChild( nextThreeDiv);    


            this.createCarousel(0,imgs,carDivsObj,galNum,param1);

            for (let i in carDivsObj){
                if ('mainDiv' != i){
                    carDivsObj[i].addEventListener('click', event=>this.createCarousel(parseInt(event.target.getAttribute('data-num')), imgs, carDivsObj,galNum, param1 ));
                    carDivsObj[i].addEventListener('mouseenter', event=>event.target.style.border ='1px dotted rgba(0,0,0,0)')
                    carDivsObj[i].addEventListener('mouseleave', event=>event.target.style.border ='')
                    
                }
            }

            if(undefined != param1  && 'function' == typeof(param1.callBack)){
           
                param1.callBack(gal);
    
        } 

            setTimeout(()=>window.dispatchEvent(new Event('resize')),50);
         
            window.addEventListener('resize', ()=>this.adjustOnResize(gal, carDivsObj,galNum)) 
    }
    /*
    * Create carousel 
    *
    *@param i Image number
    *@param gal Image gallery object
    *@param carDivs Carousel divs object
    *@param galNum Gallery number
    *@param param1 Additional settings for carousel
    *
    */
    createCarousel(i,gal,carDivs, galNum, param1){

        let prevThreeNum ; 
            if(i == 0){prevThreeNum  =  gal.length-3}
            else if(i == 1){prevThreeNum  = gal.length-2}
            else if(i == 2){prevThreeNum  = gal.length-1}
            else{prevThreeNum  = i-3}


        let prevTwoNum ;
            if(i == 0){prevTwoNum =  gal.length-2}
            else if(i == 1){prevTwoNum = gal.length-1}
            else{prevTwoNum = i-2}


        let prevOneNum ;
            if(i == 0){prevOneNum =  gal.length-1}
            else{prevOneNum  = i-1} 

        let nextOneNum ;
            if(i == gal.length-1){nextOneNum = 0}
            else{nextOneNum = i+1} 


        let nextTwoNum;
            if(i == gal.length-1){nextTwoNum= 1}
            else if(i == gal.length-2){nextTwoNum= 0}
            else{nextTwoNum = i+2}

        let nextThreeNum;
            if(i == gal.length-1){nextThreeNum= 2}
            else if(i == gal.length-2){nextThreeNum= 1}
            else if(i == gal.length-3){nextThreeNum= 0}
            else{nextThreeNum = i+3}   
       

        carDivs.prevThree.style.backgroundImage = `url('${gal[prevThreeNum ].src}')`; 
        carDivs.prevThree.title = undefined != gal[prevThreeNum].title ? gal[prevThreeNum].title:'';
        carDivs.prevThree.setAttribute('data-num',prevThreeNum)    

        carDivs.prevTwo.style.backgroundImage = `url('${gal[prevTwoNum ].src}')`; 
        carDivs.prevTwo.title = undefined != gal[prevTwoNum].title ? gal[prevTwoNum].title:'';
        carDivs.prevTwo.setAttribute('data-num',prevTwoNum)

        carDivs.prevOne.style.backgroundImage = `url('${gal[prevOneNum].src}')`; 
        carDivs.prevOne.title = undefined != gal[prevOneNum].title ? gal[prevOneNum].title:'';
        carDivs.prevOne.setAttribute('data-num',prevOneNum)  

        let mainImg = new Image();
            mainImg.src  = gal[i].src;
            mainImg.title =  undefined != gal[i].title ? gal[i].title:''; 

            carDivs.mainDiv.style.backgroundImage = `url('')`;

        let loadingDivCir=   carDivs.mainDiv.querySelector('#img-loading-'+galNum);
        
        let mainImgTitleDiv = carDivs.mainDiv.querySelector('#mainImgTitle');

        

        
        if(null != mainImgTitleDiv){
           
            mainImgTitleDiv.remove();
        }
        

         if(null == loadingDivCir){
                    
                loadingDivCir =  document.createElement('div');
                loadingDivCir.id = `img-loading-${galNum}`;
                loadingDivCir.style = `margin-left:${(carDivs.mainDiv.offsetWidth-40)/2}px;margin-top:${(carDivs.mainDiv.offsetHeight-40)/2}px;height:40px;width:40px;border-radius:50%;border-color:rgba(255,255,255,1);border-style: solid; border-width: 3px;z-index:1100; `;
                loadingDivCir.setAttribute('data-wait','left');
                carDivs.mainDiv.appendChild(loadingDivCir);

            var loadingInt = setInterval(()=>{
                switch( loadingDivCir.getAttribute('data-wait')){
                    case 'left': 
                        loadingDivCir.setAttribute('data-wait','top');
                        loadingDivCir.style.borderColor = 'rgba(255,255,255,0.5)';
                        loadingDivCir.style.borderTop = '3px solid  rgba(255,255,255,0.8)';
                    break;
                    case 'top':
                            loadingDivCir.setAttribute('data-wait','right');
                            loadingDivCir.style.borderColor = 'rgba(255,255,255,0.5)';
                            loadingDivCir.style.borderRight = '3px solid  rgba(255,255,255,0.8)';
                    break;
                    case 'right':
                            loadingDivCir.setAttribute('data-wait','bottom');
                            loadingDivCir.style.borderColor = 'rgba(255,255,255,0.5)';
                            loadingDivCir.style.borderBottom = '3px solid  rgba(255,255,255,0.8)';

                    break;
                    case 'bottom':
                            loadingDivCir.setAttribute('data-wait','left');
                            loadingDivCir.style.borderColor = 'rgba(255,255,255,0.5)';
                            loadingDivCir.style.borderLeft = '3px solid  rgba(255,255,255,0.8)';
                    break;
                }
                
            }, 400);
        }

        
        mainImg.addEventListener('load',(event)=>{
            clearInterval(loadingInt);
            carDivs.mainDiv.removeChild(loadingDivCir) 
            carDivs.mainDiv.style.backgroundImage = `url('${event.target.src}')`;
            
            let imgTitleCont = undefined != event.target.title ? event.target.title:'';

            if('' != imgTitleCont){
                let imgTitle =  document.createElement('div');
                imgTitle.id = 'mainImgTitle';
                imgTitle.style= `margin-top:${carDivs.mainDiv.offsetHeight-25}px; height:25px;margin-bottom:0px;text-align:center;color:rgba(255,255,255,1); background-color:rgba(0,0,0,0.5);margin-left:auto;margin-right:auto;display:block;`;
                imgTitle.textContent = imgTitleCont;
                carDivs.mainDiv.appendChild(imgTitle); 
            }
            


               


            carDivs.mainDiv.title = undefined != event.target.title ? event.target.title:'';
         })   
       


        carDivs.nextOne.style.backgroundImage = `url('${gal[nextOneNum].src}')`; 
        carDivs.nextOne.title = undefined != gal[nextOneNum].title ? gal[nextOneNum].title:'';
        carDivs.nextOne.setAttribute('data-num',nextOneNum);

        carDivs.nextTwo.style.backgroundImage = `url('${gal[nextTwoNum].src}')`; 
        carDivs.nextTwo.title =  undefined != gal[nextTwoNum].title ? gal[nextTwoNum].title:'';
        carDivs.nextTwo.setAttribute('data-num',nextTwoNum); 

        carDivs.nextThree.style.backgroundImage = `url('${gal[nextThreeNum].src}')`; 
        carDivs.nextThree.title =  undefined != gal[nextThreeNum].title ? gal[nextThreeNum].title:'';
        carDivs.nextThree.setAttribute('data-num',nextThreeNum);



        
       
        
    }


    /*
    * Adjust carousel on resize
    *
    *@param gal Image gallery object
    *@param carDivs Carousel divs object
    *@param param1 Additional settings for carousel
    *
    */

    adjustOnResize(gal, carDivObj,galNum){

        let maxWidth = gal.offsetWidth;
        let maxHeight = gal.offsetHeight;



        let prevThreeDiv =  carDivObj.prevThree;
        prevThreeDiv.style.width = `${(0.42)*maxWidth}px`;
        prevThreeDiv.style.height = `${0.7*maxHeight}px` ;
        prevThreeDiv.style.marginTop =  `${0.15*maxHeight}px`;
        prevThreeDiv.style.marginLeft =  `0px`;

            let prevTwoDiv =  carDivObj.prevTwo;
                prevTwoDiv.style.width = `${(0.49)*maxWidth}px`;
                prevTwoDiv.style.height = `${0.8*maxHeight}px` ;
                prevTwoDiv.style.marginTop =  `${0.1*maxHeight}px`;
                prevTwoDiv.style.marginLeft =  `${0.06*maxWidth}px`;
            
            let prevOneDiv =   carDivObj.prevOne;
                prevOneDiv.style.width = `${(0.63)*maxWidth}px`;
                prevOneDiv.style.height = `${0.9*maxHeight}px` ;
                prevOneDiv.style.marginTop =  `${0.05*maxHeight}px`;
                prevOneDiv.style.marginLeft =  `${0.14*maxWidth}px`;
            
            
            let mainDiv =   carDivObj.mainDiv;
                mainDiv.style.width = `${0.52*maxWidth}px`;
                mainDiv.style.height = `${maxHeight}px`; 
                mainDiv.style.marginTop =  `0px`;
                mainDiv.style.marginLeft =  `${0.24*maxWidth}px`;

            let loadingDiv =   mainDiv.querySelector('#img-loading-'+galNum); 
                if(undefined != loadingDiv){
                    loadingDiv.style.marginLeft = `${(mainDiv.offsetWidth-40)/2}px`;
                    loadingDiv.style.marginTop = `${(mainDiv.offsetHeight-40)/2}px`;
                }  

        
            let nextOneDiv =   carDivObj.nextOne;
                nextOneDiv.style.width = `${(0.63)*maxWidth}px`;
                nextOneDiv.style.height = `${0.9*maxHeight}px`; 
                nextOneDiv.style.marginTop =  `${0.05*maxHeight}px`;
                nextOneDiv.style.marginLeft =  `${0.24*maxWidth}px`;
            
            let nextTwoDiv =  carDivObj.nextTwo;
                nextTwoDiv.style.width = `${(0.49)*maxWidth}px`;
                nextTwoDiv.style.height = `${0.8*maxHeight}px`; 
                nextTwoDiv.style.marginTop =  `${0.1*maxHeight}px`;
                nextTwoDiv.style.marginLeft =  `${0.45*maxWidth}px`;

            let nextThreeDiv =  carDivObj.nextThree;
                nextThreeDiv.style.width = `${(0.42)*maxWidth}px`;
                nextThreeDiv.style.height = `${0.7*maxHeight}px`; 
                nextThreeDiv.style.marginTop =  `${0.15*maxHeight}px`;
                nextThreeDiv.style.marginLeft =  `${0.58*maxWidth}px`;     
            


    }

}



/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"image-carousel/image-carousel","version":"0.1.0","title":"Image Carousel","category":"widgets","icon":"slides","description":"Create Image Carousel","example":{},"supports":{"html":false},"textdomain":"image-carousel","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkimage_carousel"] = globalThis["webpackChunkimage_carousel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map