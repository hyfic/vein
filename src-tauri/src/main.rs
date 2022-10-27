#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod controller;
mod database;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            controller::record_controller::read_records,
            controller::record_controller::add_record,
            controller::record_controller::update_record,
            controller::record_controller::delete_record,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
