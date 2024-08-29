import {useEffect,useRef} from 'react';
import { imageCarousel } from 'images-carousel/image-carousel';
import { RangeControl,PanelBody, Button } from '@wordpress/components';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls,MediaUploadCheck,MediaUpload } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({clientId ,attributes,setAttributes}) {
	const elRef = useRef();
	setAttributes({ clntId: clientId });
	useEffect(()=>{
		let selector =  `#${elRef.current.id}`
		if(attributes.carItems.length >= 3  ){
			elRef.current.style.height = attributes.carHeight+'px';
			elRef.current.style.width = attributes.carWidth+'px';
			elRef.current.style.marginLeft = 'auto';
			elRef.current.style.marginRight= 'auto';
			new imageCarousel(selector,{callBack : ()=>elRef.current.style.display='block'});
			window.dispatchEvent(new Event('resize'))
		}
		else{
			elRef.current.style.display='none';
		}
		
	},[attributes.carItems,attributes.carHeight,attributes.carWidth])

	return (
		<div { ...useBlockProps() }>

			<div id={`ctc-image-car-${attributes.clntId}`} ref={elRef} style={{display:'none'}}>
               {attributes.carItems.map(x=><img src={x.url} title={x.caption}/>)}
			</div>
			<div>
			<MediaUploadCheck>
					<MediaUpload
					 title={ __('Select  images for gallery ', 'ctcl-image-gallery')}
					 multiple={ true}
					 value= {attributes.carItems.map(x => x.id)}
					 gallery= {true}
					 onSelect={ gal => {
			             Array.from(elRef.current.querySelectorAll('div')).map(x=>x.remove());
						setAttributes({ carItems: gal })}
					}
						allowedTypes={['image']}
						render={({ open }) => (

							<div  style= {{ width: '100%', backgroundColor: 'rgba(255,255,,255,1)', color: 'rgb(61, 148, 218)', padding: '10px' }}>
							<h4 className= 'dashicons-before dashicons-slides'>{__(' Image Gallery ','image-carousel')}</h4>
							<Button style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', color: 'rgb(61, 148, 218)', border: '1px solid rgb(61, 148, 218)'}} className= {"dashicons-before dashicons-slides"}  onClick={open}>{__(" Select Images", "image-carousel")}</Button>
						</div>
						)}
					/>
				</MediaUploadCheck>
			</div>
			<div>
			<InspectorControls>
				<PanelBody>
				<RangeControl
				
				label= {__('Carousel width in pixel (px)',  "image-carousel")}
				min= {148}
				max= {1000}
				onChange={ val => {
					Array.from(elRef.current.querySelectorAll('div')).map(x=>x.remove());
					setAttributes({carWidth: val })}}
				value= {attributes.carWidth}

				/>
				<RangeControl
				label= {__('Carousel Height in pixel (px)',  "image-carousel")}
				min= {148}
				max= {700}
				onChange={ val => {
					Array.from(elRef.current.querySelectorAll('div')).map(x=>x.remove());
					setAttributes({ carHeight: val })}}
				value= {attributes.carHeight}
				
				/>
				</PanelBody>
				</InspectorControls>
			</div>
		</div>
	);
}
