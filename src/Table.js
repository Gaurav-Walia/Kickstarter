import React from 'react';

class Table extends React.Component {
    constructor() {
        super();
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        event.preventDefault();
        this.props.ModalDetails(
            event.target.getAttribute("data-target"),
            event.target.getAttribute("data-title"),
            event.target.getAttribute("data-by"),
            event.target.getAttribute('data-blurb'),
            event.target.getAttribute("data-backers"),
            event.target.getAttribute("data-pledged"));
    }

    render() {
        const { info } = this.props;

        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">S No</th>
                        <th scope="col">Percentage Funded</th>
                        <th scope="col">Amount Pledged</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    { info.each(element => (

                        <tr>
                            <td>{ element.sno }</td>
                            <td>{ element.percentage.funded }</td>
                            <td>{ element.amt.pledged }</td>
                            <td>
                                <button type="button"
                                class="btn btn-primary"
                                data-toggle="modal"
                                data-target={info["target"]}
                                data-title={info["title"]}
                                data-by={info["by"]}
                                data-blurb={info["blurb"]}
                                data-backers={info["backers"]}
                                data-pledged={info["pledged"]}>Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Table;