module.exports = {
    partial: true,
    extends: "builds/base/base.js",
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
            ["HOMING_FEEDRATE_MM_M", [(20*60), (20*60), (6*60)]]
        ],
    },
    configuration_adv: {
        enable: [
            "EMERGENCY_PARSER",
            "ADVANCED_PAUSE_FEATURE"
        ]
    }
};
