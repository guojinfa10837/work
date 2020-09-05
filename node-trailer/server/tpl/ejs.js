module.exports = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>koa server html</title>
        <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.2.1/jquery.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.bundle.js"></script>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h1>hi <%= you %></h1>
                    <p>this is <%= me %></p>
                </div>
                <div class="col-md-4">
                    <p>测试静态 html 页面</p>
                </div>
            </div>
        </div>
    </body>
</html>
`