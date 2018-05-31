import React from 'react';
import PropTypes from 'prop-types';
import { default as DummyPhoto } from '../../../../../assets/images/dummy-photo.jpeg';

const Card = props => {
    return (
        <div id="card">
            <article className="article fr-article">
                <div className="heading fr-heading">
                    <h3 className="title">Card</h3>
                    <h5 className="subtitle color-gray">Culpa culpa deserunt magna nostrud sunt adipisicing cillum commodo dolore cupidatat nostrud veniam. Commodo id nulla consectetur aliqua aute. Fugiat irure consectetur cillum pariatur laboris est.</h5>
                </div>
                <section class="section">
                	<div className="fr-preview">
                	    <span className="fr-preview__tag">Preview</span>
                	    <div className="fr-preview__display">
                	    	<div className="grids">
                	    	    <div className="grid grid-6 mg-bottom">
                	    	        <div className="card">
                	    	            <div className="card__header">
                	    	                <h4 className="title">Card Title</h4>
                	    	                <h5 className="subtitle color-gray">This is a subtitle.</h5>
                	    	            </div>
                	    	            <div className="card__body">
                	    	                <span>Id anim officia commodo voluptate magna aliqua. Laborum pariatur ullamco occaecat labore aliqua et quis. Eiusmod reprehenderit pariatur laborum aute Lorem nisi et. Consectetur labore est consectetur officia. Laborum minim officia irure aliquip eu commodo aute. Quis culpa reprehenderit excepteur irure in. Est minim laborum consectetur nisi aliqua in sunt do veniam.</span>
                	    	            </div>
                	    	            <div className="card__footer flex jc-end">
                	    	                <button className="button button--danger mg-right">Cancel</button>
                	    	                <button className="button button--success">Submit</button>
                	    	            </div>
                	    	        </div>
                	    	    </div>
                	    	    <div className="grid grid-6 mg-bottom">
                	    	        <div className="card">
                	    	            <div className="card__header">
                	    	                <h4 className="title">Card Title</h4>
                	    	                <h5 className="subtitle color-gray">This is a subtitle.</h5>
                	    	            </div>
                	    	            <div className="card__body">
                	    	                <span>Id anim officia commodo voluptate magna aliqua. Laborum pariatur ullamco occaecat labore aliqua et quis. Eiusmod reprehenderit pariatur laborum aute Lorem nisi et. Consectetur labore est consectetur officia. Laborum minim officia irure aliquip eu commodo aute. Quis culpa reprehenderit excepteur irure in. Est minim laborum consectetur nisi aliqua in sunt do veniam.</span>
                	    	            </div>
                	    	            <div className="card__footer flex jc-end">
                	    	                <button className="button button--danger mg-right">Cancel</button>
                	    	                <button className="button button--success">Submit</button>
                	    	            </div>
                	    	        </div>
                	    	    </div>
                	    	    <div className="grid grid-6 mg-bottom">
                	    	        <div className="card">
                	    	            <div className="card__image">
                	    	                <img src={DummyPhoto} /> 
                	    	            </div>
                	    	            <div className="card__header">
                	    	                <h4 className="title">Card Title</h4>
                	    	                <h5 className="subtitle color-gray">This is a subtitle.</h5>
                	    	            </div>
                	    	            <div className="card__body">
                	    	                <article className="article">
                	    	                    <p>Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.</p>
                	    	                </article>
                	    	            </div>
                	    	        </div>
                	    	    </div>
                	    	    <div className="grid grid-6 mg-bottom">
                	    	        <div className="card">
                	    	            <div className="card__image">
                	    	                <img src={DummyPhoto} /> 
                	    	            </div>
                	    	            <div className="card__header">
                	    	                <h4 className="title">Card Title</h4>
                	    	                <h5 className="subtitle color-gray">This is a subtitle.</h5>
                	    	            </div>
                	    	            <div className="card__body">
                	    	                <article className="article">
                	    	                    <p>Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.</p>
                	    	                </article>
                	    	            </div>
                	    	        </div>
                	    	    </div>
                	    	    <div className="grid grid-6 mg-bottom">
                	    	        <div className="card card--dark card--has-overlay">
                	    	            <div className="card__image">
                	    	                <img src={DummyPhoto} />
                	    	            </div>
                	    	            <div className="card__body">
                	    	                <h5 class="title">Lorem ea non cillum.</h5>
                	    	                <span>Cupidatat duis proident exercitation ullamco sunt labore.</span>
                	    	            </div>
                	    	        </div>
                	    	    </div>
                	    	    <div className="grid grid-6 mg-bottom">
                	    	        <div className="card card--dark card--has-overlay">
                	    	            <div className="card__image">
                	    	                <img src={DummyPhoto} />
                	    	            </div>
                	    	            <div className="card__body">
                	    	                <h5 class="title">Lorem ea non cillum.</h5>
                	    	                <span>Cupidatat duis proident exercitation ullamco sunt labore.</span>
                	    	            </div>
                	    	        </div>
                	    	    </div>
                	    	    <div className="grid grid-6 mg-bottom">
                	    	    	<div className="card card--transparent">
                	    	    		<div className="card__image">
                	    	    			<img src={DummyPhoto} />
                	    	    		</div>
                	    	    		<div className="card__body">
                	    	    			<h5 className="title">Lorem ipsum dolor</h5>
                	    	    		</div>
                	    	    	</div>
                	    	    </div>
                	    	</div>
                	    </div>
                	</div>
                </section>
            </article>
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;