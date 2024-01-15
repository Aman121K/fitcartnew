import './css/styles.css'
import './css/menu.css'
import './css/slick.css'
import './css/slick-theme.css'
/*<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
*/

export const metadata = {
  title: 'Fitcart: Trusted Brands, Better Health',
  description: 'Discover top-rated, safe pre-workout &amp; fitness supplements from trusted brands at FitCart. Elevate your fitness journey with our premium products.',
}
export default function RootLayout({ children }) {
  return (
    <>
      <html>
      <body>{children}
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

    {/* <script>
      $(document).ready(function () {
        $(".category-products, .product-carousel").slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
		  arrows:true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });     
    </script>

    <script>
      function showContent(category) {
        // Hide all content
        document.querySelectorAll(".hub-articles").forEach(function (content) {
          content.style.display = "none";
        });

        // Show selected content
        document.getElementById(category + "-content").style.display = "flex";

        // Update active state for buttons
        document.querySelectorAll(".category-button").forEach(function (button) {
          button.classList.remove("active");
        });
        document.querySelector('.category-button[data-category="' + category + '"]').classList.add("active");
      }
    </script> */}
      </body>
    </html>	
    </>
  )
}
