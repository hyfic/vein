use rusqlite::{Connection, Result};
use std::path::Path;

pub fn connect_app_database() -> Result<Connection> {
    let conn = Connection::open("app.db")?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS Record (
        id integer primary key,
        created_at text,
        data text,
      )",
        [],
    )?;

    Ok(conn)
}
