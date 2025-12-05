<?php
if (isset($_POST['expr'])) {
    $expr = $_POST['expr'];
    
    if(str_contains($expr, "PERCENT")){
        $expr = str_replace("PERCENT", "*0.01", $expr); //Handle PERCENT token before running the RegEx check.
    }
    if (!preg_match('#^[0-9+\-*.()/ %]+$#', $expr)) { //check only for allowed characters
        echo "Error";
        exit;
    }

    try {
        $result = eval("return ($expr);");
        echo $result;
    } catch (Throwable $t) {
        echo "Error";
    }
}
?>