  <!doctype html>
<html class="no-js" lang="en">
         <head>
        <!-- title -->
        <title>POFO – Creative Agency, Corporate and Portfolio Multi-purpose Template</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />
        <meta name="author" content="ThemeZaa">
        <!-- description -->
        <meta name="description" content="POFO is a highly creative, modern, visually stunning and Bootstrap responsive multipurpose agency and portfolio HTML5 template with 25 ready home page demos.">
        <!-- keywords -->
        <meta name="keywords" content="creative, modern, clean, bootstrap responsive, html5, css3, portfolio, blog, agency, templates, multipurpose, one page, corporate, start-up, studio, branding, designer, freelancer, carousel, parallax, photography, personal, masonry, grid, coming soon, faq">
        <!-- favicon -->
        <link rel="shortcut icon" href="images/favicon.png">
        <link rel="apple-touch-icon" href="images/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">
        <!-- animation -->
        <link rel="stylesheet" href="css/animate.css" />
        <!-- bootstrap -->
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <!-- et line icon --> 
        <link rel="stylesheet" href="css/et-line-icons.css" />
        <!-- font-awesome icon -->
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <!-- themify icon -->
        <link rel="stylesheet" href="css/themify-icons.css">
        <!-- swiper carousel -->
        <link rel="stylesheet" href="css/swiper.min.css">
        <!-- justified gallery  -->
        <link rel="stylesheet" href="css/justified-gallery.min.css">
        <!-- magnific popup -->
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <!-- revolution slider -->
        <link rel="stylesheet" type="text/css" href="revolution/css/settings.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="revolution/css/layers.css">
        <link rel="stylesheet" type="text/css" href="revolution/css/navigation.css">
        <!-- bootsnav -->
        <link rel="stylesheet" href="css/bootsnav.css">
        <!-- style -->
        <link rel="stylesheet" href="css/style.css" />
        <!-- responsive css -->
        <link rel="stylesheet" href="css/responsive.css" />
    </head>
    <body> 
               <section class="wow fadeIn parallax" data-stellar-background-ratio="0.5" style="background-image:url('http://placehold.it/1920x1080');">
            <div class="opacity-full bg-black"></div>
            <div class="container">
                <div class="row">
                    <!-- start contact-form head -->
                    <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12 center-col margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                        <h5 class="alt-font text-white font-weight-600">Please specify the type of a picture you're uploading below: </h5>
                    </div>
                    <!-- end contact-form head -->
                </div>
                <!-- start contact-form -->
                <form id="project-contact-form" action="javascript:void(0)" method="post">
                    <div class="row">
                        <div class="col-md-12 sm-clear-both">
                            
                        </div>
							
                        <div class="col-md-6 col-sm-12">
                          <label for="Staff">Staff Member Image <input type="radio" name="staff" value="staffMember"> </label>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <label for="Product">Product Image<input type="radio" id="Product" name="myradio" value="product"></label> 
                        </div>
                        <div class="col-md-12 sm-clear-both">
                             <input type="file" accept="image/jpg, image/jpeg, image/png" name="image">
                        </div>
                        <div class="col-md-12 text-center">
                            <button type="submit" value="Submit" class="btn btn-deep-pink btn-rounded btn-large margin-20px-top xs-no-margin-top">Submit</button>
                        </div>
                    </div>
                </form>
                <!-- end contact-form -->
            </div>
        </section>
    </body>
</html>
<?php 
require 'C:\xampp\htdocs\EspImageManipulator/ImageManipulator/ImageManipulator.php';

// Ignore notices
error_reporting(E_ALL & ~E_NOTICE);

if($_SERVER['REQUEST_METHOD'] == 'POST'){ 
    $error_msg = array(); 
    if(isset($_POST['staff'])){ 
        try {
            // Create a new SimpleImage object
            $image = new \Image\SimpleImage();

            // Manipulate it
            $filename = $_FILES['image']['name'];
            $image
                ->fromFile($filename)
                ->crop(0,0,250,300)
                ->bestFit(600, 600)
                ->toScreen()
                ->toFile();
            }           
            catch(Exception $err) {
                // Handle errors
                echo $err->getMessage();
                }
    } 
    if(isset($_POST['product'])){ 
    
        try {
        // Create a new SimpleImage object
        $image = new \Image\SimpleImage();

        // Manipulate it
        $image
            ->fromFile('parrot.jpg')
            ->crop(0,0,300,300)
            ->bestFit(600, 600)
            ->toScreen()
            ->toFile();
        }
        
        catch(Exception $err) {
            // Handle errors
            echo $err->getMessage();
        }
    }  
} 

?>