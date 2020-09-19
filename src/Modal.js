import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

class Modal extends React.Component {

    render() {
        const { target, title, by, blurb, backers, pledged } = this.props;
        
        return(
            <div className="modal fade" id={target} tabIndex="-1" aria-labelledby={target} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="1">{ title }</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <h3>{ by }</h3>
                            <label>{ blurb }</label>
                        </div>

                        <div className="modal-footer">
                            <p className="text-left">Backers: { backers }</p>
                            <p className="text-right">Pledged: { pledged }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;                