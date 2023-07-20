module.exports = {
    extends: "builds/base.js",
    extends: "builds/autoLevel5x5.js",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-cr_level_5x5-{{uid}}"
    },
    configuration: {
        enable: [
            "BED_TRAMMING_INCLUDE_CENTER",
            "S_CURVE_ACCELERATION",
            "INDIVIDUAL_AXIS_HOMING_MENU",
            ["DEFAULT_MAX_FEEDRATE", [1000, 1000, 30, 100]],
            ["HOMING_FEEDRATE_MM_M", [(30*60), (30*60), (6*60)]],
            ["DEFAULT_TRAVEL_ACCELERATION", 1000],
            ["DEFAULT_MAX_ACCELERATION", [2000, 2000, 200, 700]],
            ["DEFAULT_TRAVEL_ACCELERATION", 2000],
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
            "GCODE_CASE_INSENSITIVE",
            "ADAPTIVE_STEP_SMOOTHING",
            "BINARY_FILE_TRANSFER"
        ],
        disable: [      
        ]
    }
};
