module.exports = {
    partial: true, // <--
    configuration: {
        enable: [
            "PROBE_MANUALLY",
            "Z_SAFE_HOMING",
            "MESH_BED_LEVELING",
            "RESTORE_LEVELING_AFTER_G28",
            "LCD_BED_LEVELING",
            "MESH_EDIT_MENU",
            "BED_TRAMMING_INCLUDE_CENTER",
            "S_CURVE_ACCELERATION",
            "INDIVIDUAL_AXIS_HOMING_MENU",
            ["DEFAULT_MAX_FEEDRATE", [500, 500, 20, 5]],
            "PREHEAT_BEFORE_LEVELING",
            ["LEVELING_NOZZLE_TEMP", 190],
            ["LEVELING_BED_TEMP", 55"]
        ],
    },
    configuration_adv: {
        enable: [
            "EMERGENCY_PARSER",
            "ADVANCED_PAUSE_FEATURE",
            "EMERGENCY_PARSER",
            "ADVANCED_PAUSE_FEATURE"
        ]
    }
};
