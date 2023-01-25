// builds/manualBedMesh.js
module.exports = {
    partial: true, // <--
    configuration: {
        enable: [
            "PROBE_MANUALLY",
            "Z_SAFE_HOMING",
            "MESH_BED_LEVELING",
            "RESTORE_LEVELING_AFTER_G28",
            "LCD_BED_LEVELING",
            "MESH_EDIT_MENU"
        ]
    }
};
