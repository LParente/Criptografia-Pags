<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Criptografia Pags">
    <meta name="author" content="Lucas Parente">
    <title>Teste cripgrafia PAGS</title>

    <!-- <link href='//fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link href="https://moip.com.br/docs/stylesheets/screen.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="https://moip.com.br/docs/stylesheets/print.css" rel="stylesheet" type="text/css" media="print" /> -->

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>

    <!-- pags.js -->
    <script src="https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js"></script>

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
</head>


<script type="text/javascript">
    $(document).ready(function() {
        $("#encrypt").click(function() {
            var cc = PagSeguro.encryptCard({
                number: $("#number").val().replace(/\s/g, ''),
                securityCode: $("#cvc").val(),
                expMonth: $("#month").val(),
                expYear: $("#year").val(),
                publicKey: $("#public_key").val(),
                holder: $("#holder").val()
            });
            console.log(cc);
            if (cc.hasErrors) {
                var printaErros = "";
                cc.errors.forEach(element => {
                    printaErros += element.message + "\n";
                });

                $("#encrypted_value").val(printaErros);
            } else {
                $("#encrypted_value").val(cc.encryptedCard);
            }
        })
    });
</script>

<body>

    <div class="row">
        <h2 class="form-signin-heading" align="center">Demo PAGS criptografia JS</h2>
        <hr>
        <div class="col-md-2"></div>
        <div class="col-md-4">


            <form class="form-signin">

                <label>Credit card number</label>
                <input type="text" placeholder="Credit card number" id="number" value="" class="form-control" /></br>
                <label>CVC</label>
                <input type="text" placeholder="CVC" id="cvc" value="123" maxlength=4 class="form-control" /></br>
                <div class="row">
                    <div class="col-md-4">
                        <label>Expiration Month</label>
                        <input type="text" placeholder="Month" id="month" value="12" maxlength=2 class="form-control" /></br>
                    </div>
                    <div class="col-md-4">
                        <label>Expiration Year</label>
                        <input type="text" placeholder="Year" id="year" value="2030" maxlength=4 class="form-control" /></br>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <label>Holder</label>
                <input type="text" placeholder="Holder" id="holder" value="Joãozinho da Silva" class="form-control" /></br>
                <input type="button" value="Encrypt" id="encrypt" class="btn btn-lg btn-primary btn-block" />

            </form>

        </div>
        <div class="col-md-4">
            <label>Public Key</label>
            <textarea id="public_key" rows="15" placeholder="Enter Public Key" class="form-control"></textarea></br>
            <label>Credit Card Hash</label>
            <textarea id="encrypted_value" rows="8" class="form-control"></textarea></br>

        </div>
    </div>

    <a id="deeplink">_</a>

</body>

</html>
