import React, { useContext } from "react";
import BookContext from "../../utils/BookContext"

function BookDescription() {
    const { description } = useContext(BookContext);
    return <p className="text-start">{description} "Vivamus ultrices ligula nec sagittis sagittis. Curabitur sit amet ante interdum, aliquam dui eget, malesuada dolor. Phasellus viverra vulputate suscipit. Sed vel velit ut nulla auctor suscipit. Nam metus tellus, pretium vitae tortor vel, finibus pharetra ipsum. Nunc vulputate cursus risus, ut luctus tortor vulputate a. Sed mollis, turpis ac porta varius, lectus nisl luctus orci, pharetra rutrum libero urna vel arcu. Ut cursus, sapien nec iaculis vestibulum, metus risus fringilla dui, venenatis finibus ligula diam efficitur risus. Etiam et lectus sed nisi hendrerit interdum. Sed placerat aliquam magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mi enim, vulputate sit amet mi eu, viverra iaculis lorem. Donec fermentum semper varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec in ligula a ante feugiat tristique"</p>

}

export default BookDescription;
