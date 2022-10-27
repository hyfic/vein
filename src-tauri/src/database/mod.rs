use rusqlite::Connection;

use self::init::connect_app_database;

mod init;
pub mod record_model;

pub fn init_app_db() -> Result<Connection, String> {
    match connect_app_database() {
        Ok(conn) => Ok(conn),
        Err(err) => {
            eprintln!("{}", err);
            Err(String::from("Failed to connect database"))
        }
    }
}
