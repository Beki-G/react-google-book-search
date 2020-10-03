import React from 'react';
import './styles.css'

function BookResultRow() {
    return (
        <tr>
            <td className="imgColumn">
                <div>
                    <strong>Title: </strong>Simple Geometric Quilting<br />
                    <strong>Authors: </strong>Laura Preston
                </div>
                <img alt="Checking Alt Tabs" src="http://books.google.com/books/content?id=x9x_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            </td>
            <td>
                <strong>Description: </strong>"Bold Shapes and Clean Lines for Faster Modern Quilting Breathe some fresh air into your quilts with 20 stunning contemporary projects from designer Laura Preston. Using simple shapes and solid colors, Laura’s method streamlines the traditional quilting process for beautiful quilts in less time. Quilt tops come together quickly with large-scale cuts of fabric and as little piecing as possible, making these projects perfect for beginners. Advanced quilters can delve into modern techniques such as creating curved lines and working with negative space rather than intricate quilting blocks. From chic wall hangings to cozy crib-size and queen-size quilts, every project doubles as a work of art. Fueled by her minimalist lifestyle traveling the United States in her Airstream trailer, Laura’s designs reflect the striking landscapes of the American West. The Arches Queen Quilt showcases the dramatic curves found in Arches National Park in Utah. The Lone Pine Pillow, with its range of triangles, was inspired by the Sierra Nevada mountains, and the Sand Dollar Table Runner was sparked by a beach in Big Sur, California. Follow Laura’s insightful design tips, and soon you’ll start to see inspiration everywhere. With illustrated step-by-step instructions and in-depth tutorials, this book is an essential resource for the modern quilter."
                <br /><br />
                <button><a href="/">Click here for more info</a></button>
                <button>Save</button>
            </td>
        </tr>
    )
}

export default BookResultRow;