use rusqlite::Connection;
use serde::Serialize;

#[derive(Serialize)]
pub struct RecordType {
    pub id: i32,
    pub created_at: String,
    pub data: String,
}

pub fn create(db: &Connection, created_at: String, data: String) -> Result<i64, String> {
    match db.execute(
        "INSERT INTO Record (created_at, data) VALUES (?1, ?2)",
        &[&created_at, &data],
    ) {
        Ok(_) => {
            let id = db.last_insert_rowid();
            return Ok(id);
        }
        Err(_) => return Err(String::from("Failed to save data")),
    }
}

pub fn read_all(db: &Connection) -> Result<Vec<RecordType>, String> {
    let mut record_vec: Vec<RecordType> = Vec::new();

    let mut sql_query = match db.prepare("SELECT * FROM Record") {
        Ok(query) => query,
        Err(_) => return Err(String::from("Failed to load records")),
    };

    let record_iter = match sql_query.query_map([], |row| {
        Ok(RecordType {
            id: row.get(0)?,
            created_at: row.get(1)?,
            data: row.get(2)?,
        })
    }) {
        Ok(record_iter) => record_iter,
        Err(_) => return Err(String::from("Failed to load records")),
    };

    for database in record_iter {
        match database {
            Ok(record_data) => record_vec.push(record_data),
            Err(_) => continue,
        }
    }

    Ok(record_vec)
}

pub fn update(db: &Connection, id: i32, data: String) -> Result<(), String> {
    let id = format!("{}", id);

    match db.execute("UPDATE Record SET data=(?1) WHERE id=(?2)", &[&data, &id]) {
        Ok(_) => return Ok(()),
        Err(_) => return Err(String::from("Failed to update record")),
    };
}

pub fn delete(db: &Connection, id: i32) -> Result<(), String> {
    let id = format!("{}", id);

    match db.execute("DELETE FROM Record WHERE id=(?1)", &[&id]) {
        Ok(_) => return Ok(()),
        Err(_) => return Err(String::from("Failed to delete record")),
    };
}
