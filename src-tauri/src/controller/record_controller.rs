use crate::database::init_app_db;
use crate::database::record_model;

#[tauri::command]
pub fn read_records() -> Result<Vec<database_model::DatabaseType>, String> {
    let db = init_app_db()?;
    record_model::read_all(&db)
}

#[tauri::command]
pub fn add_record(created_at: String, data: String) -> Result<i64, String> {
    let db = init_app_db()?;
    record_model::create(&db, created_at, data)
}

#[tauri::command]
pub fn update_record(id: i32, data: String) -> Result<(), String> {
    let db = init_app_db()?;
    record_model::update(&db, id, data)
}

#[tauri::command]
pub fn delete_record(id: i32) -> Result<(), String> {
    let db = init_app_db()?;
    record_model::delete(&db, id)
}
