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
            ["HOMING_FEEDRATE_MM_M" [20*60,20*60,8*60]
        ]
        disable: ["ARC_SUPPORT"]
    }
};
