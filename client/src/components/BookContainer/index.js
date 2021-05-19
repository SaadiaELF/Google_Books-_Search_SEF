import React from "react";
import Container from "../Container";

function BookContainer(props) {
    return (

        <Container>
            <div className="row align-items-start">
                <div className="col-md">
                    <h4 className="text-start"> Title {props.title}</h4>
                    <h6 className="text-start"> Subtitle {props.subtitle}</h6>
                    <p className="text-start">Written by {props.authors} </p>
                </div>
                <div className="col-md-2">
                    <div className="btn-group float-end" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger">View</button>
                        <button type="button" className="btn btn-secondary">save</button>
                    </div>
                </div>
            </div>
            <div className="row align-items-start p-2 border">
                <div className="col-md-2">
                    <img className='img-fluid img-thumbnail rounded float-start' src="http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE70aKftnZRtSVsd1YMuTphBD2yF65q8C6BknC-cgu9v3STZZDTH3Sv9Y1IUBQxashOez0NgzvvDRNYJzF2MQy_kbOoiawGgVZkIksuaWxh0oy-6nY87ccO-Mm8rxBstPPwRYCnMT&source=gbs_api" alt={props.title} />
                </div>
                <div className="col-md">
                    <p className="text-start">{props.description} "Vivamus ultrices ligula nec sagittis sagittis. Curabitur sit amet ante interdum, aliquam dui eget, malesuada dolor. Phasellus viverra vulputate suscipit. Sed vel velit ut nulla auctor suscipit. Nam metus tellus, pretium vitae tortor vel, finibus pharetra ipsum. Nunc vulputate cursus risus, ut luctus tortor vulputate a. Sed mollis, turpis ac porta varius, lectus nisl luctus orci, pharetra rutrum libero urna vel arcu. Ut cursus, sapien nec iaculis vestibulum, metus risus fringilla dui, venenatis finibus ligula diam efficitur risus. Etiam et lectus sed nisi hendrerit interdum. Sed placerat aliquam magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mi enim, vulputate sit amet mi eu, viverra iaculis lorem. Donec fermentum semper varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec in ligula a ante feugiat tristique"</p>
                </div>
            </div>
        </Container >

    );
}

export default BookContainer;