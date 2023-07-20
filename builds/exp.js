module.exports = {
    extends: "builds/base.js",
    extends: "builds/autoLevel5x5.js",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-cr_level_exp-{{uid}}"
    },
    configuration: {
        enable: [
            "BED_TRAMMING_INCLUDE_CENTER",
            "S_CURVE_ACCELERATION",
            ["DEFAULT_TRAVEL_ACCELERATION", 1000],
            "PREHEAT_BEFORE_LEVELING",
            ["LEVELING_NOZZLE_TEMP", 180],
            ["EXTRUDE_MAXLENGTH", 200],
            "INDIVIDUAL_AXIS_HOMING_MENU",
            ["DEFAULT_MAX_FEEDRATE", [1000, 1000, 30, 100]],
            ["DEFAULT_MAX_ACCELERATION", [1500, 1500, 200, 700]],
            ["DEFAULT_ACCELERATION", 1500],
            ["DEFAULT_RETRACT_ACCELERATION", 1500],
            ["DEFAULT_TRAVEL_ACCELERATION", 1500],
            ["HOMING_FEEDRATE_MM_M", [(30*60), (30*60), (6*60)]]
        ],
        disable: [
            "EEPROM_CHITCHAT",
            "THERMAL_PROTECTION_COOLER"
        ]
    },
    configuration_adv: {
        enable: [
            "HOST_ACTION_COMMANDS",
            "EXTENDED_CAPABILITIES_REPORT",
            "REPORT_FAN_CHANGE",
            "ADAPTIVE_STEP_SMOOTHING",
            "GCODE_CASE_INSENSITIVE",
            "BINARY_FILE_TRANSFER"
        ],
        disable: [      
        ]
    }
};
