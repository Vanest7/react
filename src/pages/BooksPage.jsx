import ContentBooks from "../components/ContentBooks";
import React from 'react';
import NavBar from "../utils/NavBar";

function BooksPage() {
    return(
        <div>
            <NavBar/>
            <ContentBooks />
        </div>
    )
}
export default BooksPage;