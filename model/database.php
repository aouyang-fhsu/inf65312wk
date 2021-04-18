<?php
class Database {
    private static $dsn = 'mysql:host=lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;dbname=gkv9is7utc3ug7ki';     
    private static $username = 'oqotc5iofcpe1kde';
    private static $password = 'hkbstzyjy4ttspkh';
    private static $db;
    
    private function __construct(){}

    public static function getDB(){
        if (!isset(self::$db)) {
            try {
                self::$db = new PDO(self::$dsn,
                                    self::$username,
                                    self::$password
                                );
            } catch (PDOException $e) {
                $error = "Database Error: ";
                $error .= $e->getMessage();
                include('../view/error.php');
                exit();
            }
        }
        return self::$db;
    }
}

    
?>