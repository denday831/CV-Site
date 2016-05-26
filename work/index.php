<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Portfolio Template | Matthew Denny</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic|Quicksand:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="../build/css/style.min.css">
        <!--[if lt IE 9]>
          <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
          <link rel="stylesheet" type="text/css" href="build/css/ie8.css">
        <![endif]-->
  </head>
  <body>
      <section class="sidebar">
          <div id="nav-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
          <header>
              <h2><a href="../index.html"><?php perch_content('Site Name'); ?></a></h2>
              <h3><?php perch_content('Job Title'); ?></h3>
          </header> 
          <nav>
            <?php  
            perch_blog_custom(array(
                            'template' => 'posts_navigation.html'
                        ));
            ?>   
          </nav>

          <footer>
              <?php perch_content_custom('Footer', array('template' => 'footer.html',)); ?>
          </footer>
      </section>
      
      
      <section class="content">          
          <div class="main-content row col-sm-12">        
              <div class="col-sm-12">
                <?php  
                perch_blog_custom(array(
                                'template' => 'posts_home.html'
                            ));
                ?>   
              </div>
          </div>
      </section><!-- content close -->
  </body>
  <script type="text/javascript" src="../build/js/script.min.js"></script>
</html>
