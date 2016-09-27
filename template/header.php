<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Timetabler</title>

    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
    <meta name="author" content="Dan Foad">
    <meta name="description" content="Timetable system, create and modify your own timetables">

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,100,700">
    <link rel="stylesheet" href="/style/main.css">

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>
   
    <header class="header">
        <section class="header__title">
            <h1><img src="/img/logo.png" alt="" /></h1>
            <div class="menutoggle__container">
                <div class="header__menutoggle open">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span class="menutoggle__text">Collapse</span>
            </div>
        </section>
    </header>
    
    <div class="main__container">
        <section class="sidebar open">
            <nav>
                <h2>Navigation</h2>
                <ul class="sidenav">
                    <li><a href="#" class="current">Semester 1</a></li>
                    <li><a href="#" data-url="/test/">Semester 2</a></li>
                    <li><a href="#">Semester 3</a></li>
                    <li><a href="#">Modify Timetables</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            <footer class="contact">
                <p>Developed by <a href="http://danfoad.co.uk">Dan Foad</a></p>
                <p><a href="mailto:contact@danfoad.co.uk">contact@danfoad.co.uk</a></p>    
            </footer>
        </section>